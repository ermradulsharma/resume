import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumeDocument from './ResumeDocument';
import { ModernResume, ClassicResume, MinimalistResume, CreativeResume, ProfessionalResume, ElegantResume, TechResume, CompactResume, VibrantResume, AnimatedWebResume, TwoColumnResume, DarkResume, InfographicResume, GeometricResume } from './templates';

const ResumeViewer = () => {
    const [variant, setVariant] = useState('frontend');
    const [templateStyle, setTemplateStyle] = useState('default');

    const getButtonStyle = (isActive) => ({
        padding: '10px',
        margin: '0',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: isActive ? '#1565c0' : '#e0e0e0',
        color: isActive ? '#ffffff' : '#333333',
        transition: 'all 0.3s ease',
        fontSize: '12px',
        fontFamily: "Roboto",
        width: '140px',
        textAlign: 'center'
    });

    const renderTemplate = () => {
        switch (templateStyle) {
            case 'modern': return <ModernResume variant={variant} />;
            case 'classic': return <ClassicResume variant={variant} />;
            case 'minimalist': return <MinimalistResume variant={variant} />;
            case 'creative': return <CreativeResume variant={variant} />;
            case 'professional': return <ProfessionalResume variant={variant} />;
            case 'elegant': return <ElegantResume variant={variant} />;
            case 'tech': return <TechResume variant={variant} />;
            case 'compact': return <CompactResume variant={variant} />;
            case 'vibrant': return <VibrantResume variant={variant} />;
            case 'twocolumn': return <TwoColumnResume variant={variant} />;
            case 'dark': return <DarkResume variant={variant} />;
            case 'infographic': return <InfographicResume variant={variant} />;
            case 'geometric': return <GeometricResume variant={variant} />;
            default: return <ResumeDocument variant={variant} />;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '10px', padding: '10px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'Roboto', fontWeight: 'bold', margin: '10px' }}>Select Resume Profile : </span>
                <button onClick={() => setVariant('frontend')} style={getButtonStyle(variant === 'frontend')}>Frontend Developer</button>
                <button onClick={() => setVariant('backend')} style={getButtonStyle(variant === 'backend')}>Backend Developer</button>
                <button onClick={() => setVariant('laravel')} style={getButtonStyle(variant === 'laravel')}>Laravel Developer</button>
                <button onClick={() => setVariant('mern')} style={getButtonStyle(variant === 'mern')}>MERN Developer</button>
                <button onClick={() => setVariant('fullstack')} style={getButtonStyle(variant === 'fullstack')}>Full Stack Developer</button>
                <button onClick={() => setVariant('techlead')} style={getButtonStyle(variant === 'techlead')}>Technical Lead</button>
                <button onClick={() => setVariant('sde')} style={getButtonStyle(variant === 'sde')}>Senior SDE</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '10px', padding: '10px', borderBottom: '1px solid #ccc' }}>
                <span style={{ fontSize: '10px', fontFamily: 'Roboto', fontWeight: 'bold', margin: '10px' }}>Select Template Style : </span>
                <button onClick={() => setTemplateStyle('default')} style={getButtonStyle(templateStyle === 'default')}>Default</button>
                <button onClick={() => setTemplateStyle('modern')} style={getButtonStyle(templateStyle === 'modern')}>Modern</button>
                <button onClick={() => setTemplateStyle('classic')} style={getButtonStyle(templateStyle === 'classic')}>Classic</button>
                <button onClick={() => setTemplateStyle('minimalist')} style={getButtonStyle(templateStyle === 'minimalist')}>Minimalist</button>
                <button onClick={() => setTemplateStyle('creative')} style={getButtonStyle(templateStyle === 'creative')}>Creative</button>
                <button onClick={() => setTemplateStyle('professional')} style={getButtonStyle(templateStyle === 'professional')}>Professional</button>
                <button onClick={() => setTemplateStyle('elegant')} style={getButtonStyle(templateStyle === 'elegant')}>Elegant</button>
                <button onClick={() => setTemplateStyle('tech')} style={getButtonStyle(templateStyle === 'tech')}>Tech</button>
                <button onClick={() => setTemplateStyle('compact')} style={getButtonStyle(templateStyle === 'compact')}>Compact</button>
                <button onClick={() => setTemplateStyle('vibrant')} style={getButtonStyle(templateStyle === 'vibrant')}>Vibrant</button>
                <button onClick={() => setTemplateStyle('twocolumn')} style={getButtonStyle(templateStyle === 'twocolumn')}>Two Column</button>
                <button onClick={() => setTemplateStyle('dark')} style={getButtonStyle(templateStyle === 'dark')}>Dark Mode</button>
                <button onClick={() => setTemplateStyle('infographic')} style={getButtonStyle(templateStyle === 'infographic')}>Infographic</button>
                <button onClick={() => setTemplateStyle('geometric')} style={getButtonStyle(templateStyle === 'geometric')}>Geometric</button>
                <button onClick={() => setTemplateStyle('animated')} style={getButtonStyle(templateStyle === 'animated')}>Animated (Web)</button>
            </div>
            {templateStyle === 'animated' ? (
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <AnimatedWebResume variant={variant} />
                </div>
            ) : (
                <div style={{ flex: 1 }}>
                    <PDFViewer width="100%" height="100%" style={{ border: 'none' }} showToolbar={false}>
                        {renderTemplate()}
                    </PDFViewer>
                </div>
            )}
        </div>
    );
};

export default ResumeViewer;
