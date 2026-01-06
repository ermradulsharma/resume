import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import BrandButton from "../../../components/common/BrandButton";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const DrilldownRadarChart = ({ data, height = 400 }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Utility function → average category value
    const avg = (arr) =>
        Math.round(arr.reduce((sum, i) => sum + i.valueNow, 0) / arr.length);

    const categoryLabels = Object.keys(data);
    const categoryData = categoryLabels.map((cat) => avg(data[cat]));

    // Main categories dataset
    const mainData = {
        labels: categoryLabels,
        datasets: [
            {
                label: "Categories",
                data: categoryData,
                backgroundColor: "rgba(59,130,246,0.2)",
                borderColor: "rgba(59,130,246,1)",
                borderWidth: 2,
            },
        ],
    };

    // Detail dataset
    const detailData =
        selectedCategory && {
            labels: data[selectedCategory].map((s) => s.name),
            datasets: [
                {
                    label: `${selectedCategory} Skills`,
                    data: data[selectedCategory].map((s) => s.valueNow),
                    backgroundColor: "rgba(34,197,94,0.2)",
                    borderColor: "rgba(34,197,94,1)",
                    borderWidth: 2,
                },
            ],
        };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (_, elements) => {
            if (elements.length > 0 && !selectedCategory) {
                const idx = elements[0].index;
                setSelectedCategory(categoryLabels[idx]);
            }
        },
        scales: {
            r: {
                angleLines: { display: true },
                suggestedMin: 50,
                suggestedMax: 100,
                ticks: {
                    stepSize: 10,
                    backdropColor: "transparent",
                },
            },
        },
    };

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-center mb-3">
                                {selectedCategory
                                    ? `${selectedCategory} - Skills`
                                    : "Technology Categories"}
                            </Card.Title>

                            <div style={{ height }}>
                                <Radar
                                    data={selectedCategory ? detailData : mainData}
                                    options={options}
                                />
                            </div>

                            {selectedCategory && (
                                <div className="text-center mt-3">
                                    <BrandButton
                                        variant="brand-outline"
                                        size="sm"
                                        onClick={() => setSelectedCategory(null)}
                                    >
                                        🔙 Back to Categories
                                    </BrandButton>
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DrilldownRadarChart;
