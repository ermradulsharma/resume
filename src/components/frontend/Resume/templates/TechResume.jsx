import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from '../../../database/resumeData.json';

const colors = {
    primary: '#0984E3', // Tech Blue
    text: '#2D3436',
    comment: '#636E72',
    bgLight: '#F5F6FA'
};

const styles = StyleSheet.create({
    page: { padding: 40, fontFamily: 'Courier', fontSize: 10, color: colors.text, lineHeight: 1.4 },
    header: { marginBottom: 25, backgroundColor: colors.bgLight, padding: 15, borderLeftWidth: 3, borderLeftColor: colors.primary },
    name: { fontSize: 24, fontFamily: 'Courier-Bold', color: colors.primary },
    jobTitle: { fontSize: 12, marginTop: 4, color: colors.comment },
    contactRow: { flexDirection: 'row', marginTop: 10, fontSize: 9, flexWrap: 'wrap' },
    contactItem: { marginRight: 15, marginBottom: 3 },
    link: { color: colors.primary, textDecoration: 'none' },
    section: { marginBottom: 18 },
    sectionTitle: { fontSize: 14, fontFamily: 'Courier-Bold', color: colors.primary, marginBottom: 8 },
    boldText: { fontFamily: 'Courier-Bold' },
    summaryText: { textAlign: 'left' },
    expBlock: { marginBottom: 15 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    expTitle: { fontFamily: 'Courier-Bold', fontSize: 11 },
    expDate: { fontSize: 9, color: colors.comment },
    expCompany: { fontSize: 10, marginBottom: 4 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 3 },
    bulletIcon: { marginRight: 8, fontSize: 10, color: colors.primary },
    bulletText: { flex: 1 },
    skillRow: { flexDirection: 'row', marginBottom: 2 },
    skillCategory: { width: 140, fontFamily: 'Courier-Bold' },
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

const TechResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{`> ${data.header.name}`}</Text>
                    <Text style={styles.jobTitle}>{`// ${data.header.title}`}</Text>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactItem}>{data.header.phone}</Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                        <Text style={styles.contactItem}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        <Text style={styles.contactItem}>{data.header.address}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{`[Profile]`}</Text>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{`[Experience]`}</Text>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{exp.title}</Text>
                                <Text style={styles.expDate}>{exp.date}</Text>
                            </View>
                            <Text style={styles.expCompany}>{`@ ${exp.company}`}</Text>
                            <View>
                                {exp.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>{`>`}</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{`[Projects]`}</Text>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{proj.title}</Text>
                                <Text style={styles.expDate}>{proj.role}</Text>
                            </View>
                            <Text style={{ fontSize: 9, color: colors.comment, marginBottom: 4 }}>{`stack: [${proj.techStack}]`}</Text>
                            <View>
                                {proj.points.map((point, ptIndex) => (
                                    <View key={ptIndex} style={styles.bulletPoint}>
                                        <Text style={styles.bulletIcon}>{`>`}</Text>
                                        <Text style={styles.bulletText}>{renderBoldText(point)}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{`[Skills]`}</Text>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillRow}>
                            <Text style={styles.skillCategory}>{skill.category}</Text>
                            <Text style={styles.skillDetails}>{skill.details}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{`[Education]`}</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: 6 }}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{edu.degree}</Text>
                                <Text style={styles.expDate}>{edu.year}</Text>
                            </View>
                            <Text style={styles.expCompany}>{`@ ${edu.school}`}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default TechResume;
