import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { numberToWords } from '../../utils/numberToWords';

const constant = { borderColor: '#8e24aa', borderWidth: 2, cellBorderWidth: 1, fontFamily: 'Helvetica-Bold' };

const styles = StyleSheet.create({
    page: { padding: 30, fontFamily: 'Helvetica', fontSize: 9, color: '#000000', lineHeight: 1.2 },
    outerBox: { borderWidth: constant.borderWidth, borderColor: constant.borderColor },
    headerRow: { flexDirection: 'row', alignItems: 'stretch', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor, backgroundColor: '#f3e5f5', padding: 10 },
    companyTitle: { fontSize: 16, fontFamily: constant.fontFamily, color: '#8e24aa' },
    addressText: { fontSize: 10, marginTop: 2 },
    bannerRow: { borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor, paddingVertical: 5, alignItems: 'center', backgroundColor: '#e1bee7' },
    bannerTitle: { fontSize: 11, fontFamily: constant.fontFamily },
    tableRow: { flexDirection: 'row', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor, alignItems: 'center', minHeight: 22 },
    cell: { paddingHorizontal: 6, paddingVertical: 5, fontSize: 10 },
    cellBold: { fontFamily: constant.fontFamily },
    borderRight: { borderRightWidth: constant.cellBorderWidth, borderRightColor: constant.borderColor },
    col1: { width: '25%' },
    col2: { width: '25%' },
    col3: { width: '25%' },
    col4: { width: '25%' },
    eCol1: { width: '30%' },
    eCol2: { width: '20%', textAlign: 'right' },
    eCol3: { width: '30%' },
    eCol4: { width: '20%', textAlign: 'right' },
    signRow: { flexDirection: 'row', minHeight: 55, alignItems: 'stretch', borderBottomWidth: constant.cellBorderWidth, borderBottomColor: constant.borderColor },
    signBox: { width: '50%', textAlign: 'center', justifyContent: 'flex-end', paddingBottom: 4 },
    footerText: { fontSize: 8, fontFamily: constant.fontFamily, textAlign: 'center', paddingVertical: 4 }
});

const formatNum = (val) => (!val || isNaN(val) || Number(val) === 0) ? '-' : Number(val).toLocaleString('en-IN');

const SalarySlipDocument = ({ salaryData = {} }) => {
    const totalEarned = Number(salaryData.basicEarned || 20000) + Number(salaryData.hraEarned || 12000) + Number(salaryData.otherAllowEarned || 3000);
    const totalDeductions = Number(salaryData.epfDeduction || 0);
    const netPayable = totalEarned - totalDeductions;

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
                <View style={styles.outerBox}>
                    <View style={styles.headerRow}>
                        <View>
                            <Text style={styles.companyTitle}>ZAIBA INFOTECH</Text>
                            <Text style={styles.addressText}>Sanjay Place, Agra, Uttar Pradesh - 282002</Text>
                        </View>
                    </View>

                    <View style={styles.bannerRow}><Text style={styles.bannerTitle}>Salary Slip for the Month of: {salaryData.payMonthYear || "January 2022"}</Text></View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.cellBold, styles.col1, styles.borderRight]}>Employee Name</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.col2, styles.borderRight]}>{salaryData.employeeName || "Mradul Sharma"}</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.col3, styles.borderRight]}>Designation</Text>
                        <Text style={[styles.cell, styles.col4]}>{salaryData.designation || "Laravel Developer"}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol1, styles.borderRight]}>Earnings Component</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol2, styles.borderRight]}>Amount (INR)</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol3, styles.borderRight]}>Deductions Component</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol4]}>Amount (INR)</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>Basic Wage</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.basicEarned || 20000)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>EPF</Text>
                        <Text style={[styles.cell, styles.eCol4]}>{formatNum(salaryData.epfDeduction || 0)}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.eCol1, styles.borderRight]}>House Rent Allowance</Text>
                        <Text style={[styles.cell, styles.eCol2, styles.borderRight]}>{formatNum(salaryData.hraEarned || 12000)}</Text>
                        <Text style={[styles.cell, styles.eCol3, styles.borderRight]}>Other Deductions</Text>
                        <Text style={[styles.cell, styles.eCol4]}>-</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol1, styles.borderRight]}>Total Earnings</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol2, styles.borderRight]}>{totalEarned.toLocaleString('en-IN')}</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol3, styles.borderRight]}>Total Deductions</Text>
                        <Text style={[styles.cell, styles.cellBold, styles.eCol4]}>{totalDeductions.toLocaleString('en-IN')}</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, styles.cellBold, { width: '30%' }, styles.borderRight]}>Net Payable</Text>
                        <Text style={[styles.cell, styles.cellBold, { width: '70%', textAlign: 'right' }]}>INR {netPayable.toLocaleString('en-IN')} ({numberToWords(netPayable)})</Text>
                    </View>

                    <View style={styles.signRow}>
                        <View style={[styles.signBox, styles.borderRight]}><Text style={styles.cellBold}>Employee Signature</Text></View>
                        <View style={styles.signBox}><Text style={styles.cellBold}>AUTHORIZATION</Text></View>
                    </View>

                    <Text style={styles.footerText}>*** Computer generated salary slip — Zaiba InfoTech ***</Text>
                </View>
            </Page>
        </Document>
    );
};

export default SalarySlipDocument;
