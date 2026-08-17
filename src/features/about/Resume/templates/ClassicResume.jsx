import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

const styles = StyleSheet.create({
    page: { padding: 40, fontFamily: 'Times-Roman', fontSize: 11, color: '#000', lineHeight: 1.4 },
    header: { textAlign: 'center', marginBottom: 20 },
    name: { fontSize: 22, fontFamily: 'Times-Bold', marginBottom: 4, textTransform: 'uppercase' },
    contactRow: { flexDirection: 'row', justifyContent: 'center', fontSize: 10, marginTop: 4 },
    contactItem: { marginHorizontal: 5 },
    link: { color: '#000', textDecoration: 'none' },
    section: { marginBottom: 15 },
    sectionTitle: { fontSize: 13, fontFamily: 'Times-Bold', textTransform: 'uppercase', borderBottomWidth: 1, borderBottomColor: '#000', borderTopWidth: 1, borderTopColor: '#000', paddingVertical: 4, marginBottom: 8, textAlign: 'center' },
    boldText: { fontFamily: 'Times-Bold' },
    summaryText: { textAlign: 'justify' },
    expBlock: { marginBottom: 12 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    expTitle: { fontFamily: 'Times-Bold', fontSize: 11 },
    expCompany: { fontFamily: 'Times-Italic', fontSize: 11 },
    expDate: { fontSize: 10 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 2, paddingLeft: 10 },
    bulletIcon: { marginRight: 5, fontSize: 10 },
    bulletText: { flex: 1 },
    projectItem: { marginBottom: 10 },
    skillRow: { flexDirection: 'row', marginBottom: 2 },
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

const ClassicResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.header.name}</Text>
                    <Text style={{ fontFamily: 'Times-Italic', fontSize: 12 }}>{data.header.title}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{data.header.phone}</Text>
                        <Text>|</Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text>|</Text>
                        <Text style={styles.contactItem}>{data.header.address}</Text>
                    </View>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                        <Text>|</Text>
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
                            <View style={{ marginTop: 4 }}>
                                {exp.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>-</Text>
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
                        <View key={index} style={styles.projectItem}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{proj.title} <Text style={{ fontFamily: 'Times-Roman', fontWeight: 'normal' }}>({proj.role})</Text></Text>
                            </View>
                            <Text style={styles.expCompany}>Tech: {proj.techStack}</Text>
                            <View style={{ marginTop: 4 }}>
                                {proj.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>-</Text>
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
                            <Text style={styles.bulletText}><Text style={styles.boldText}>{skill.category}: </Text>{skill.details}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{edu.school}</Text>
                                <Text style={styles.expDate}>{edu.year}</Text>
                            </View>
                            <Text style={styles.expCompany}>{edu.degree}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default ClassicResume;
