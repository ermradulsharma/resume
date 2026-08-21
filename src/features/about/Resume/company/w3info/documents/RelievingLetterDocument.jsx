import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, Rect } from '@react-pdf/renderer';
import companyLogoWebp from '../../company_logo.webp';
import companySignPng from '../../sign.png';

const styles = StyleSheet.create({
    page: { padding: 45, fontFamily: 'Helvetica', fontSize: 10.5, color: '#000000', lineHeight: 1.5, position: 'relative', },
    watermarkContainer: { position: 'absolute', top: 220, left: 60, width: 450, height: 350, alignItems: 'center', justifyContent: 'center', opacity: 0.3, transform: 'rotate(-30deg)', },
    watermarkImage: { width: '100%', height: '100%', objectFit: 'cover', },
    headerContainer: { alignItems: 'center', justifyContent: 'center', height: 65, position: 'relative', marginBottom: 5, width: '100%' },
    logoImage: { height: 350, maxWidth: 550, objectFit: 'contain', position: 'absolute', top: -150, left: 0, right: 0, alignSelf: 'center' },
    vectorHeaderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
    vectorTitle: { fontSize: 26, fontFamily: 'Helvetica-Bold', color: '#0e5aa7', marginLeft: 6, letterSpacing: -0.5, },
    vectorSubTitle: { color: '#1565c0', },
    dividerLine: { borderBottomWidth: 1.5, borderBottomColor: '#000000', marginBottom: 10, },
    dateRow: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 25, },
    dateText: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, textAlign: 'right', },
    titleSection: { alignItems: 'center', marginBottom: 35, },
    mainTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline', marginBottom: 20, },
    subTitle: { fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline', },
    paragraph: { marginBottom: 16, textAlign: 'justify', },
    boldText: { fontFamily: 'Helvetica-Bold', },
    signatorySection: { marginTop: 40, marginBottom: 30, alignItems: 'flex-start', },
    signatureImage: { height: 48, maxWidth: 170, objectFit: 'contain', marginBottom: 0, alignSelf: 'flex-start', },
    signatureName: { fontFamily: 'Times-Italic', fontSize: 22, marginBottom: 6, color: '#1a237e', },
    signatoryRole: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, },
    signatoryCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, },
    footerContainer: { position: 'absolute', bottom: 25, left: 45, right: 45, },
    footerLine: { borderTopWidth: 1.5, borderTopColor: '#000000', paddingTop: 8, alignItems: 'center', },
    footerText: { fontFamily: 'Courier', fontSize: 8.5, textAlign: 'center', lineHeight: 1.3, }
});

const VectorLogoHeader = () => (
    <View style={styles.vectorHeaderRow}>
        <Svg width="55" height="42" viewBox="0 0 120 90">
            <Path d="M 15 25 L 38 75 L 60 38 L 82 75 L 105 25" fill="none" stroke="#0077c5" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <Rect x="15" y="8" width="8" height="8" fill="#00a0e9" />
            <Rect x="26" y="8" width="8" height="8" fill="#00a0e9" />
            <Rect x="26" y="19" width="8" height="8" fill="#00a0e9" />
        </Svg>
        <Text style={styles.vectorTitle}>
            W3<Text style={styles.vectorSubTitle}> Info Solutions</Text>
        </Text>
    </View>
);

const RelievingLetterDocument = ({ companyInfo, relievingData, logoUrl }) => {
    const isValidLogo = logoUrl && typeof logoUrl === 'string' && (logoUrl.startsWith('data:image/png') || logoUrl.startsWith('data:image/jpeg'));
    const finalLogo = isValidLogo ? logoUrl : companyLogoWebp;
    const finalSign = relievingData?.signatureUrl || companySignPng;

    const salutation = relievingData.salutation || (relievingData.gender === 'female' ? 'Miss.' : 'Mr.');
    const pronounHeShe = relievingData.gender === 'female' ? 'She' : 'He';
    const pronounHisHer = relievingData.gender === 'female' ? 'her' : 'his';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerContainer}>{finalLogo ? (<Image src={finalLogo} style={styles.logoImage} />) : (<VectorLogoHeader />)}</View>
                <View style={styles.dividerLine} />
                <View style={styles.dateRow}><Text style={styles.dateText}>Date: {relievingData.issueDate || "December 30, 2024"}</Text></View>
                <View style={styles.titleSection}>
                    <Text style={styles.mainTitle}>“Experience cum Relieving Letter”</Text>
                    <Text style={styles.subTitle}>TO WHOM IT MAY CONCERN</Text>
                </View>

                <Text style={styles.paragraph}>This is to certify that <Text style={styles.boldText}>{salutation} {relievingData.employeeName}</Text> was employed with us for the period between <Text style={styles.boldText}>{relievingData.joiningDate}</Text> to <Text style={styles.boldText}>{relievingData.relievingDate}</Text>. {pronounHeShe} was last designated as <Text style={styles.boldText}>{relievingData.designation}</Text>.</Text>
                <Text style={styles.paragraph}>During the period of {pronounHisHer} assignment, we found {pronounHisHer} very sincere, meticulous and a keen learner. {pronounHeShe} stands relieved from {pronounHisHer} duties with closing hours of <Text style={styles.boldText}>{relievingData.relievingDate}</Text>.</Text>
                <Text style={styles.paragraph}>We highly recommend <Text style={styles.boldText}>{relievingData.employeeName}</Text> for employment. {pronounHeShe} is a joy to work with and would make a great asset to any organization.</Text>
                <Text style={styles.paragraph}>We wish Best of luck for {pronounHisHer} future endeavours.</Text>

                <View style={styles.signatorySection}>
                    {finalSign ? (<Image src={finalSign} style={styles.signatureImage} />) : (<Text style={styles.signatureName}>{relievingData.signatoryName || "Anurag Shukla"}</Text>)}
                    <Text style={styles.signatoryRole}>Authorized Signatory</Text>
                    <Text style={styles.signatoryCompany}>W3 Info Solutions</Text>
                </View>

                {finalLogo ? (
                    <View style={styles.watermarkContainer}>
                        <Image src={finalLogo} style={styles.watermarkImage} />
                    </View>
                ) : null}

                <View style={styles.footerContainer}>
                    <View style={styles.footerLine}>
                        <Text style={styles.footerText}>Registered Office – Balak Ram Colony, Niyawan, Ayodhya, U.P.</Text>
                        <Text style={styles.footerText}>Development Office – Sector O, Mansarovar Yojna, Lucknow, U.P.</Text>
                        <Text style={styles.footerText}>Website: www.w3info.co.in</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default RelievingLetterDocument;
