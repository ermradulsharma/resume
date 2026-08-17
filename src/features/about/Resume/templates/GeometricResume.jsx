import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

const colors = {
    primary: '#4a69bd',
    bg: '#f1f2f6',
    white: '#ffffff',
    text: '#2f3542',
    lightText: '#747d8c',
    border: '#dfe4ea'
};

const styles = StyleSheet.create({
    page: { backgroundColor: colors.bg, fontFamily: 'Helvetica', fontSize: 10, color: colors.text, lineHeight: 1.5 },
    headerBg: { backgroundColor: colors.primary, height: 160, width: '100%', position: 'absolute', top: 0, left: 0 },
    container: { margin: 30, marginTop: 40, backgroundColor: colors.white, borderRadius: 8, padding: 30 },
    
    headerContent: { alignItems: 'center', marginBottom: 25, borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: 20 },
    namePill: { backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginBottom: 10 },
    nameText: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: colors.white, textTransform: 'uppercase', letterSpacing: 2 },
    jobTitle: { fontSize: 14, color: colors.text, fontFamily: 'Helvetica-Bold', letterSpacing: 1, marginBottom: 10 },
    
    contactRow: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' },
    contactPill: { backgroundColor: colors.bg, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, margin: 4, fontSize: 8, color: colors.text },
    link: { color: colors.text, textDecoration: 'none' },

    section: { marginBottom: 20 },
    sectionTitleWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    sectionTitleLine: { flex: 1, height: 1, backgroundColor: colors.border },
    sectionTitleText: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: colors.primary, paddingHorizontal: 15, textTransform: 'uppercase', letterSpacing: 1 },

    boldText: { fontFamily: 'Helvetica-Bold', color: colors.text },
    summaryText: { textAlign: 'justify', color: colors.lightText },

    gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    expBlock: { width: '48%', marginBottom: 15, backgroundColor: colors.bg, padding: 10, borderRadius: 5, borderLeftWidth: 3, borderLeftColor: colors.primary },
    expHeader: { marginBottom: 5 },
    expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 11, color: colors.text },
    expDate: { fontSize: 8, color: colors.primary, fontFamily: 'Helvetica-Bold', marginTop: 2 },
    expCompany: { fontSize: 10, color: colors.lightText },
    bulletText: { fontSize: 9, color: colors.lightText, marginTop: 3 },
    
    skillPillContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
    skillPill: { backgroundColor: colors.primary, color: colors.white, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, fontSize: 8, margin: 3, fontFamily: 'Helvetica-Bold' }
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

const GeometricResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerBg} />
                
                <View style={styles.container}>
                    <View style={styles.headerContent}>
                        <View style={styles.namePill}>
                            <Text style={styles.nameText}>{data.header.name}</Text>
                        </View>
                        <Text style={styles.jobTitle}>{data.header.title}</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactPill}>T: {data.header.phone}</Text>
                            <Text style={styles.contactPill}>E: <Link style={styles.link} src={`mailto:${data.header.email}`}>{data.header.email}</Link></Text>
                            <Text style={styles.contactPill}><Link style={styles.link} src={data.header.linkedin}>LinkedIn</Link></Text>
                            <Text style={styles.contactPill}><Link style={styles.link} src={data.header.github}>GitHub</Link></Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionTitleWrapper}>
                            <View style={styles.sectionTitleLine} />
                            <Text style={styles.sectionTitleText}>Summary</Text>
                            <View style={styles.sectionTitleLine} />
                        </View>
                        <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionTitleWrapper}>
                            <View style={styles.sectionTitleLine} />
                            <Text style={styles.sectionTitleText}>Experience</Text>
                            <View style={styles.sectionTitleLine} />
                        </View>
                        <View style={styles.gridContainer}>
                            {data.experience.map((exp, index) => (
                                <View key={index} style={styles.expBlock}>
                                    <View style={styles.expHeader}>
                                        <Text style={styles.expTitle}>{exp.title}</Text>
                                        <Text style={styles.expCompany}>{exp.company}</Text>
                                        <Text style={styles.expDate}>{exp.date}</Text>
                                    </View>
                                    {exp.points.slice(0, 2).map((point, pIdx) => (
                                        <Text key={pIdx} style={styles.bulletText}>• {renderBoldText(point)}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionTitleWrapper}>
                            <View style={styles.sectionTitleLine} />
                            <Text style={styles.sectionTitleText}>Projects</Text>
                            <View style={styles.sectionTitleLine} />
                        </View>
                        <View style={styles.gridContainer}>
                            {data.projects.map((proj, index) => (
                                <View key={index} style={styles.expBlock}>
                                    <View style={styles.expHeader}>
                                        <Text style={styles.expTitle}>{proj.title}</Text>
                                        <Text style={styles.expCompany}>{proj.techStack}</Text>
                                    </View>
                                    {proj.points.slice(0, 2).map((point, pIdx) => (
                                        <Text key={pIdx} style={styles.bulletText}>• {renderBoldText(point)}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionTitleWrapper}>
                            <View style={styles.sectionTitleLine} />
                            <Text style={styles.sectionTitleText}>Core Skills</Text>
                            <View style={styles.sectionTitleLine} />
                        </View>
                        <View style={styles.skillPillContainer}>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skillPill}>{skill.category}</Text>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
export default GeometricResume;
