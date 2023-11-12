import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

function ActivityEntry({ activity, onUpdate, onRemove, isFirst }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ ...activity, [name]: value });
    };

    const handleBulletChange = (index, value) => {
        const updatedBullets = [...activity.bullets];
        updatedBullets[index] = value;
        onUpdate({ ...activity, bullets: updatedBullets });
    };

    const addBullet = () => {
        onUpdate({ ...activity, bullets: [...activity.bullets, ''] });
    };

    const removeBullet = (index) => {
        const updatedBullets = activity.bullets.filter((_, idx) => idx !== index);
        onUpdate({ ...activity, bullets: updatedBullets });
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col sm="10">
                        <span>Activity/Leadership</span>
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
                            value={activity.organizationName}
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
                            value={activity.location}
                            onChange={handleChange}
                            placeholder="Enter location"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Position</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="roleTitle"
                            value={activity.roleTitle}
                            onChange={handleChange}
                            placeholder="Enter position"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Start/End Date</Form.Label>
                    <Col sm="5">
                        <Form.Control
                            type="month"
                            name="startDate"
                            value={activity.startDate}
                            onChange={handleChange}
                            placeholder="Start date"
                        />
                    </Col>
                    <Col sm="5">
                        <Form.Control
                            type="month"
                            name="endDate"
                            value={activity.endDate}
                            onChange={handleChange}
                            placeholder="End date"
                        />
                    </Col>
                </Form.Group>

                {activity.bullets.map((bullet, index) => (
                    <Form.Group as={Row} key={index} className="mb-2 align-items-center">
                        <Form.Label column sm="2">Bullet {index + 1}</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="text"
                                value={bullet}
                                onChange={(e) => handleBulletChange(index, e.target.value)}
                                placeholder="Enter activity detail"
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

function ActivitiesLeadership({ activityList, setActivityList, showActivities, setShowActivities }) {
    const handleAddActivity = () => {
        setActivityList(prev => [...prev, {
            organizationName: '',
            roleTitle: '',
            startDate: '',
            endDate: '',
            bullets: [''],
        }]);
    };

    const handleUpdateActivity = (id, updatedActivity) => {
        setActivityList(prev => prev.map((entry, index) => index === id ? updatedActivity : entry));
    };

    const handleRemoveActivity = (id) => {
        setActivityList(prev => prev.filter((_, index) => index !== id));
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col sm="10">Activities and Leadership</Col>
                    <Col sm="2" className="text-end">
                        <Button variant="secondary" onClick={() => setShowActivities(!showActivities)} className="float-end">
                            {showActivities ? <EyeSlash /> : <Eye />}
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            {showActivities && (
                <Card.Body>
                    {activityList.map((activity, index) => (
                        <ActivityEntry
                            key={index}
                            activity={activity}
                            onUpdate={(updated) => handleUpdateActivity(index, updated)}
                            onRemove={() => handleRemoveActivity(index)}
                            isFirst={index === 0}
                        />
                    ))}
                </Card.Body>
            )}
        </Card>
    );
}

export default ActivitiesLeadership;
