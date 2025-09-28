import React from "react";
import { Button, Card, Col, Dropdown, Image, Row } from "react-bootstrap";

export const Index = () => {
    return (
        <>
            <Row>
                <Col lg={8} md={8}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-end">
                                <Col sm={7}>
                                    <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                                    <p className="mb-4">You have done <span className="fw-medium">72%</span> more sales today. Check your new badge in your profile.</p>
                                    <Button variant="outline-primary" size="sm">View Badges</Button>
                                </Col>
                                <Col sm={5} className="text-center">
                                    <Image src="/admin/assets/img/illustrations/man-with-laptop-light.png" height="140" alt="View Badge User" fluid  rel='lazy' loading="lazy"/>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4}>
                    <Row>
                        <Col lg={6} md={12} xs={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start">
                                    <Image src="/admin/assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded" width={40} rel='lazy' loading="lazy" />
                                    <Dropdown align="end">
                                        <Dropdown.Toggle variant="link" bsPrefix="btn p-0">
                                        <i className="bx bx-dots-vertical-rounded" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#">View More</Dropdown.Item>
                                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </div>
                                    <span className="fw-medium d-block mb-1">Profit</span>
                                    <h3 className="card-title mb-2">$12,628</h3>
                                    <small className="text-success fw-medium">
                                    <i className="bx bx-up-arrow-alt"></i> +72.80%
                                    </small>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6} md={12} xs={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <Image src="/admin/assets/img/icons/unicons/wallet-info.png" alt="wallet info" className="rounded" width={40} rel='lazy' loading="lazy" />
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="link" bsPrefix="btn p-0">
                                            <i className="bx bx-dots-vertical-rounded" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                            <Dropdown.Item href="#">View More</Dropdown.Item>
                                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <span>Sales</span>
                                    <h3 className="card-title mb-2">$4,679</h3>
                                    <small className="text-success fw-medium">
                                    <i className="bx bx-up-arrow-alt"></i> +28.42%
                                    </small>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Index;