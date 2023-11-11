import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

function PersonalInfo({ personalInfo, setPersonalInfo }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const toggleField = (field) => {
        setPersonalInfo({ ...personalInfo, [field]: !personalInfo[field] });
    };

    return (
        <Card className="mb-3">
            <Card.Header>Personal Info</Card.Header>
            <Card.Body>
                <Form>
                    {/* Full Name */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Full Name</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="text" 
                                name="fullName"
                                value={personalInfo.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                        </Col>
                    </Form.Group>

                    {/* Email */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="email" 
                                name="email"
                                value={personalInfo.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </Col>
                    </Form.Group>

                    {/* Phone Number */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Phone Number</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="tel" 
                                name="phoneNumber"
                                value={personalInfo.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </Col>
                    </Form.Group>

                    {/* Address */}
                    {personalInfo.showAddress && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Address</Form.Label>
                            <Col sm="8">
                                <Form.Control 
                                    type="text" 
                                    name="address"
                                    value={personalInfo.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => toggleField('showAddress')}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {/* Second Email */}
                    {personalInfo.showSecondEmail && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Second Email</Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="email"
                                    name="secondEmail"
                                    value={personalInfo.secondEmail}
                                    onChange={handleChange}
                                    placeholder="Enter your second email"
                                />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => toggleField('showSecondEmail')}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {/* LinkedIn */}
                    {personalInfo.showLinkedIn && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">LinkedIn</Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="url"
                                    name="linkedIn"
                                    value={personalInfo.linkedIn}
                                    onChange={handleChange}
                                    placeholder="Enter your LinkedIn URL"
                                />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => toggleField('showLinkedIn')}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {/* Other URL */}
                    {personalInfo.showOtherURL && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Other URL</Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    type="url"
                                    name="otherURL"
                                    value={personalInfo.otherURL}
                                    onChange={handleChange}
                                    placeholder="Enter your Other URL"
                                />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => toggleField('showOtherURL')}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {/* Buttons to add/remove fields */}
                    {!personalInfo.showAddress && (
                        <Button variant="primary" onClick={() => toggleField('showAddress')} className="mb-3 me-2">Add Address</Button>
                    )}
                    {!personalInfo.showSecondEmail && (
                        <Button variant="primary" onClick={() => toggleField('showSecondEmail')} className="mb-3 me-2">Add Second Email</Button>
                    )}
                    {!personalInfo.showLinkedIn && (
                        <Button variant="primary" onClick={() => toggleField('showLinkedIn')} className="mb-3 me-2">Add LinkedIn</Button>
                    )}
                    {!personalInfo.showOtherURL && (
                        <Button variant="primary" onClick={() => toggleField('showOtherURL')} className="mb-3 me-2">Add Other URL</Button>
                    )}

                </Form>
            </Card.Body>
        </Card>
    );
}

export default PersonalInfo;