import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from '../../../database/resumeData.json';

const colors = {
    primary: '#2C3E50', // Navy Blue
    secondary: '#34495E',
    text: '#333333',
    light: '#7F8C8D',
    border: '#BDC3C7'
};

const styles = StyleSheet.create({
    page: { padding: 35, fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.5 },
    header: { flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: colors.primary, paddingBottom: 15, marginBottom: 15 },
    headerLeft: { flex: 1 },
    headerRight: { width: 180, textAlign: 'right', fontSize: 9, color: colors.light, justifyContent: 'flex-end' },
    name: { fontSize: 28, fontFamily: 'Helvetica-Bold', color: colors.primary, marginBottom: 4 },
    jobTitle: { fontSize: 14, color: colors.secondary },
    link: { color: colors.light, textDecoration: 'none' },
    sectionTitle: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: colors.primary, marginTop: 10, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
    boldText: { fontFamily: 'Helvetica-Bold', color: colors.secondary },
    summaryText: { textAlign: 'justify' },
    expBlock: { marginBottom: 10 },
    expHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 2 },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11, color: colors.primary },
    expDate: { fontSize: 9, color: colors.light, fontFamily: 'Helvetica-Oblique' },
    expCompany: { fontSize: 10, color: colors.secondary, marginBottom: 4, fontFamily: 'Helvetica-Bold' },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 3, paddingLeft: 8 },
    bulletIcon: { marginRight: 6, fontSize: 10, color: colors.primary },
    bulletText: { flex: 1 },
    skillRow: { flexDirection: 'row', marginBottom: 4 },
    skillCategory: { width: 130, fontFamily: 'Helvetica-Bold', color: colors.primary },
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

const ProfessionalResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.name}>{data.header.name}</Text>
                        <Text style={styles.jobTitle}>{data.header.title}</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Text>{data.header.phone}</Text>
                        <Text><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link> | <Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        <Text>{data.header.address}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeaderRow}>
                                <Text style={styles.expTitle}>{exp.title}</Text>
                                <Text style={styles.expDate}>{exp.date}</Text>
                            </View>
                            <Text style={styles.expCompany}>{exp.company}</Text>
                            <View>
                                {exp.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>▪</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Projects</Text>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeaderRow}>
                                <Text style={styles.expTitle}>{proj.title}</Text>
                                <Text style={styles.expDate}>{proj.role}</Text>
                            </View>
                            <Text style={{ fontSize: 9, color: colors.light, marginBottom: 4 }}>Tech Stack: {proj.techStack}</Text>
                            <View>
                                {proj.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>▪</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillRow}>
                            <Text style={styles.skillCategory}>{skill.category}</Text>
                            <Text style={styles.skillDetails}>{skill.details}</Text>
                        </View>
                    ))}
                </View>

                <View>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: 6 }}>
                            <View style={styles.expHeaderRow}>
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

export default ProfessionalResume;
