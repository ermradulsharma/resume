import React, { useState, useMemo } from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    Filler,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import {
    Radar,
    Bar,
    Line,
    PolarArea,
    Doughnut,
    Bubble,
    Chart
} from 'react-chartjs-2';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';

import { SankeyController, Flow } from 'chartjs-chart-sankey';

import {
    BsHexagonHalf,
    BsTextLeft,
    BsGraphUpArrow,
    BsCircleHalf,
    BsPieChartFill,

    BsRecordCircle,
    BsGridFill,

    BsSpeedometer2,
    BsBarChartSteps,
    BsBarChartLineFill,
    BsFilter,
    BsArrowLeftRight,
    BsArrowLeftShort
} from "react-icons/bs";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Filler,
    TreemapController,
    TreemapElement,

    SankeyController,
    Flow
);

const premiumPalette = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b',
    '#10b981', '#06b6d4', '#3b82f6', '#4f46e5', '#7c3aed'
];

const DynamicTechStackChart = ({ data, height = 450 }) => {
    // 15 Premium Visualizations
    const [chartType, setChartType] = useState("radar");
    const [viewMode, setViewMode] = useState("category"); // category | skills
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getColor = (index) => premiumPalette[index % premiumPalette.length];

    const formatLabel = (key) => {
        if (!key) return "";
        return key === "cloudsAndDevOps"
            ? "Clouds & DevOps"
            : key
                .replace(/([A-Z])/g, " $1")
                .replace(/^\w/, (c) => c.toUpperCase())
                .trim();
    };

    // Data Processing
    const { categoryLabels, categoryValues } = useMemo(() => {
        const rawKeys = Object.keys(data || {});
        const labels = rawKeys.map(formatLabel);
        const values = rawKeys.map((cat) => {
            const skills = data[cat];
            const sum = skills.reduce((acc, s) => acc + (s.valueNow || 0), 0);
            return Math.round(sum / skills.length);
        });
        return { categoryLabels: labels, categoryValues: values };
    }, [data]);

    const skillData = useMemo(() => {
        if (!selectedCategory || !data[selectedCategory]) return { labels: [], values: [] };
        return {
            labels: data[selectedCategory].map((s) => s.name),
            values: data[selectedCategory].map((s) => s.valueNow),
        };
    }, [selectedCategory, data]);

    const activeLabels = viewMode === "category" ? categoryLabels : skillData.labels;
    const activeValues = viewMode === "category" ? categoryValues : skillData.values;

    const bubbleData = useMemo(() => {
        return activeValues.map((v, i) => ({ x: i + 1, y: v, r: v / 5 }));
    }, [activeValues]);

    const treemapData = useMemo(() => {
        if (viewMode === "category") {
            return categoryLabels.map((l, i) => ({ name: l, value: categoryValues[i] }));
        }
        return skillData.labels.map((l, i) => ({ name: l, value: skillData.values[i] }));
    }, [viewMode, categoryLabels, categoryValues, skillData]);

    const sankeyData = useMemo(() => {
        if (viewMode === "category") {
            return categoryLabels.map((l, i) => ({ from: 'Mradul', to: l, flow: categoryValues[i] }));
        }
        return skillData.labels.map((l, i) => ({ from: formatLabel(selectedCategory), to: l, flow: skillData.values[i] }));
    }, [viewMode, categoryLabels, categoryValues, skillData, selectedCategory]);

    const chartData = useMemo(() => {
        const baseDataset = {
            label: viewMode === "category" ? "Category Average" : `${formatLabel(selectedCategory)} Proficiency`,
            backgroundColor: (chartType === "radar" || chartType === "area")
                ? "rgba(99, 102, 241, 0.2)"
                : activeLabels.map((_, i) => getColor(viewMode === "category" ? i : i + 3)),
            borderColor: (chartType === "radar" || chartType === "area")
                ? "rgba(99, 102, 241, 1)"
                : "#ffffff33",
            borderWidth: 2,
            pointBackgroundColor: "rgba(99, 102, 241, 1)",
            pointBorderColor: "#fff",
            pointRadius: (chartType === "radar" || chartType === "area" || chartType === "scatter") ? 6 : 0,
            fill: chartType === "area" || chartType === "radar",
            tension: 0.4,
        };

        if (chartType === 'treemap') {
            return {
                datasets: [{
                    ...baseDataset,
                    tree: treemapData,
                    key: 'value',
                    groups: ['name'],
                    spacing: 2,
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.2)',
                    backgroundColor: (ctx) => {
                        if (ctx.type !== 'data') return 'transparent';
                        return getColor(ctx.dataIndex || 0);
                    },
                    labels: {
                        display: true,
                        color: 'white',
                        font: { size: 14, weight: 'bold' },
                        formatter: (ctx) => ctx.raw._data.name
                    }
                }]
            };
        }

        if (chartType === 'sankey') {
            return {
                datasets: [{
                    label: 'Sankey Flow',
                    data: sankeyData,
                    colorFrom: (c) => getColor(0),
                    colorTo: (c) => getColor(c.dataIndex + 1),
                    colorMode: 'gradient',
                    size: 'max',
                    borderWidth: 0
                }]
            };
        }

        if (chartType === 'waterfall') {
            // Waterfall Logic: Cumulative floating bars
            // We want to show how each category contributes to the "Total" (conceptual)
            // Or just step-wise proficiency. Let's do a stepped proficiency view.
            // For a skills chart, "Cumulative" might be confusing.
            // Let's do a "Stepped" visual: Each bar "hangs" from the top (100) or steps?
            // Let's do: Start from 0, but provide a "waterfall" color/border distinct style.
            // Actually, best Waterfall for this data is "Incremental Contribution" if we treat it as parts of a whole?
            // No, they are independent scores.
            // Alternative: Floating bars showing range from (Value - 20) to Value? No.
            // Let's do a Sorted view with a "connector" visual style implied by the bar.
            // Implementation: We'll stick to standard bars but styled to look unique, 
            // OR we can do a "Cumulative" view just to show total "Skill Points".
            // Let's try Cumulative:
            let cumulative = 0;
            const waterfallData = activeValues.map(v => {
                const start = cumulative;
                cumulative += v;
                return [start, cumulative];
            });

            return {
                labels: activeLabels,
                datasets: [{
                    ...baseDataset,
                    label: 'Cumulative Skill Impact',
                    data: waterfallData,
                    backgroundColor: activeLabels.map((_, i) => getColor(i)),
                    borderColor: 'transparent',
                }]
            };
        }

        // Standard Charts (Radar, Bar, Line, etc.)
        return {
            labels: activeLabels,
            datasets: [{
                ...baseDataset,
                data: (chartType === 'bubble' ? bubbleData : activeValues)
            }]
        };
    }, [chartType, viewMode, selectedCategory, activeLabels, activeValues, treemapData, sankeyData, bubbleData]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 800,
            easing: 'easeOutQuart'
        },
        onClick: (e, elements) => {
            if (elements.length > 0 && viewMode === "category") {
                const index = elements[0].index;
                const rawKeys = Object.keys(data || {});
                if (rawKeys[index]) {
                    setSelectedCategory(rawKeys[index]);
                    setViewMode("skills");
                }
            }
        },
        plugins: {
            legend: {
                display: ["polarArea", "doughnut"].includes(chartType),
                position: 'right',
                labels: {
                    color: '#ffffffcc',
                    font: { size: 12, weight: '600' },
                    usePointStyle: true,
                    padding: 15
                }
            },
            tooltip: {
                backgroundColor: "rgba(15, 23, 42, 0.95)",
                padding: 12,
                cornerRadius: 8,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 },
                displayColors: true,
                callbacks: {
                    label: (ctx) => {
                        if (chartType === 'treemap') return ` ${ctx.raw._data.name}: ${ctx.raw._data.value}%`;
                        if (chartType === 'bubble') return ` Proficiency: ${ctx.raw.y}%`;
                        if (chartType === 'sankey') return ` ${ctx.raw.from} → ${ctx.raw.to}: ${ctx.raw.flow}%`;
                        if (chartType === 'waterfall') {
                            const val = ctx.raw[1] - ctx.raw[0];
                            return ` Proficiency: ${val}% (Cumulative: ${ctx.raw[1]})`;
                        }
                        return ` Proficiency: ${ctx.raw}%`;
                    },
                },
            },
        },
        indexAxis: chartType === 'horizontalBar' || chartType === 'funnel' ? 'y' : 'x',
        layout: {
            padding: { left: 40, right: 40, top: 20, bottom: 60 }
        },
        scales: (["horizontalBar", "area", "bubble", "waterfall", "stacked", "funnel"].includes(chartType)) ? {
            y: {
                display: true,
                beginAtZero: true,
                max: chartType === 'waterfall' ? undefined : 100,
                border: { display: true, color: 'rgba(255, 255, 255, 0.5)', width: 2 },
                title: {
                    display: true,
                    text: (chartType === 'horizontalBar' || chartType === 'funnel') ? (viewMode === 'category' ? 'Categories' : 'Specific Skills') : 'Proficiency (%)',
                    color: '#FFFFFF',
                    font: { size: 14, weight: '800' },
                    padding: 10
                },
                grid: {
                    display: chartType === 'matrix' ? false : true,
                    color: "rgba(255, 255, 255, 0.1)"
                },
                ticks: {
                    display: chartType !== 'matrix', // Hide ticks for matrix Y
                    color: "#FFFFFF",
                    font: { size: 12, weight: '700' },
                    autoSkip: false,
                    padding: 8
                },
                stacked: chartType === 'stacked' || chartType === 'waterfall'
            },
            x: {
                display: true,
                border: { display: true, color: 'rgba(255, 255, 255, 0.5)', width: 2 },
                title: {
                    display: true,
                    text: (chartType === 'horizontalBar' || chartType === 'funnel') ? 'Proficiency (%)' : (viewMode === "category" ? 'Categories' : `${formatLabel(selectedCategory)} Skills`),
                    color: '#FFFFFF',
                    font: { size: 14, weight: '800' },
                    padding: 10
                },
                grid: { display: false },
                ticks: {
                    display: true,
                    color: "#FFFFFF",
                    font: { size: 11, weight: '700' },
                    autoSkip: false,
                    maxRotation: 60,
                    minRotation: 30,
                    padding: 8
                },
                stacked: chartType === 'stacked' || chartType === 'waterfall'
            }
        } : (chartType === "radar" || chartType === "polarArea") ? {
            r: {
                display: true,
                angleLines: { display: true, color: "rgba(255, 255, 255, 0.2)" },
                grid: { display: true, color: "rgba(255, 255, 255, 0.2)" },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    display: true,
                    color: '#FFFFFF',
                    backdropColor: 'transparent',
                    font: { size: 11, weight: '600' },
                    z: 10
                },
                pointLabels: {
                    display: true,
                    color: "#FFFFFF",
                    font: { size: 14, weight: '800' },
                    padding: 15
                }
            }
        } : (chartType === 'sankey' || chartType === 'treemap') ? {
            x: { display: false },
            y: { display: false }
        } : {},
    };

    const renderChart = () => {
        switch (chartType) {
            case "horizontalBar":
            case "waterfall":
            case "stacked":
            case "funnel":
                return <Bar key={chartType} data={chartData} options={options} />;
            case "area":
                return <Line key={chartType} data={chartData} options={options} />;
            case "polarArea":
                return <PolarArea key={chartType} data={chartData} options={options} />;
            case "doughnut":
            case "gauge":
                return <Doughnut key={chartType} data={chartData} options={{ ...options, cutout: chartType === 'gauge' ? '80%' : '50%', rotation: chartType === 'gauge' ? 270 : 0, circumference: chartType === 'gauge' ? 180 : 360 }} />;
            case "bubble":
                return <Bubble key={chartType} data={chartData} options={options} />;
            case "treemap":
                return <Chart key={chartType} type="treemap" data={chartData} options={options} />;

            case "sankey":
                return <Chart key={chartType} type="sankey" data={chartData} options={options} />;
            case "radar":
            default:
                return <Radar key={chartType} data={chartData} options={options} />;
        }
    };

    const chartModes = [
        { id: 'radar', icon: <BsHexagonHalf />, label: 'Radar' },
        { id: 'horizontalBar', icon: <BsTextLeft />, label: 'H-Bar' },
        { id: 'area', icon: <BsGraphUpArrow />, label: 'Area' },
        { id: 'polarArea', icon: <BsCircleHalf />, label: 'Polar' },
        { id: 'doughnut', icon: <BsPieChartFill />, label: 'Doughnut' },
        { id: 'bubble', icon: <BsRecordCircle />, label: 'Bubble' },
        { id: 'treemap', icon: <BsGridFill />, label: 'Treemap' },
        { id: 'gauge', icon: <BsSpeedometer2 />, label: 'Gauge' },
        { id: 'waterfall', icon: <BsBarChartSteps />, label: 'Waterfall' },
        { id: 'stacked', icon: <BsBarChartLineFill />, label: 'Stacked' },
        { id: 'funnel', icon: <BsFilter />, label: 'Funnel' },
        { id: 'sankey', icon: <BsArrowLeftRight />, label: 'Sankey' },
    ];

    return (
        <Container fluid className="dynamic-chart-container p-0">
            <div className="chart-toolbar mb-4 d-flex flex-wrap justify-content-center align-items-center gap-3">
                <div className="custom-toolbar-wrapper" style={{ maxWidth: '100%', overflowX: 'auto', padding: '10px 0' }}>
                    <ButtonGroup className="custom-chart-switcher shadow-sm">
                        {chartModes.map((mode) => (
                            <Button
                                key={mode.id}
                                variant={chartType === mode.id ? "primary" : "outline-light"}
                                onClick={() => setChartType(mode.id)}
                                className={`d-flex align-items-center gap-2 px-3 py-2 ${chartType === mode.id ? 'active' : ''}`}
                                title={mode.label}
                            >
                                {mode.icon}
                                <span className="d-none d-lg-inline" style={{ fontSize: '12px' }}>{mode.label}</span>
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>

                {viewMode === "skills" && (
                    <Button
                        variant="warning"
                        size="sm"
                        onClick={() => { setViewMode("category"); setSelectedCategory(null); }}
                        className="d-flex align-items-center gap-1 shadow-sm px-3"
                        style={{ borderRadius: '20px', fontWeight: '700' }}
                    >
                        <BsArrowLeftShort size={20} /> Back
                    </Button>
                )}
            </div>

            <div className="chart-title-header text-center">
                <h4 className="mb-1" style={{ color: '#fff', fontWeight: '800' }}>
                    {viewMode === "category"
                        ? "Category Overview"
                        : `${formatLabel(selectedCategory)} Skills`}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                    {viewMode === "category"
                        ? "Click any category to drill down and see specific technologies"
                        : `Detailed breakdown of my ${formatLabel(selectedCategory)} expertise`}
                </p>
            </div>

            <div className="dynamic-chart-wrapper" style={{ height }}>
                {renderChart()}
            </div>
        </Container>
    );
};

export default DynamicTechStackChart;
