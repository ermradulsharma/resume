import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

const styles = StyleSheet.create({
    page: { padding: 40, fontFamily: 'Helvetica', fontSize: 10, color: '#333', lineHeight: 1.6 },
    header: { marginBottom: 25 },
    name: { fontSize: 26, fontFamily: 'Helvetica', fontWeight: 300, marginBottom: 5, color: '#111' },
    contactRow: { flexDirection: 'row', fontSize: 9, color: '#777', flexWrap: 'wrap' },
    contactItem: { marginRight: 15, marginBottom: 4 },
    link: { color: '#777', textDecoration: 'none' },
    section: { marginBottom: 18 },
    sectionTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#111', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10 },
    boldText: { fontFamily: 'Helvetica-Bold', color: '#111' },
    summaryText: { textAlign: 'left', color: '#555' },
    expBlock: { marginBottom: 15 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11, color: '#333' },
    expDate: { fontSize: 9, color: '#999' },
    expCompany: { fontSize: 10, color: '#555', marginBottom: 4 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 },
    bulletIcon: { marginRight: 8, fontSize: 10, color: '#999' },
    bulletText: { flex: 1, color: '#555' },
    skillRow: { flexDirection: 'row', marginBottom: 4 },
    skillCategory: { width: 120, fontFamily: 'Helvetica-Bold', color: '#333' },
    skillDetails: { flex: 1, color: '#555' }
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

const MinimalistResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.header.name}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{data.header.phone}</Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        <Text style={styles.contactItem}>{data.header.address}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profile</Text>
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
                            <Text style={styles.expCompany}>{proj.techStack}</Text>
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
                        <View key={index} style={{ marginBottom: 6 }}>
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

export default MinimalistResume;
