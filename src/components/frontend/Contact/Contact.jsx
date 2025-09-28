import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsClock, BsWhatsapp, BsPhoneVibrateFill, BsMailbox2Flag } from "react-icons/bs";
import "../../../components/frontend/Contact/Contact.css"
import SocialLinks from "../SocialLinks/SocialLinks";
import emailjs from "@emailjs/browser";
import servicesList from "../../../components/database/serviceList.json"
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const ContactSection = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({
        from_name: "",
        reply_to: "",
        phone: "",
        subject: "",
        message: "",
        selected_services:[]
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (selected) => {
        setFormData(prev => ({ ...prev, selected_services: selected || [] }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const { from_name, reply_to, phone, subject, message, selected_services } = formData;
        if (!from_name || !reply_to || !phone || !subject || !message || selected_services.length === 0) {
            setNotDone(true);
            setNotDone(true);
            setDone(false);
            return;
        }

        emailjs.sendForm("service_mradul", "template_hzio3hj", form.current, "OWljxBdzr02unWI2z").then((result) => {
            setDone(true);
            setNotDone(false);
            setFormData({
                from_name: "",
                reply_to: "",
                phone: "",
                subject: "",
                message: "",
                selected_services: []
            });
        }, (error) => {
                setDone(false);
                setNotDone(true);
            }
        );
    };
    return (
        <section id="contact" className="contact section mb-5">
            {/* Section Title */}
            <Container className="section-title">
                <h2>Contact</h2>
                <p>Feel free to get in touch — whether it's a project, collaboration, or just a technical chat.</p>
            </Container>
            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="g-4 g-lg-5">
                    {/* Contact Info */}
                    <Col lg={5}>
                        <div className="info-box p-5" data-aos="fade-up" data-aos-delay="200">
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

                            {/* WhatsApp */}
                            <div className="info-item" data-aos="fade-up" data-aos-delay="450">
                                <div className="icon-box">< BsWhatsapp /></div>
                                <div className="content">
                                    <h4>WhatsApp</h4>
                                    <p><a href="https://wa.me/917252933077" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">Chat on WhatsApp</a></p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">< BsClock /></div>
                                <div className="content">
                                    <h4>Working Hours</h4>
                                    <p>Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                                </div>
                            </div>

                            {/* Timezone */}
                            {/* <div className="info-item" data-aos="fade-up" data-aos-delay="550">
                                <div className="icon-box">
                                    🌍
                                </div>
                                <div className="content">
                                    <h4>Timezone</h4>
                                    <p>GMT+5:30 (India Standard Time)</p>
                                </div>
                            </div> */}

                            {/* Schedule a Call */}
                            {/* <div className="info-item" data-aos="fade-up" data-aos-delay="600">
                                <div className="icon-box">
                                    📅
                                </div>
                                <div className="content">
                                    <h4>Schedule a Call</h4>
                                    <p><a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-5 px-3">Book Now</a></p>
                                </div>
                            </div> */}
                            <SocialLinks withNames platforms={['GitHub', 'LinkedIn', 'X', 'GitLab', 'Telegram']} />
                            {/* Personal Tagline */}
                            <p className="mt-4 small fst-italic text-white text-center">Currently coding from ☕ Coffee-powered desk.</p>
                        </div>
                    </Col>

                    {/* Contact Form */}
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
                                    <Form.Control type="email" name="reply_to" placeholder="Your Email" autoComplete="autocomplete" value={formData.reply_to} onChange={handleChange}/>
                                </Col>
                                <Col md={12}>
                                    <Form.Control type="tel" name="phone" placeholder="Mobile No." autoComplete="autocomplete" value={formData.phone} onChange={handleChange}/>
                                </Col>
                                <Col md={12}>
                                    <Form.Control type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                                </Col>
                                {/* Service List */}
                                <Col md={12}>
                                    <Select closeMenuOnSelect={false} components={animatedComponents} options={servicesList} isMulti isSearchable placeholder="Select services..." value={formData.selected_services} onChange={handleSelectChange} aria-label="Select the services you are interested in" />
                                </Col>

                                {/* Hidden field for EmailJS */}
                                <input type="hidden" name="selected_services" value={formData.selected_services.map(s => s.label).join(", ")} />
                                <Col md={12}>
                                    <Form.Control as="textarea" rows={6} name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                                </Col>
                                {done && <span className="text-success mt-1 fs-6">Message sent successfully!</span>}
                                {notDone && <span className="text-danger mt-1 fs-6">Please fill out all fields correctly.</span>}
                                <Col md={12} className="text-center">
                                    <Button type="submit" className='rounded-5 px-5 w-75 text-center py-2'>Send Message</Button>
                                </Col>
                            </Row>
                        </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
