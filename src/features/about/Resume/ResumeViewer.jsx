import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { pdf } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Container, Row, Col, Badge, Modal, Form } from 'react-bootstrap';
import {
    FaLaptopCode, FaReact, FaServer,
    FaNodeJs, FaLaravel, FaUserTie, FaCode, FaBriefcase
} from 'react-icons/fa';
import {
    BsDownload, BsLink45Deg, BsFileEarmarkPdf, BsCheckCircleFill,
    BsEye, BsBriefcase, BsAward, BsBuilding, BsShieldCheck,
    BsChatDotsFill, BsPrinter, BsLightningChargeFill, BsQrCodeScan,
    BsSend, BsArrowUpRightCircle, BsCopy, BsBoxSeam, BsGithub,
    BsPalette, BsStars, BsCodeSquare, BsBrush
} from 'react-icons/bs';
import ResumeDocument from './ResumeDocument';
import {
    ClassicResume,
    ModernResume,
    TechResume,
    CreativeResume,
} from './templates';
import SEO from '../../../components/ui/SEO';
import BrandButton from '../../../components/ui/BrandButton';
import resumeData from '../../../data/resumeData.json';
import { trackEvent } from '../../../utils/analytics/ga';
import './ResumeViewer.css';

/* ── Roles Config ────────────────────────────────── */
const ROLES = [
    {
        key: 'fullstack', Icon: FaLaptopCode,
        label: 'Full Stack', desc: 'Laravel + React + Node', color: '#6366f1',
        stats: '5+ YOE · 15+ Enterprise Apps · 10+ Packages',
        projects: [
            { title: 'Bolld PM SaaS', slug: 'bolld-pm' },
            { title: 'The Droning Marketplace', slug: 'the-droning-company' }
        ]
    },
    {
        key: 'frontend', Icon: FaReact,
        label: 'React / Frontend', desc: 'React · Next.js · UI/UX', color: '#06b6d4',
        stats: 'React 19 · Next.js · Redux · Tailwind',
        projects: [
            { title: 'Next.js Marketplace Frontend', slug: 'the-droning-company' },
            { title: 'Property Management App', slug: 'bolld-pm' }
        ]
    },
    {
        key: 'backend', Icon: FaServer,
        label: 'Backend Dev', desc: 'Node · APIs · Microservices', color: '#f59e0b',
        stats: 'REST APIs · GraphQL · Docker · AWS',
        projects: [
            { title: 'Microservices Architecture', slug: 'bolld-pm' },
            { title: 'High-Throughput APIs', slug: 'the-droning-company' }
        ]
    },
    {
        key: 'mern', Icon: FaNodeJs,
        label: 'MERN Stack', desc: 'Mongo · Express · React · Node', color: '#10b981',
        stats: 'MongoDB · Express · React · Node.js',
        projects: [
            { title: 'Real-time SaaS Platform', slug: 'bolld-pm' },
            { title: 'Full-Stack Marketplace', slug: 'the-droning-company' }
        ]
    },
    {
        key: 'laravel', Icon: FaLaravel,
        label: 'Laravel Dev', desc: 'Laravel · PHP · MySQL', color: '#ef4444',
        stats: 'Laravel v12+ · Eloquent · Horizon · Redis',
        projects: [
            { title: 'Bolld PM Property SaaS', slug: 'bolld-pm' },
            { title: 'Mautic Marketing Engine', slug: 'mautic-marketing' }
        ]
    },
    {
        key: 'techlead', Icon: FaUserTie,
        label: 'Tech Lead', desc: 'Architecture · Mentoring', color: '#8b5cf6',
        stats: 'System Design · Code Reviews · CI/CD Pipelines',
        projects: [
            { title: 'Enterprise Architecture Migration', slug: 'bolld-pm' },
            { title: 'Team Engineering Standards', slug: 'the-droning-company' }
        ]
    },
    {
        key: 'sde', Icon: FaCode,
        label: 'Senior SDE', desc: 'System Design · Scale', color: '#3b82f6',
        stats: 'Microservices · High Availability · Clean Code',
        projects: [
            { title: 'Multi-Tenant SaaS Engine', slug: 'bolld-pm' },
            { title: 'Scalable Marketplace Core', slug: 'the-droning-company' }
        ]
    },
    {
        key: 'freelancer', Icon: FaBriefcase,
        label: 'Freelancer', desc: 'Client Projects · Remote', color: '#ec4899',
        stats: '100% Remote · Contract / Retainer · Stripe & Razorpay',
        projects: [
            { title: 'Bolld PM Client SaaS', slug: 'bolld-pm' },
            { title: 'Droning Marketplace Platform', slug: 'the-droning-company' }
        ]
    },
];

/* ── Layout Style Variants Config ───────────────── */
const LAYOUT_STYLES = [
    {
        key: 'standard',
        Icon: BsFileEarmarkPdf,
        label: 'Standard',
        desc: 'Original · Default Layout',
        color: '#1565c0',
        emoji: '📄',
        tag: 'ATS Original',
        Component: ResumeDocument,
    },
    {
        key: 'classic',
        Icon: BsStars,
        label: 'Classic',
        desc: 'Corporate · ATS · MNCs',
        color: '#1565c0',
        emoji: '🏛️',
        tag: 'Best for MNCs',
        Component: ClassicResume,
    },
    {
        key: 'modern',
        Icon: BsPalette,
        label: 'Modern',
        desc: 'Teal · Startup · Minimal',
        color: '#008080',
        emoji: '🚀',
        tag: 'Best for Startups',
        Component: ModernResume,
    },
    {
        key: 'tech',
        Icon: BsCodeSquare,
        label: 'Tech',
        desc: 'Code-Inspired · Dev Teams',
        color: '#0984e3',
        emoji: '💻',
        tag: 'Best for Dev Roles',
        Component: TechResume,
    },
    {
        key: 'creative',
        Icon: BsBrush,
        label: 'Creative',
        desc: 'Bold · Freelance · Agency',
        color: '#e17055',
        emoji: '🎨',
        tag: 'Best for Freelancers',
        Component: CreativeResume,
    },
];

const FILE_NAME = (role, style) => `Mradul_Sharma_${role}_${style}_Resume.pdf`;

/* ── ResumeViewer Component ─────────────────────── */
const ResumeViewer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const roleParam = searchParams.get('v') || searchParams.get('role');
    const styleParam = searchParams.get('style');

    const [variant, setVariant] = useState(
        () => ROLES.some(r => r.key === roleParam) ? roleParam : 'fullstack'
    );
    const [layoutStyle, setLayoutStyle] = useState(
        () => LAYOUT_STYLES.some(s => s.key === styleParam) ? styleParam : 'standard'
    );

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [isOpeningPdf, setIsOpeningPdf] = useState(false);
    const [activeSkillFilter, setActiveSkillFilter] = useState(null);

    // Modals
    const [showQrModal, setShowQrModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    // Sync URL params → state
    useEffect(() => {
        const newRole = ROLES.some(r => r.key === roleParam) ? roleParam : 'fullstack';
        const newStyle = LAYOUT_STYLES.some(s => s.key === styleParam) ? styleParam : 'classic';
        if (newRole !== variant) { setVariant(newRole); setActiveSkillFilter(null); }
        if (newStyle !== layoutStyle) setLayoutStyle(newStyle);
    }, [roleParam, styleParam]); // eslint-disable-line react-hooks/exhaustive-deps

    const activeRole = ROLES.find(r => r.key === variant) || ROLES[0];
    const activeLayout = LAYOUT_STYLES.find(s => s.key === layoutStyle) || LAYOUT_STYLES[0];
    const ActiveRoleIcon = activeRole.Icon;
    const ActiveLayoutIcon = activeLayout.Icon;
    const ResumeComponent = activeLayout.Component;
    const profileData = resumeData[variant] || resumeData['fullstack'];

    const syncParams = (role, style) => {
        setSearchParams({ v: role, style });
    };

    const handleSelectRole = (key) => {
        setVariant(key);
        setActiveSkillFilter(null);
        syncParams(key, layoutStyle);
        trackEvent({ action: 'select_resume_role', category: 'Resume', label: key, value: 1 });
    };

    const handleSelectLayout = (key) => {
        setLayoutStyle(key);
        syncParams(variant, key);
        trackEvent({ action: 'select_resume_layout', category: 'Resume', label: key, value: 1 });
    };

    const triggerToast = (msg) => {
        setToastMsg(msg);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2600);
    };

    const handleCopyLink = () => {
        const url = `${window.location.origin}/resume?v=${variant}&style=${layoutStyle}`;
        navigator.clipboard.writeText(url).then(() => {
            triggerToast('✅ Shareable link copied to clipboard!');
            trackEvent({ action: 'share_resume_link', category: 'Resume', label: variant, value: 1 });
        });
    };

    const handleCopySummary = () => {
        const cleanSummary = profileData.summary.replace(/\*\*/g, '');
        navigator.clipboard.writeText(cleanSummary).then(() => {
            triggerToast('📋 Executive summary copied for HR notes!');
            trackEvent({ action: 'copy_resume_summary', category: 'Resume', label: variant, value: 1 });
        });
    };

    const handleViewPdfInNewTab = async () => {
        try {
            setIsOpeningPdf(true);
            trackEvent({ action: 'view_pdf', category: 'Resume', label: `${variant}_${layoutStyle}`, value: 1 });
            const blob = await pdf(<ResumeComponent variant={variant} />).toBlob();
            const blobUrl = URL.createObjectURL(blob);
            window.open(blobUrl, '_blank');
        } catch (err) {
            console.error('Error opening PDF:', err);
        } finally {
            setIsOpeningPdf(false);
        }
    };

    const handlePrintPdf = async () => {
        try {
            const blob = await pdf(<ResumeComponent variant={variant} />).toBlob();
            const blobUrl = URL.createObjectURL(blob);
            const w = window.open(blobUrl, '_blank');
            if (w) w.onload = () => w.print();
        } catch (err) {
            console.error('Error printing PDF:', err);
        }
    };

    const handleSendEmailSubmit = (e) => {
        e.preventDefault();
        if (!emailInput || !emailInput.includes('@')) return;
        setEmailSent(true);
        setTimeout(() => {
            setShowEmailModal(false);
            setEmailSent(false);
            setEmailInput('');
            triggerToast(`✉️ Resume sent to ${emailInput}!`);
        }, 1200);
    };

    const currentUrl = encodeURIComponent(`${window.location.origin}/resume?v=${variant}&style=${layoutStyle}`);
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${currentUrl}`;

    return (
        <>
            <SEO
                title={`Resume (${activeRole.label} · ${activeLayout.label}) — Mradul Sharma`}
                description={`View Mradul Sharma's ${activeRole.label} resume in ${activeLayout.label} layout. ${activeRole.desc}. 100% ATS-Friendly A4 PDF.`}
                keywords="Mradul Sharma resume, Full Stack Developer CV, React Developer resume, Laravel CV, download resume PDF"
                ogUrl={`https://mradulsharma.vercel.app/resume?v=${variant}&style=${layoutStyle}`}
                canonicalUrl={`https://mradulsharma.vercel.app/resume?v=${variant}&style=${layoutStyle}`}
            />

            <div className="resume-viewer-page">
                <div className="resume-bg-blob resume-bg-blob-1" aria-hidden="true" />
                <div className="resume-bg-blob resume-bg-blob-2" aria-hidden="true" />

                <div className="resume-viewer-inner">
                    <Container>

                        {/* ── Hero Header ── */}
                        <div className="resume-hero" data-aos="fade-up">
                            <div className="resume-hero-badge">
                                <BsFileEarmarkPdf className="me-1 fs-6" /> Resume Profiles &amp; Download
                            </div>
                            <h1>Choose Resume Profile</h1>
                            <p>Select a role profile below, then pick your preferred layout style and download your perfect resume.</p>
                            <div className="ats-badge mt-3" data-aos="fade-up" data-aos-delay="50">
                                <BsShieldCheck className="text-success me-1 fs-5" />
                                <span><strong>ATS-Friendly (100% Machine Readable)</strong> · Standard A4 · Updated 2026</span>
                            </div>

                            {/* ── CTC / Rate Strip ── */}
                            <div className="resume-ctc-strip mt-3" data-aos="fade-up" data-aos-delay="80">
                                <div className="ctc-strip-item">
                                    <span className="ctc-strip-dot" style={{ background: '#22c55e' }} />
                                    <span className="ctc-strip-label">Open to Work</span>
                                    <span className="ctc-strip-val">Immediate Joining</span>
                                </div>
                                <div className="ctc-strip-divider" />
                                <div className="ctc-strip-item">
                                    <span className="ctc-strip-label">Full-Time CTC</span>
                                    <span className="ctc-strip-val ctc-highlight">₹8 – 14 LPA</span>
                                </div>
                                <div className="ctc-strip-divider" />
                                <div className="ctc-strip-item">
                                    <span className="ctc-strip-label">Freelance Rate</span>
                                    <span className="ctc-strip-val ctc-highlight">$20–35 /hr</span>
                                </div>
                                <div className="ctc-strip-divider" />
                                <div className="ctc-strip-item">
                                    <span className="ctc-strip-label">Response</span>
                                    <span className="ctc-strip-val">Within 2 hrs</span>
                                </div>
                            </div>
                        </div>

                        {/* ── Step 1: Role Cards Grid ── */}
                        <div className="resume-step-label" data-aos="fade-up">
                            <span className="resume-step-number">1</span>
                            <span>Select Role Profile</span>
                        </div>
                        <div className="resume-role-grid" data-aos="fade-up" data-aos-delay="100">
                            {ROLES.map((role, idx) => {
                                const RoleIcon = role.Icon;
                                const isSelected = variant === role.key;
                                return (
                                    <button
                                        key={role.key}
                                        type="button"
                                        className={`resume-role-card${isSelected ? ' active' : ''}`}
                                        onClick={() => handleSelectRole(role.key)}
                                        aria-label={`Select ${role.label} resume profile`}
                                        aria-pressed={isSelected}
                                        id={`resume-role-${role.key}`}
                                        data-aos="zoom-in"
                                        data-aos-delay={100 + idx * 25}
                                    >
                                        <RoleIcon
                                            className="role-icon"
                                            style={{ color: isSelected ? '#ffffff' : role.color }}
                                            aria-hidden="true"
                                        />
                                        <span className="role-label">{role.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ── Step 2: Layout Style Picker ── */}
                        <div className="resume-step-label" data-aos="fade-up" data-aos-delay="120">
                            <span className="resume-step-number">2</span>
                            <span>Pick Layout Style</span>
                        </div>
                        <div className="resume-layout-grid" data-aos="fade-up" data-aos-delay="140">
                            {LAYOUT_STYLES.map((ls, idx) => {
                                const LayoutIcon = ls.Icon;
                                const isActive = layoutStyle === ls.key;
                                return (
                                    <button
                                        key={ls.key}
                                        type="button"
                                        className={`resume-layout-card${isActive ? ' active' : ''}`}
                                        onClick={() => handleSelectLayout(ls.key)}
                                        aria-label={`Select ${ls.label} layout style`}
                                        aria-pressed={isActive}
                                        id={`resume-layout-${ls.key}`}
                                        style={isActive ? { '--active-color': ls.color } : {}}
                                        data-aos="zoom-in"
                                        data-aos-delay={140 + idx * 30}
                                    >
                                        <div className="layout-card-top">
                                            <span className="layout-emoji">{ls.emoji}</span>
                                            <LayoutIcon
                                                className="layout-icon"
                                                style={{ color: isActive ? ls.color : 'var(--default-color)' }}
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <span className="layout-label">{ls.label}</span>
                                        <span className="layout-desc">{ls.desc}</span>
                                        <span
                                            className="layout-tag"
                                            style={isActive ? { background: `${ls.color}22`, color: ls.color, borderColor: `${ls.color}55` } : {}}
                                        >
                                            {ls.tag}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ── Selected Combination Info Bar ── */}
                        <div className="resume-selected-bar flex-column flex-sm-row gap-2" data-aos="fade-up" data-aos-delay="180">
                            <div className="d-flex align-items-center gap-2">
                                <ActiveRoleIcon className="fs-5" style={{ color: activeRole.color }} aria-hidden="true" />
                                <strong>{activeRole.label} Profile</strong>
                                <span className="text-muted">·</span>
                                <ActiveLayoutIcon className="fs-5" style={{ color: activeLayout.color }} aria-hidden="true" />
                                <strong style={{ color: activeLayout.color }}>{activeLayout.label} Layout</strong>
                            </div>
                            <div className="stats-pill d-inline-flex align-items-center gap-1 ms-sm-2 px-3 py-1 rounded-pill bg-white-50 border text-muted small">
                                <BsLightningChargeFill className="text-warning" />
                                <span>{activeRole.stats}</span>
                            </div>
                        </div>

                        {/* ── Action Buttons Row ── */}
                        <div className="resume-actions" data-aos="fade-up" data-aos-delay="200">
                            <button
                                type="button"
                                className="resume-btn-view"
                                onClick={handleViewPdfInNewTab}
                                disabled={isOpeningPdf}
                                aria-label={`View ${activeRole.label} ${activeLayout.label} PDF`}
                                id="resume-view-pdf-btn"
                            >
                                {isOpeningPdf
                                    ? <><span className="dl-spinner" /><span>Opening...</span></>
                                    : <><BsEye className="fs-5" /><span>View PDF</span></>}
                            </button>

                            <PDFDownloadLink
                                document={<ResumeComponent variant={variant} />}
                                fileName={FILE_NAME(variant, layoutStyle)}
                                className="resume-btn-download"
                                aria-label={`Download ${activeRole.label} ${activeLayout.label} resume`}
                                id="resume-download-btn"
                                onClick={() => trackEvent({ action: 'download_pdf', category: 'Resume', label: `${variant}_${layoutStyle}`, value: 1 })}
                            >
                                {({ loading }) => loading
                                    ? <><span className="dl-spinner" /><span>Generating...</span></>
                                    : <><BsDownload className="fs-5" /><span>Download PDF</span></>}
                            </PDFDownloadLink>

                            <button type="button" className="resume-btn-share" onClick={handleCopyLink} id="resume-share-btn">
                                <BsLink45Deg className="fs-4" /><span>Copy Link</span>
                            </button>

                            <button type="button" className="resume-btn-qr" onClick={() => setShowQrModal(true)} id="resume-qr-btn">
                                <BsQrCodeScan className="fs-5" /><span>Mobile QR</span>
                            </button>

                            <button type="button" className="resume-btn-email" onClick={() => setShowEmailModal(true)} id="resume-email-btn">
                                <BsSend className="fs-5" /><span>Email Me</span>
                            </button>

                            <button type="button" className="resume-btn-print" onClick={handlePrintPdf} id="resume-print-btn">
                                <BsPrinter className="fs-5" /><span>Print</span>
                            </button>

                            <Link
                                to={`/resume-preview?v=${variant}&style=${layoutStyle}`}
                                className="resume-btn-share"
                                id="resume-preview-studio-btn"
                                aria-label="Open Live PDF Preview Studio"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                            >
                                <BsEye className="fs-5" /><span>Preview Studio</span>
                            </Link>
                        </div>

                        {/* ── Profile Summary Card ── */}
                        <div className="resume-overview-card mb-5" data-aos="fade-up" data-aos-delay="250">
                            <div className="overview-header d-flex flex-wrap align-items-center justify-content-between gap-3 p-4 border-bottom">
                                <div>
                                    <h2 className="h4 fw-bold mb-1" style={{ color: 'var(--heading-color)' }}>
                                        {profileData.header.name}
                                    </h2>
                                    <span className="badge px-3 py-2 rounded-pill me-2" style={{ backgroundColor: `${activeRole.color}20`, color: activeRole.color, border: `1px solid ${activeRole.color}50` }}>
                                        {profileData.header.title}
                                    </span>
                                    <span className="badge px-3 py-2 rounded-pill" style={{ backgroundColor: `${activeLayout.color}18`, color: activeLayout.color, border: `1px solid ${activeLayout.color}40` }}>
                                        {activeLayout.emoji} {activeLayout.label} Layout
                                    </span>
                                </div>
                                <div className="text-end">
                                    <span className="small text-muted d-block">{profileData.header.address}</span>
                                    <span className="small fw-semibold text-primary">{profileData.header.email}</span>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h3 className="h6 text-uppercase fw-bold letter-spacing-1 text-muted mb-0 d-flex align-items-center gap-2">
                                        <BsAward className="text-primary" /> Profile Executive Summary
                                    </h3>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 small"
                                        onClick={handleCopySummary}
                                        title="Copy Summary for HR notes"
                                    >
                                        <BsCopy /> <span>Copy Summary</span>
                                    </button>
                                </div>
                                <p className="text-secondary lead-sm mb-4" style={{ lineHeight: '1.7' }}>
                                    {profileData.summary.replace(/\*\*/g, '')}
                                </p>

                                {/* Open Source Highlight */}
                                <div className="p-3 mb-4 rounded-3 border bg-light-subtle d-flex flex-wrap align-items-center justify-content-between gap-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <BsBoxSeam className="text-primary fs-5" />
                                        <span className="small text-dark fw-semibold">
                                            <strong>Open Source Contributor:</strong> 10+ published npm/Composer packages under <code className="text-primary px-2 py-1 bg-white rounded border">skywalker-labs</code>
                                        </span>
                                    </div>
                                    <a href="https://github.com/ermradulsharma" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary rounded-pill px-3 d-inline-flex align-items-center gap-1">
                                        <BsGithub /> View Repositories
                                    </a>
                                </div>

                                {/* Featured Case Studies */}
                                {activeRole.projects?.length > 0 && (
                                    <div className="p-3 mb-4 rounded-3 border bg-primary-subtle border-primary border-opacity-25">
                                        <span className="small text-uppercase fw-bold text-primary d-block mb-2">
                                            🚀 Featured Case Studies for {activeRole.label}:
                                        </span>
                                        <div className="d-flex flex-wrap gap-3">
                                            {activeRole.projects.map((proj, pIdx) => (
                                                <Link
                                                    key={pIdx}
                                                    to={`/portfolio/${proj.slug}`}
                                                    className="btn btn-sm btn-white bg-white text-dark shadow-sm border rounded-pill d-inline-flex align-items-center gap-2 fw-semibold"
                                                >
                                                    <span>{proj.title}</span>
                                                    <BsArrowUpRightCircle className="text-primary" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <Row className="g-4">
                                    <Col md={7}>
                                        <h3 className="h6 text-uppercase fw-bold letter-spacing-1 text-muted mb-3 d-flex align-items-center gap-2">
                                            <BsBriefcase className="text-primary" /> Key Experience Highlights
                                        </h3>
                                        <div className="d-flex flex-column gap-3">
                                            {profileData.experience.slice(0, 2).map((exp, idx) => (
                                                <div key={idx} className="p-3 rounded-3 border bg-light-subtle">
                                                    <div className="d-flex justify-content-between align-items-baseline mb-1">
                                                        <h4 className="h6 fw-bold mb-0">{exp.title}</h4>
                                                        <span className="badge bg-secondary-subtle text-secondary small">{exp.date}</span>
                                                    </div>
                                                    <span className="small text-muted d-block mb-2"><BsBuilding className="me-1" />{exp.company}</span>
                                                    <p className="small text-secondary mb-0 line-clamp-2">
                                                        {exp.points[0]?.replace(/\*\*/g, '')}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>

                                    <Col md={5}>
                                        <h3 className="h6 text-uppercase fw-bold letter-spacing-1 text-muted mb-3 d-flex align-items-center gap-2">
                                            <FaCode className="text-primary" /> Core Skill Highlights
                                        </h3>
                                        <div className="d-flex flex-wrap gap-2">
                                            {profileData.skills.map((skill, idx) => (
                                                <div key={idx} className="mb-2 w-100">
                                                    <span className="small text-muted fw-semibold d-block mb-1">{skill.category}</span>
                                                    <div className="d-flex flex-wrap gap-1">
                                                        {skill.details.split(', ').slice(0, 4).map((s, sIdx) => {
                                                            const isHighlighted = activeSkillFilter === s;
                                                            return (
                                                                <Badge
                                                                    key={sIdx}
                                                                    bg={isHighlighted ? 'primary' : 'light'}
                                                                    text={isHighlighted ? 'white' : 'dark'}
                                                                    className="border fw-normal small"
                                                                    onClick={() => setActiveSkillFilter(isHighlighted ? null : s)}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    {s}
                                                                </Badge>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        {/* ── Contact CTA ── */}
                        <div className="resume-contact-cta text-center p-4 p-md-5 rounded-4 shadow-sm" data-aos="fade-up" data-aos-delay="300" style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>
                            <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-primary-subtle text-primary mb-3">
                                <BsChatDotsFill className="fs-3" />
                            </div>
                            <h3 className="h4 fw-bold mb-2">Interested in working with Mradul?</h3>
                            <p className="text-muted max-w-500 mx-auto mb-4">
                                Whether you're looking for a Full-Stack Lead, a React/Laravel Specialist, or a Freelance Partner for your next project, let's talk.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <BrandButton to="/contact" withArrow id="resume-cta-contact-btn">Get In Touch</BrandButton>
                                <a href="https://wa.me/917252933077" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>

            {/* ── QR Code Modal ── */}
            <Modal show={showQrModal} onHide={() => setShowQrModal(false)} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="h6 fw-bold">📱 Scan to Open on Mobile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center py-4">
                    <div className="p-3 bg-white d-inline-block rounded-4 border shadow-sm mb-3">
                        <img src={qrImageUrl} alt={`QR for ${activeRole.label} ${activeLayout.label} Resume`} width="200" height="200" />
                    </div>
                    <h4 className="h6 fw-bold text-primary mb-1">{activeRole.label} · {activeLayout.label} Layout</h4>
                    <p className="small text-muted mb-0">Scan with your camera to view instantly on mobile.</p>
                </Modal.Body>
            </Modal>

            {/* ── Email Resume Modal ── */}
            <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)} centered>
                <Modal.Header closeButton className="border-0 pb-0">
                    <Modal.Title className="h6 fw-bold">✉️ Send {activeRole.label} ({activeLayout.label}) Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-4">
                    <Form onSubmit={handleSendEmailSubmit}>
                        <Form.Group className="mb-3" controlId="resumeEmailAddress">
                            <Form.Label className="small fw-semibold text-muted">Recipient Email Address</Form.Label>
                            <Form.Control
                                type="email" placeholder="name@company.com"
                                value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                                required className="rounded-3"
                            />
                        </Form.Group>
                        <BrandButton type="submit" className="w-100 py-2" disabled={emailSent}>
                            {emailSent ? 'Sending PDF Link...' : 'Send Resume Link'}
                        </BrandButton>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* ── Toast ── */}
            <div className={`resume-toast${toastVisible ? ' show' : ''}`} role="status" aria-live="polite" aria-atomic="true">
                <BsCheckCircleFill className="me-2 fs-5 text-white" /> {toastMsg}
            </div>
        </>
    );
};

export default ResumeViewer;
