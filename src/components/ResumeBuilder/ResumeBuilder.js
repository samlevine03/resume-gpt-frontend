import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

import FileSection from './FileSection';
import GenericSection from './GenericSection';
import ResumePDF from './ResumePDF';
import ResumePreview from './ResumePreview';

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
                <Button variant="warning" className="btn-sm" onClick={() => console.log(formData)}>Log Form Data</Button>
                <ResumePreview formData={formData} />
            </div>
        </div>
    );
}

export default ResumeBuilder;
