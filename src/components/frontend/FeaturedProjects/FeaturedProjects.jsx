import React from 'react';
import { Container } from 'react-bootstrap';
import data from '../../database/portfolio.json';
import './FeaturedProjects.css';
import SectionHeader from '../../common/SectionHeader';
import BrandButton from '../../common/BrandButton';
import UniversalCard from '../../common/UniversalCard/UniversalCard';

const FeaturedProjects = () => {
    const featuredProjects = data.projects.projectsList.slice(0, 4);

    return (
        <Container className='featuredProjects section' id="featuredProjects" data-aos="fade-up" data-aos-delay="100">
            <SectionHeader title="My Work" description="A curated selection of my most significant and complex projects, ranging from enterprise-grade management systems to innovative full-stack web applications. Each case study showcases my technical expertise in Laravel, React, and cloud architecture, highlighting how I solve real-world problems with scalable and efficient code." linkTo="/portfolio" linkText="View All Projects" />
            <div className="projects-grid">
                {featuredProjects.map((project, idx) => (
                    <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <UniversalCard image={project.image} title={project.title} link={`/portfolio/${project.slug}`} description={project.description.length > 120 ? project.description.substring(0, 120) + '...' : project.description} tags={project.technologies.slice(0, 3)} overlayText="Read Case Study" className="h-100" imageHeight="240px" />
                    </div>
                ))}
            </div>

            <div className="text-center mt-5 d-md-none" data-aos="fade-up">
                <BrandButton to="/portfolio" className="px-4 py-2">View All Projects</BrandButton>
            </div>
        </Container>
    );
};

export default FeaturedProjects;
