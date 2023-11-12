export const educationConfig = {
    title: 'Education',
    initialEntries: [],
    defaultEntry: {
        schoolName: '',
        location: '',
        degreeType: '',
        fieldsOfStudy: [''],
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        gpa: '',
        coursework: '',
        activities: '',
        honors: '',
        showGPA: false,
        showCoursework: false,
        showActivities: false,
        showHonors: false,
    },
    entryConfig: {
        fields: [
            { name: 'schoolName', type: 'text', label: 'School Name', placeholder: 'Enter institution name' },
            { name: 'location', type: 'text', label: 'Location', placeholder: 'Enter institution location' },
            {
                name: 'degreeType',
                type: 'select',
                label: 'Degree Type',
                options: ['Bachelors', 'Masters', 'PhD'],
                defaultOption: 'Select Degree'
            },
            { name: 'fieldsOfStudy', type: 'array', label: 'Field of Study', placeholder: 'Enter field of study' },
            { name: 'startDate', type: 'month', label: 'Start Date' },
            { name: 'endDate', type: 'month', label: 'End Date'},
            // this is for experience. was just testing here
            // { name: 'endDate', type: 'month', label: 'End Date', conditional: 'currentlyWorking' },
            // { name: 'currentlyWorking', type: 'checkbox', label: 'I currently work here' },
            {
                name: 'gpa',
                type: 'text',
                label: 'GPA',
                placeholder: 'Enter your GPA',
                toggleable: true,
                toggleField: 'showGPA'
            },
            {
                name: 'coursework',
                type: 'text',
                label: 'Coursework',
                placeholder: 'Enter your relevant coursework',
                toggleable: true,
                toggleField: 'showCoursework'
            },
            {
                name: 'activities',
                type: 'text',
                label: 'Activities',
                placeholder: 'Enter your activities',
                toggleable: true,
                toggleField: 'showActivities'
            },
            {
                name: 'honors',
                type: 'text',
                label: 'Honors',
                placeholder: 'Enter your honors/awards',
                toggleable: true,
                toggleField: 'showHonors'
            }
        ],
    }
};

  
  
export const experienceConfig = {
    title: 'Experience',
    initialEntries: [],
    defaultEntry: {
        organizationName: '',
        location: '',
        roleTitle: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        bullets: [''],
    },
    entryConfig: {
        fields: [
            { name: 'organizationName', type: 'text', label: 'Organization Name', placeholder: 'Enter organization name' },
            { name: 'location', type: 'text', label: 'Location', placeholder: 'Enter location' },
            { name: 'roleTitle', type: 'text', label: 'Role Title', placeholder: 'Enter role title' },
            { name: 'startDate', type: 'month', label: 'Start Date' },
            { name: 'endDate', type: 'month', label: 'End Date', conditional: 'currentlyWorking' },
            { name: 'currentlyWorking', type: 'checkbox', label: 'I currently work here' },
            { name: 'bullets', type: 'array', label: 'Details', placeholder: 'Enter experience detail' },
        ],
    }
};

export const activitiesLeadershipConfig = {
    title: 'Activities & Leadership',
    initialEntries: [],
    defaultEntry: {
    organizationName: '',
    location: '',
    roleTitle: '',
    startDate: '',
    endDate: '',
    bullets: [''],
    },
    entryConfig: {
    fields: [
        // Similar to Experience, adjust as needed
    ],
    dateFields: ['startDate', 'endDate']
    }
};

export const projectsConfig = {
    title: 'Projects',
    initialEntries: [],
    defaultEntry: {
    projectName: '',
    techStack: '',
    startDate: '',
    bullets: [''],
    },
    entryConfig: {
    fields: [
        { name: 'projectName', type: 'text', placeholder: 'Enter project name' },
        { name: 'techStack', type: 'text', placeholder: 'Enter key technologies used' },
        { name: 'bullets', type: 'array', placeholder: 'Enter project detail' },
        // Add more fields as required
    ],
    dateFields: ['startDate']
    }
};
