import React, { useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DrilldownChart = ({ data, height = 400 }) => {
    const [viewMode, setViewMode] = useState("category"); // category | skills
    const [selectedCategory, setSelectedCategory] = useState(null);

    // prepare category averages
    const categoryData = useMemo(() => {
        const labels = Object.keys(data);
        const values = labels.map((cat) => {
            const skills = data[cat];
            const sum = skills.reduce((acc, s) => acc + (s.valueNow || 0), 0);
            return Math.round(sum / skills.length);
        });
        return { labels, values };
    }, [data]);

    // prepare skill-level data
    const skillData = useMemo(() => {
        if (!selectedCategory) return { labels: [], values: [] };
        const skills = data[selectedCategory] || [];
        return {
            labels: skills.map((s) => s.name),
            values: skills.map((s) => s.valueNow),
        };
    }, [selectedCategory, data]);

    // choose dataset depending on mode
    const chartData = {
        labels: viewMode === "category" ? categoryData.labels : skillData.labels,
        datasets: [
            {
                label: viewMode === "category" ? "Category Average" : `${selectedCategory} Skills`,
                data: viewMode === "category" ? categoryData.values : skillData.values,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

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
            legend: { display: false },
            title: {
                display: true,
                text:
                    viewMode === "category"
                        ? "Tech Stack – Category Wise"
                        : `${selectedCategory} – Skills`,
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.label}: ${ctx.raw}/100`,
                },
            },
        },
        scales: {
            y: {
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
                    }}
                >
                    ← Back to Categories
                </button>
            )}
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default DrilldownChart;
