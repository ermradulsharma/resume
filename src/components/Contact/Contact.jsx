import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_niilndo",
          "template_6z5idye",
          form.current,
          "VOBt6Akm1LhI5CZG-"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              className="glass-input"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="glass-input"
              rows="5"
              onChange={handleChange}
            />
            {notDone && (
              <span style={{ color: "#ff4d4d", fontSize: "0.9rem" }}>
                Please, fill all the fields.
              </span>
            )}
            <Button
              type="submit"
              className="glass-button-1"
              disabled={done}
            >
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
