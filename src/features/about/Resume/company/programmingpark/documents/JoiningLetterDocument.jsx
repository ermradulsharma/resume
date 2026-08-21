import React from 'react';
import { Document, Page, Text, View, StyleSheet, Svg, Path, Rect } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 45, fontFamily: 'Helvetica', fontSize: 10, color: '#000000', lineHeight: 1.4 },
    headerContainer: { alignItems: 'center', justifyContent: 'center', height: 60, marginBottom: 5 },
    vectorHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    vectorTitle: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: '#2e7d32', marginLeft: 6 },
    vectorSubTitle: { color: '#4caf50' },
    dividerLine: { borderBottomWidth: 1.5, borderBottomColor: '#2e7d32', marginBottom: 15 },
    metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    dateText: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    titleSection: { alignItems: 'center', marginBottom: 20 },
    mainTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline' },
    paragraph: { marginBottom: 12, textAlign: 'justify' },
    boldText: { fontFamily: 'Helvetica-Bold' },
    signatorySection: { marginTop: 40, alignItems: 'flex-start' },
    signatoryRole: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    signatoryCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    footerContainer: { position: 'absolute', bottom: 25, left: 45, right: 45 },
    footerLine: { borderTopWidth: 1.5, borderTopColor: '#2e7d32', paddingTop: 8, alignItems: 'center' },
    footerText: { fontFamily: 'Courier', fontSize: 8.5, textAlign: 'center' }
});

const ProgrammingParkHeader = () => (
    <View style={styles.vectorHeaderRow}>
        <Svg width="45" height="35" viewBox="0 0 100 80">
            <Rect x="10" y="10" width="80" height="60" rx="6" fill="none" stroke="#2e7d32" strokeWidth="8" />
            <Path d="M 30 30 L 45 40 L 30 50 M 55 50 L 70 50" stroke="#4caf50" strokeWidth="6" strokeLinecap="round" />
        </Svg>
        <Text style={styles.vectorTitle}>
            Programming Park<Text style={styles.vectorSubTitle}> InfoTech</Text>
        </Text>
    </View>
);

const JoiningLetterDocument = ({ joiningData = {} }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.headerContainer}><ProgrammingParkHeader /></View>
            <View style={styles.dividerLine} />
            <View style={styles.metaRow}><Text style={styles.dateText}>Date: {joiningData.date || "December 01, 2018"}</Text></View>
            <View style={styles.titleSection}><Text style={styles.mainTitle}>APPOINTMENT LETTER</Text></View>
            <Text style={styles.paragraph}>To,</Text>
            <Text style={[styles.paragraph, styles.boldText]}>Mr. {joiningData.candidateName || "Mradul Sharma"}</Text>
            <Text style={styles.paragraph}>We are pleased to appoint you as <Text style={styles.boldText}>{joiningData.designation || "PHP Developer"}</Text> at <Text style={styles.boldText}>Programming Park InfoTech, Agra</Text>.</Text>
            <Text style={styles.paragraph}>1. <Text style={styles.boldText}>Joining Date:</Text> {joiningData.date || "December 01, 2018"}.</Text>
            <Text style={styles.paragraph}>2. <Text style={styles.boldText}>Probation Period:</Text> 6 months probation period.</Text>
            <Text style={styles.paragraph}>3. <Text style={styles.boldText}>Office Timings:</Text> 10:00 AM to 7:00 PM (Mon-Sat).</Text>
            <View style={styles.signatorySection}>
                <Text style={styles.signatoryRole}>Director</Text>
                <Text style={styles.signatoryCompany}>Programming Park InfoTech, Agra</Text>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerLine}>
                    <Text style={styles.footerText}>Registered Office: Civil Lines, Agra, U.P. - 282002 | www.programmingpark.com</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default JoiningLetterDocument;
