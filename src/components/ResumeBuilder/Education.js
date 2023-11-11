import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

function EducationEntry({ education, onUpdate, onRemove, isFirst }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ ...education, [name]: value });
    };

    const toggleField = (field) => {
        onUpdate({ ...education, [field]: !education[field] });
    };

    const handleFieldOfStudyChange = (index, value) => {
        const updatedFields = [...education.fieldsOfStudy];
        updatedFields[index] = value;
        onUpdate({ ...education, fieldsOfStudy: updatedFields });
    };

    const addFieldOfStudy = () => {
        onUpdate({ ...education, fieldsOfStudy: [...education.fieldsOfStudy, ''] });
    };

    const removeFieldOfStudy = (index) => {
        const updatedFields = education.fieldsOfStudy.filter((_, idx) => idx !== index);
        onUpdate({ ...education, fieldsOfStudy: updatedFields });
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row  className="align-items-center">
                    <Col sm="10">
                        <span>Education</span>
                    </Col>
                    <Col sm="2">
                        {!isFirst && onRemove && (
                            <Button variant="danger" onClick={() => onRemove()} className="float-end">
                                Remove
                            </Button>
                        )}
                    </Col>
                </Row>
            </Card.Header>
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
                                placeholder="Enter institution name"
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
                                placeholder="Enter institution location"
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
                    {
                        education.fieldsOfStudy.map((field, index) => (
                            <Form.Group as={Row} key={index} className="mb-2 align-items-center">
                                <Form.Label column sm="2">Field of Study {index + 1}</Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="text"
                                        value={field}
                                        onChange={(e) => handleFieldOfStudyChange(index, e.target.value)}
                                        placeholder="Enter field of study"
                                    />
                                </Col>
                                <Col sm="2">
                                    {index === 0 ? (
                                        <Button variant="primary" onClick={addFieldOfStudy} className="me-2">Add</Button>
                                    ) : (
                                        <Button variant="danger" onClick={() => removeFieldOfStudy(index)} className="me-2">Remove</Button>
                                    )}
                                </Col>
                            </Form.Group>
                        ))
                    }

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
                                placeholder="Enter your GPA"
                            />
                        </Col>
                        <Col sm="2">
                            <Button variant="secondary" onClick={() => toggleField('showGPA')}>
                                {education.showGPA ? <EyeSlash /> : <Eye />}
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
                                placeholder="Enter your relevant coursework"
                            />
                        </Col>
                        <Col sm="2">
                            <Button variant="secondary" onClick={() => toggleField('showCoursework')}>
                                {education.showCoursework ? <EyeSlash /> : <Eye />}
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
                                placeholder="Enter your honors/awards"
                            />
                        </Col>
                        <Col sm="2">
                            <Button variant="secondary" onClick={() => toggleField('showHonors')}>
                                {education.showHonors ? <EyeSlash /> : <Eye />}
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
                                placeholder="Enter your activities"
                            />
                        </Col>
                        <Col sm="2">
                            <Button variant="secondary" onClick={() => toggleField('showActivities')}>
                                {education.showActivities ? <EyeSlash /> : <Eye />}
                            </Button>
                        </Col>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
}

function Education({ educationList, setEducationList }) {

    const handleAddEducation = () => {
        setEducationList(prev => [...prev, {
            schoolName: '',
            location: '',
            degreeType: '',
            fieldsOfStudy: [''],
            startMonthYear: '',
            endMonthYear: '',
            gpa: '',
            coursework: '',
            activities: '',
            honors: '',
            showGPA: false,
            showCoursework: false,
            showActivities: false,
            showHonors: false,
        }]);
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
                        education={education}
                        onUpdate={(updated) => handleUpdateEducation(index, updated)}
                        onRemove={() => handleRemoveEducation(index)}
                        isFirst={index === 0}
                    />
                ))}
                <Button onClick={handleAddEducation}>Add Another Education</Button>
            </Card.Body>
        </Card>
    );
}

export default Education;