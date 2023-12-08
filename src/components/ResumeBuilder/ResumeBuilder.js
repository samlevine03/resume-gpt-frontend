import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

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
        personalInfo: [personalInfoConfig.defaultEntry],
        education: [],
        experience: [],
        activitiesLeadership: [],
        projects: [],
        skills: [skillsConfig.defaultEntry],
    });

    const [debouncedData, setDebouncedData] = useState(formData);
    useEffect(() => {
        const handler = setTimeout(() => {
        setDebouncedData(formData);
        }, 500); // 500ms delay

        return () => {
        clearTimeout(handler);
        };
    }, [formData]);

    const preloadData = () => {
        setFormData({
            personalInfo: [{
                fullName: 'Sam Levine',
                address: '45 Tisdale Rd, Scarsdale, NY 10583',
                email: 'samlevine03@gmail.com',
                secondEmail: 'samuellevine@uchicago.edu',
                phoneNumber: '123-456-7890',
                linkedIn: '',
                otherURL: 'github.com/samlevine03',
                showAddress: true,
                showSecondEmail: true,
                showLinkedIn: false,
                showOtherURL: true
            }],
            education: [{
                schoolName: 'University of Chicago',
                location: 'Chicago, IL',
                degreeType: 'Bachelors',
                fieldsOfStudy: ['Computer Science', 'Economics'],
                startDate: '09-2021',
                endDate: '06-2025',
                currentlyWorking: false,
                gpa: '3.81',
                coursework: 'Data Structures, Theory of Algorithms, Computer Architecture, Functional Programming, Machine Learning, Operating Systems, Discrete Mathematics, Linear Algebra, Multivariable Calculus',
                activities: 'The Mark (Executive Board), Bite Magazine, Phi Delta Theta (Secretary)',
                honors: '',
                showGPA: true,
                showCoursework: true,
                showActivities: true,
                showHonors: false,
            }],
            experience: [{
                organizationName: 'Sixfold',
                location: 'New York, NY',
                roleTitle: 'Software Engineering Intern',
                startDate: '06-2023',
                endDate: '08-2023',
                currentlyWorking: false,
                bullets: [
                    'Built a tool with Pinecone and Langchain for querying financial documents in 4 languages, achieving ~1s per query.',
                    'Designed and implemented vector-store-based solutions to reduce large-language-model hallucinations by over 70%.',
                    'Developed new and optimized existing API endpoints with FastAPI and Pydantic.',
                    'Increased code coverage by 35% by writing tests for both front-end and back-end components with Jest and Pytest.',
                    'Utilized React and Bootstrap to build and modify front-end features to match designer specifications.',
                    'Authored onboarding documentation for key technologies including Ruby, Postgres, Node, Python, and GitHub.',
                ],
            }, {
                organizationName: 'Kona AI',
                location: '(Remote) Austin, TX',
                roleTitle: 'Business Development Intern',
                startDate: '06-2022',
                endDate: '08-2022',
                currentlyWorking: false,
                bullets: [
                    'Used ZoomInfo and HubSpot for targeted lead generation, identifying priority customers to fuel sales growth.',
                    'Crafted 15+ custom graphics and 6 templates for LinkedIn and Twitter marketing campaigns using Photoshop.',
                ],
            }, {
                organizationName: 'Create Venture Studio',
                location: '(Remote) New York, NY',
                roleTitle: 'Venture Intern',
                startDate: '05-2021',
                endDate: '06-2021',
                currentlyWorking: false,
                bullets: [
                    'Evaluated business models and enriched the diligence funnel through active participation in Create’s ideation events.',
                    'Spearheaded community growth and engagement initiatives for a portfolio company in the gaming industry.',
                ],
            }, {
                organizationName: 'Unqork',
                location: '(Remote) New York, NY',
                roleTitle: 'Production Engineering Intern',
                startDate: '06-2020',
                endDate: '08-2020',
                currentlyWorking: false,
                bullets: [
                    'Developed visual, data-driven metrics to analyze the Production Support Engineering team’s efficiency and success, including customer satisfaction and response-time dashboards.',
                ],
            }],
            activitiesLeadership: [],
            projects: [{
                projectName: 'Instruction-Level ARMv8 Simulator',
                techStack: 'C',
                date: '04-2023',
                bullets: [
                    'Developed an ARMv8 simulator with a five-stage pipeline, stalling, data forwarding, branching, and branch prediction for a subset of 30 ARM instructions.',
                    'Optimized memory access and system performance by integrating caching functionality into the program.',
                ],
            }, {
                projectName: 'Pomodoro Time Management Tool ',
                techStack: 'React, TypeScript, CSS',
                date: '07-2023',
                bullets: [
                    'Used React to build a time management application based off the Pomodoro method.',
                ],
            }, {
                projectName: 'Quail.ai',
                techStack: 'The Mark: Project Leader',
                date: '03-2023',
                bullets: [
                    'Led weekly UX design meetings, guiding the development of a website UX map and 3 homepage wireframe options. ',
                ],
            }],
            skills: [{
                skills: 'Git, PostgreSQL, MongoDB, Pydantic, Pytest, Langchain, Numpy, Pandas, Polars, FastAPI, Bootstrap',
                programmingLanguages: 'Python, JavaScript, TypeScript, C, Ruby, R, HTML/CSS',
                frameworks: 'React, NodeJS, Ruby on Rails',
                languages: '',
                interests: 'Playing and watching poker, curating Spotify playlists, and cooking and eating good food. ',
                showSkills: true,
                showProgrammingLanguages: true,
                showFrameworks: true,
                showLanguages: false,
                showInterests: true,
            }],
        });
    };


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
                <Button variant="info" className="btn-sm" onClick={() => preloadData()}>Load Test Info</Button>
                <ResumePreview formData={debouncedData} />
            </div>
        </div>
    );
}

export default ResumeBuilder;
