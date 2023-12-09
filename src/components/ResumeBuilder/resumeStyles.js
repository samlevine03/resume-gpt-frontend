import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    // Global page settings
    page: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 50, // Increased top margin
    },
    underline: {
      backgroundColor: '#000000',
      height: 1,
      flexGrow: 1,
      marginBottom: 3,
      marginTop: -3,
    },

    // Header section styles
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
        marginTop: 2,
    },
    contactInfo: {
        fontSize: 11,
        fontFamily: 'Tinos',
        marginTop: 2,
    },

    // Education section styles
    educationSection: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50, // Adjust right margin if needed
    },
    educationHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 3,
    },
    educationHeader: {
        fontSize: 11,
        fontFamily: 'Tinos',
        fontWeight: 'bold',
    },
    educationLineOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    schoolName: {
        fontSize: 11,
        fontFamily: 'Tinos',
        fontWeight: 'bold',
    },
    schoolLocation: {
        fontSize: 11,
        fontFamily: 'Tinos',
    },
    educationLineTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    degreeType: {
        fontSize: 11,
        fontFamily: 'Tinos',
        fontStyle: 'italic',
    },
    endDate: {
        fontSize: 11,
        fontFamily: 'Tinos',
    },
    gpa: {
        fontSize: 11,
        fontFamily: 'Tinos',
    },
    activitiesContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Align items to the top of the container
    },
    activitiesLabel: {
        fontSize: 11,
        fontFamily: 'Tinos',
        fontWeight: 'bold',
    },
    activitiesContent: {
        fontSize: 11,
        fontFamily: 'Tinos',
        marginLeft: 2, // Adjust spacing between label and content
        flex: 1, // Allow content to take up the remaining space
    },
});
