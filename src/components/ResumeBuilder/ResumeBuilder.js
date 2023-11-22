import React, { useState } from 'react';
import FileSection from './FileSection';
import GenericSection from './GenericSection';
import './ResumeBuilder.css';
import { 
    personalInfoConfig, 
    educationConfig, 
    experienceConfig, 
    activitiesLeadershipConfig, 
    projectsConfig,
    skillsConfig
} from './sectionConfigs';

function ResumeBuilder() {
    const [fileSection, setFileSection] = useState('');
    const [formData, setFormData] = useState({
        personalInfo: [{}],
        education: [],
        experience: [],
        activitiesLeadership: [],
        projects: [],
        skills: [{}],
    });

    return (
        <div className="d-flex">
            <div className="resume-builder-container">
                <FileSection fileSection={fileSection} setFileSection={setFileSection} />
                <GenericSection
                    sectionConfig={personalInfoConfig}
                    sectionData={formData.personalInfo}
                    onUpdate={(updatedData) => setFormData({ ...formData, personalInfo: updatedData })}
                />
                <GenericSection
                    sectionConfig={educationConfig}
                    sectionData={formData.education}
                    onUpdate={(updatedData) => setFormData({ ...formData, education: updatedData })}
                />
                <GenericSection
                    sectionConfig={experienceConfig}
                    sectionData={formData.experience}
                    onUpdate={(updatedData) => setFormData({ ...formData, experience: updatedData })}
                />
                <GenericSection
                    sectionConfig={activitiesLeadershipConfig}
                    sectionData={formData.activitiesLeadership}
                    onUpdate={(updatedData) => setFormData({ ...formData, activitiesLeadership: updatedData })}
                />
                <GenericSection
                    sectionConfig={projectsConfig}
                    sectionData={formData.projects}
                    onUpdate={(updatedData) => setFormData({ ...formData, projects: updatedData })}
                />
                <GenericSection
                    sectionConfig={skillsConfig}
                    sectionData={formData.skills}
                    onUpdate={(updatedData) => setFormData({ ...formData, skills: updatedData })}
                />
            </div>
            <div className="preview-container">
                <h3>PREVIEW</h3>
                <button onClick={() => console.log(formData)}>Log Form Data</button>
                {/* Resume preview content */}
            </div>
        </div>
    );
}

export default ResumeBuilder;
