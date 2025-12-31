import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsClock, BsWhatsapp, BsPhoneVibrateFill, BsMailbox2Flag } from "react-icons/bs";
import { GoogleMap, InfoWindow, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import "../../../components/frontend/Contact/Contact.css"
import SocialLinks from "../SocialLinks/SocialLinks";
import emailjs from "@emailjs/browser";
import { trackEvent } from "../../../utils/analytics/ga";
import servicesList from "../../../components/database/serviceList.json"
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import logo from '../../../assets/mradulsharma.webp';
import SectionHeader from "../../../components/common/SectionHeader";
const animatedComponents = makeAnimated();
const LIBRARIES = []; // Define libraries array outside component to prevent re-renders

const ContactSection = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [validationError, setValidationError] = useState("");
    const [infoOpen, setInfoOpen] = useState(true);

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: LIBRARIES
    });

    if (loadError) {
        console.error("Google Maps Load Error:", loadError);
    }

    const [formData, setFormData] = useState({
        from_name: "",
        reply_to: "",
        phone: "",
        subject: "",
        message: "",
        selected_services: []
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (validationError) setValidationError("");
        if (notDone) setNotDone(false);
        if (done) setDone(false);
    };

    const handleSelectChange = (selected) => {
        setFormData(prev => ({ ...prev, selected_services: selected || [] }));
        if (validationError) setValidationError("");
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const { from_name, reply_to, phone, subject, message, selected_services } = formData;
        if (!from_name || !reply_to || !phone || !subject || !message) {
            setValidationError("Please fill out all required fields.");
            setDone(false);
            return;
        }
        if (selected_services.length === 0) {
            setValidationError("Please select at least one service.");
            setDone(false);
            return;
        }
        setValidationError("");
        setNotDone(false);
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log("EmailJS Success:", result.text);
                trackEvent({ name: "submit_contact_form", category: "Contact", label: "Success" });
                setDone(true);
                setFormData({
                    from_name: "",
                    reply_to: "",
                    phone: "",
                    subject: "",
                    message: "",
                    selected_services: []
                });
            }, (error) => {
                console.error("EmailJS Error:", error);
                trackEvent({ name: "contact_form_error", category: "Contact", label: "Error" });
                setDone(false);
                setNotDone(true);
            });
    };
    const mapCenter = { lat: 27.5482107, lng: 78.6647141 };
    const mapContainerStyle = { width: "100%", height: "600px", borderRadius: "12px", overflow: "hidden" };
    return (
        <section id="contact" className="contact section py-5">
            {/* <SectionHeader title="Contact" description="Feel free to get in touch — whether it's a project, collaboration, or just a technical chat." className=" py-4 px-3 text-white" /> */}
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="g-4 g-lg-5">
                    <Col lg={5}>
                        <div className="info-box p-3 p-lg-5" data-aos="fade-up" data-aos-delay="200">
                            <h3>Contact Info</h3>
                            <p>I’m always open to discussing new opportunities, freelance work, or helping with your project. Let’s connect!</p>
                            <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon-box"><BsPhoneVibrateFill /></div>
                                <div className="content">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+917252933077" className="text-white text-decoration-none">+91 72529 33077</a></p>
                                </div>
                            </div>
                            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <BsMailbox2Flag />
                                </div>
                                <div className="content">
                                    <h4>Email</h4>
                                    <p><a href="mailto:mradulsharma786@gmail.com" className="text-white text-decoration-none">mradulsharma786@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="info-item" data-aos="fade-up" data-aos-delay="450">
                                <div className="icon-box">< BsWhatsapp /></div>
                                <div className="content">
                                    <h4>WhatsApp</h4>
                                    <p><a href="https://wa.me/917252933077" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Chat on WhatsApp</a></p>
                                </div>
                            </div>
                            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">< BsClock /></div>
                                <div className="content">
                                    <h4>Working Hours</h4>
                                    <p>Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                                </div>
                            </div>
                            <SocialLinks withNames platforms={['GitHub', 'LinkedIn', 'X', 'Medium', 'Telegram']} />
                            <p className="mt-4 small fst-italic text-white text-center">Currently coding from ☕ Coffee-powered desk.</p>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
                            <h3>Get In Touch</h3>
                            <p>Let me know how I can help. I'm quick to respond and open to exciting ideas.</p>
                            <Form ref={form} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <Row className="gy-4">
                                    <Col md={6}>
                                        <Form.Control type="text" name="from_name" placeholder="Your Name" autoComplete="autocomplete" value={formData.from_name} onChange={handleChange} />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control type="email" name="reply_to" placeholder="Your Email" autoComplete="autocomplete" value={formData.reply_to} onChange={handleChange} />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Control type="tel" name="phone" placeholder="Mobile No." autoComplete="autocomplete" value={formData.phone} onChange={handleChange} />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Control type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                                    </Col>
                                    <Col md={12}>
                                        <Select closeMenuOnSelect={false} components={animatedComponents} options={servicesList} isMulti isSearchable placeholder="Select services..." value={formData.selected_services} onChange={handleSelectChange} aria-label="Select the services you are interested in" />
                                        <input type="hidden" name="selected_services" value={formData.selected_services.map(s => s.label).join(", ")} />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Control as="textarea" rows={6} name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                                    </Col>
                                    {done && <span className="text-success mt-1 fs-6">Message sent successfully!</span>}
                                    {validationError && <span className="text-warning mt-1 fs-6">{validationError}</span>}
                                    {notDone && <span className="text-danger mt-1 fs-6">Failed to send message. Please try again later.</span>}
                                    <Col md={12} className="text-center">
                                        <Button type="submit" className='rounded-5 px-5 w-100 text-center py-2'>Send Message</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 rounded-1">
                <Row>
                    <Col>
                        {isLoaded && (
                            <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={15} >
                                <MarkerF position={mapCenter} onMouseOver={(e) => setInfoOpen(true)} onMouseOut={(e) => setInfoOpen(false)} >
                                    {infoOpen && (
                                        <InfoWindow position={mapCenter} options={{ closeBoxURL: "", enableEventPropagation: true }}>
                                            <div style={{ maxWidth: "350px" }} className="d-flex align-items-center gap-2">
                                                <img src={logo} alt="Mradul Sharma" width="100" height="100" loading="lazy" style={{ borderRadius: "8px" }} />
                                                <div>
                                                    <h6 className="mb-1">Mradul Sharma</h6>
                                                    <p className="mb-1">📍 Etah, Uttar Pradesh, India</p>
                                                    <p className="mb-0"><a href="tel:+917252933077" className="text-decoration-none text-black">📞 +91 72529 33077 </a></p>
                                                    <p className="mb-0"><a href="mailto:mradulsharma786@gmail.com" className="text-decoration-none text-black">✉️ mradulsharma786@gmail.com</a></p>
                                                </div>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </MarkerF>
                            </GoogleMap>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
