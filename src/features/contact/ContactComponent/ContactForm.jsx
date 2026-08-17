import React, { useRef, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import emailjs from "@emailjs/browser";
import BrandButton from "../../../components/ui/BrandButton";
import servicesList from "../../../data/serviceList.json";
import { trackEvent } from "../../../utils/analytics/ga";

const animatedComponents = makeAnimated();

const ContactForm = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [validationError, setValidationError] = useState("");

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
                trackEvent({ name: "contact_form_error", category: "Contact", label: "Error" });
                setDone(false);
                setNotDone(true);
            });
    };

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            <h2>Get In Touch</h2>
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
                        <Select closeMenuOnSelect={false} components={animatedComponents} options={servicesList} isMulti isSearchable placeholder="Select services..." className="rounded-5" value={formData.selected_services} onChange={handleSelectChange} aria-label="Select the services you are interested in" />
                        <input type="hidden" name="selected_services" value={formData.selected_services.map(s => s.label).join(", ")} />
                    </Col>
                    <Col md={12}>
                        <Form.Control as="textarea" rows={6} name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                    </Col>
                    {done && <span className="text-primary mt-1 fs-6">Message sent successfully!</span>}
                    {validationError && <span className="text-warning mt-1 fs-6">{validationError}</span>}
                    {notDone && <span className="text-danger mt-1 fs-6">Failed to send message. Please try again later.</span>}
                    <Col md={12} className="text-center">
                        <BrandButton type="submit" className='w-100 py-2'>Send Message</BrandButton>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ContactForm;
