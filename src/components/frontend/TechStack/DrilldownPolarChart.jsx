import React, { useState, useMemo } from "react";
import { PolarArea } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

const DrilldownPolarChart = ({ data, height = 400 }) => {
    const [viewMode, setViewMode] = useState("category"); // category | skills
    const [selectedCategory, setSelectedCategory] = useState(null);

    // 🎯 Category-wise averages
    const categoryData = useMemo(() => {
        const labels = Object.keys(data);
        const values = labels.map((cat) => {
            const skills = data[cat];
            const sum = skills.reduce((acc, s) => acc + (s.valueNow || 0), 0);
            return Math.round(sum / skills.length);
        });
        return { labels, values };
    }, [data]);

    // 🎯 Skill-wise data for selected category
    const skillData = useMemo(() => {
        if (!selectedCategory) return { labels: [], values: [] };
        const skills = data[selectedCategory] || [];
        return {
            labels: skills.map((s) => s.name),
            values: skills.map((s) => s.valueNow),
        };
    }, [selectedCategory, data]);

    // 🎯 Dataset selection
    const chartData = {
        labels: viewMode === "category" ? categoryData.labels : skillData.labels,
        datasets: [
            {
                label: viewMode === "category" ? "Category Avg" : `${selectedCategory} Skills`,
                data: viewMode === "category" ? categoryData.values : skillData.values,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                ],
                borderWidth: 1,
            },
        ],
    };

    // 🎯 Chart Options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (e, elements) => {
            if (!elements.length) return;
            const index = elements[0].index;
            if (viewMode === "category") {
                const category = categoryData.labels[index];
                setSelectedCategory(category);
                setViewMode("skills");
            }
        },
        plugins: {
            title: {
                display: true,
                text:
                    viewMode === "category"
                        ? "Tech Stack – Category Wise (Polar Chart)"
                        : `${selectedCategory} – Skills`,
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.label}: ${ctx.raw}/100`,
                },
            },
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: { stepSize: 20 },
            },
        },
    };

    return (
        <div style={{ height }}>
            {viewMode === "skills" && (
                <button
                    onClick={() => setViewMode("category")}
                    style={{
                        marginBottom: "10px",
                        padding: "5px 10px",
                        borderRadius: "6px",
                        background: "#eee",
                        cursor: "pointer",
                    }}
                >
                    ← Back to Categories
                </button>
            )}
            <PolarArea data={chartData} options={options} />
        </div>
    );
};

export default DrilldownPolarChart;
