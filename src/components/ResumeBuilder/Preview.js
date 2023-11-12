import React from 'react';

function Preview({ 
    resumeName, 
    personalInfo, 
    educationList, 
    experienceList, 
    activityList, 
    showActivities,
    projectList,
    showProjects,
}) {
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
                        <p>Start Date: {education.startDate}</p>
                        <p>End Date: {education.endDate}</p>
                        {education.showGPA && <p>GPA: {education.gpa}</p>}
                        {education.showCoursework && <p>Coursework: {education.coursework}</p>}
                        {education.showHonors && <p>Honors: {education.honors}</p>}
                        {education.showActivities && <p>Activities: {education.activities}</p>}
                    </div>
                ))}
            </div>

            {/* Experience Preview */}
            <div>
                <h3>Experience</h3>
                {experienceList.map((experience, index) => (
                    <div key={index}>
                        <p>Organization: {experience.organizationName}</p>
                        <p>Location: {experience.location}</p>
                        <p>Role: {experience.roleTitle}</p>
                        <p>Start Date: {experience.startDate}</p>
                        <p>End Date: {experience.endDate}</p>
                        <ul>
                            {experience.bullets && experience.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Activities & Leadership Preview */}
            {showActivities && (
                <div>
                    <h3>Activities & Leadership</h3>
                    {activityList.map((activity, index) => (
                        <div key={index}>
                            <p>Organization: {activity.organizationName}</p>
                            <p>Location: {activity.location}</p>
                            <p>Role: {activity.roleTitle}</p>
                            <p>Start Date: {activity.startDate}</p>
                            <p>End Date: {activity.endDate}</p>
                            <ul>
                                {activity.bullets && activity.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Projects Preview */}
            {showProjects && (
                <div>
                    <h3>Projects</h3>
                    {projectList.map((project, index) => (
                        <div key={index}>
                            <p>Project: {project.projectName}</p>
                            <p>Tech Stack: {project.techStack}</p>
                            <p>Start Date: {project.startDate}</p>
                            <ul>
                                {project.bullets && project.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
            {/* ...other sections... */}
        </div>
    );
}

export default Preview;
