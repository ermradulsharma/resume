import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

const colors = {
    primary: '#8B7355', // Bronze/Gold
    text: '#222222',
    light: '#666666'
};

const styles = StyleSheet.create({
    page: { padding: 45, fontFamily: 'Times-Roman', fontSize: 11, color: colors.text, lineHeight: 1.6 },
    header: { alignItems: 'center', marginBottom: 25 },
    name: { fontSize: 26, fontFamily: 'Times-Bold', color: colors.primary, textTransform: 'uppercase', letterSpacing: 2 },
    jobTitle: { fontSize: 12, marginTop: 5, letterSpacing: 1, fontFamily: 'Times-Italic', color: colors.light },
    contactRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 8, fontSize: 9, color: colors.light },
    contactItem: { marginHorizontal: 8 },
    link: { color: colors.light, textDecoration: 'none' },
    section: { marginBottom: 20 },
    sectionTitle: { fontSize: 14, fontFamily: 'Times-Bold', color: colors.primary, borderBottomWidth: 1, borderBottomColor: colors.primary, paddingBottom: 4, marginBottom: 12, textAlign: 'center', textTransform: 'uppercase', letterSpacing: 1 },
    boldText: { fontFamily: 'Times-Bold', color: colors.text },
    summaryText: { textAlign: 'justify' },
    expBlock: { marginBottom: 15 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 },
    expTitle: { fontFamily: 'Times-Bold', fontSize: 12 },
    expDate: { fontSize: 10, color: colors.light },
    expCompany: { fontSize: 11, fontFamily: 'Times-Italic', color: colors.primary, marginBottom: 5 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 },
    bulletIcon: { marginRight: 8, fontSize: 12, color: colors.primary },
    bulletText: { flex: 1 },
    skillRow: { flexDirection: 'row', marginBottom: 4 },
    skillCategory: { width: 120, fontFamily: 'Times-Bold' },
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

const ElegantResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.header.name}</Text>
                    <Text style={styles.jobTitle}>{data.header.title}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{data.header.phone}</Text>
                        <Text>•</Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text>•</Text>
                        <Text style={styles.contactItem}>{data.header.address}</Text>
                    </View>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                        <Text>•</Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
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
                                        <Text style={styles.bulletIcon}>❖</Text>
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
                                        <Text style={styles.bulletIcon}>❖</Text>
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

export default ElegantResume;
