import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      paddingTop: 50, // Increased top margin
    },
    headerContainer: {
      textAlign: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    name: {
      fontSize: 12,
      fontFamily: 'Tinos',
      fontWeight: 'bold',
    },
    address: {
      fontSize: 11,
      fontFamily: 'Tinos',
      marginTop: 2, // Space between name and address
    },
    contactInfo: {
      fontSize: 11,
      fontFamily: 'Tinos',
      marginTop: 2, // Space between address and contact info
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },


    educationHeader: {
      fontSize: 11,
      fontFamily: 'Tinos',
      fontWeight: 'bold',
      textDecoration: 'underline',
      marginBottom: 3,
    },
    educationSection: {
      marginTop: 10,
    },
    schoolName: {
      fontSize: 11,
      fontFamily: 'Tinos',
      fontWeight: 'bold',
    },
    educationDetails: {
      fontSize: 10,
      fontFamily: 'Tinos',
    },
});