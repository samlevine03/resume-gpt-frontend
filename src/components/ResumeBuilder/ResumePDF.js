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
  const education = formData.education[0] || [];
  const educationEntries = Array.isArray(formData.education) ? formData.education : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>
          <Text style={styles.address}>{personalInfo.showAddress ? personalInfo.address : ''}</Text>
          <Text style={styles.contactInfo}>{contactItems}</Text>
        </View>

        {education.length !== 0 && (
          <View style={styles.educationSection}>
          <View style={styles.educationHeaderContainer}>
            <Text style={styles.educationHeader}>EDUCATION</Text>
          </View>
          <View style={styles.underline} />
          {educationEntries.map((edu, index) => (
            <View key={index}>
              put school name and location in the same view
              <View style={styles.educationLineOne}>
                <Text style={styles.schoolName}>{edu.schoolName}</Text>
                <Text style={styles.schoolLocation}>{edu.location}</Text>
              </View>
              <View style={styles.educationLineTwo}>
                <Text style={styles.degreeType}>{edu.degreeType} in {edu.fieldsOfStudy.join(', ')}</Text>
                <Text style={styles.endDate}>Expected, {edu.endDate}</Text>
              </View>
              <Text style={styles.gpa}>{education.showGPA ? "GPA: " + education.gpa : ''}</Text>
              {edu.showActivities && (
                <View style={styles.activitiesContainer}>
                  <Text style={styles.activitiesLabel}>Activities:</Text>
                  <Text style={styles.activitiesContent}>{edu.activities}</Text>
                </View>
              )}
              {edu.showCoursework && (
                <View style={styles.activitiesContainer}>
                  <Text style={styles.activitiesLabel}>Coursework:</Text>
                  <Text style={styles.activitiesContent}>{edu.coursework}</Text>
                </View>
              )}
              {edu.showHonors && (
                <View style={styles.activitiesContainer}>
                  <Text style={styles.activitiesLabel}>Honors:</Text>
                  <Text style={styles.activitiesContent}>{edu.honors}</Text>
                </View>
              )}


              {/* <Text style={styles.coursework}>{education.showCoursework ? "Coursework: " + education.coursework : ''}</Text> */}
              {/* <Text style={styles.honors}>{education.showHonors ? "Honors: " + education.honors : ''}</Text> */}
            </View>
          ))}
          </View>
        )}



      </Page>
    </Document>
  );
};

export default ResumePDF;
