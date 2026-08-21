import React from 'react';
import { Document, Page, Text, View, StyleSheet, Svg, Path } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 45, fontFamily: 'Helvetica', fontSize: 10, color: '#000000', lineHeight: 1.4 },
    headerContainer: { alignItems: 'center', justifyContent: 'center', height: 60, marginBottom: 5 },
    vectorHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    vectorTitle: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: '#8e24aa', marginLeft: 6 },
    vectorSubTitle: { color: '#ab47bc' },
    dividerLine: { borderBottomWidth: 1.5, borderBottomColor: '#8e24aa', marginBottom: 15 },
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
    footerLine: { borderTopWidth: 1.5, borderTopColor: '#8e24aa', paddingTop: 8, alignItems: 'center' },
    footerText: { fontFamily: 'Courier', fontSize: 8.5, textAlign: 'center' }
});

const ZaibaHeader = () => (
    <View style={styles.vectorHeaderRow}>
        <Svg width="45" height="35" viewBox="0 0 100 80">
            <Path d="M 10 15 L 90 15 L 20 65 L 90 65" fill="none" stroke="#8e24aa" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
        <Text style={styles.vectorTitle}>
            Zaiba<Text style={styles.vectorSubTitle}> InfoTech</Text>
        </Text>
    </View>
);

const JoiningLetterDocument = ({ joiningData = {} }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.headerContainer}><ZaibaHeader /></View>
            <View style={styles.dividerLine} />
            <View style={styles.metaRow}><Text style={styles.dateText}>Date: {joiningData.date || "March 01, 2020"}</Text></View>
            <View style={styles.titleSection}><Text style={styles.mainTitle}>APPOINTMENT LETTER</Text></View>
            <Text style={styles.paragraph}>To,</Text>
            <Text style={[styles.paragraph, styles.boldText]}>Mr. {joiningData.candidateName || "Mradul Sharma"}</Text>
            <Text style={styles.paragraph}>We are pleased to issue this Appointment Letter for the position of <Text style={styles.boldText}>{joiningData.designation || "Laravel Developer"}</Text> at <Text style={styles.boldText}>Zaiba InfoTech, Agra</Text>.</Text>
            <Text style={styles.paragraph}>1. <Text style={styles.boldText}>Joining Date:</Text> Your appointment is effective from {joiningData.date || "March 01, 2020"}.</Text>
            <Text style={styles.paragraph}>2. <Text style={styles.boldText}>Probation Period:</Text> You will be on probation for a period of 3 months.</Text>
            <Text style={styles.paragraph}>3. <Text style={styles.boldText}>Office Hours:</Text> 9:30 AM to 6:30 PM (Mon-Sat).</Text>
            <View style={styles.signatorySection}>
                <Text style={styles.signatoryRole}>HR Manager</Text>
                <Text style={styles.signatoryCompany}>Zaiba InfoTech, Agra</Text>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerLine}>
                    <Text style={styles.footerText}>Registered Office: Sanjay Place, Agra, U.P. - 282002 | www.zaibainfotech.com</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export default JoiningLetterDocument;
