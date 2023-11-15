export const personalInfoConfig = {
    title: 'Personal Info',
    initialEntries: [{}], // Initially one empty entry
    showAddButton: false,
    showHideButton: false,
    defaultEntry: {
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
        showOtherURL: false
    },
    entryConfig: {
        fields: [
            { name: 'fullName', type: 'text', label: 'Full Name', placeholder: 'Enter your full name' },
            { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email' },
            { name: 'phoneNumber', type: 'tel', label: 'Phone Number', placeholder: 'Enter your phone number' },
            { name: 'address', type: 'text', label: 'Address', placeholder: 'Enter your address', toggleable: true, toggleField: 'showAddress' },
            { name: 'secondEmail', type: 'email', label: 'Second Email', placeholder: 'Enter your second email', toggleable: true, toggleField: 'showSecondEmail' },
            { name: 'linkedIn', type: 'url', label: 'LinkedIn', placeholder: 'Enter your LinkedIn URL', toggleable: true, toggleField: 'showLinkedIn' },
            { name: 'otherURL', type: 'url', label: 'Other URL', placeholder: 'Enter your Other URL', toggleable: true, toggleField: 'showOtherURL' }
        ],
    }
};

export const educationConfig = {
    title: 'Education',
    initialEntries: [{fieldsOfStudy: ['']}], // Initially one empty entry
    showAddButton: true,
    showHideButton: false,
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
    initialEntries: [{bullets: ['']}], // Initially one empty entry
    showAddButton: true,
    showHideButton: true,
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
    initialEntries: [{bullets: ['']}], // Initially one empty entry
    showAddButton: true,
    showHideButton: true,
    defaultEntry: {
        organizationName: '',
        location: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        bullets: [''],
    },
    entryConfig: {
        fields: [
            { name: 'organizationName', type: 'text', label: 'Organization Name', placeholder: 'Enter organization name' },
            { name: 'location', type: 'text', label: 'Location', placeholder: 'Enter location' },
            { name: 'positionTitle', type: 'text', label: 'Position', placeholder: 'Enter position title' },
            { name: 'startDate', type: 'month', label: 'Start Date' },
            { name: 'endDate', type: 'month', label: 'End Date', conditional: 'currentlyWorking' },
            { name: 'currentlyWorking', type: 'checkbox', label: 'I currently hold this position' },
            { name: 'bullets', type: 'array', label: 'Details', placeholder: 'Enter activity detail' },
        ],
    }
};

export const projectsConfig = {
    title: 'Projects',
    initialEntries: [{bullets: ['']}], // Initially one empty entry
    showAddButton: true,
    showHideButton: true,
    defaultEntry: {
        projectName: '',
        techStack: '',
        date: '',
        bullets: [''],
    },
    entryConfig: {
        fields: [
            { name: 'projectName', type: 'text', label: 'Project Name', placeholder: 'Enter project name' },
            { name: 'techStack', type: 'text', label: 'Tech Stack', placeholder: 'Enter key technologies used' },
            { name: 'date', type: 'month', label: 'Date' },
            { name: 'bullets', type: 'array', label: 'Details', placeholder: 'Enter project detail' },
        ],
    }
};

export const skillsConfig = {
    title: 'Skills',
    initialEntries: [{}], // Initially one empty entry
    showAddButton: false,
    showHideButton: false,
    defaultEntry: {
        skills: '',
        programmingLanguages: '',
        frameworks: '',
        languages: '',
        interests: '',
        showSkills: false,
        showProgrammingLanguages: false,
        showFrameworks: false,
        showLanguages: false,
        showInterests: false,
    },
    entryConfig: {
        fields: [
            { name: 'programmingLanguages', type: 'text', label: 'Programming Languages', placeholder: 'Enter your programming languages', toggleable: true, toggleField: 'showProgrammingLanguages' },
            { name: 'frameworks', type: 'text', label: 'Frameworks', placeholder: 'Enter your frameworks', toggleable: true, toggleField: 'showFrameworks' },
            { name: 'skills', type: 'text', label: 'Skills', placeholder: 'Enter your skills', toggleable: true, toggleField: 'showSkills' },
            { name: 'languages', type: 'text', label: 'Languages', placeholder: 'Enter your languages', toggleable: true, toggleField: 'showLanguages' },
            { name: 'interests', type: 'text', label: 'Interests', placeholder: 'Enter your interests', toggleable: true, toggleField: 'showInterests' },
        ]
    }
};
