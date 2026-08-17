import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Svg, Path } from '@react-pdf/renderer';
import resumeData from "../../../data/resumeData.json";

// SVGs
const PhoneIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#000" />
    </Svg>
);

const EmailIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#000" />
    </Svg>
);

const LinkedInIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#000" />
    </Svg>
);

const GitHubIcon = () => (
    <Svg viewBox="0 0 24 24" width="12" height="12">
        <Path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#000" />
    </Svg>
);

const SkillIcon = () => (
    <Svg viewBox="0 0 24 24" width="7" height="7">
        <Path d="M12 2 L22 12 L12 22 L2 12 Z" fill="#000" />
    </Svg>
);

const ArrowIcon = () => (
    <Svg viewBox="0 0 24 24" width="8" height="8">
        <Path d="M8 5v14l11-7z" fill="#000" />
    </Svg>
);

const PinIcon = () => (
    <Svg viewBox="0 0 24 24" width="9" height="9">
        <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000" />
    </Svg>
);

const CalendarIcon = () => (
    <Svg viewBox="0 0 24 24" width="9" height="9">
        <Path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" fill="#000" />
    </Svg>
);

const colors = {
    text: '#000000',
    blue: '#1565c0',
    lightText: '#333333',
};

const styles = StyleSheet.create({
    page: { padding: 35, fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.3, },
    // --- Section Wrappers ---
    personalDetails: { marginBottom: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 4 },
    professionalSummary: { marginBottom: 1 },
    professionalExperience: { marginBottom: 1 },
    projectPortfolio: { marginBottom: 1 },
    technicalSkills: { marginBottom: 1 },
    educationDetails: {},
    // --- Header ---
    name: { fontSize: 24, fontFamily: 'Helvetica-Bold', marginBottom: 10 },
    jobTitle: { fontSize: 12, color: colors.blue },
    address: { fontSize: 10 },
    contactRow: { flexDirection: 'row', alignItems: 'center' },
    contactText: { fontSize: 10, marginLeft: 4, marginRight: 4, },
    link: { color: colors.blue, textDecoration: 'underline', },
    contactLink: { color: colors.text, textDecoration: 'none' },
    // --- Section Headers ---
    sectionTitleContainer: { marginTop: 6, marginBottom: 6, borderBottom: `1.5 solid ${colors.blue}` },
    flexRow: { flexDirection: 'row', alignItems: 'center', },
    flexBetween: { flexDirection: 'row', justifyContent: 'space-between', },
    flexStart: { flexDirection: 'row', alignItems: 'flex-start', },
    sectionTitle: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: colors.blue, marginBottom: 3 },
    // --- Common ---
    boldText: { fontFamily: 'Helvetica-Bold' },
    // --- Summary ---
    summaryText: { textAlign: 'justify', lineHeight: 0.9 },
    // --- Experience ---
    expBlock: { marginBottom: 10, },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, marginBottom: 4 },
    expSubtitleRow: { display: 'flex', flexDirection: 'row', alignItems: 'center', fontFamily: 'Helvetica-Oblique', fontSize: 10, color: colors.blue, marginBottom: 4 },
    expIconWrapper: { marginRight: 4, },
    bulletPoint: { flexDirection: 'row', paddingLeft: 15, alignItems: 'flex-start', },
    expBulletIcon: { width: 12, paddingTop: 3, alignItems: 'center' },
    bulletText: { flex: 1, },
    // --- Projects ---
    projectItem: { marginBottom: 12, },
    projectTitleRow: { flexDirection: 'row', marginBottom: 3, },
    projectTitle: { fontFamily: 'Helvetica-Bold' },
    projectDetailRow: { marginLeft: 20, flexDirection: 'row', marginBottom: 2, },
    projectBulletRow: { marginLeft: 30, flexDirection: 'row', marginBottom: 2, alignItems: 'flex-start', },
    projectBullet: { width: 14, paddingTop: 3, alignItems: 'center', },
    // --- Skills ---
    skillRow: { flexDirection: 'row', marginBottom: 4, alignItems: 'flex-start', },
    skillBullet: { width: 14, paddingTop: 3, alignItems: 'center', },
    skillContent: { flex: 1, },
    // --- Education ---
    eduRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2, },
    eduDegree: { fontFamily: 'Helvetica-Bold', },
    eduYear: { fontFamily: 'Helvetica-Bold', },
    eduSchool: { marginLeft: 15, marginBottom: 4, }
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

const ResumeDocument = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* --- HEADER --- */}
                <View style={styles.personalDetails}>
                    <View><Text style={styles.name}>{data.header.name}</Text></View>
                    <View><Text style={styles.jobTitle}>{data.header.title}</Text></View>
                    <View><Text style={styles.address}>{data.header.address}</Text></View>
                    <View style={styles.contactRow}>
                        <View style={{ marginRight: 2 }}><PhoneIcon /></View>
                        <Text style={styles.contactText}><Link style={styles.contactLink} src={`tel:${data.header.phone}`}>{data.header.phone}</Link></Text>
                        <Text style={{ marginHorizontal: 4 }}>|</Text>
                        <View style={{ marginRight: 2 }}><EmailIcon /></View>
                        <Text style={styles.contactText}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                    </View>
                    <View style={styles.contactRow}>
                        <View style={{ marginRight: 2 }}><LinkedInIcon /></View>
                        <Text style={styles.contactText}><Link style={styles.link} src={data.header.linkedin}>LinkedIn Profile</Link></Text>
                        <Text style={{ marginLeft: 12, marginRight: 4 }}>|</Text>
                        <View style={{ marginRight: 2 }}><GitHubIcon /></View>
                        <Text style={styles.contactText}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                    </View>
                </View>

                {/* --- PROFESSIONAL SUMMARY --- */}
                <View style={styles.professionalSummary}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Professional Summary</Text></View>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                </View>

                {/* --- PROFESSIONAL EXPERIENCE --- */}
                <View style={styles.professionalExperience}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Professional Experience</Text></View>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={styles.expBlock}>
                            <Text style={styles.expTitle}>{exp.title}</Text>
                            <View style={styles.expSubtitleRow}>
                                <View style={styles.expIconWrapper}><PinIcon /></View>
                                <Text>{exp.company} | </Text>
                                <View style={styles.expIconWrapper}><CalendarIcon /></View>
                                <Text>{exp.date}</Text>
                            </View>
                            {exp.points.map((point, ptIndex) => (
                                <View key={ptIndex} style={styles.bulletPoint}>
                                    <View style={styles.expBulletIcon}><ArrowIcon /></View>
                                    <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                {/* --- PROJECT PORTFOLIO --- */}
                <View style={styles.projectPortfolio}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Project Portfolio</Text></View>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.projectItem}>
                            <View style={styles.projectTitleRow}>
                                <Text>{index + 1}. <Text style={styles.projectTitle}>{proj.title}</Text></Text>
                            </View>
                            <View style={styles.projectDetailRow}><Text><Text style={styles.boldText}>Tech Stack: </Text>{proj.techStack}</Text></View>
                            <View style={styles.projectDetailRow}><Text><Text style={styles.boldText}>Role: </Text>{proj.role}</Text></View>
                            <View style={styles.projectDetailRow}><Text><Text style={styles.boldText}>Team Size: </Text>{proj.teamSize}</Text></View>
                            {proj.points.map((point, ptIndex) => (
                                <View key={ptIndex} style={styles.projectBulletRow}>
                                    <View style={styles.projectBullet}><ArrowIcon /></View>
                                    <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                {/* --- TECHNICAL SKILLS --- */}
                <View style={styles.technicalSkills}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Technical Skills</Text></View>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillRow}>
                            <View style={styles.skillBullet}><SkillIcon /></View>
                            <Text style={styles.skillContent}><Text style={styles.boldText}>{skill.category}:</Text> {skill.details}</Text>
                        </View>
                    ))}
                </View>

                {/* --- EDUCATION DETAILS --- */}
                <View style={styles.educationDetails}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Education Details</Text></View>
                    {data.education.map((edu, index) => (
                        <React.Fragment key={index}>
                            <View style={styles.eduRow}>
                                <Text style={styles.eduDegree}>{edu.degree}</Text>
                                <Text style={styles.eduYear}>{edu.year}</Text>
                            </View>
                            <Text style={styles.eduSchool}>{edu.school}</Text>
                        </React.Fragment>
                    ))}
                </View>

            </Page>
        </Document>
    );
};

export default ResumeDocument;
