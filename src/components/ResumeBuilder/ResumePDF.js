import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const ResumePDF = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Full Name: {formData.personalInfo[0].fullName}</Text>
        {/* Add more fields as needed */}
      </View>
      {/* You can add more Views for different sections like education, experience etc. */}
    </Page>
  </Document>
);

export default ResumePDF;
