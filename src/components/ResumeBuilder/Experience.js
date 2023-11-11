import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

function ExperienceEntry({ experience, onUpdate, onRemove, isFirst }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ ...experience, [name]: value });
    };

    const handleBulletChange = (index, value) => {
        const updatedBullets = [...experience.bullets];
        updatedBullets[index] = value;
        onUpdate({ ...experience, bullets: updatedBullets });
    };

    const addBullet = () => {
        onUpdate({ ...experience, bullets: [...experience.bullets, ''] });
    };

    const removeBullet = (index) => {
        const updatedBullets = experience.bullets.filter((_, idx) => idx !== index);
        onUpdate({ ...experience, bullets: updatedBullets });
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col sm="10">
                        <span>Experience</span>
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
                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Organization Name</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="organizationName"
                            value={experience.organizationName}
                            onChange={handleChange}
                            placeholder="Enter organization name"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Location</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="location"
                            value={experience.location}
                            onChange={handleChange}
                            placeholder="Enter location"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Role Title</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="roleTitle"
                            value={experience.roleTitle}
                            onChange={handleChange}
                            placeholder="Enter role title"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Start/End Date</Form.Label>
                    <Col sm="5">
                        <Form.Control
                            type="month"
                            name="startDate"
                            value={experience.startDate}
                            onChange={handleChange}
                            placeholder="Start date"
                        />
                    </Col>
                    <Col sm="5">
                        <Form.Control
                            type="month"
                            name="endDate"
                            value={experience.endDate}
                            onChange={handleChange}
                            placeholder="End date"
                        />
                    </Col>
                </Form.Group>

                {experience.bullets.map((bullet, index) => (
                    <Form.Group as={Row} key={index} className="mb-2 align-items-center">
                        <Form.Label column sm="2">Bullet {index + 1}</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="text"
                                value={bullet}
                                onChange={(e) => handleBulletChange(index, e.target.value)}
                                placeholder="Enter experience detail"
                            />
                        </Col>
                        <Col sm="2">
                            {index === 0 ? (
                                <Button variant="primary" onClick={addBullet} className="me-2">Add</Button>
                            ) : (
                                <Button variant="danger" onClick={() => removeBullet(index)} className="me-2">Remove</Button>
                            )}
                        </Col>
                    </Form.Group>
                ))}
            </Card.Body>
        </Card>
    );
}

function Experience({ experienceList, setExperienceList }) {
    const handleAddExperience = () => {
        setExperienceList(prev => [...prev, {
            organizationName: '',
            roleTitle: '',
            startDate: '',
            endDate: '',
            bullets: [''],
        }]);
    };

    const handleUpdateExperience = (id, updatedExperience) => {
        setExperienceList(prev => prev.map((entry, index) => index === id ? updatedExperience : entry));
    };

    const handleRemoveExperience = (id) => {
        setExperienceList(prev => prev.filter((_, index) => index !== id));
    };

    return (
        <Card className="mb-3">
            <Card.Header>Professional Experience</Card.Header>
            <Card.Body>
                {experienceList.map((experience, index) => (
                    <ExperienceEntry
                        key={index}
                        experience={experience}
                        onUpdate={(updated) => handleUpdateExperience(index, updated)}
                        onRemove={() => handleRemoveExperience(index)}
                        isFirst={index === 0}
                    />
                ))}
                <Button onClick={handleAddExperience}>Add Another Experience</Button>
            </Card.Body>
        </Card>
    );
}

export default Experience;
