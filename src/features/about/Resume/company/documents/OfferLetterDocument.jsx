import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, Rect } from '@react-pdf/renderer';
import companyLogoWebp from '../company_logo.webp';
import companySignPng from '../sign.png';

const styles = StyleSheet.create({
    page: {
        padding: 45,
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: '#000000',
        lineHeight: 1.4,
        position: 'relative',
    },
    // --- WATERMARK ---
    watermarkContainer: {
        position: 'absolute',
        top: 220,
        left: 60,
        width: 450,
        height: 350,
        alignItems: 'center',
        justify: 'center',
        opacity: 0.3,
        transform: 'rotate(-30deg)',
    },
    watermarkImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    // --- HEADER ---
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        position: 'relative',
        marginBottom: 5,
        width: '100%',
    },
    logoImage: {
        height: 350,
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
        justifyContent: 'center',
    },
    vectorTitle: {
        fontSize: 26,
        fontFamily: 'Helvetica-Bold',
        color: '#0e5aa7',
        marginLeft: 6,
        letterSpacing: -0.5,
    },
    vectorSubTitle: {
        color: '#1565c0',
    },
    dividerLine: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#000000',
        marginBottom: 10,
    },
    // --- META ROW (REF & DATE) ---
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    refNo: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    dateText: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    // --- RECIPIENT BOX ---
    recipientBox: {
        marginBottom: 14,
        lineHeight: 1.3,
    },
    candidateNameText: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10.5,
    },
    // --- TITLES ---
    titleSection: {
        alignItems: 'center',
        marginBottom: 14,
    },
    mainTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 12,
        textDecoration: 'underline',
        marginBottom: 4,
    },
    subjectText: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
        textAlign: 'center',
        textDecoration: 'underline',
    },
    // --- BODY PARAGRAPHS ---
    paragraph: {
        marginBottom: 10,
        textAlign: 'justify',
    },
    boldText: {
        fontFamily: 'Helvetica-Bold',
    },
    // --- SALARY TABLE ---
    salaryTable: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        alignItems: 'center',
        minHeight: 20,
    },
    tableHeader: {
        backgroundColor: '#e6f0fa',
        fontFamily: 'Helvetica-Bold',
    },
    col1: { flex: 2, paddingHorizontal: 6, paddingVertical: 4, fontSize: 9.5, borderRightWidth: 1, borderRightColor: '#000000' },
    col2: { flex: 1, paddingHorizontal: 6, paddingVertical: 4, fontSize: 9.5, textAlign: 'right', borderRightWidth: 1, borderRightColor: '#000000' },
    col3: { flex: 1, paddingHorizontal: 6, paddingVertical: 4, fontSize: 9.5, textAlign: 'right' },

    // --- SIGNATORIES ---
    signRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 15,
    },
    signBox: {
        width: 220,
    },
    signatureImage: {
        height: 44,
        maxWidth: 160,
        objectFit: 'contain',
        marginBottom: 4,
    },
    signatureName: {
        fontFamily: 'Times-Italic',
        fontSize: 20,
        marginBottom: 4,
        color: '#1a237e',
    },
    signatoryRole: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    signatoryCompany: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
    },
    // --- FOOTER ---
    footerContainer: {
        position: 'absolute',
        bottom: 25,
        left: 45,
        right: 45,
    },
    footerLine: {
        borderTopWidth: 1.5,
        borderTopColor: '#000000',
        paddingTop: 8,
        alignItems: 'center',
    },
    footerText: {
        fontFamily: 'Courier',
        fontSize: 8.5,
        textAlign: 'center',
        lineHeight: 1.3,
    }
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

const formatNum = (val) => {
    if (!val || isNaN(val) || Number(val) === 0) return '-';
    return Number(val).toLocaleString('en-IN');
};

const OfferLetterDocument = ({ companyInfo, offerData, logoUrl }) => {
    const isValidLogo = logoUrl && typeof logoUrl === 'string' && (logoUrl.startsWith('data:image/png') || logoUrl.startsWith('data:image/jpeg'));
    const finalLogo = isValidLogo ? logoUrl : companyLogoWebp;
    const finalSign = offerData?.signatureUrl || companySignPng;

    const basicMonthly = Number(offerData.basicMonthly || 30000);
    const hraMonthly = Number(offerData.hraMonthly || 18000);
    const specialMonthly = Number(offerData.specialAllowanceMonthly || 12000);
    const totalMonthly = basicMonthly + hraMonthly + specialMonthly;
    const totalAnnual = totalMonthly * 12;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* WATERMARK BACKGROUND */}
                {finalLogo ? (
                    <View style={styles.watermarkContainer}>
                        <Image src={finalLogo} style={styles.watermarkImage} />
                    </View>
                ) : null}

                {/* HEADER */}
                <View style={styles.headerContainer}>
                    {finalLogo ? <Image src={finalLogo} style={styles.logoImage} /> : <VectorLogoHeader />}
                </View>
                <View style={styles.dividerLine} />

                {/* REF & DATE */}
                <View style={styles.metaRow}>
                    <Text style={styles.refNo}>Ref No: {offerData.refNo || "W3/OFF/2022/0312"}</Text>
                    <Text style={styles.dateText}>Date: {offerData.issueDate || "15-Feb-2022"}</Text>
                </View>

                {/* RECIPIENT */}
                <View style={styles.recipientBox}>
                    <Text>To,</Text>
                    <Text style={styles.candidateNameText}>Mr. {offerData.candidateName || "Mradul Sharma"}</Text>
                    <Text>{offerData.candidateAddress || "Rani Awanti Bai Nagar, Etah, Uttar Pradesh 207001"}</Text>
                    <Text>Email: {offerData.candidateEmail || "mradulsharma786@gmail.com"} | Phone: {offerData.candidatePhone || "+91-7252933077"}</Text>
                </View>

                {/* TITLES */}
                <View style={styles.titleSection}>
                    <Text style={styles.mainTitle}>“Letter of Offer”</Text>
                    <Text style={styles.subjectText}>Subject: Offer of Employment for {offerData.designation || "Senior Full-Stack Developer"}</Text>
                </View>

                {/* BODY CONTENT */}
                <Text style={styles.paragraph}>
                    Dear <Text style={styles.boldText}>{offerData.candidateName || "Mradul Sharma"}</Text>,
                </Text>

                <Text style={styles.paragraph}>
                    With reference to your interview and subsequent discussions, we are pleased to offer you the position of <Text style={styles.boldText}>{offerData.designation || "Senior Full-Stack Developer"}</Text> in the <Text style={styles.boldText}>{offerData.department || "Software Engineering"}</Text> department at <Text style={styles.boldText}>{companyInfo.companyName || "W3 Info Solutions"}</Text>. Your expected date of joining will be <Text style={styles.boldText}>{offerData.joiningDate || "01-Mar-2022"}</Text> at our <Text style={styles.boldText}>{offerData.workLocation || "Lucknow / Remote"}</Text> office.
                </Text>

                <Text style={styles.paragraph}>
                    Your total Cost to Company (CTC) will be <Text style={styles.boldText}>INR {formatNum(offerData.annualCtc || totalAnnual)}</Text> per annum. The detailed breakdown of your monthly & annual salary structure is set out below:
                </Text>

                {/* SALARY TABLE */}
                <View style={styles.salaryTable}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={styles.col1}>Salary Component</Text>
                        <Text style={styles.col2}>Monthly (Rs)</Text>
                        <Text style={styles.col3}>Annual (Rs)</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.col1}>Basic Wage</Text>
                        <Text style={styles.col2}>{formatNum(basicMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(basicMonthly * 12)}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.col1}>House Rent Allowance (HRA)</Text>
                        <Text style={styles.col2}>{formatNum(hraMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(hraMonthly * 12)}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.col1}>Special Allowance / Other Allowances</Text>
                        <Text style={styles.col2}>{formatNum(specialMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(specialMonthly * 12)}</Text>
                    </View>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={styles.col1}>Total Gross Salary (CTC)</Text>
                        <Text style={styles.col2}>{formatNum(totalMonthly)}</Text>
                        <Text style={styles.col3}>{formatNum(totalAnnual)}</Text>
                    </View>
                </View>

                <Text style={styles.paragraph}>
                    You will be under a probation period of <Text style={styles.boldText}>{offerData.probationPeriodMonths || "3"} months</Text> from your joining date. Please confirm your acceptance of this offer letter on or before <Text style={styles.boldText}>{offerData.validTillDate || "25-Feb-2022"}</Text>.
                </Text>

                {/* SIGNATORIES */}
                <View style={styles.signRow}>
                    <View style={styles.signBox}>
                        {offerData.signatureUrl ? (
                            <Image src={offerData.signatureUrl} style={styles.signatureImage} />
                        ) : (
                            <Text style={styles.signatureName}>{companyInfo.hrName || "Anurag Shukla"}</Text>
                        )}
                        <Text style={styles.signatoryRole}>Authorized Signatory</Text>
                        <Text style={styles.signatoryCompany}>{companyInfo.companyName || "W3 Info Solutions"}</Text>
                    </View>

                    <View style={styles.signBox}>
                        <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 10, marginTop: 22, borderTopWidth: 1, borderTopColor: '#000000', paddingTop: 4 }}>
                            Candidate Acceptance Signature
                        </Text>
                        <Text style={{ fontSize: 9, marginTop: 2 }}>{offerData.candidateName || "Mradul Sharma"}</Text>
                    </View>
                </View>

                {/* FOOTER */}
                <View style={styles.footerContainer}>
                    <View style={styles.footerLine}>
                        <Text style={styles.footerText}>
                            Registered Office – Balak Ram Colony, Niyawan, Ayodhya, U.P.
                        </Text>
                        <Text style={styles.footerText}>
                            Development Office – Sector O, Mansarovar Yojna, Lucknow, U.P.
                        </Text>
                        <Text style={styles.footerText}>
                            Website: www.w3info.co.in
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default OfferLetterDocument;
