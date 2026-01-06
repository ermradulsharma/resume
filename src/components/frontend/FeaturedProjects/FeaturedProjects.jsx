import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../database/portfolio.json';
import { BiRightArrowAlt } from 'react-icons/bi';
import './FeaturedProjects.css';
import SectionHeader from '../../common/SectionHeader';
import { getSafeProjectImage } from '../../../utils/imageUtils';
import BrandButton from '../../common/BrandButton';

const FeaturedProjects = () => {
    const featuredProjects = data.projects.projectsList.slice(0, 4);

    return (
        <section id="featuredProjects" className="featuredProjects">
            <SectionHeader title="My Work" description="A curated selection of my most significant and complex projects, ranging from enterprise-grade management systems to innovative full-stack web applications. Each case study showcases my technical expertise in Laravel, React, and cloud architecture, highlighting how I solve real-world problems with scalable and efficient code." linkTo="/portfolio" linkText="View All Projects" />
            <Container data-aos="fade-up" data-aos-delay="100">
                <div className="projects-grid">
                    {featuredProjects.map((project, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <Card className="project-card border-0 shadow-sm h-100 overflow-hidden">
                                <Link to={`/portfolio/${project.slug}`} className="text-decoration-none">
                                    <div className="card-img-wrapper position-relative overflow-hidden">
                                        <Card.Img variant="top" src={getSafeProjectImage(project.image)} alt={project.title} style={{ height: '240px', objectFit: 'cover' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x240?text=Project+Image'; }} />
                                    </div>
                                </Link>
                                <Card.Body className="p-3 d-flex flex-column">
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {project.technologies.slice(0, 3).map(tech => (
                                            <Badge
                                                key={tech}
                                                bg="primary-subtle"
                                                className="fw-normal border border-primary-subtle"
                                                style={{ color: 'var(--primary-color)' }}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Link to={`/portfolio/${project.slug}`} className="text-decoration-none">
                                        <Card.Title className="h5 fw-bold project-title" as="h3" style={{ color: 'var(--text-dark)' }}>{project.title}</Card.Title>
                                    </Link>
                                    <Card.Text className="text-secondary small mb-4">{project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description}</Card.Text>
                                    <Link to={`/portfolio/${project.slug}`} className="text-primary text-decoration-none fw-bold d-flex align-items-center mt-auto" aria-label={`Read case study for ${project.title}`}>
                                        Read Case Study <BiRightArrowAlt className="ms-1" />
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5 d-md-none" data-aos="fade-up">
                    <BrandButton to="/portfolio" className="px-4 py-2">View All Projects</BrandButton>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProjects;
