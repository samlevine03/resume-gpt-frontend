import React, { useState } from 'react';
import ResumeName from './ResumeName';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
// ... import other components as needed
import Preview from './Preview';
import './ResumeBuilder.css';

function ResumeBuilder() {

    const [resumeName, setResumeName] = useState('');

    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        secondEmail: '',
        linkedIn: '',
        otherURL: '',
        showAddress: false,
        showSecondEmail: false,
        showLinkedIn: false,
        showOtherURL: false,
    });

    const [educationList, setEducationList] = useState([{
        schoolName: '',
        location: '',
        degreeType: '',
        fieldsOfStudy: [''],
        startMonthYear: '',
        endMonthYear: '',
        gpa: '',
        coursework: '',
        activities: '',
        honors: '',
        showGPA: false,
        showCoursework: false,
        showActivities: false,
        showHonors: false,
    }]);

    return (
        <div className="d-flex">
            <div className="resume-builder-container">
                {/* <ResumeName />
                <PersonalInfo />
                <Education /> */}
                <ResumeName resumeName={resumeName} setResumeName={setResumeName} />
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
                <Education educationList={educationList} setEducationList={setEducationList} />
                {/* ... add other components as needed */}
            </div>
            <div className="preview-container">
                {/* <h1>RESUME PREVIEW</h1> */}
                <Preview resumeName={resumeName} personalInfo={personalInfo} educationList={educationList} /* ...other props... */ />
                {/* Resume preview content */}
            </div>
        </div>
    );
}

export default ResumeBuilder;