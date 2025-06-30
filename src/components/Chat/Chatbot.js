"use client";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import data from "../database/localDB.json";

const Chatbot = ({ show, handleClose }) => {
    const [chat, setChat] = useState([]);
    const [query, setQuery] = useState("");

    const handleSend = () => {
        if (!query.trim()) return;

        const input = query.trim().toLowerCase();

        // Searching all text fields
        const allText = JSON.stringify(data).toLowerCase();
        const isMatch = allText.includes(input);

        let response = "Sorry, I couldn't find anything relevant.";

        if (isMatch) {
            if (input.includes("experience")) {
                response = data.about.experience.map(e => `${e.role} at ${e.place} (${e.duration})`).join("\n");
            } else if (input.includes("skills") || input.includes("technologies")) {
                response = data.about.skill.skills.map(s => s.tag).join(", ");
            } else if (input.includes("project")) {
                response = data.projects.projectsList.map(p => `🔹 ${p.title}: ${p.description}`).join("\n\n");
            } else if (input.includes("education")) {
                response = data.about.education.map(e => `${e.role} from ${e.place} (${e.duration})`).join("\n");
            } else if (input.includes("contact")) {
                response = data.contact.contacts.map(c => `${c.name}: ${c.value}`).join("\n");
            } else if (input.includes("social")) {
                response = data.contact.socialmedia.filter(s => s.status)
                    .map(s => `${s.name}: ${s.link}`).join("\n");
            } else {
                response = data.about.expandedAbout;
            }
        }

        setChat(prev => [
            ...prev,
            { sender: "user", text: query },
            { sender: "bot", text: response }
        ]);
        setQuery("");
    };

    return (
        <Modal show={show} onHide={handleClose} centered size="sm">
            <Modal.Header closeButton>
                <Modal.Title>Ask Me Anything</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
                {chat.map((msg, idx) => (
                    <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left", marginBottom: 10 }}>
                        <div
                            style={{
                                display: "inline-block",
                                background: msg.sender === "user" ? "#007bff" : "#f1f1f1",
                                color: msg.sender === "user" ? "#fff" : "#000",
                                padding: "8px 12px",
                                borderRadius: "10px",
                                maxWidth: "80%"
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Form.Control
                    type="text"
                    placeholder="Type your question..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSend()}
                />
                <Button variant="primary" onClick={handleSend}>
                    Send
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Chatbot;
