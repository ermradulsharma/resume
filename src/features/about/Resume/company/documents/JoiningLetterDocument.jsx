import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, Rect } from '@react-pdf/renderer';
import companyLogoWebp from '../company_logo.webp';
import companySignPng from '../sign.png';

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
    // --- WATERMARK (FIXED ON EVERY PAGE) ---
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
    // --- HEADER (FIXED AT TOP OF EVERY PAGE) ---
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
        top: 110,              // Logo ke bilkul neeche
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

    // --- TITLES ---
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

    // --- MS WORD HANGING INDENT LIST STYLES ---
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

    // --- SECTION HEADINGS ---
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

    // --- GRID & TABLES ---
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

    // --- SIGNATORIES ---
    signRow: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 20, marginBottom: 8, },
    // signBox: { width: 200, },
    signatureImage: { height: 38, objectFit: 'contain', marginBottom: 2, },
    signatureName: { fontFamily: 'Times-Italic', fontSize: 17, marginBottom: 3, color: '#1a237e', },
    signatoryRole: { fontFamily: 'Helvetica-Bold', fontSize: 10, textAlign: 'end', },
    signatoryCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10, textAlign: 'end', },
    // --- FOOTER (FIXED AT BOTTOM OF EVERY PAGE) ---
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

// --- MS WORD HANGING INDENT HELPERS ---
const NumberedClause = ({ num, title, children }) => (
    <View style={styles.listRow}>
        <Text style={styles.listNum}>{num}.</Text>
        <Text style={styles.listBody}>
            {title ? <Text style={styles.boldText}>{title}: </Text> : null}
            {children}
        </Text>
    </View>
);

const LetteredClause = ({ letter, title, children }) => (
    <View style={[styles.listRow, { marginLeft: 14 }]}>
        <Text style={styles.letterNum}>{letter}.</Text>
        <Text style={styles.listBody}>
            {title ? <Text style={styles.boldText}>{title}: </Text> : null}
            {children}
        </Text>
    </View>
);

const BulletClause = ({ children, level = 1 }) => (
    <View style={[styles.listRow, { marginLeft: level * 12 }]}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.listBody}>{children}</Text>
    </View>
);

const JoiningLetterDocument = ({ companyInfo, joiningData, logoUrl }) => {
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
                    <Text style={styles.paragraph}>With reference to the interview you had with us, we are delighted to appoint you as a <Text style={styles.boldText}>{designation}</Text>. The services of <Text style={styles.boldText}>W3 Info solutions</Text> situated Sector O Mansarovar yojna Lucknow, Uttar Pradesh-226002. Your Date of joining is - <Text style={styles.boldText}>{joiningDate}</Text>.</Text>
                    <NumberedClause num="1" title="Appointment">You will be reporting to (Technical Head) — W3 Info solutions (Lucknow, Mansarovar yojna, Lucknow Branch Office) and /or such other person as may be notified from time to time in writing to you by the company (W3 Info Solutions) according to your KRA & KPI, who will take you through the roles and responsibilities to be shouldered by you. Your appointment with the company is subject to your being found medically fit and satisfactory verification on your qualification and references.</NumberedClause>
                    <NumberedClause num="2" title="Location/Domicile">Your present place of posting is Lucknow, W3 Info Solutions, branch office. Your services are liable to be transferred and/or depute you from one place to another anywhere in India or abroad with sole discretion of the company.</NumberedClause>
                    <NumberedClause num="3" title="Personal particulars">Your Date of Birth on the basis of documentary evidence submitted by you at the time of your appointment shall be treated as authoritative and final and it shall not be open to make a change in your date of birth, you shall also keep the company updated of your latest postal address and other contact details at all times and intimate in writing in case of change of such address or contact details, any communication send to you by company on your last known address by post, shall be deemed to have been duly served notwithstanding the fact that you have changed your address.</NumberedClause>
                    <NumberedClause num="4" title="Exclusivity">You will not while in the services of the company undertake or concern yourself directly or indirectly with any other duties and outside work either part time or full time, without the express written permission of the management. If you are found guilty of such misconduct your service can be terminated by the company forthwith notice or payment in lieu of notice.</NumberedClause>
                    <NumberedClause num="5" title="Company Policies">During the course of your appointment /employment, with the company, you shall be required to keep yourself informed updated and comply with all the policies and procedures of the company in force and as may be amended from time to time and as applicable to you which will be inform to you by the official Mail I'd. Which shall be considered as part of your appointment letter and terms of your appointment /employment. The company shall not be responsible for any damage or loss of any mishappening /natural cause whatsoever accruing to you. Owing to you not being aware and/or updated with any such company policies and amendments thereto.</NumberedClause>
                    <NumberedClause num="6">You may be required to work in shifts depending upon Company's needs & requirements.</NumberedClause>
                    <NumberedClause num="7">Your age of retirement shall be 60 years in and upon such retirement you shall cease to be an employee of the company. The Company may however at its sole discretion select to extend the term of your appointment /employment, for such further period as it deems fit.</NumberedClause>
                    <NumberedClause num="8">You must update your Reporting head by your day-to-day work on everyday basis without any excuse or delay before leaving the office in the evening according to your DILO.</NumberedClause>
                    <NumberedClause num="9">Your cost to the company is enclosed in Annexure A.</NumberedClause>
                    <NumberedClause num="10">Company has a unique dress code for his employees for the working days i.e. formal shirt, pant, formal shoes for male candidate, while for female candidate it is formal pant, shirts or kurti. Which every employee has to follow strictly. From Monday to Friday every employee will attend the office in complete formal dress code, while on every Saturday employee can join office in casual dress code.</NumberedClause>
                    <NumberedClause num="11">Starting 6 months' probation period, you will not get any kind of leaves by our side except Week offs. You will be closely measure by our technical team and concern department person. After completing 6 Months' probation period, you can avail all CL, SL, through our company policy.</NumberedClause>
                    <NumberedClause num="12">Employee will get terminate within 6 Months if we find no quality of worthful for our company. By technical skill, behavior and other learned skill are will be on benchmark to measure you within Probation period.</NumberedClause>
                    <Text style={styles.paragraph}>The Company reserves its sole right to add, to alter, amend or vary the foregoing terms and condition as and when found necessary.</Text>
                    <Text style={styles.paragraph}>Any dispute arising out of this contract of employment is subject to jurisdiction of courts at Lucknow only.</Text>
                    <View break>
                        <Text style={styles.sectionHeader}>ANNEXURES TO APPOINTMENT LETTER</Text>
                        <Text style={styles.subSectionHeader}>ANNEXURE I</Text>
                        <Text style={styles.subSectionHeader}>APPOINTMENT APPROVAL FORM</Text>
                        <Text style={{ fontSize: 8.5, fontFamily: 'Helvetica-Bold', textAlign: 'center', marginBottom: 6 }}>DIVISION :- D-1/313 Sector O Mansarovar Yojna Lucknow Uttar Pradesh-226002</Text>
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
                                <Text style={styles.gridLabel}>LAST EMPLOYMENT</Text>
                                <Text style={styles.gridValue}>NILL</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>4</Text>
                                <Text style={styles.gridLabel}>DESIGNATION</Text>
                                <Text style={styles.gridValue}>{designation}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>5</Text>
                                <Text style={styles.gridLabel}>INTERVIEW BOARD RATING</Text>
                                <Text style={styles.gridValue}>Good</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>6</Text>
                                <Text style={styles.gridLabel}>DATE OF JOINING</Text>
                                <Text style={styles.gridValue}>{joiningDate}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>7</Text>
                                <Text style={styles.gridLabel}>BASIC SALARY & GRADE</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(basic)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>8</Text>
                                <Text style={styles.gridLabel}>H.R.A.</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(hra)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>9</Text>
                                <Text style={styles.gridLabel}>CONVEYANCE</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(conveyance)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>10</Text>
                                <Text style={styles.gridLabel}>MEDICAL</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(medical)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>11</Text>
                                <Text style={styles.gridLabel}>SPECIAL ALLOWANCE</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(special)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>12</Text>
                                <Text style={styles.gridLabel}>SUPERANNUATION/EX-GRATIA/BONUS</Text>
                                <Text style={styles.gridValue}>NIL</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>13</Text>
                                <Text style={styles.gridLabel}>PF</Text>
                                <Text style={styles.gridValue}>NIL</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>14</Text>
                                <Text style={styles.gridLabel}>OTHERS</Text>
                                <Text style={styles.gridValue}>NIL</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>15</Text>
                                <Text style={styles.gridLabel}>TOTAL GROSS SALARY</Text>
                                <Text style={styles.gridValue}>INR – {formatNum(totalGross)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>16</Text>
                                <Text style={styles.gridLabel}>ADDITIONAL BENEFITS AGREED</Text>
                                <Text style={styles.gridValue}>NIL</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>17</Text>
                                <Text style={styles.gridLabel}>ANY SPECIAL CONDITION</Text>
                                <Text style={styles.gridValue}>Tax will be deducted as per Govt. Norms.</Text>
                            </View>
                            <View style={[styles.tableRow, styles.gridRow]}>
                                <Text style={styles.gridNum}>18</Text>
                                <Text style={styles.gridLabel}>PROBATION/CONTRACT</Text>
                                <Text style={styles.gridValue}>As per T&C</Text>
                            </View>
                        </View>
                    </View>
                    <View break>
                        <Text style={styles.sectionHeader}>ANNEXURE II</Text>
                        <Text style={styles.subSectionHeader}>TERMS AND CONDITIONS</Text>
                        <NumberedClause num="1" title="Salary">You will be paid monthly emoluments as under: -</NumberedClause>
                        <View style={styles.salaryTable}>
                            <View style={[styles.tableRow, styles.tableHeader]}>
                                <Text style={styles.col1}>Salary Component</Text>
                                <Text style={styles.col2}>Monthly (INR)</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.col1}>Basic</Text>
                                <Text style={styles.col2}>{formatNum(basic)}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.col1}>H.R.A</Text>
                                <Text style={styles.col2}>{formatNum(hra)}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.col1}>Medical Allowance</Text>
                                <Text style={styles.col2}>{formatNum(medical)}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.col1}>Conveyance Allowance</Text>
                                <Text style={styles.col2}>{formatNum(conveyance)}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.col1}>Special Allowance</Text>
                                <Text style={styles.col2}>{formatNum(special)}</Text>
                            </View>
                            <View style={[styles.tableRow, styles.tableHeader]}>
                                <Text style={styles.col1}>TOTAL GROSS SALARY</Text>
                                <Text style={styles.col2}>{formatNum(totalGross)}</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.paragraph}>The Management reserves the right to modify the emoluments at its Sole discretion in observance of your performance and conduct.</Text>

                    <NumberedClause num="2" title="Probation">You will be on probation for a period of six months from the date of your joining thereafter if your performance is found satisfactory, your appointment shall be confirmed in writing. However kindly note that, if found necessary, probation period may be extended at the discretion of the management or may be even dispensed earlier either, during the probation or in the extended period of probation. Unless confirmed in writing you will be deemed as a "probationer" and shall not have the privilege to enjoy the multifaceted benefits enjoyed by a permanent employee.</NumberedClause>
                    <NumberedClause num="3" title="Place of posting">Your place of posting at present will be D-1/313 Sector O, Mansarovar Yojna, Shaheed Path, Lucknow, Uttar Pradesh-226002 but the management may, if it deems necessary and viable transfer you to another department, post or place or sister concern either in existence or may come into existence later on or either at the place of posting or at any other place where the management may establish/open its Units/ Branches later on anywhere in India with sole discretion of the company. Upon such transfer the rules and regulations of service applicable to such post or at the place of transfer shall become applicable to you and you shall be subsequently provided with a transfer letter.</NumberedClause>
                    <NumberedClause num="4" title="Termination & Resignation">During the probation period or the extended period of probation your services can be terminated at any time without any prior notice and your services will come to an end automatically upon the expiry of the initial or extended probation period if the Company finds your performance not at par with the requirements and expectations of the Organization, your performance shall be monitored in terms of observance of the technical skills deployed, conduct and behavior displayed and other learned skills exhibited by you within the Probation period. Post confirmation your services can be terminated by a 1 (One) Month notice or payment in lieu thereof. And similarly, you are required to serve a 1 (One) Month notice on tendering of resignation, you shall work with utmost dedication and devotion in the notice period. Kindly note that post resignation during the Notice Period, you shall not be entitled to avail or utilize your earned leave even due to employee / your credit.</NumberedClause>

                    <View style={styles.bulletPoint}>
                        <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 30, marginBottom: 3 }}>Note:</Text>
                        <BulletClause level={1}>Ensure completion of all pending projects before leaving the company to ensure continuity of operations and client satisfaction, including collaboration with supervisors and team members, setting realistic timelines, maintaining communication, and providing necessary documentation and training for smooth handover.</BulletClause>
                        <BulletClause level={1}>However in extreme cases if You are found to be indulged in any of the following acts such as, but not limited to, taking 3 or more than 3 uninformed leaves without supported and verifiable reasons, or being absent/taking unauthorized breaks during working hours, misconduct or moral turpitude, causing damage to the property of the Company; any disobedience of direction from management during the course of business hours, Breach of confidentiality/secrecy provisions set out in this Agreement then the parties shall try confrontational and reconciliation methods, if the same fails, then the Company reserves its right to terminate you and pursuant to such termination the company has the right to withhold your remuneration for the defaulting period. However, such withholding of payment cannot include forfeiture of accumulated Leave, as calculated in accordance with the Work Hours and Leave Policy.</BulletClause>
                        <BulletClause level={1}><Text style={styles.boldText}>CORRECTNESS OF THE INFORMATION GIVEN IN THE APPLICATION FOR EMPLOYMENT AND BIO DATA:</Text> You are being appointed in the company on the basis of the information and details provided by You. If, at any time, any information or detail given by You is found to be incorrect or inaccurate then, the Company may terminate Your services without any notice, salary in lieu of notice or compensation. Kindly note the company shall not be liable to any acts or omissions or chain of acts of omissions that may be caused due to such incorrect or inaccurate information supplied by you and you shall indemnify the Company of the consequences followed by the same.</BulletClause>
                        <BulletClause level={1}><Text style={styles.boldText}>Abandonment and automatic termination:</Text> Absence for a continuous period of 8 days (including absence when leave though applied for but not granted) would render you to lose Your lien on the service and the same shall automatically come to an end without any notice or even intimation. You shall be liable to reimburse one month's salary for such an act which shall be deducted from your salary or other dues since such an act causes the Company its precious training and resources.</BulletClause>
                    </View>
                    <NumberedClause num="5" title="Full & Final">All full and final settlement upon resignation by you or termination by the company will be done within a period of 30 days after the completion of your notice period.</NumberedClause>
                    <NumberedClause num="6" title="Mode of communication">For any service of notice or correspondences of whatever kind, you will be informed by ordinary post at the address or such other address which You may intimate to the management also a copy of the same shall be sent to you on your registered email id provided by you to the Company. In case of any change in your address, you will inform the management in writing to this effect within one week of such change and get such new address recorded in employee / your personal record.</NumberedClause>
                    <NumberedClause num="7" title="Leave">Entitlement of leave shall be as per the rules of the company. Starting 6 months' probation period, you will not get any kind of leaves except Week offs. You will be closely monitored by the management. Post completion of the probation period, you can avail all CL (Casual Leave), SL (Sick Leave) etc, through our company policy.</NumberedClause>
                    <View style={styles.bulletPoint}>
                        <BulletClause level={1}>You are entitled for 6 casual leaves including 6 sick leaves per annum. Unused CL & SL will lapse at the end of the year.</BulletClause>
                        <BulletClause level={1}>You are entitled for festival holidays per year as published by the Company at the end of every year for upcoming/next year. Note: Holidays depends upon the State/ District of that location.</BulletClause>
                        <BulletClause level={1}>To avail half leaves, you have to clearly inform in writing the reason for the same.</BulletClause>
                        <BulletClause level={1}>Not more than 2 Compensation Leaves are adjusted in a month from all leaves.</BulletClause>
                        <BulletClause level={1}>You are entitled for two half day leaves in a month, it will be considered as a casual leave. No extra half day leave in a month.</BulletClause>
                        <BulletClause level={1}>You should submit the leave request by a letter in writing bearing your signature or via official Mail I'd. Grant of leave will depend on the exigencies of work and shall be at the discretion of the management. Before proceeding on leave, you will have to apply for leave on the prescribed form to the appropriate authority and seek the prior sanction for leave. Similarly for extension of leave an application will have to be made in writing, well in advance. Kindly note that mere submission of leave application must not be viewed as granted leave. All leaves are subject to approval by the reporting manager, in 24 hrs. in advance, if leave is not taken as prescribed in this clause, then such leave will be considered as Leave without Pay (LWP) / absent.</BulletClause>
                        <BulletClause level={1}>Leaves taken without any information/ due permission would be treated as leave without pay/ absent.</BulletClause>
                        <BulletClause level={1}>Breach of any leave rule would attract disciplinary action.</BulletClause>
                    </View>
                    <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 4, marginBottom: 2 }}>Note: Intimation of approval of any or all kind of leave in course of emergencies must be mailed only to helpw3info@gmail.com . No other mode of communication is permissible. Any contrary of the same will be treated as invalid leave request. All employees should register their attendance (day in & day out) properly in the bio metrics (with their finger imprints) installed in the workplace entrance.</Text>
                    <View style={styles.bulletPoint}>
                        <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 4, marginBottom: 2 }}>Half day leave:</Text>
                        <BulletClause level={1}>Half Day will be marked if you arrive at work after 11:30 AM and depart before 4:30 PM.</BulletClause>
                        <BulletClause level={1}>The minimum timings for a half day are: 10:00 AM to 2:30 PM or 3:30 PM to 7:00 PM.</BulletClause>

                        <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 4, marginBottom: 2 }}>Leave without Pay (LWP):</Text>
                        <BulletClause level={1}>Any leave not approved by the Management shall be treated as LWP.</BulletClause>
                        <BulletClause level={1}>Any leave taken without submitting the Leave form will be considered as LWP.</BulletClause>

                        <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 4, marginBottom: 2 }}>Compensation Leave / Company off (CO):</Text>
                        <BulletClause level={1}>If due to burden of work you are required to work on a weekend/ holiday can take a Compensation Leave/CO.</BulletClause>
                        <BulletClause level={1}>Compensation Leave/CO cannot be transferred but can be accumulated.</BulletClause>
                        <BulletClause level={1}>Compensation Leave/CO has to be taken only after prior permission from the Team Leader/ Manager/ HR. Failing the same, the leave will be treated as leave.</BulletClause>
                        <BulletClause level={1}>Only one member of a team, at a time, can avail Compensation Leave or as per approval of the department head.</BulletClause>
                        <BulletClause level={1}>Any employee / you, taking the Compensation Leave should clearly mention the reason of taking leave.</BulletClause>
                    </View>
                    <Text style={{ fontFamily: 'Helvetica-Bold', marginTop: 4, marginBottom: 2 }}>Medical Leave</Text>
                    <Text style={styles.paragraph}>Medical certificate from an authorized medical attendant is necessary for grant of this leave. This leave may be combined with any other kind of leave due and admissible, provided total period of leave does not exceed 3 days in normal condition; in case of severity, it can be extended however the same depends on that time and circumstances.</Text>

                    <NumberedClause num="8" title="Restriction on other employment/Engagement">You will employ yourself efficiently and diligently to the best of Your ability, and diligently to the best of Your ability, and devote Your whole time to the work of the company and will not engage Yourself directly or indirectly either honorary or on remuneration in any service, trade, business, vocation or occupation (including agency of an insurance company) or in advisory capacity.</NumberedClause>
                    <NumberedClause num="9" title="Confidentiality" />
                    <View style={styles.bulletPoint}>
                        <LetteredClause letter="a">You acknowledge that, in the course of performing and fulfilling your duties hereunder, you may have access to and be entrusted with confidential information concerning the present and contemplated financial status and activities of the Employer, the disclosure of any of which confidential information to the competitors of the Employer would be highly detrimental to the interests of the Employer.</LetteredClause>
                        <LetteredClause letter="b">You further acknowledge and agree that the right to maintain the confidentiality of trade secrets, source code, website information, business plans or client information or other confidential or proprietary information, for the purpose of enabling the other party such information constitutes a proprietary right which the Company is entitled to protect.</LetteredClause>
                        <LetteredClause letter="c">Accordingly, you covenant and agree with the Employer that You will not, under any circumstance during the continuance of this agreement, disclose any such confidential information to any person, firm or corporation, and even after the termination of employment, you shall not disclose or make use of the same or cause any of confidential information to be disclosed in any manner.</LetteredClause>
                        <LetteredClause letter="d">The Company owns any intellectual property created by you during the course of the employment, or in relation to a certain field, and you shall thereon have all the necessary rights to retain it. After termination of employment, you shall not impose any rights on the intellectual property created. Any source code, software or other intellectual property developed, including but not limited to website design or functionality that was created by you, during the course of employment under this Agreement, shall belong to the Company.</LetteredClause>
                        <LetteredClause letter="e" title="Efficient & faithful performance">That during the course of your employment, you will employ yourself efficiently and diligently to the best of your ability and will devote your whole time and attention to the interest of the company. You shall obey and comply with all the lawful orders and directions given to you by superiors, you shall honestly, diligently and faithfully serve the organization and use your utmost endeavor to promote the interest of the organization.</LetteredClause>
                        <LetteredClause letter="f" title="Rules and Regulations">You will be bound by the company's office orders enforced by the Management rules regulations and such other practices, systems, procedures and policies framed, amended, modified or omitted from time to time in relation to conduct, discipline, medical leaves, service conditions and will form as part of these terms of employment. You will, in addition to the terms and conditions of employment specifically stated herein, also be governed by statutory laws enacted by Central or State Government or local authorities as may be applicable to employee / you from time to time.</LetteredClause>
                        <LetteredClause letter="g" title="Indemnity">You will fully and effectively indemnify the Company against all losses, damages and expenses incurred due to any breach of the terms of this Agreement and other Agreement entered by you, or any fraud, misconduct or gross negligence on your part in the course of your employment with the Company.</LetteredClause>
                        <LetteredClause letter="h" title="Increments">The annual increment if granted to other employees will not be claimed as a matter of right. It will be based on your performance, if found satisfactory during the past year of service in terms of efficiency, regularity, punctuality and discipline and the same may be withheld if the performance is found unsatisfactory.</LetteredClause>
                        <LetteredClause letter="i" title="Work Hours/Attendance">All employees are requested to synchronize their watches with the office time clock. The office timings are from 10:00 AM —07:00 PM or as per shift timings allotted to you by the HR.</LetteredClause>

                        <View style={styles.bulletPoint}>

                            <BulletClause level={2}>All employees shall register their attendance (day in & day out) properly in the bio metrics (with their finger imprints).</BulletClause>
                            <BulletClause level={2}>All employees should not forget to register their attendance; failing so may result in salary deduction.</BulletClause>
                            <BulletClause level={2}>Employees reporting after 10:30 AM or leaving before 07:00 PM would be treated as late coming / early departure & his/her entry would be marked as late.</BulletClause>
                            <BulletClause level={2}>Late coming between 10:30 am and 10:45 am will be treated as 1 late coming and further late coming will be counted in multiples of 15 minutes.</BulletClause>
                            <BulletClause level={2}>Any Entry on/after 11:30 am or departure on/before 4:30 pm would be marked as Half Day absent.</BulletClause>
                            <BulletClause level={2}>In case of any 3 late incomings in a month, would be converted/treated as a Half Day absent and thereafter further late coming will be treated as half day absent and so on…</BulletClause>
                            <BulletClause level={2}>Any missing day in/ day out entries will be treated as "Absent". Punching In-time and Out-time should be mandatory to mark. In case of forgetting to punch in or out, you will have a time of 1 week to update the same. Any errors in punching hours during last week of the month should be communicated latest by the first working day of the next month.</BulletClause>
                        </View>
                        <LetteredClause letter="j" title="Fitness">That continuation of your service is subject to you being found and remaining medically (physically and mentally) fit.</LetteredClause>
                        <LetteredClause letter="k" title="Retirement">You are liable to retire on your attaining the age of 60 years or earlier, if found medically unfit.</LetteredClause>
                        <LetteredClause letter="l" title="Legal Action">Company reserves its right to initiate legal action against you, if you act in contravention to the terms of this Agreement.</LetteredClause>
                        <View style={styles.bulletPoint}>
                            <BulletClause level={2}>This Agreement will be governed by the laws of India.</BulletClause>
                            <BulletClause level={2}>This Agreement (including the Offer Letter) constitutes the entire agreement between the Parties with respect to its subject matter and may not be amended except in a writing signed by a duly authorized of the respective Parties.</BulletClause>
                            <BulletClause level={2}>That in case of any dispute between the parties, the parties will find out possibilities to amicably settle the dispute through reconciliation and mediation in case the mediation fails then through arbitration. It is specified that all disputes, claims, suits and actions arising out of this Agreement or its validity will be finally and exclusively decided by arbitration in case of failure of mediation in accordance with the provisions of the Arbitration and Conciliation Act, 1996 ("Act"). The venue of arbitration shall be Lucknow exclusively. Any award made in the arbitration shall be final and binding on the Parties.</BulletClause>
                            <BulletClause level={2}>Subject to the above, the Parties submit to the exclusive jurisdiction of the competent courts in Lucknow in respect of any dispute or differences or claims arising between the Parties.</BulletClause>
                        </View>
                    </View>
                </View>
                {/* SIGNATORIES */}
                <View style={styles.signRow}>
                    <View style={styles.signBox}>
                        <Text style={styles.signatoryCompany}>For W3 Info Solutions,</Text>
                        {finalSign ? (<Image src={finalSign} style={styles.signatureImage} />) : (<Text style={styles.signatureName}>{companyInfo?.hrName || "Anurag Shukla"}</Text>)}
                        <Text style={styles.signatoryRole}>Authorized Signatory</Text>
                    </View>
                </View>

                {/* WATERMARK SUPERIMPOSED OVER CONTENT & SIGNATURE */}
                {finalLogo ? (
                    <View style={styles.watermarkContainer} fixed>
                        <Image src={finalLogo} style={styles.watermarkImage} />
                    </View>
                ) : null}

                <View style={styles.footerContainer} fixed>
                    <View style={styles.footerLine}>
                        <Text style={styles.footerText}><Text style={styles.boldText}>Registered Office:- </Text>Balak Ram Colony, Niyawan, Ayodhya, U.P.</Text>
                        <Text style={styles.footerText}><Text style={styles.boldText}>Development Office:- </Text>Sector O, Mansarovar Yojna, Lucknow, U.P.</Text>
                        <Text style={styles.footerText}><Text style={styles.boldText}>Website: </Text>www.w3info.co.in</Text>
                    </View>
                </View>

            </Page>
        </Document>
    );
};

export default JoiningLetterDocument;
