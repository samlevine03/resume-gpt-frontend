import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

function EducationEntry({ id, onUpdate, onRemove, isFirst }) {
    const [education, setEducation] = useState({
        schoolName: '',
        location: '',
        degreeType: '',
        fieldOfStudy: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        gpa: '',
        coursework: '',
        activities: '',
        honors: '',
        showGPA: false,
        showCoursework: false,
        showActivities: false,
        showHonors: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedEducation = { ...education, [name]: value };
        setEducation(updatedEducation);
        onUpdate(id, updatedEducation);
    };

    const toggleField = (field) => {
        setEducation(prev => ({ ...prev, [field]: !prev[field] }));
        onUpdate(id, { ...education, [field]: !education[field] });
    };

    return (
        <Card className="mb-3">
        <Card.Header>Education {id + 1}</Card.Header>
        <Card.Body>
        <div className="mb-3">
            {/* School Name */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">School Name</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        name="schoolName"
                        value={education.schoolName}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            {/* Location */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Location</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        name="location"
                        value={education.location}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            {/* Degree Type */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Degree Type</Form.Label>
                <Col sm="10">
                    <Form.Select name="degreeType" value={education.degreeType} onChange={handleChange}>
                        <option value="">Select Degree</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="PhD">PhD</option>
                        {/* Add other degree types as needed */}
                    </Form.Select>
                </Col>
            </Form.Group>

            {/* Field of Study */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Field of Study</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        name="fieldOfStudy"
                        value={education.fieldOfStudy}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            {/* Start/End Date */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Start Date</Form.Label>
                <Col sm="4">
                    <Form.Control
                        type="month"
                        name="startMonthYear"
                        value={education.startMonthYear}
                        onChange={handleChange}
                    />
                </Col>
                <Form.Label column sm="2">End Date</Form.Label>
                <Col sm="4">
                    <Form.Control
                        type="month"
                        name="endMonthYear"
                        value={education.endMonthYear}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>

            {/* GPA */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">GPA</Form.Label>
                <Col sm="8">
                    <Form.Control
                        type="text"
                        name="gpa"
                        value={education.gpa}
                        onChange={handleChange}
                        disabled={!education.showGPA}
                    />
                </Col>
                <Col sm="2">
                    <Button variant="secondary" onClick={() => toggleField('showGPA')} className="btn-sm">
                        {education.showGPA ? 'Hide GPA' : 'Show GPA'}
                    </Button>
                </Col>
            </Form.Group>

            {/* Coursework */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Coursework</Form.Label>
                <Col sm="8">
                    <Form.Control
                        as="textarea"
                        name="coursework"
                        value={education.coursework}
                        onChange={handleChange}
                        disabled={!education.showCoursework}
                    />
                </Col>
                <Col sm="2">
                    <Button variant="secondary" onClick={() => toggleField('showCoursework')} className="btn-sm">
                        {education.showCoursework ? 'Hide Coursework' : 'Show Coursework'}
                    </Button>
                </Col>
            </Form.Group>

            {/* Honors */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Honors</Form.Label>
                <Col sm="8">
                    <Form.Control
                        as="textarea"
                        name="honors"
                        value={education.honors}
                        onChange={handleChange}
                        disabled={!education.showHonors}
                    />
                </Col>
                <Col sm="2">
                    <Button variant="secondary" onClick={() => toggleField('showHonors')} className="btn-sm">
                        {education.showHonors ? 'Hide Honors' : 'Show Honors'}
                    </Button>
                </Col>
            </Form.Group>

            {/* Activities */}
            <Form.Group as={Row} className="mb-2">
                <Form.Label column sm="2">Activities</Form.Label>
                <Col sm="8">
                    <Form.Control
                        as="textarea"
                        name="activities"
                        value={education.activities}
                        onChange={handleChange}
                        disabled={!education.showActivities}
                    />
                </Col>
                <Col sm="2">
                    <Button variant="secondary" onClick={() => toggleField('showActivities')} className="btn-sm">
                        {education.showActivities ? 'Hide Activities' : 'Show Activities'}
                    </Button>
                </Col>
            </Form.Group>

            {!isFirst && (
                <Button variant="danger" onClick={() => onRemove(id)}>Remove Education</Button>
            )}
        </div>
        </Card.Body>
        </Card>
    );
}

function Education() {
    const [educationList, setEducationList] = useState([{}]);

    const handleAddEducation = () => {
        setEducationList(prev => [...prev, {}]);
    };

    const handleUpdateEducation = (id, updatedEntry) => {
        setEducationList(prev => prev.map((entry, index) => index === id ? updatedEntry : entry));
    };

    const handleRemoveEducation = (id) => {
        setEducationList(prev => prev.filter((_, index) => index !== id));
    };

    return (
        <Card className="mb-3">
            <Card.Header>Education</Card.Header>
            <Card.Body>
                {educationList.map((education, index) => (
                    <EducationEntry
                        key={index}
                        id={index}
                        isFirst={index === 0}
                        onUpdate={handleUpdateEducation}
                        onRemove={handleRemoveEducation}
                    />
                ))}
                <Button onClick={handleAddEducation}>Add Another Education</Button>
            </Card.Body>
        </Card>
    );
}

export default Education;
