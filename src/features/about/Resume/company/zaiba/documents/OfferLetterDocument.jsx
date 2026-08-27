import React from 'react';
import { Document, Page, Text, View, StyleSheet, Svg, Path } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 45, fontFamily: 'Helvetica', fontSize: 10, color: '#000000', lineHeight: 1.4, position: 'relative' },
    headerContainer: { alignItems: 'center', justifyContent: 'center', height: 60, marginBottom: 5, width: '100%' },
    vectorHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    vectorTitle: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: '#8e24aa', marginLeft: 6 },
    vectorSubTitle: { color: '#ab47bc' },
    dividerLine: { borderBottomWidth: 1.5, borderBottomColor: '#8e24aa', marginBottom: 15 },
    metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    refNo: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    dateText: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    recipientBox: { marginBottom: 14, lineHeight: 1.3 },
    candidateNameText: { fontFamily: 'Helvetica-Bold', fontSize: 10.5 },
    titleSection: { alignItems: 'center', marginBottom: 15 },
    mainTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline', marginBottom: 4 },
    subjectText: { fontFamily: 'Helvetica-Bold', fontSize: 10, textAlign: 'center', textDecoration: 'underline' },
    paragraph: { marginBottom: 10, textAlign: 'justify' },
    boldText: { fontFamily: 'Helvetica-Bold' },
    salaryTable: { marginVertical: 10, borderWidth: 1, borderColor: '#000000' },
    tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000000', alignItems: 'center', minHeight: 20 },
    tableHeader: { backgroundColor: '#f3e5f5', fontFamily: 'Helvetica-Bold' },
    col1: { flex: 2, paddingHorizontal: 6, paddingVertical: 4, fontSize: 9.5, borderRightWidth: 1, borderRightColor: '#000000' },
    col2: { flex: 1, paddingHorizontal: 6, paddingVertical: 4, fontSize: 9.5, textAlign: 'right', borderRightWidth: 1, borderRightColor: '#000000' },
    col3: { flex: 1, paddingHorizontal: 6, paddingVertical: 4, fontSize: 9.5, textAlign: 'right' },
    signRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginBottom: 15 },
    signBox: { width: 220 },
    signatoryRole: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    signatoryCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    footerContainer: { position: 'absolute', bottom: 25, left: 45, right: 45 },
    footerLine: { borderTopWidth: 1.5, borderTopColor: '#8e24aa', paddingTop: 8, alignItems: 'center' },
    footerText: { fontFamily: 'Courier', fontSize: 8.5, textAlign: 'center', lineHeight: 1.3 }
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

const formatNum = (val) => (!val || isNaN(val) || Number(val) === 0) ? '-' : Number(val).toLocaleString('en-IN');

const OfferLetterDocument = ({ companyInfo, offerData }) => {
    const basicMonthly = Number(offerData.basicMonthly || 20000);
    const hraMonthly = Number(offerData.hraMonthly || 12000);
    const specialMonthly = Number(offerData.specialAllowanceMonthly || 8000);
    const totalMonthly = basicMonthly + hraMonthly + specialMonthly;
    const totalAnnual = totalMonthly * 12;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerContainer}><ZaibaHeader /></View>
                <View style={styles.dividerLine} />
                <View style={styles.metaRow}>
                    <Text style={styles.refNo}>Ref: {offerData.refNo || "ZAIBA/OFF/2020/0102"}</Text>
                    <Text style={styles.dateText}>Date: {offerData.issueDate || "February 15, 2020"}</Text>
                </View>
                <View style={styles.recipientBox}>
                    <Text>To,</Text>
                    <Text style={styles.candidateNameText}>Mr. {offerData.candidateName || "Mradul Sharma"}</Text>
                    <Text>{offerData.candidateAddress}</Text>
                    <Text>Email: {offerData.candidateEmail} | Phone: {offerData.candidatePhone}</Text>
                </View>
                <View style={styles.titleSection}>
                    <Text style={styles.mainTitle}>OFFER OF EMPLOYMENT</Text>
                    <Text style={styles.subjectText}>Position: {offerData.designation || "Laravel Developer"}</Text>
                </View>
                <Text style={styles.paragraph}>Dear <Text style={styles.boldText}>{offerData.candidateName}</Text>,</Text>
                <Text style={styles.paragraph}>We are pleased to offer you employment at <Text style={styles.boldText}>Zaiba InfoTech (Agra)</Text> as <Text style={styles.boldText}>{offerData.designation}</Text>. Your joining date is <Text style={styles.boldText}>{offerData.joiningDate}</Text>.</Text>
                
                <View style={styles.salaryTable}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={styles.col1}>Component</Text>
                        <Text style={styles.col2}>Monthly (INR)</Text>
                        <Text style={styles.col3}>Annual (INR)</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.col1}>Basic Pay</Text>
                        <Text style={styles.col2}>{formatNum(basicMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(basicMonthly * 12)}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.col1}>HRA</Text>
                        <Text style={styles.col2}>{formatNum(hraMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(hraMonthly * 12)}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.col1}>Special Allowance</Text>
                        <Text style={styles.col2}>{formatNum(specialMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(specialMonthly * 12)}</Text>
                    </View>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={styles.col1}>Total CTC</Text>
                        <Text style={styles.col2}>{formatNum(totalMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(totalAnnual)}</Text>
                    </View>
                </View>

                <View style={styles.signRow}>
                    <View style={styles.signBox}>
                        <Text style={styles.signatoryRole}>HR Admin</Text>
                        <Text style={styles.signatoryCompany}>Zaiba InfoTech, Agra</Text>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <View style={styles.footerLine}>
                        <Text style={styles.footerText}>Registered Office: Sanjay Place, Agra, U.P. - 282002</Text>
                        <Text style={styles.footerText}>Website: www.zaibainfotech.com | Email: hr@zaibainfotech.com</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default OfferLetterDocument;
