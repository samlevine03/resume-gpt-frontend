import React, { useState } from 'react';
import ResumeName from './ResumeName';
import PersonalInfo from './PersonalInfo';
import Preview from './Preview';
import GenericSection from './GenericSection';
import './ResumeBuilder.css';

// Import configurations for each section
import { educationConfig, experienceConfig, activitiesLeadershipConfig, projectsConfig } from './sectionConfigs';

function ResumeBuilder() {
    const [resumeName, setResumeName] = useState('');
    const [personalInfo, setPersonalInfo] = useState({
        // ...initial state for personal info
    });

    return (
        <div className="d-flex">
            <div className="resume-builder-container">
                <ResumeName resumeName={resumeName} setResumeName={setResumeName} />
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

                <GenericSection sectionConfig={educationConfig} />
                <GenericSection sectionConfig={experienceConfig} />
                <GenericSection sectionConfig={activitiesLeadershipConfig} />
                <GenericSection sectionConfig={projectsConfig} />
                {/* Add other sections as needed */}
            </div>
            <div className="preview-container">
                <h3>PREVIEW</h3>
                {/* <Preview 
                    resumeName={resumeName} 
                    personalInfo={personalInfo} 
                    // Pass other necessary props for preview
                /> */}
                {/* Resume preview content */}
            </div>
        </div>
    );
}

export default ResumeBuilder;


// import React, { useState } from 'react';
// import ResumeName from './ResumeName';
// import PersonalInfo from './PersonalInfo';
// import Education from './Education';
// import Experience from './Experience';
// import ActivitiesLeadership from './ActivitiesLeadership';
// import Projects from './Projects';
// // ... import other components as needed
// import Preview from './Preview';
// import './ResumeBuilder.css';

// function ResumeBuilder() {

//     const [resumeName, setResumeName] = useState('');

//     const [personalInfo, setPersonalInfo] = useState({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         address: '',
//         secondEmail: '',
//         linkedIn: '',
//         otherURL: '',
//         showAddress: false,
//         showSecondEmail: false,
//         showLinkedIn: false,
//         showOtherURL: false,
//     });

//     const [educationList, setEducationList] = useState([{
//         schoolName: '',
//         location: '',
//         degreeType: '',
//         fieldsOfStudy: [''],
//         startDate: '',
//         endDate: '',
//         gpa: '',
//         coursework: '',
//         activities: '',
//         honors: '',
//         showGPA: false,
//         showCoursework: false,
//         showActivities: false,
//         showHonors: false,
//     }]);

//     const [experienceList, setExperienceList] = useState([{
//         organizationName: '',
//         location: '',
//         roleTitle: '',
//         startDate: '',
//         endDate: '',
//         bullets: [''],
//     }]);

//     const [showActivities, setShowActivities] = useState(true);
//     const [activityList, setActivityList] = useState([{
//         organizationName: '',
//         location: '',
//         roleTitle: '',
//         startDate: '',
//         endDate: '',
//         bullets: [''],
//     }]);

//     const [showProjects, setShowProjects] = useState(true);
//     const [projectList, setProjectList] = useState([{
//         organizationName: '',
//         location: '',
//         roleTitle: '',
//         startDate: '',
//         endDate: '',
//         bullets: [''],
//     }]);


//     return (
//         <div className="d-flex">
//             <div className="resume-builder-container">
//                 <ResumeName resumeName={resumeName} setResumeName={setResumeName} />
//                 <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
//                 <Education educationList={educationList} setEducationList={setEducationList} />
//                 <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
//                 <ActivitiesLeadership 
//                     activityList={activityList} 
//                     setActivityList={setActivityList}
//                     showActivities={showActivities}
//                     setShowActivities={setShowActivities}
//                 />
//                 <Projects 
//                     projectList={projectList} 
//                     setProjectList={setProjectList}
//                     showProjects={showProjects}
//                     setShowProjects={setShowProjects}
//                 />
//                 {/* ... add other components as needed */}
//             </div>
//             <div className="preview-container">
//                 <Preview 
//                     resumeName={resumeName} 
//                     personalInfo={personalInfo} 
//                     educationList={educationList}  
//                     experienceList={experienceList} 
//                     activityList={activityList}  
//                     showActivities={showActivities}
//                     projectList={projectList}
//                     showProjects={showProjects}
//                     /* ...other props... */ 
//                 />
//                 {/* Resume preview content */}
//             </div>
//         </div>
//     );
// }

// export default ResumeBuilder;