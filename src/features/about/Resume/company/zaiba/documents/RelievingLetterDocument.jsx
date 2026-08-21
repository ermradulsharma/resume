import React from 'react';
import { Document, Page, Text, View, StyleSheet, Svg, Path } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 45, fontFamily: 'Helvetica', fontSize: 10.5, color: '#000000', lineHeight: 1.5 },
    headerContainer: { alignItems: 'center', justifyContent: 'center', height: 60, marginBottom: 5 },
    vectorHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    vectorTitle: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: '#8e24aa', marginLeft: 6 },
    vectorSubTitle: { color: '#ab47bc' },
    dividerLine: { borderBottomWidth: 1.5, borderBottomColor: '#8e24aa', marginBottom: 15 },
    dateRow: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 25 },
    dateText: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, textAlign: 'right' },
    titleSection: { alignItems: 'center', marginBottom: 35 },
    mainTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline', marginBottom: 20 },
    subTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline' },
    paragraph: { marginBottom: 16, textAlign: 'justify' },
    boldText: { fontFamily: 'Helvetica-Bold' },
    signatorySection: { marginTop: 40, marginBottom: 30, alignItems: 'flex-start' },
    signatoryRole: { fontFamily: 'Helvetica-Bold', fontSize: 10.5 },
    signatoryCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10.5 },
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

const RelievingLetterDocument = ({ relievingData = {} }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.headerContainer}><ZaibaHeader /></View>
            <View style={styles.dividerLine} />
            <View style={styles.dateRow}><Text style={styles.dateText}>Date: {relievingData.issueDate || "February 28, 2022"}</Text></View>
            <View style={styles.titleSection}>
                <Text style={styles.mainTitle}>RELIEVING CUM EXPERIENCE LETTER</Text>
                <Text style={styles.subTitle}>TO WHOM IT MAY CONCERN</Text>
            </View>

            <Text style={styles.paragraph}>This is to certify that <Text style={styles.boldText}>Mr. {relievingData.employeeName || "Mradul Sharma"}</Text> worked with <Text style={styles.boldText}>Zaiba InfoTech, Agra</Text> from <Text style={styles.boldText}>{relievingData.joiningDate || "March 01, 2020"}</Text> to <Text style={styles.boldText}>{relievingData.relievingDate || "February 28, 2022"}</Text> as <Text style={styles.boldText}>{relievingData.designation || "Laravel Developer"}</Text>.</Text>
            <Text style={styles.paragraph}>During his tenure, we found him hardworking, professional and punctual. He stands relieved of all responsibilities with effect from closing hours of {relievingData.relievingDate || "February 28, 2022"}.</Text>
            <Text style={styles.paragraph}>We wish him all the best for his future endeavors.</Text>

            <View style={styles.signatorySection}>
                <Text style={styles.signatoryRole}>HR Admin</Text>
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

export default RelievingLetterDocument;
