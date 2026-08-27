import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, Rect } from '@react-pdf/renderer';
import companyLogoWebp from '../../company_logo.webp';
import companySignPng from '../../sign.png';

const styles = StyleSheet.create({
    page: {
        paddingTop: 125,
        paddingBottom: 75,
        paddingHorizontal: 45,
        marginBottom: 20,
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: '#000000',
        lineHeight: 1.35,
        position: 'relative',
    },
    watermarkContainer: {
        position: 'absolute',
        top: 200,
        left: 50,
        width: 450,
        height: 350,
        alignItems: 'center',
        justify: 'center',
        opacity: 0.22,
        transform: 'rotate(-30deg)',
    },
    watermarkImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    headerContainer: {
        position: 'absolute',
        top: 50,
        left: 45,
        right: 45,
        alignItems: 'center',
        justify: 'center',
        height: 55,
        width: '100%',
    },
    logoImage: {
        height: 320,
        maxWidth: 550,
        objectFit: 'contain',
        position: 'absolute',
        top: -150,
        left: 0,
        right: 0,
        alignSelf: 'center',
    },
    vectorHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justify: 'center',
    },
    vectorTitle: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        color: '#0e5aa7',
        marginLeft: 6,
        letterSpacing: -0.5,
    },
    vectorSubTitle: {
        color: '#1565c0',
    },
    dividerLine: {
        position: 'absolute',
        top: 110,
        left: 45,
        right: 45,
        borderBottomWidth: 1.5,
        borderBottomColor: '#000000',
    },
    dateRow: { flexDirection: 'row', justifyContent: 'flex-end', },
    dateText: { fontFamily: 'Helvetica-Bold', fontSize: 11, textAlign: 'right', },

    recipientBox: { marginBottom: 6, lineHeight: 1 },
    candidateNameText: { fontFamily: 'Helvetica-Bold', fontSize: 10 },
    addressText: { paddingLeft: 22, fontSize: 10 },
    contactText: { paddingLeft: 22, fontSize: 10 },
    emailText: { paddingLeft: 22, fontSize: 10 },

    titleSection: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    mainTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 11,
        textDecoration: 'underline',
        marginBottom: 3,
    },
    subjectText: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10.5,
        textDecoration: 'underline',
        marginBottom: 8,
    },

    listRow: {
        flexDirection: 'row',
        marginBottom: 6,
        paddingLeft: 20
    },

    listNum: {
        width: 22,
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    letterNum: {
        width: 18,
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    bulletPoint: { paddingLeft: 45 },
    bulletDot: {
        width: 12,
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    listBody: {
        flex: 1,
        fontSize: 10,
        lineHeight: 1.4,
        textAlign: 'justify',
    },
    boldText: {
        fontFamily: 'Helvetica-Bold',
    },
    paragraph: {
        marginBottom: 7,
        textAlign: 'justify',
        fontSize: 10,
        lineHeight: 1.4,
    },

    sectionHeader: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10.5,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 4,
        textDecoration: 'underline',
    },
    subSectionHeader: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10.5,
        textAlign: 'center',
        marginBottom: 6,
        textDecoration: 'underline',
    },

    formGrid: {
        borderWidth: 1
    },
    gridRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    gridNum: {
        width: "6%",
        textAlign: 'center',
        borderRightWidth: 1,
        padding: 4,
        margin: 0
    },
    gridLabel: {
        width: "47%",
        padding: 4,
        borderRightWidth: 1,
        margin: 0
    },
    gridValue: {
        width: "47%",
        padding: 4,
        margin: 0
    },
    salaryTable: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#000000',
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    tableHeader: {
        backgroundColor: '#e6f0fa',
        fontFamily: 'Helvetica-Bold',
    },
    col1: { flex: 2, paddingHorizontal: 5, paddingVertical: 3, fontSize: 8.5, borderRightWidth: 1, borderRightColor: '#000000' },
    col2: { flex: 1, paddingHorizontal: 5, paddingVertical: 3, fontSize: 8.5, textAlign: 'right' },

    signRow: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 20, marginBottom: 8, },
    signatureImage: { height: 38, objectFit: 'contain', marginBottom: 2, },
    signatureName: { fontFamily: 'Times-Italic', fontSize: 17, marginBottom: 3, color: '#1a237e', },
    signatoryRole: { fontFamily: 'Helvetica-Bold', fontSize: 10, textAlign: 'right', },
    signatoryCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10, textAlign: 'right', },
    footerContainer: {
        position: 'absolute',
        bottom: 25,
        left: 45,
        right: 45,
    },
    footerLine: {
        borderTopWidth: 1.5,
        borderTopColor: '#000000',
        paddingTop: 5,
        alignItems: 'center',
    },
    footerText: {
        fontFamily: 'Courier',
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 1.35,
    }
});

const VectorLogoHeader = () => (
    <View style={styles.vectorHeaderRow}>
        <Svg width="50" height="38" viewBox="0 0 120 90">
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

const formatNum = (val) => {
    if (!val || isNaN(val) || Number(val) === 0) return '-';
    return Number(val).toLocaleString('en-IN');
};

const NumberedClause = ({ num, title, children }) => (
    <View style={styles.listRow}>
        <Text style={styles.listNum}>{num}.</Text>
        <Text style={styles.listBody}>
            {title ? <Text style={styles.boldText}>{title}: </Text> : null}
            {children}
        </Text>
    </View>
);


const JoiningLetterDocument = ({ companyInfo = {}, joiningData = {}, logoUrl }) => {
    const isValidLogo = logoUrl && typeof logoUrl === 'string' && (logoUrl.startsWith('data:image/png') || logoUrl.startsWith('data:image/jpeg'));
    const finalLogo = isValidLogo ? logoUrl : companyLogoWebp;
    const finalSign = joiningData?.signatureUrl || companySignPng;

    const candidateName = joiningData.candidateName || "Mradul Sharma";
    const designation = joiningData.designation || "Senior Full-Stack Developer";
    const joiningDate = joiningData.date || "March 03, 2022";
    const address = joiningData.candidateAddress || "Rani Awanti Bai Nagar, Etah, Uttar Pradesh-207001";
    const phone = joiningData.candidatePhone || "+91-7252933077";
    const email = joiningData.candidateEmail || "mradulsharma786@gmail.com";

    const basic = 30000;
    const hra = 18000;
    const conveyance = 4000;
    const medical = 3000;
    const special = 5000;
    const totalGross = basic + hra + conveyance + medical + special;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerContainer} fixed>{finalLogo ? <Image src={finalLogo} style={styles.logoImage} /> : <VectorLogoHeader />}</View>
                <View style={styles.dividerLine} fixed />
                <View style={styles.content}>
                    <View style={styles.dateRow}><Text style={styles.dateText}>Date:- {joiningDate}</Text></View>
                    <View style={styles.titleSection}><Text style={styles.mainTitle}>APPOINTMENT LETTER</Text></View>
                    <View style={styles.recipientBox}>
                        <Text>To,</Text>
                        <Text style={styles.candidateNameText}>MR. {candidateName.toUpperCase()}</Text>
                        <Text style={styles.addressText}><Text style={styles.boldText}>Address:</Text> {address}</Text>
                        <Text style={styles.contactText}><Text style={styles.boldText}>Contact No:</Text> {phone}</Text>
                        <Text style={styles.emailText}><Text style={styles.boldText}>E-mail id:</Text> {email}</Text>
                    </View>
                    <Text style={styles.subjectText}>Subject: APPOINTMENT ON THE POST OF {designation.toUpperCase()}</Text>
                    <Text style={styles.paragraph}>With reference to the interview you had with us, we are delighted to appoint you as a <Text style={styles.boldText}>{designation}</Text>. The services of <Text style={styles.boldText}>W3 Info Solutions</Text> situated at D-1/313 Sector O, Mansarovar Yojna, Shaheed Path, Lucknow, Uttar Pradesh-226002. Your Date of joining is - <Text style={styles.boldText}>{joiningDate}</Text>.</Text>
                    <NumberedClause num="1" title="Appointment">You will be reporting to (Technical Head) — W3 Info Solutions (Lucknow) and /or such other person as may be notified from time to time in writing to you by the company according to your KRA & KPI.</NumberedClause>
                    <NumberedClause num="2" title="Location/Domicile">Your present place of posting is W3 Info Solutions, Lucknow office. Your services are liable to be transferred anywhere in India with sole discretion of the company.</NumberedClause>
                    <NumberedClause num="3" title="Personal particulars">Your Date of Birth on the basis of documentary evidence submitted by you at the time of your appointment shall be treated as authoritative and final.</NumberedClause>
                    <NumberedClause num="4" title="Exclusivity">You will not while in the services of the company undertake or concern yourself directly or indirectly with any other duties and outside work.</NumberedClause>
                    <NumberedClause num="5" title="Company Policies">During the course of your appointment /employment, with the company, you shall be required to keep yourself informed updated and comply with all policies.</NumberedClause>
                    <NumberedClause num="6">You may be required to work in shifts depending upon Company's needs & requirements.</NumberedClause>
                    <NumberedClause num="7">Your age of retirement shall be 60 years in and upon such retirement you shall cease to be an employee of the company.</NumberedClause>
                    <NumberedClause num="8">You must update your Reporting head by your day-to-day work on everyday basis without any excuse or delay.</NumberedClause>
                    <NumberedClause num="9">Your cost to the company is enclosed in Annexure A.</NumberedClause>
                    <NumberedClause num="10">Company has a unique dress code for its employees for working days.</NumberedClause>
                    <NumberedClause num="11">Starting 6 months' probation period, you will not get any kind of leaves by our side except Week offs.</NumberedClause>
                    <NumberedClause num="12">Employee will get terminated within 6 Months if we find no quality of worthfulness for our company.</NumberedClause>
                    
                    <View break>
                        <Text style={styles.sectionHeader}>ANNEXURES TO APPOINTMENT LETTER</Text>
                        <Text style={styles.subSectionHeader}>ANNEXURE I — APPOINTMENT APPROVAL FORM</Text>
                        <View style={styles.formGrid}>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>1</Text>
                                <Text style={styles.gridLabel}>NAME OF THE CANDIDATE</Text>
                                <Text style={styles.gridValue}>Mr. {candidateName}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>2</Text>
                                <Text style={styles.gridLabel}>QUALIFICATIONS</Text>
                                <Text style={styles.gridValue}>B. Tech</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>3</Text>
                                <Text style={styles.gridLabel}>DESIGNATION</Text>
                                <Text style={styles.gridValue}>{designation}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>4</Text>
                                <Text style={styles.gridLabel}>DATE OF JOINING</Text>
                                <Text style={styles.gridValue}>{joiningDate}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>5</Text>
                                <Text style={styles.gridLabel}>TOTAL GROSS SALARY</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(totalGross)}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.signRow}>
                    <View style={styles.signBox}>
                        <Text style={styles.signatoryCompany}>For W3 Info Solutions,</Text>
                        {finalSign ? (<Image src={finalSign} style={styles.signatureImage} />) : (<Text style={styles.signatureName}>Anurag Shukla</Text>)}
                        <Text style={styles.signatoryRole}>Authorized Signatory</Text>
                    </View>
                </View>

                {finalLogo ? (
                    <View style={styles.watermarkContainer} fixed>
                        <Image src={finalLogo} style={styles.watermarkImage} />
                    </View>
                ) : null}

                <View style={styles.footerContainer} fixed>
                    <View style={styles.footerLine}>
                        <Text style={styles.footerText}><Text style={styles.boldText}>Registered Office:- </Text>Balak Ram Colony, Niyawan, Ayodhya, U.P. - 224001</Text>
                        <Text style={styles.footerText}><Text style={styles.boldText}>Development Office:- </Text>Sector O, Mansarovar Yojna, Lucknow, U.P. - 226002</Text>
                        <Text style={styles.footerText}><Text style={styles.boldText}>Website: </Text>www.w3info.co.in</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default JoiningLetterDocument;
