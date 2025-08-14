import React from "react";
import { Container} from "react-bootstrap";
import LetsConnect from "../../components/LetsConnect";
import HeroSection from "../../components/frontend/HeroSection/HeroSection";
import About from "../../components/frontend/About/About";
import ContactSection from "../../components/frontend/Contact/Contact";

const Home = () => {
    return (
        <Container fluid className="px-0">
            <HeroSection />                    
            <About />
            <ContactSection />
            <LetsConnect />
        </Container>
    );
};

export default Home;
