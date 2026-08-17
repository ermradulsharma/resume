import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../../../components/ui/SEO';
import data from '../../../data/portfolio.json';
import LetsConnect from '../../../features/home/LetsConnect';
import { getSafeProjectImage } from '../../../utils/imageUtils';
import BrandButton from '../../../components/ui/BrandButton';
import Lightbox from '../../../components/ui/Lightbox/Lightbox';
import ReadingProgress from '../../../components/ui/ReadingProgress/ReadingProgress';
import ProjectDetailHero from './ProjectDetailHero';
import ProjectDetailContent from './ProjectDetailContent';
import ProjectDetailSidebar from './ProjectDetailSidebar';
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

    const { title, description, technologies, case_study } = project;
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
                    "author": { "@type": "Person", "name": "Mradul Sharma" },
                    "datePublished": case_study.project_details?.year,
                    "url": `https://mradulsharma.vercel.app/portfolio/${slug}`
                }}
            />

            <ProjectDetailHero project={project} />

            <section className="case-study-content py-5">
                <Container>
                    <Row className="gy-5">
                        <Col lg={8}>
                            <ProjectDetailContent project={project} openLightbox={openLightbox} />
                        </Col>
                        <Col lg={4}>
                            <ProjectDetailSidebar project={project} />
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
