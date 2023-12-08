import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { styles } from './resumeStyles';

// Register the Tinos font family with all the available styles
Font.register({
  family: 'Tinos',
  fonts: [
    { src: '/fonts/Tinos-Regular.ttf', fontWeight: 'normal', fontStyle: 'normal' },
    { src: '/fonts/Tinos-Italic.ttf', fontWeight: 'normal', fontStyle: 'italic' },
    { src: '/fonts/Tinos-Bold.ttf', fontWeight: 'bold', fontStyle: 'normal' },
  ],
});

const ResumePDF = ({ formData }) => {
  const personalInfo = formData.personalInfo[0];
  const contactItems = [
    personalInfo.email,
    personalInfo.showSecondEmail ? personalInfo.secondEmail : null,
    personalInfo.phoneNumber,
    personalInfo.showLinkedIn ? personalInfo.linkedIn : null,
    personalInfo.showOtherURL ? personalInfo.otherURL : null,
  ].filter(Boolean).join(' | ');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>
          <Text style={styles.address}>{personalInfo.showAddress ? personalInfo.address : ''}</Text>
          <Text style={styles.contactInfo}>{contactItems}</Text>
        </View>
        {/* The rest of the resume sections will go here */}
        <View style={styles.section}>
          {/* Add content for other sections like education, experience etc. */}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
