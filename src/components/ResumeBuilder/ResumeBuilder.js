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

    return (
        <div className="d-flex">
            <div className="resume-builder-container">
                <FileSection fileSection={fileSection} setFileSection={setFileSection} />
                <GenericSection sectionConfig={personalInfoConfig} />
                <GenericSection sectionConfig={educationConfig} />
                <GenericSection sectionConfig={experienceConfig} />
                <GenericSection sectionConfig={activitiesLeadershipConfig} />
                <GenericSection sectionConfig={projectsConfig} />
                <GenericSection sectionConfig={skillsConfig} />
            </div>
            <div className="preview-container">
                <h3>PREVIEW</h3>
                {/* Resume preview content */}
            </div>
        </div>
    );
}

export default ResumeBuilder;
