import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const TechStackLineChart = ({ data, height = 400 }) => {
    /**
     * data shape: {
     *   frontend: [{ name, valueNow }, ...],
     *   backend:  [{ name, valueNow }, ...],
     *   ...
     * }
     */

    const { labels, values } = useMemo(() => {
        const all = Object.values(data || {}).flat();
        const labels = all.map((item) => item.name);
        const values = all.map((item) => Number(item.valueNow || 0));
        return { labels, values };
    }, [data]);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Skill Proficiency",
                data: values,
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)",
                pointBackgroundColor: "rgba(75,192,192,1)",
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3, // smooth curve
                fill: true,
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
                ticks: { stepSize: 20 },
                grid: { drawBorder: false },
            },
            x: {
                ticks: {
                    autoSkip: false, // keep all labels visible
                    maxRotation: 45,
                    minRotation: 30,
                },
                grid: { display: false, drawBorder: false },
            },
        },
        plugins: {
            legend: { display: true, position: "top" },
            title: { display: true, text: "Tech Skills – Individual Proficiency" },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.label}: ${ctx.parsed.y}/100`,
                },
            },
        },
    };

    return (
        <div style={{ height }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default TechStackLineChart;
