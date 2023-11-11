import React from 'react';
import ResumeName from './ResumeName';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import './ResumeBuilder.css';

function ResumeBuilder() {
    return (
        <div className="d-flex">
            <div className="resume-builder-container">
                <ResumeName />
                <PersonalInfo />
                <Education />
                {/* ... add other components as needed */}
            </div>
            <div className="preview-container">
                <h1>RESUME PREVIEW</h1>
                {/* Resume preview content */}
            </div>
        </div>
    );
}

export default ResumeBuilder;