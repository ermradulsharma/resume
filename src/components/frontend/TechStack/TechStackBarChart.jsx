import React, { useMemo } from "react";
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

// Register Chart.js components once
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TechStackBarChart = ({ data, height = 360 }) => {
    /**
     * data shape (from your JSON): {
     *   frontend: [{ name, valueNow }, ...],
     *   backend:  [{ name, valueNow }, ...],
     *   ...
     * }
     */

    const { labels, values } = useMemo(() => {
        const entries = Object.entries(data || {});
        const labels = [];
        const values = [];

        entries.forEach(([key, arr]) => {
            if (!Array.isArray(arr) || arr.length === 0) return;

            // Average score per category
            const avg =
                arr.reduce((sum, item) => sum + Number(item?.valueNow || 0), 0) /
                arr.length;

            // Format label in Title Case
            const label =
                key === "cloudsAndDevOps"
                    ? "Clouds & DevOps"
                    : key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^\w/, (c) => c.toUpperCase())
                        .trim();

            labels.push(label);
            values.push(Math.round(avg));
        });

        return { labels, values };
    }, [data]);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Average Proficiency",
                data: values,
                // Feel free to swap this palette with your brand colors
                backgroundColor: [
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                    "rgba(100, 181, 246, 0.6)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { stepSize: 10 },
                grid: { drawBorder: false },
            },
            x: {
                grid: { display: false, drawBorder: false },
            },
        },
        plugins: {
            legend: { display: true, position: "top" },
            title: { display: true, text: "Tech Stack – Category Averages" },
            tooltip: {
                callbacks: {
                    label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y}/100`,
                },
            },
        },
    };

    return (
        <div style={{ height }}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default TechStackBarChart;
