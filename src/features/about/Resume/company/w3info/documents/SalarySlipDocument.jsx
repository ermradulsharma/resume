import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { numberToWords } from '../../utils/numberToWords';

const constant = {
    borderColor: '#000000',
    borderWidth: 2,
    cellBorderWidth: 1,
    fontFamily: 'Helvetica-Bold'
};

const styles = StyleSheet.create({
    page: { padding: 30, fontFamily: 'Helvetica', fontSize: 9, color: constant.borderColor, lineHeight: 1.2, position: 'relative' },
    outerBox: { borderWidth: constant.borderWidth, borderColor: constant.borderColor, borderStyle: 'solid' },
    watermarkContainer: { position: 'absolute', top: 80, left: 180, width: 500, height: 400, alignItems: 'center', justifyContent: 'center', opacity: 0.3, transform: 'rotate(-30deg)' },
    watermarkImage: { width: '100%', height: '100%', objectFit: 'cover' },

    headerRow: { flexDirection: 'row', alignItems: 'stretch', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor },
    logoCol: { width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 0 },
    logoImage: { maxHeight: 100, maxWidth: 650, height: 100, width: 650, objectFit: 'cover' },
    companyNameText: { fontSize: 20, fontFamily: constant.fontFamily, color: '#0277bd', marginLeft: 6 },
    addressCol: { width: '50%', borderLeftWidth: constant.cellBorderWidth, borderLeftColor: constant.borderColor, paddingLeft: 0, alignItems: 'center', justifyContent: 'center' },
    companyTitle: { fontSize: 15, fontFamily: constant.fontFamily, textDecoration: 'underline', marginBottom: 7, fontWeight: 900 },
    addressText: { fontSize: 12, fontFamily: constant.fontFamily, textAlign: 'center', marginBottom: 4 },

    bannerRow: { borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor, paddingVertical: 5, alignItems: 'center' },
    bannerTitle: { fontSize: 12, fontFamily: constant.fontFamily },

    tableRow: { flexDirection: 'row', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor, alignItems: 'center', minHeight: 22 },
    cell: { paddingHorizontal: 6, paddingVertical: 5, fontSize: 10 },
    cellBold: { fontFamily: constant.fontFamily },
    cellRight: { textAlign: 'right' },
    cellCenter: { textAlign: 'center' },
    borderRight: { borderRightWidth: constant.cellBorderWidth, borderRightColor: constant.borderColor },
    col1: { width: '25%' },
    col2: { width: '25%' },
    col3: { width: '25%' },
    col4: { width: '25%' },

    eCol1: { width: '25%' },
    eCol2: { width: '12.5%', textAlign: 'right' },
    eCol3: { width: '12.5%', textAlign: 'right' },
    eCol4: { width: '25%' },
    eCol5: { width: '25%', textAlign: 'right', alignItems: 'stretch' },

    netPayableRow: { flexDirection: 'row', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor, alignItems: 'center', minHeight: 22, backgroundColor: '#ffffff' },
    wordsRow: { flexDirection: 'row', borderBottomWidth: 1.5, borderBottomColor: constant.borderColor, alignItems: 'center', minHeight: 22 },

    signRow: { flexDirection: 'row', minHeight: 55, alignItems: 'stretch', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor },
    signBox: { width: '50%', textAlign: 'center', justifyContent: 'flex-end', paddingBottom: 4 },
    footerText: { fontSize: 8, fontFamily: constant.fontFamily, textAlign: 'center', paddingVertical: 4 }
});

const formatNum = (val) => {
    if (!val || isNaN(val) || Number(val) === 0) return '-';
    return Number(val).toLocaleString('en-IN');
};

const SalarySlipDocument = ({ companyInfo, salaryData, logoUrl }) => {
    const totalActualEarnings = (
        Number(salaryData.basicActual || 0) +
        Number(salaryData.hraActual || 0) +
        Number(salaryData.conveyanceActual || 0) +
        Number(salaryData.medicalActual || 0) +
        Number(salaryData.otherAllowActual || 0) +
        Number(salaryData.incentiveActual || 0)
    );

    const totalEarnedEarnings = (
        Number(salaryData.basicEarned || 0) +
        Number(salaryData.hraEarned || 0) +
        Number(salaryData.conveyanceEarned || 0) +
        Number(salaryData.medicalEarned || 0) +
        Number(salaryData.otherAllowEarned || 0) +
        Number(salaryData.incentiveEarned || 0)
    );

    const totalDeductions = (
        Number(salaryData.epfDeduction || 0) +
        Number(salaryData.esiDeduction || 0) +
        Number(salaryData.professionalTax || 0) +
        Number(salaryData.loanRecovery || 0)
    );

    const netPayable = totalEarnedEarnings - totalDeductions;
    const wordsText = numberToWords(netPayable);

    const isValidLogo = logoUrl && typeof logoUrl === 'string' && (logoUrl.startsWith('data:image/png') || logoUrl.startsWith('data:image/jpeg'));
    const finalLogo = isValidLogo ? logoUrl : null;

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
                {finalLogo ? (<View style={styles.watermarkContainer}><Image src={finalLogo} style={styles.watermarkImage} /></View>) : null}

                <View style={styles.outerBox}>
                    <View style={styles.headerRow}>
                        <View style={styles.logoCol}>{finalLogo ? <Image src={finalLogo} style={styles.logoImage} /> : null}</View>
                        <View style={styles.addressCol}>
                            <Text style={styles.companyTitle}>W3 INFO SOLUTIONS</Text>
                            <Text style={styles.addressText}>Balak Ram colony, Niyawan, Ayodhya</Text>
                            <Text style={styles.addressText}>Uttarpradesh -224001</Text>
                            <Text style={styles.addressText}>Tel No:- +91 6393332800</Text>
                        </View>
                    </View>

                    <View style={styles.bannerRow}><Text style={styles.bannerTitle}>Salary Slip for the Month of: {salaryData.payMonthYear || "September 2024"}</Text></View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.cellBold, styles.col1, styles.borderRight]}>Employee Name</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.col2, styles.borderRight]}>{salaryData.employeeName}</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.col3, styles.borderRight]}>Total Days</Text>
                        <Text style={[styles.cell, styles.col4]}>{salaryData.totalDays}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.col1, styles.borderRight]}>Designation</Text>
                        <Text style={[styles.cell, styles.col2, styles.borderRight]}>{salaryData.designation}</Text>
                        <Text style={[styles.cell, styles.col3, styles.borderRight]}>LOPs</Text>
                        <Text style={[styles.cell, styles.col4]}>{salaryData.lops}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.col1, styles.borderRight]}>Date of Joining</Text>
                        <Text style={[styles.cell, styles.col2, styles.borderRight]}>{salaryData.dateOfJoining}</Text>
                        <Text style={[styles.cell, styles.col3, styles.borderRight]}>Paid Days</Text>
                        <Text style={[styles.cell, styles.col4]}>{salaryData.paidDays}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.col1, styles.borderRight]}>PF No</Text>
                        <Text style={[styles.cell, styles.col2, styles.borderRight]}>{salaryData.pfNo || '-'}</Text>
                        <Text style={[styles.cell, styles.col3, styles.borderRight]}>Bank name</Text>
                        <Text style={[styles.cell, styles.col4]}>{salaryData.bankName}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.col1, styles.borderRight]}>ESIC No</Text>
                        <Text style={[styles.cell, styles.col2, styles.borderRight]}>{salaryData.esicNo || '-'}</Text>
                        <Text style={[styles.cell, styles.col3, styles.borderRight]}>A/c no.</Text>
                        <Text style={[styles.cell, styles.col4]}>{salaryData.accountNo}</Text>
                    </View>

                    <View style={[styles.tableRow]}>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol1, styles.borderRight]}>Earnings</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol2, styles.borderRight]}>Actual Salary</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol3, styles.borderRight]}>Earnings (Rs)</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol4, styles.borderRight]}>Deductions</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol5]}>Amount (Rs)</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>Basic Wage</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.basicActual)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>{formatNum(salaryData.basicEarned)}</Text>
                        <Text style={[styles.cell, styles.eCol4, styles.borderRight]}>EPF</Text>
                        <Text style={[styles.cell, styles.eCol5]}>{formatNum(salaryData.epfDeduction)}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>House Rent Allow</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.hraActual)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>{formatNum(salaryData.hraEarned)}</Text>
                        <Text style={[styles.cell, styles.eCol4, styles.borderRight]}>ESI/Health Insurance</Text>
                        <Text style={[styles.cell, styles.eCol5]}>{formatNum(salaryData.esiDeduction)}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>Conveyance Allow</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.conveyanceActual)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>{formatNum(salaryData.conveyanceEarned)}</Text>
                        <Text style={[styles.cell, styles.eCol4, styles.borderRight]}>Professional Tax</Text>
                        <Text style={[styles.cell, styles.eCol5]}>{formatNum(salaryData.professionalTax)}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>Medical Allow</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.medicalActual)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>{formatNum(salaryData.medicalEarned)}</Text>
                        <Text style={[styles.cell, styles.eCol4, styles.borderRight]}>Loan Recovery</Text>
                        <Text style={[styles.cell, styles.eCol5]}>{formatNum(salaryData.loanRecovery)}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>Other Allow</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.otherAllowActual)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>{formatNum(salaryData.otherAllowEarned)}</Text>
                        <Text style={[styles.cell, styles.eCol4, styles.borderRight]}></Text>
                        <Text style={[styles.cell, styles.eCol5]}></Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>Incentive Amount</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.incentiveActual)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>{formatNum(salaryData.incentiveEarned)}</Text>
                        <Text style={[styles.cell, styles.eCol4, styles.borderRight]}></Text>
                        <Text style={[styles.cell, styles.eCol5]}></Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol1, styles.borderRight]}>Total Earnings</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol2, styles.borderRight]}>{totalActualEarnings.toLocaleString('en-IN')}</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol3, styles.borderRight]}>{totalEarnedEarnings.toLocaleString('en-IN')}</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol4, styles.borderRight]}>Total Deductions</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol5]}>{totalDeductions.toLocaleString('en-IN')}</Text>
                    </View>

                    <View style={styles.netPayableRow}>
                        <Text style={[styles.cell, styles.cellBold, { width: '25%' }, styles.borderRight]}>Net Payable</Text>
                        <Text style={[styles.cell, { width: '50%' }]}></Text>
                        <Text style={[styles.cell, styles.cellBold, { width: '25%', textAlign: 'right', fontSize: 10 }]}>{netPayable.toLocaleString('en-IN')}</Text>
                    </View>

                    <View style={styles.wordsRow}>
                        <Text style={[styles.cell, styles.cellBold, { width: '25%' }, styles.borderRight]}>Amount in words</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.cellCenter, { width: '75%', textAlign: 'right', fontSize: 10 }]}>{wordsText}</Text>
                    </View>

                    <View style={styles.signRow}>
                        <View style={[styles.signBox, styles.borderRight]}><Text style={styles.cellBold}>Employee Signature</Text></View>
                        <View style={styles.signBox}><Text style={styles.cellBold}>CHECKED BY</Text></View>
                    </View>

                    <Text style={styles.footerText}>*** This is a computer generated statement which does not require signature or stamp***</Text>
                </View>
            </Page>
        </Document>
    );
};

export default SalarySlipDocument;
