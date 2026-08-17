import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PDFViewer, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import {
    FaLaptopCode, FaReact, FaServer,
    FaNodeJs, FaLaravel, FaUserTie, FaCode, FaBriefcase,
} from 'react-icons/fa';
import {
    BsFileEarmarkPdf, BsDownload, BsEye, BsArrowLeft,
    BsCheckCircleFill, BsStars, BsPalette, BsCodeSquare, BsBrush,
} from 'react-icons/bs';
import ResumeDocument from './ResumeDocument';
import {
    ClassicResume,
    ModernResume,
    TechResume,
    CreativeResume,
} from './templates';
import SEO from '../../../components/ui/SEO';
import './ResumeLivePreview.css';

/* ── Config ─────────────────────────────────────── */
const ROLES = [
    { key: 'fullstack',  Icon: FaLaptopCode, label: 'Full Stack',       desc: 'Laravel + React + Node', color: '#6366f1' },
    { key: 'frontend',   Icon: FaReact,      label: 'React / Frontend',  desc: 'React · Next.js · UI/UX', color: '#06b6d4' },
    { key: 'backend',    Icon: FaServer,     label: 'Backend Dev',       desc: 'Node · APIs · Microservices', color: '#f59e0b' },
    { key: 'mern',       Icon: FaNodeJs,     label: 'MERN Stack',        desc: 'Mongo · Express · React · Node', color: '#10b981' },
    { key: 'laravel',    Icon: FaLaravel,    label: 'Laravel Dev',       desc: 'Laravel · PHP · MySQL', color: '#ef4444' },
    { key: 'techlead',   Icon: FaUserTie,    label: 'Tech Lead',         desc: 'Architecture · Mentoring', color: '#8b5cf6' },
    { key: 'sde',        Icon: FaCode,       label: 'Senior SDE',        desc: 'System Design · Scale', color: '#3b82f6' },
    { key: 'freelancer', Icon: FaBriefcase,  label: 'Freelancer',        desc: 'Client Projects · Remote', color: '#ec4899' },
];

const TEMPLATES = [
    { key: 'standard', Icon: BsFileEarmarkPdf, emoji: '📄', label: 'Standard', desc: 'Original · Default Layout', tag: 'ATS Original', Component: ResumeDocument },
    { key: 'classic',  Icon: BsStars,          emoji: '🏛️', label: 'Classic',  desc: 'Corporate · ATS · MNCs',   tag: 'Best for MNCs',   Component: ClassicResume },
    { key: 'modern',   Icon: BsPalette,        emoji: '🚀', label: 'Modern',   desc: 'Teal · Startup · Minimal', tag: 'Startups',         Component: ModernResume },
    { key: 'tech',     Icon: BsCodeSquare,     emoji: '💻', label: 'Tech',     desc: 'Code-Inspired · Dev Teams', tag: 'Dev Roles',       Component: TechResume },
    { key: 'creative', Icon: BsBrush,          emoji: '🎨', label: 'Creative', desc: 'Bold · Freelance · Agency', tag: 'Freelancers',     Component: CreativeResume },
];

const FILE_NAME = (role, tpl) => `Mradul_Sharma_${role}_${tpl}_Resume.pdf`;

/* ── ResumeLivePreview ───────────────────────────── */
const ResumeLivePreview = () => {
    const [variant, setVariant]     = useState('fullstack');
    const [template, setTemplate]   = useState('standard');
    const [isOpening, setIsOpening] = useState(false);
    const [toastMsg, setToastMsg]   = useState('');
    const [toastVisible, setToastVisible] = useState(false);

    // Re-render key forces PDFViewer to remount on change
    const [viewerKey, setViewerKey] = useState(0);

    const activeRole = ROLES.find(r => r.key === variant) || ROLES[0];
    const activeTpl  = TEMPLATES.find(t => t.key === template) || TEMPLATES[0];
    const ResumeComponent = activeTpl.Component;

    const triggerToast = useCallback((msg) => {
        setToastMsg(msg);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2600);
    }, []);

    const handleRoleChange = useCallback((key) => {
        setVariant(key);
        setViewerKey(prev => prev + 1);
    }, []);

    const handleTemplateChange = useCallback((key) => {
        setTemplate(key);
        setViewerKey(prev => prev + 1);
    }, []);

    const handleOpenInTab = async () => {
        try {
            setIsOpening(true);
            const blob = await pdf(<ResumeComponent variant={variant} />).toBlob();
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        } catch (err) {
            console.error('Error opening PDF:', err);
            triggerToast('❌ Failed to open PDF in new tab.');
        } finally {
            setIsOpening(false);
        }
    };

    // Sync URL search params so the link is shareable
    useEffect(() => {
        const url = new URL(window.location.href);
        url.searchParams.set('v', variant);
        url.searchParams.set('style', template);
        window.history.replaceState(null, '', url.toString());
    }, [variant, template]);

    return (
        <>
            <SEO
                title={`Resume Preview Studio — ${activeRole.label} · ${activeTpl.label} — Mradul Sharma`}
                description="Live PDF preview studio. Select role and template to instantly see your ATS-friendly resume."
            />

            <div className="rlp-page">

                {/* ── Navbar ── */}
                <nav className="rlp-navbar" aria-label="Preview studio navigation">
                    {/* Brand */}
                    <Link to="/resume" className="rlp-nav-brand" aria-label="Go back to resume page">
                        <div className="rlp-nav-logo" aria-hidden="true">📄</div>
                        <span className="rlp-nav-title">
                            Resume <span>Preview Studio</span>
                        </span>
                    </Link>

                    {/* Inline dropdowns (compact for nav) */}
                    <div className="rlp-nav-controls">
                        <div className="rlp-select-group">
                            <label className="rlp-select-label" htmlFor="nav-role-select">Role</label>
                            <select
                                id="nav-role-select"
                                className="rlp-select"
                                value={variant}
                                onChange={e => handleRoleChange(e.target.value)}
                                aria-label="Select resume role"
                            >
                                {ROLES.map(r => (
                                    <option key={r.key} value={r.key}>{r.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="rlp-nav-divider" aria-hidden="true" />

                        <div className="rlp-select-group">
                            <label className="rlp-select-label" htmlFor="nav-tpl-select">Template</label>
                            <select
                                id="nav-tpl-select"
                                className="rlp-select"
                                value={template}
                                onChange={e => handleTemplateChange(e.target.value)}
                                aria-label="Select resume template"
                            >
                                {TEMPLATES.map(t => (
                                    <option key={t.key} value={t.key}>{t.emoji} {t.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="rlp-nav-actions">
                        <Link to="/resume" className="rlp-action-btn rlp-btn-back" aria-label="Back to resume page">
                            <BsArrowLeft aria-hidden="true" />
                            <span>Back</span>
                        </Link>

                        <button
                            type="button"
                            className="rlp-action-btn rlp-btn-view"
                            onClick={handleOpenInTab}
                            disabled={isOpening}
                            id="preview-open-tab-btn"
                            aria-label="Open PDF in new tab"
                        >
                            {isOpening
                                ? <><div className="rlp-btn-spinner" aria-hidden="true" /><span>Opening…</span></>
                                : <><BsEye aria-hidden="true" /><span>New Tab</span></>
                            }
                        </button>

                        <PDFDownloadLink
                            document={<ResumeComponent variant={variant} />}
                            fileName={FILE_NAME(variant, template)}
                            className="rlp-action-btn rlp-btn-download"
                            id="preview-download-btn"
                            aria-label={`Download ${activeRole.label} ${activeTpl.label} resume PDF`}
                            onClick={() => triggerToast(`⬇️ Downloading ${activeTpl.label} resume…`)}
                        >
                            {({ loading }) => loading
                                ? <><div className="rlp-btn-spinner" aria-hidden="true" /><span>Generating…</span></>
                                : <><BsDownload aria-hidden="true" /><span>Download</span></>
                            }
                        </PDFDownloadLink>
                    </div>
                </nav>

                {/* ── Body ── */}
                <div className="rlp-body">

                    {/* ── Left Sidebar ── */}
                    <aside className="rlp-sidebar" aria-label="Resume controls">

                        {/* Role Section */}
                        <div>
                            <p className="rlp-section-title">Role Profile</p>
                            <div className="rlp-role-list">
                                {ROLES.map(role => {
                                    const RoleIcon = role.Icon;
                                    const isActive = variant === role.key;
                                    return (
                                        <button
                                            key={role.key}
                                            type="button"
                                            className={`rlp-role-btn${isActive ? ' active' : ''}`}
                                            onClick={() => handleRoleChange(role.key)}
                                            aria-pressed={isActive}
                                            aria-label={`Select ${role.label} role`}
                                            id={`preview-role-${role.key}`}
                                        >
                                            <span
                                                className="rlp-role-dot"
                                                style={{ background: role.color }}
                                                aria-hidden="true"
                                            />
                                            <span className="rlp-role-info">
                                                <span className="rlp-role-name">{role.label}</span>
                                                <span className="rlp-role-desc">{role.desc}</span>
                                            </span>
                                            {isActive && (
                                                <RoleIcon
                                                    aria-hidden="true"
                                                    style={{ color: role.color, fontSize: '0.9rem', flexShrink: 0 }}
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Template Section */}
                        <div>
                            <p className="rlp-section-title">Template Style</p>
                            <div className="rlp-template-list">
                                {TEMPLATES.map(tpl => {
                                    const isActive = template === tpl.key;
                                    return (
                                        <button
                                            key={tpl.key}
                                            type="button"
                                            className={`rlp-template-btn${isActive ? ' active' : ''}`}
                                            onClick={() => handleTemplateChange(tpl.key)}
                                            aria-pressed={isActive}
                                            aria-label={`Select ${tpl.label} template`}
                                            id={`preview-tpl-${tpl.key}`}
                                        >
                                            <span className="rlp-template-emoji" aria-hidden="true">{tpl.emoji}</span>
                                            <span className="rlp-template-info">
                                                <span className="rlp-template-name">{tpl.label}</span>
                                                <span className="rlp-template-sub">{tpl.desc}</span>
                                            </span>
                                            <span className="rlp-template-tag">{tpl.tag}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Current Selection Card */}
                        <div className="rlp-current-info" aria-live="polite">
                            <div className="rlp-current-badge">
                                <span className="rlp-current-dot" aria-hidden="true" />
                                Live Preview
                            </div>
                            <p className="rlp-current-name">{activeRole.label}</p>
                            <p className="rlp-current-style">
                                {activeTpl.emoji} {activeTpl.label} · A4 ATS-Friendly
                            </p>
                        </div>

                    </aside>

                    {/* ── PDF Viewer Area ── */}
                    <main className="rlp-viewer-area" aria-label="PDF preview">

                        {/* Status Bar */}
                        <div className="rlp-statusbar" aria-hidden="true">
                            <div className="rlp-status-left">
                                <span className="rlp-status-indicator" />
                                <span className="rlp-status-text">
                                    Live Preview · {activeRole.label} · {activeTpl.label}
                                </span>
                            </div>
                            <div className="rlp-status-right">
                                <span className="rlp-status-tag">A4</span>
                                <span className="rlp-status-tag">PDF/UA</span>
                                <span className="rlp-status-tag">ATS ✓</span>
                            </div>
                        </div>

                        {/* PDFViewer */}
                        <div className="rlp-pdf-frame">
                            <PDFViewer
                                key={viewerKey}
                                width="100%"
                                height="100%"
                                style={{ border: 'none', flex: 1 }}
                                showToolbar={true}
                            >
                                <ResumeComponent variant={variant} />
                            </PDFViewer>
                        </div>

                    </main>
                </div>
            </div>

            {/* ── Toast ── */}
            <div
                className={`rlp-toast${toastVisible ? ' show' : ''}`}
                role="status"
                aria-live="polite"
                aria-atomic="true"
            >
                <BsCheckCircleFill aria-hidden="true" style={{ color: '#22c55e', fontSize: '1rem' }} />
                {toastMsg}
            </div>
        </>
    );
};

export default ResumeLivePreview;
