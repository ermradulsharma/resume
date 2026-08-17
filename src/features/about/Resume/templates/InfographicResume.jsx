import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from "../../../../data/resumeData.json";

const colors = {
    darkBg: '#2c3e50',
    accent: '#1abc9c',
    lightText: '#ecf0f1',
    white: '#ffffff',
    darkText: '#333333',
    greyText: '#7f8c8d',
    line: '#bdc3c7'
};

const styles = StyleSheet.create({
    page: { flexDirection: 'row', fontFamily: 'Helvetica', fontSize: 10 },
    leftCol: { width: '35%', backgroundColor: colors.darkBg, color: colors.lightText, padding: 25 },
    rightCol: { width: '65%', backgroundColor: colors.white, padding: 30, paddingLeft: 20 },
    
    // Left Column
    nameBox: { marginBottom: 30 },
    firstName: { fontSize: 26, fontFamily: 'Helvetica-Bold', color: colors.white, textTransform: 'uppercase', letterSpacing: 2 },
    lastName: { fontSize: 26, fontFamily: 'Helvetica-Bold', color: colors.accent, textTransform: 'uppercase', letterSpacing: 2 },
    jobTitle: { fontSize: 12, color: colors.lightText, marginTop: 5, letterSpacing: 1, borderBottomWidth: 1, borderBottomColor: colors.accent, paddingBottom: 10 },
    
    sectionTitleLeft: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: colors.accent, marginTop: 25, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 },
    contactItem: { marginBottom: 8, fontSize: 9, flexDirection: 'row', alignItems: 'center' },
    linkLeft: { color: colors.lightText, textDecoration: 'none' },
    
    skillBox: { marginBottom: 10 },
    skillName: { fontSize: 9, marginBottom: 3 },
    skillBarBg: { width: '100%', height: 4, backgroundColor: '#34495e', borderRadius: 2 },
    skillBarFill: { height: '100%', backgroundColor: colors.accent, borderRadius: 2 },
    
    // Right Column
    sectionTitleRight: { fontSize: 16, fontFamily: 'Helvetica-Bold', color: colors.darkBg, marginBottom: 15, textTransform: 'uppercase', borderBottomWidth: 2, borderBottomColor: colors.darkBg, paddingBottom: 5 },
    summaryText: { fontSize: 10, color: colors.greyText, lineHeight: 1.5, marginBottom: 20, textAlign: 'justify' },
    
    // Timeline
    timelineItem: { flexDirection: 'row', marginBottom: 15 },
    timelineLeft: { width: '25%', paddingRight: 10, alignItems: 'flex-end' },
    timelineDate: { fontSize: 9, color: colors.accent, fontFamily: 'Helvetica-Bold' },
    timelineDivider: { width: 2, backgroundColor: colors.line, position: 'relative', marginHorizontal: 10 },
    timelineDot: { position: 'absolute', top: 2, left: -4, width: 10, height: 10, borderRadius: 5, backgroundColor: colors.accent, borderWidth: 2, borderColor: colors.white },
    timelineRight: { width: '75%', paddingBottom: 15 },
    timelineTitle: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: colors.darkBg },
    timelineSubtitle: { fontSize: 10, color: colors.greyText, marginBottom: 5, fontStyle: 'italic' },
    timelineBullet: { fontSize: 9, color: colors.greyText, marginBottom: 3, lineHeight: 1.4 },
    
    boldText: { fontFamily: 'Helvetica-Bold', color: colors.darkBg }
});

const getSkillLevel = (index) => {
    // Generate pseudo-random skill level based on index (between 60% and 100%)
    const levels = ['90%', '85%', '75%', '95%', '80%', '70%', '85%', '90%'];
    return levels[index % levels.length];
};

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

const InfographicResume = ({ variant = 'fullstack' }) => {
    const data = resumeData[variant] || resumeData['fullstack'];
    const nameParts = data.header.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Column */}
                <View style={styles.leftCol}>
                    <View style={styles.nameBox}>
                        <Text style={styles.firstName}>{firstName}</Text>
                        <Text style={styles.lastName}>{lastName}</Text>
                        <Text style={styles.jobTitle}>{data.header.title}</Text>
                    </View>

                    <Text style={styles.sectionTitleLeft}>Contact</Text>
                    <View style={styles.contactItem}><Text>T: {data.header.phone}</Text></View>
                    <View style={styles.contactItem}><Text>E: </Text><Link style={styles.linkLeft} src={`mailto:${data.header.email}`}>{data.header.email}</Link></View>
                    <View style={styles.contactItem}><Text>In: </Text><Link style={styles.linkLeft} src={data.header.linkedin}>LinkedIn Profile</Link></View>
                    <View style={styles.contactItem}><Text>Gh: </Text><Link style={styles.linkLeft} src={data.header.github}>GitHub Profile</Link></View>
                    <View style={styles.contactItem}><Text>A: {data.header.address}</Text></View>

                    <Text style={styles.sectionTitleLeft}>Skills Proficiency</Text>
                    {data.skills.map((skill, index) => (
                        <View key={index} style={styles.skillBox}>
                            <Text style={styles.skillName}>{skill.category}</Text>
                            <View style={styles.skillBarBg}>
                                <View style={[styles.skillBarFill, { width: getSkillLevel(index) }]} />
                            </View>
                            <Text style={{ fontSize: 7, color: colors.lightText, marginTop: 2, opacity: 0.8 }}>{skill.details}</Text>
                        </View>
                    ))}

                    <Text style={styles.sectionTitleLeft}>Education</Text>
                    {data.education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 10, fontFamily: 'Helvetica-Bold', color: colors.white }}>{edu.degree}</Text>
                            <Text style={{ fontSize: 9, color: colors.accent, marginTop: 2 }}>{edu.year}</Text>
                            <Text style={{ fontSize: 8, color: colors.lightText, marginTop: 2 }}>{edu.school}</Text>
                        </View>
                    ))}
                </View>

                {/* Right Column */}
                <View style={styles.rightCol}>
                    <Text style={styles.sectionTitleRight}>Profile</Text>
                    <Text style={styles.summaryText}>{renderBoldText(data.summary)}</Text>

                    <Text style={styles.sectionTitleRight}>Experience</Text>
                    {data.experience.map((exp, index) => (
                        <View key={index} style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <Text style={styles.timelineDate}>{exp.date}</Text>
                            </View>
                            <View style={styles.timelineDivider}>
                                <View style={styles.timelineDot} />
                            </View>
                            <View style={styles.timelineRight}>
                                <Text style={styles.timelineTitle}>{exp.title}</Text>
                                <Text style={styles.timelineSubtitle}>{exp.company}</Text>
                                {exp.points.map((point, pIdx) => (
                                    <Text key={pIdx} style={styles.timelineBullet}>• {renderBoldText(point)}</Text>
                                ))}
                            </View>
                        </View>
                    ))}

                    <Text style={styles.sectionTitleRight}>Key Projects</Text>
                    {data.projects.map((proj, index) => (
                        <View key={index} style={styles.timelineItem}>
                            <View style={styles.timelineLeft}>
                                <Text style={styles.timelineDate}>{proj.role}</Text>
                            </View>
                            <View style={styles.timelineDivider}>
                                <View style={styles.timelineDot} />
                            </View>
                            <View style={styles.timelineRight}>
                                <Text style={styles.timelineTitle}>{proj.title}</Text>
                                <Text style={styles.timelineSubtitle}>Stack: {proj.techStack}</Text>
                                {proj.points.map((point, pIdx) => (
                                    <Text key={pIdx} style={styles.timelineBullet}>• {renderBoldText(point)}</Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};
export default InfographicResume;
