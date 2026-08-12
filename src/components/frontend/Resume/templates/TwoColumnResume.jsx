import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from '../../../database/resumeData.json';

const colors = {
    primary: '#2980b9',
    bgLeft: '#ecf0f1',
    text: '#2c3e50',
    light: '#7f8c8d',
    white: '#ffffff'
};

const styles = StyleSheet.create({
    page: { flexDirection: 'row', fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.4 },
    leftCol: { width: '35%', backgroundColor: colors.bgLeft, padding: 25 },
    rightCol: { width: '65%', padding: 30 },
    name: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: colors.primary, marginBottom: 5 },
    jobTitle: { fontSize: 13, color: colors.light, marginBottom: 20 },
    sectionTitleLeft: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: colors.primary, marginBottom: 8, marginTop: 15, borderBottomWidth: 1, borderBottomColor: colors.primary, paddingBottom: 2, textTransform: 'uppercase' },
    sectionTitleRight: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: colors.primary, marginBottom: 10, borderBottomWidth: 2, borderBottomColor: colors.primary, paddingBottom: 4, textTransform: 'uppercase' },
    contactItem: { marginBottom: 6, fontSize: 9 },
    link: { color: colors.text, textDecoration: 'none' },
    boldText: { fontFamily: 'Helvetica-Bold' },
    summaryText: { textAlign: 'justify', marginBottom: 15 },
    expBlock: { marginBottom: 12 },
    expHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11 },
    expDate: { fontSize: 9, color: colors.light },
    expCompany: { fontSize: 10, color: colors.primary, marginBottom: 4 },
    bulletPoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 3 },
    bulletIcon: { marginRight: 6, fontSize: 10, color: colors.primary },
    bulletText: { flex: 1 },
    skillItem: { marginBottom: 6 },
    skillCat: { fontFamily: 'Helvetica-Bold', fontSize: 9 },
    skillDet: { fontSize: 9, color: colors.light },
    eduBlock: { marginBottom: 10 },
    eduDeg: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    eduSch: { fontSize: 9, marginTop: 2 },
    eduYr: { fontSize: 8, color: colors.light, marginTop: 2 }
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

const TwoColumnResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.leftCol}>
                    <Text style={styles.name}>{data.header.name.split(' ')[0]}</Text>
                    <Text style={styles.name}>{data.header.name.split(' ').slice(1).join(' ')}</Text>
                    <Text style={styles.jobTitle}>{data.header.title}</Text>

                    <Text style={styles.sectionTitleLeft}>Contact</Text>
                    <Text style={styles.contactItem}>{data.header.phone}</Text>
                    <Text style={styles.contactItem}><Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                    <Text style={styles.contactItem}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                    <Text style={styles.contactItem}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                    <Text style={styles.contactItem}>{data.header.address}</Text>

                    <Text style={styles.sectionTitleLeft}>Skills</Text>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillItem}>
                            <Text style={styles.skillCat}>{skill.category}</Text>
                            <Text style={styles.skillDet}>{skill.details}</Text>
                        </View>
                    ))}

                    <Text style={styles.sectionTitleLeft}>Education</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={styles.eduBlock}>
                            <Text style={styles.eduDeg}>{edu.degree}</Text>
                            <Text style={styles.eduSch}>{edu.school}</Text>
                            <Text style={styles.eduYr}>{edu.year}</Text>
                        </View>
                    ))}
                </View>
                
                <View style={styles.rightCol}>
                    <Text style={styles.sectionTitleRight}>Profile</Text>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>

                    <Text style={styles.sectionTitleRight}>Experience</Text>
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

                    <Text style={styles.sectionTitleRight}>Projects</Text>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.expBlock}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>{proj.title}</Text>
                                <Text style={styles.expDate}>{proj.role}</Text>
                            </View>
                            <Text style={{ fontSize: 9, color: colors.light, marginBottom: 4 }}>Tech Stack: {proj.techStack}</Text>
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
            </Page>
        </Document>
    );
};

export default TwoColumnResume;
