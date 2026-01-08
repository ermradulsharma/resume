import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import { BiArrowBack, BiTime, BiLayer, BiCheckCircle, BiTargetLock, BiDetail, BiRocket } from 'react-icons/bi';
import SEO from '../../../components/common/SEO';
import data from '../../../components/database/portfolio.json';
import LetsConnect from '../../../components/LetsConnect';
import { getSafeProjectImage } from '../../../utils/imageUtils';
import BrandButton from '../../../components/common/BrandButton';
import Lightbox from '../../../components/common/Lightbox/Lightbox';
import ReadingProgress from '../../../components/common/ReadingProgress/ReadingProgress';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = data.projects.projectsList.find(p => p.slug === slug);
    const [lightboxIndex, setLightboxIndex] = React.useState(-1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);


    if (!project) {
        return (
            <Container className="py-5 text-center my-5">
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist.</p>
                <BrandButton to="/portfolio" className="mt-3">Back to Portfolio</BrandButton>
            </Container>
        );
    }

    const { title, description, technologies, period, case_study } = project;
    const galleryImages = (case_study.images || []).map(img => getSafeProjectImage(img, project.image));

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(-1);
    const prevImage = () => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
    const nextImage = () => setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));

    return (
        <div className="project-detail-page">
            <ReadingProgress />
            <SEO
                title={`${title} | Case Study - Mradul Sharma`}
                description={description}
                keywords={technologies.join(", ")}
                ogUrl={`https://mradulsharma.vercel.app/portfolio/${slug}`}
                canonicalUrl={`https://mradulsharma.vercel.app/portfolio/${slug}`}
                ogImage={getSafeProjectImage(project.image)}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": title,
                    "description": description,
                    "image": getSafeProjectImage(project.image),
                    "author": {
                        "@type": "Person",
                        "name": "Mradul Sharma"
                    },
                    "datePublished": case_study.project_details?.year || period,
                    "url": `https://mradulsharma.vercel.app/portfolio/${slug}`
                }}
            />

            {/* Hero Section */}
            <div className="project-hero text-white d-flex align-items-center" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${getSafeProjectImage(project.image)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px'
            }}>
                <Container data-aos="fade-up">
                    <Row>
                        <Col lg={8}>
                            <Link to="/portfolio" className="back-link d-inline-flex align-items-center mb-4 text-decoration-none">
                                <BiArrowBack className="me-2" /> Back to Portfolio
                            </Link>
                            <h1 className="display-4 fw-bold mb-3">{title}</h1>
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                <span className="d-flex align-items-center">
                                    <BiTime className="me-2 text-primary" /> {case_study.project_details?.year || period}
                                </span>
                                <span className="d-flex align-items-center">
                                    <BiLayer className="me-2 text-primary" /> {case_study.project_details?.category || project.category}
                                </span>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                {technologies.map(tech => (
                                    <Badge key={tech} bg="primary-subtle" text="light" className="px-3 py-2 fw-normal fs-6" style={{ background: 'var(--primary-subtle)', color: 'var(--primary-color)', border: '1px solid var(--primary-color)' }}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="case-study-content py-5">
                <Container>
                    {project.metrics && (
                        <div className="metrics-container mb-5" data-aos="fade-up">
                            <Row className="g-3">
                                {project.metrics.map((m, idx) => (
                                    <Col key={idx} md={4} sm={6}>
                                        <div className="metric-card p-4 text-center rounded-4 border shadow-sm h-100 bg-white">
                                            <h4 className="display-6 fw-bold text-primary mb-1">{m.value}</h4>
                                            <p className="text-muted small text-uppercase mb-0 fw-medium letter-spacing-1">{m.label}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                    <Row className="gy-5">
                        <Col lg={8}>
                            {/* Overview */}
                            <div className="content-block mb-5" data-aos="fade-up">
                                <h3 className="h4 fw-bold mb-3 d-flex align-items-center">
                                    <BiDetail className="me-2 text-primary" /> Overview
                                </h3>
                                <p className="text-secondary lead-sm">{case_study.overview}</p>
                            </div>

                            {/* Problem Statement */}
                            {case_study.problem_statement && (
                                <div className="content-block mb-5" data-aos="fade-up">
                                    <h3 className="h4 fw-bold mb-3 d-flex align-items-center text-danger">
                                        <BiTargetLock className="me-2" /> Challenges Faced
                                    </h3>
                                    <ul className="list-unstyled">
                                        {case_study.problem_statement.map((item, idx) => (
                                            <li key={idx} className="mb-3 d-flex align-items-start">
                                                <BiCheckCircle className="text-danger mt-1 me-3 flex-shrink-0" />
                                                <span className="text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Solution / Objectives */}
                            {case_study.objectives && (
                                <div className="content-block mb-5" data-aos="fade-up">
                                    <h3 className="h4 fw-bold mb-3 d-flex align-items-center text-primary">
                                        <BiRocket className="me-2" /> Our Solution
                                    </h3>
                                    <ul className="list-unstyled">
                                        {case_study.objectives.map((item, idx) => (
                                            <li key={idx} className="mb-3 d-flex align-items-start">
                                                <BiCheckCircle className="text-primary mt-1 me-3 flex-shrink-0" />
                                                <span className="text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Challenges & Solutions */}
                            {case_study.challenges_and_solutions && (
                                <div className="content-block mb-5" data-aos="fade-up">
                                    <h3 className="h4 fw-bold mb-4 d-flex align-items-center">
                                        <BiTargetLock className="me-2 text-warning" /> Challenges & Solutions
                                    </h3>
                                    <div className="challenges-container">
                                        {case_study.challenges_and_solutions.map((item, idx) => (
                                            <div key={idx} className="challenge-item p-4 mb-4 rounded-4 border-start border-4 border-warning shadow-sm bg-white">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3 mb-md-0">
                                                        <h6 className="fw-bold text-uppercase small text-muted mb-2">Challenge</h6>
                                                        <p className="text-secondary mb-0">{item.challenge}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h6 className="fw-bold text-uppercase small text-primary mb-2">Solution</h6>
                                                        <p className="text-secondary mb-0">{item.solution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Implementation Details */}
                            {case_study.implemented && (
                                <div className="content-block mb-5" data-aos="fade-up">
                                    <h3 className="h4 fw-bold mb-4">{case_study.implemented.title || "Implementation Journey"}</h3>
                                    <div className="implementation-grid">
                                        {Object.entries(case_study.implemented.architecture || {}).map(([key, val]) => (
                                            <Card key={key} className="border-0 shadow-sm mb-3 bg-light rounded-4">
                                                <Card.Body className="p-4">
                                                    <h5 className="h6 fw-bold text-uppercase mb-2 d-flex align-items-center" style={{ color: 'var(--accent-color)' }}>
                                                        <span className="dot me-2"></span> {key.replace('_', ' ')}
                                                    </h5>
                                                    <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>{val}</p>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="fw-bold mb-4 small text-uppercase text-muted letter-spacing-1">Key Deliverables</h5>
                                        <div className="row g-3">
                                            {case_study.implemented.key_features.map((feature, idx) => (
                                                <div key={idx} className="col-md-6">
                                                    <div className="p-3 border rounded-3 small text-secondary bg-white h-100 d-flex align-items-center shadow-sm hover-up transition-base">
                                                        <BiCheckCircle className="text-primary me-2 flex-shrink-0 fs-5" /> {feature}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Screenshot Gallery */}
                            {case_study.images && case_study.images.length > 0 && (
                                <div className="content-block mb-5" data-aos="fade-up">
                                    <h3 className="h4 fw-bold mb-4 d-flex align-items-center">
                                        <BiDetail className="me-2 text-primary" /> Project Gallery
                                    </h3>
                                    <div className="project-gallery mt-4">
                                        <div className="row g-4">
                                            {case_study.images.map((img, idx) => (
                                                <div key={idx} className={`${idx === 0 ? 'col-12' : 'col-md-6 col-lg-4'}`}>
                                                    <div
                                                        className="gallery-item rounded-4 overflow-hidden shadow-sm border h-100 cursor-pointer"
                                                        onClick={() => openLightbox(idx)}
                                                    >
                                                        <img
                                                            src={getSafeProjectImage(img, project.image)}
                                                            alt={`${title} - screenshot ${idx + 1}`}
                                                            className="img-fluid w-100 h-100 object-fit-cover transition-base"
                                                            loading="lazy"
                                                            style={{ cursor: 'zoom-in' }}
                                                            onError={(e) => {
                                                                const fallback = getSafeProjectImage(project.image);
                                                                if (e.target.src !== fallback) {
                                                                    e.target.src = fallback;
                                                                    e.target.title = "Fallback image used";
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Outcomes */}
                            {case_study.outcomes && (
                                <div className="content-block mb-0" data-aos="fade-up">
                                    <h3 className="h4 fw-bold mb-4 d-flex align-items-center text-primary">
                                        <BiCheckCircle className="me-2 text-primary" /> Strategic Impact
                                    </h3>
                                    <div className="row g-4 mt-2">
                                        {case_study.outcomes.map((outcome, idx) => (
                                            <div key={idx} className="col-md-6">
                                                <div className="p-4 bg-primary-subtle rounded-4 border border-primary border-opacity-25 h-100 shadow-sm">
                                                    <p className="mb-0 small fw-medium text-dark-emphasis" style={{ lineHeight: '1.6' }}>{outcome}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Col>

                        <Col lg={4}>
                            <div className="sticky-top" style={{ top: '100px' }}>
                                <Card className="border-0 shadow-lg p-4 mb-4">
                                    <h4 className="fw-bold mb-4">Project Summary</h4>

                                    <div className="summary-grid">
                                        <div className="summary-item mb-3">
                                            <p className="small text-muted mb-1 text-uppercase">Role</p>
                                            <p className="fw-bold mb-0">{case_study.project_details?.role || "Senior Full-Stack Developer"}</p>
                                        </div>

                                        {case_study.project_details?.team_size && (
                                            <div className="summary-item mb-3">
                                                <p className="small text-muted mb-1 text-uppercase">Team</p>
                                                <p className="fw-bold mb-0">{case_study.project_details.team_size}</p>
                                            </div>
                                        )}

                                        <div className="summary-item mb-3">
                                            <p className="small text-muted mb-1 text-uppercase">Timeline</p>
                                            <p className="fw-bold mb-0">{case_study.project_details?.year || period}</p>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="summary-item">
                                        <p className="small text-muted mb-2 text-uppercase">Core Stack</p>
                                        <div className="d-flex flex-wrap gap-1">
                                            {(case_study.project_details?.technologies || technologies).slice(0, 5).map(t => (
                                                <Badge key={t} bg="light" text="dark" className="border">{t}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <BrandButton href={project.link === "#" ? "#" : (case_study.project_details?.live_link || project.link)} disabled={project.link === "#" && !case_study.project_details?.live_link} target="_blank" className="w-100 py-3 fw-bold">
                                            {project.link === "#" && !case_study.project_details?.live_link ? "Internal Platform" : "Visit Project Website"}
                                        </BrandButton>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <LetsConnect />
                </Container>
            </section>

            {lightboxIndex !== -1 && (
                <Lightbox
                    images={galleryImages}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={prevImage}
                    onNext={nextImage}
                />
            )}
        </div>
    );
};

export default ProjectDetail;
