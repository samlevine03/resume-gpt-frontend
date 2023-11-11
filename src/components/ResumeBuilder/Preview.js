import React from 'react';

function Preview({ resumeName, personalInfo, educationList }) {
    return (
        <div className="preview-container">
            <h2>Resume: {resumeName}</h2>

            {/* Personal Information Preview */}
            <div>
                <h3>Personal Information</h3>
                <p>Name: {personalInfo.fullName}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phoneNumber}</p>
                {personalInfo.showAddress && <p>Address: {personalInfo.address}</p>}
                {personalInfo.showSecondEmail && <p>Second Email: {personalInfo.secondEmail}</p>}
                {personalInfo.showLinkedIn && <p>LinkedIn: {personalInfo.linkedIn}</p>}
                {personalInfo.showOtherURL && <p>Other URL: {personalInfo.otherURL}</p>}
            </div>

            {/* Education Preview */}
            <div>
                <h3>Education</h3>
                {educationList.map((education, index) => (
                    <div key={index}>
                        <p>School: {education.schoolName}</p>
                        <p>Location: {education.location}</p>
                        <p>Degree Type: {education.degreeType}</p>
                        {education.fieldsOfStudy && education.fieldsOfStudy.map((field, idx) => (
                            <p key={idx}>Field of Study {idx + 1}: {field}</p>
                        ))}
                        <p>Start Date: {education.startMonthYear}</p>
                        <p>End Date: {education.endMonthYear}</p>
                        {education.showGPA && <p>GPA: {education.gpa}</p>}
                        {education.showCoursework && <p>Coursework: {education.coursework}</p>}
                        {education.showHonors && <p>Honors: {education.honors}</p>}
                        {education.showActivities && <p>Activities: {education.activities}</p>}
                    </div>
                ))}
            </div>

            {/* ...other sections... */}
        </div>
    );
}

export default Preview;
