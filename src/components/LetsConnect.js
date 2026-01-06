import { Container } from 'react-bootstrap';
import BrandButton from './common/BrandButton';
import './LetsConnect.css';

const LetsConnect = () => {
    return (
        <section className="lets-connect py-5 section mb-0 mt-5">
            <Container className="text-center p-3 p-lg-5 rounded-4 connect-content">
                <h2 className="display-5 fw-bold mb-4">Let's Build Something Amazing Together</h2>
                <p className="lead mb-5">Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you turn your vision into reality.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    <BrandButton to="/contact" size="lg" className="px-5 fw-bold">Start a Project</BrandButton>
                    <BrandButton variant="brand-outline-light" to="/portfolio" size="lg" className="px-5 fw-bold">Explore My Portfolio</BrandButton>
                </div>
            </Container>
        </section>
    );
};

export default LetsConnect;