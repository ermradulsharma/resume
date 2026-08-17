import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, InfoWindow, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import logo from '../../../assets/mradulsharma.webp';

const LIBRARIES = [];

const ContactMap = () => {
    const [infoOpen, setInfoOpen] = useState(true);

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: LIBRARIES
    });

    if (loadError) {
        console.error("Google Maps Load Error:", loadError);
    }

    const mapCenter = { lat: 27.5482107, lng: 78.6647141 };
    const mapContainerStyle = { width: "100%", height: "600px", borderRadius: "12px", overflow: "hidden" };

    if (!isLoaded) return null;

    return (
        <Container className="mt-5 rounded-1">
            <Row>
                <Col>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={15}>
                        <MarkerF position={mapCenter} onMouseOver={() => setInfoOpen(true)} onMouseOut={() => setInfoOpen(false)}>
                            {infoOpen && (
                                <InfoWindow position={mapCenter} options={{ closeBoxURL: "", enableEventPropagation: true }}>
                                    <div style={{ maxWidth: "350px" }} className="d-flex align-items-center gap-2">
                                        <img src={logo} alt="Mradul Sharma" width="100" height="100" loading="lazy" style={{ borderRadius: "8px" }} />
                                        <div>
                                            <h3 className="h6 mb-1">Mradul Sharma</h3>
                                            <p className="mb-1">📍 Etah, Uttar Pradesh, India</p>
                                            <p className="mb-0"><a href="tel:+917252933077" className="text-decoration-none" style={{ color: 'var(--text-dark)' }}>📞 +91 72529 33077 </a></p>
                                            <p className="mb-0"><a href="mailto:mradulsharma786@gmail.com" className="text-decoration-none" style={{ color: 'var(--text-dark)' }}>✉️ mradulsharma786@gmail.com</a></p>
                                        </div>
                                    </div>
                                </InfoWindow>
                            )}
                        </MarkerF>
                    </GoogleMap>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMap;
