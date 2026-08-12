import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from '../../../database/resumeData.json';

const colors = {
    text: '#333333',
    primary: '#008080', // Teal
    secondary: '#005959',
    lightGray: '#f4f4f4'
};

const styles = StyleSheet.create({
    page: { padding: 40, fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.5 },
    header: { borderLeftWidth: 4, borderLeftColor: colors.primary, paddingLeft: 15, marginBottom: 20 },
    name: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: colors.secondary, textTransform: 'uppercase', letterSpacing: 2 },
    jobTitle: { fontSize: 12, color: colors.primary, marginTop: 4, letterSpacing: 1 },
    contactRow: { flexDirection: 'row', marginTop: 8, fontSize: 9, color: '#555' },
    contactItem: { marginRight: 15 },
    link: { color: colors.primary, textDecoration: 'none' },
    section: { marginBottom: 15 },
    sectionTitleContainer: { backgroundColor: colors.lightGray, padding: 5, paddingLeft: 10, borderLeftWidth: 3, borderLeftColor: colors.primary, marginBottom: 10 },
    sectionTitle: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: colors.secondary, textTransform: 'uppercase', letterSpacing: 1 },
    boldText: { fontFamily: 'Helvetica-Bold', color: '#000' },
    summaryText: { textAlign: 'justify' },
    expBlock: { marginBottom: 12 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 2 },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11, color: '#000' },
    expCompany: { fontFamily: 'Helvetica-Oblique', fontSize: 10, color: colors.primary },
    expDate: { fontSize: 9, color: '#777' },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 3, paddingLeft: 10 },
    bulletIcon: { marginRight: 6, fontSize: 12, color: colors.primary },
    bulletText: { flex: 1 },
    projectItem: { marginBottom: 12 },
    projectTitleRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    skillRow: { flexDirection: 'row', marginBottom: 3 },
    skillCategory: { width: 100, fontFamily: 'Helvetica-Bold', color: colors.secondary },
    skillDetails: { flex: 1 }
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

const ModernResume = ({ variant = 'fullstack' }) => {
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
                    </View>
                    <Text style={{ fontSize: 9, color: '#555', marginTop: 4 }}>{data.header.address}</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Summary</Text></View>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Experience</Text></View>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{exp.title}</Text>
                                <Text style={styles.expDate}>{exp.date}</Text>
                            </View>
                            <Text style={styles.expCompany}>{exp.company}</Text>
                            <View style={{ marginTop: 4 }}>
                                {exp.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>•</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Projects</Text></View>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.projectItem}>
                            <View style={styles.projectTitleRow}>
                                <Text style={styles.expTitle}>{proj.title}</Text>
                                <Text style={styles.expDate}>{proj.role}</Text>
                            </View>
                            <Text style={{ fontSize: 9, color: '#777', marginBottom: 4 }}>Tech: {proj.techStack}</Text>
                            {proj.points.map((point, ptIndex) => (
                                <View key={ptIndex} style={styles.bulletPoint}>
                                    <Text style={styles.bulletIcon}>•</Text>
                                    <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Skills</Text></View>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillRow}>
                            <Text style={styles.skillCategory}>{skill.category}</Text>
                            <Text style={styles.skillDetails}>{skill.details}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitleContainer}><Text style={styles.sectionTitle}>Education</Text></View>
                    {data.education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: 5 }}>
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

export default ModernResume;
