import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

const colors = {
    bg: '#1a1a2e',
    primary: '#e94560', // Neon pinkish red
    secondary: '#0f3460', // Dark blue
    text: '#e0e0e0',
    light: '#a0a0a0'
};

const styles = StyleSheet.create({
    page: { padding: 40, backgroundColor: colors.bg, fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.5 },
    header: { textAlign: 'center', marginBottom: 25 },
    name: { fontSize: 28, fontFamily: 'Helvetica-Bold', color: colors.text, letterSpacing: 2 },
    jobTitle: { fontSize: 14, color: colors.primary, marginTop: 5 },
    contactRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 10, fontSize: 9, color: colors.light },
    contactItem: { marginHorizontal: 10 },
    link: { color: colors.primary, textDecoration: 'none' },
    section: { marginBottom: 15 },
    sectionTitle: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: colors.bg, backgroundColor: colors.primary, padding: 5, paddingLeft: 10, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 },
    boldText: { fontFamily: 'Helvetica-Bold', color: '#ffffff' },
    summaryText: { textAlign: 'justify' },
    expBlock: { marginBottom: 12 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11, color: '#ffffff' },
    expDate: { fontSize: 9, color: colors.primary },
    expCompany: { fontSize: 10, color: colors.light, marginBottom: 4 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 3 },
    bulletIcon: { marginRight: 8, fontSize: 10, color: colors.primary },
    bulletText: { flex: 1 },
    skillRow: { flexDirection: 'row', marginBottom: 4 },
    skillCategory: { width: 130, fontFamily: 'Helvetica-Bold', color: colors.primary },
    skillDetails: { flex: 1, color: colors.light }
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

const DarkResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.header.name}</Text>
                    <Text style={styles.jobTitle}>{data.header.title}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{data.header.phone}</Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        <Text style={styles.contactItem}>{data.header.address}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{exp.title}</Text>
                                <Text style={styles.expDate}>{exp.date}</Text>
                            </View>
                            <Text style={styles.expCompany}>{exp.company}</Text>
                            <View>
                                {exp.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>»</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Projects</Text>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{proj.title}</Text>
                                <Text style={styles.expDate}>{proj.role}</Text>
                            </View>
                            <Text style={styles.expCompany}>Tech Stack: {proj.techStack}</Text>
                            <View>
                                {proj.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>»</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillRow}>
                            <Text style={styles.skillCategory}>{skill.category}</Text>
                            <Text style={styles.skillDetails}>{skill.details}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: 8 }}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{edu.degree}</Text>
                                <Text style={styles.expDate}>{edu.year}</Text>
                            </View>
                            <Text style={styles.expCompany}>{edu.school}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default DarkResume;
