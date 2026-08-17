import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Svg, Path } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

// SVGs
const PhoneIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#fff" />
    </Svg>
);

const EmailIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#fff" />
    </Svg>
);

const LinkedInIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#fff" />
    </Svg>
);

const GitHubIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#fff" />
    </Svg>
);

const SkillIcon = () => (
    <Svg viewBox="0 0 24 24" width="7" height="7">
        <Path d="M12 2 L22 12 L12 22 L2 12 Z" fill="#6A0DAD" />
    </Svg>
);

const ArrowIcon = () => (
    <Svg viewBox="0 0 24 24" width="8" height="8">
        <Path d="M8 5v14l11-7z" fill="#6A0DAD" />
    </Svg>
);

const colors = {
    text: '#2c3e50',
    primary: '#6A0DAD', // Purple
    secondary: '#8e44ad',
    light: '#ecf0f1',
    white: '#ffffff'
};

const styles = StyleSheet.create({
    page: { fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.4 },
    header: { backgroundColor: colors.primary, padding: 30, color: colors.white },
    content: { padding: 30 },
    name: { fontSize: 28, fontFamily: 'Helvetica-Bold', marginBottom: 5, color: colors.white },
    jobTitle: { fontSize: 14, color: '#d1c4e9', marginBottom: 15, fontFamily: 'Helvetica-Bold' },
    contactRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    contactText: { fontSize: 10, marginLeft: 6, color: colors.white },
    link: { color: colors.white, textDecoration: 'none' },
    sectionTitle: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: colors.primary, marginTop: 15, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1, borderBottomWidth: 2, borderBottomColor: colors.primary, paddingBottom: 4 },
    boldText: { fontFamily: 'Helvetica-Bold', color: '#000' },
    summaryText: { textAlign: 'justify' },
    expBlock: { marginBottom: 12 },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, color: colors.secondary },
    expSubtitle: { fontFamily: 'Helvetica-Oblique', fontSize: 10, color: '#7f8c8d', marginBottom: 4 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 3 },
    bulletIcon: { width: 12, paddingTop: 3, marginRight: 4, alignItems: 'center' },
    bulletText: { flex: 1 },
    projectItem: { marginBottom: 12 },
    projectTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11, color: colors.text },
    skillRow: { flexDirection: 'row', marginBottom: 4, alignItems: 'flex-start' },
    eduRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    eduDegree: { fontFamily: 'Helvetica-Bold' },
});

const renderBoldText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <Text key={index} style={styles.boldText}>{part.slice(2, -2)}</Text>;
        }
        return part;
    });
};

const CreativeResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.header.name}</Text>
                    <Text style={styles.jobTitle}>{data.header.title}</Text>
                    <View style={styles.contactRow}>
                        <PhoneIcon /><Text style={styles.contactText}>{data.header.phone}</Text>
                        <Text style={{ marginHorizontal: 10 }}>|</Text>
                        <EmailIcon /><Text style={styles.contactText}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                    </View>
                    <View style={styles.contactRow}>
                        <LinkedInIcon /><Text style={styles.contactText}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                        <Text style={{ marginHorizontal: 10 }}>|</Text>
                        <GitHubIcon /><Text style={styles.contactText}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        <Text style={{ marginHorizontal: 10 }}>|</Text>
                        <Text style={styles.contactText}>{data.header.address}</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <View>
                        <Text style={styles.sectionTitle}>Profile</Text>
                        <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.expBlock}>
                                <Text style={styles.expTitle}>{exp.title}</Text>
                                <Text style={styles.expSubtitle}>{exp.company} | {exp.date}</Text>
                                {exp.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <View style={styles.bulletIcon}><ArrowIcon /></View>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Projects</Text>
                        {data.projects.map((proj, index) => (
                            <View key={index} style={styles.projectItem}>
                                <Text style={styles.projectTitle}>{proj.title}</Text>
                                <Text style={{ fontSize: 9, color: '#7f8c8d', marginBottom: 2 }}>Stack: {proj.techStack}</Text>
                                {proj.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <View style={styles.bulletIcon}><ArrowIcon /></View>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        {data.skills.map((skill, index) => (
                            <View key={index} style={styles.skillRow}>
                                <View style={styles.bulletIcon}><SkillIcon /></View>
                                <Text style={styles.bulletText}><Text style={styles.boldText}>{skill.category}:</Text> {skill.details}</Text>
                            </View>
                        ))}
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Education</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={{ marginBottom: 6 }}>
                                <View style={styles.eduRow}>
                                    <Text style={styles.eduDegree}>{edu.degree}</Text>
                                    <Text style={styles.boldText}>{edu.year}</Text>
                                </View>
                                <Text>{edu.school}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default CreativeResume;
