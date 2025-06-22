import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, reply_to, phone, message } = formData;

    if (!from_name || !reply_to || !phone || !message) {
      setNotDone(true);
      setDone(false);
      return;
    }

    emailjs
      .sendForm(
        "service_mradul",
        "template_hzio3hj",
        form.current,
        "OWljxBdzr02unWI2z"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setDone(true);
          setNotDone(false);
          // Reset form data
          setFormData({
            from_name: "",
            reply_to: "",
            phone: "",
            message: ""
          });
        },
        (error) => {
          console.error("Email error:", error.text);
          setDone(false);
          setNotDone(true);
        }
      );
  };

  return (
    <Container style={{ paddingTop: "20px", width: "100%" }}>
      <Row>
        <Col className="c-right">
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="glass-input"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              className="glass-input"
              value={formData.reply_to}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="glass-input"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="glass-input"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {notDone && (
              <span style={{ color: "#ff4d4d", fontSize: "0.9rem" }}>
                Please, fill all the fields correctly.
              </span>
            )}
            <Button type="submit" className="glass-button-1" disabled={done}>
              Send
            </Button>
            {done && (
              <span style={{ color: "#4dff88", fontSize: "0.9rem" }}>
                Thanks for contacting me! I've received your message.
              </span>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
