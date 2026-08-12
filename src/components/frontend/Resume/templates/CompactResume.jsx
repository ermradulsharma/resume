import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from '../../../database/resumeData.json';

const colors = {
    primary: '#27AE60', // Dark Green
    text: '#222222',
    light: '#555555'
};

const styles = StyleSheet.create({
    page: { padding: 25, fontFamily: 'Helvetica', fontSize: 9, color: colors.text, lineHeight: 1.3 },
    header: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.primary, paddingBottom: 5, marginBottom: 10 },
    name: { fontSize: 22, fontFamily: 'Helvetica-Bold', color: colors.primary },
    jobTitle: { fontSize: 12, color: colors.light, marginTop: 2 },
    contactRow: { textAlign: 'right', fontSize: 8, color: colors.light, marginTop: 2 },
    link: { color: colors.light, textDecoration: 'none' },
    section: { marginBottom: 10 },
    sectionTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: colors.primary, marginBottom: 4, textTransform: 'uppercase' },
    boldText: { fontFamily: 'Helvetica-Bold' },
    summaryText: { textAlign: 'justify', fontSize: 8.5 },
    expBlock: { marginBottom: 8 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 9.5 },
    expDate: { fontSize: 8, color: colors.light },
    expCompany: { fontSize: 9, color: colors.light, marginBottom: 2 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 2, paddingLeft: 5 },
    bulletIcon: { marginRight: 4, fontSize: 8, color: colors.primary },
    bulletText: { flex: 1, fontSize: 8.5 },
    skillRow: { flexDirection: 'row', marginBottom: 2 },
    skillCategory: { width: 100, fontFamily: 'Helvetica-Bold', fontSize: 8.5 },
    skillDetails: { flex: 1, fontSize: 8.5 }
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

const CompactResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.name}>{data.header.name}</Text>
                        <Text style={styles.jobTitle}>{data.header.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.contactRow}>{data.header.phone} | <Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text style={styles.contactRow}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link> | <Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        <Text style={styles.contactRow}>{data.header.address}</Text>
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
                                        <Text style={styles.bulletIcon}>•</Text>
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
                            <Text style={styles.expCompany}>Tech: {proj.techStack}</Text>
                            <View>
                                {proj.points.map((point, ptIndex) => (
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
                        <View key={index} style={{ marginBottom: 4 }}>
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

export default CompactResume;
