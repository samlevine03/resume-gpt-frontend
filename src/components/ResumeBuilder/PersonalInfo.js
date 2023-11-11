import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

function PersonalInfo() {
    const [showAddress, setShowAddress] = useState(false);
    const [showSecondEmail, setShowSecondEmail] = useState(false);
    const [showLinkedIn, setShowLinkedIn] = useState(false);
    const [showOtherURL, setShowOtherURL] = useState(false);

    return (
        <Card className="mb-3">
            <Card.Header>Personal Info</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Full Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Enter your full name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Phone Number</Form.Label>
                        <Col sm="10">
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Col>
                    </Form.Group>

                    {showAddress && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Address</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Enter your address" />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => setShowAddress(false)}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {showSecondEmail && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Second Email</Form.Label>
                            <Col sm="8">
                                <Form.Control type="email" placeholder="Enter your second email" />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => setShowSecondEmail(false)}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {showLinkedIn && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">LinkedIn</Form.Label>
                            <Col sm="8">
                                <Form.Control type="url" placeholder="Enter your LinkedIn URL" />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => setShowLinkedIn(false)}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {showOtherURL && (
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">Other URL</Form.Label>
                            <Col sm="8">
                                <Form.Control type="url" placeholder="Enter your Other URL" />
                            </Col>
                            <Col sm="2">
                                <Button variant="danger" onClick={() => setShowOtherURL(false)}>Remove</Button>
                            </Col>
                        </Form.Group>
                    )}

                    {/* Buttons to add fields */}
                    {!showAddress && (
                        <Button variant="primary" onClick={() => setShowAddress(true)} className="mb-3 me-2">Add Address</Button>
                    )}
                    {!showSecondEmail && (
                        <Button variant="primary" onClick={() => setShowSecondEmail(true)} className="mb-3 me-2">Add Second Email</Button>
                    )}
                    {!showLinkedIn && (
                        <Button variant="primary" onClick={() => setShowLinkedIn(true)} className="mb-3 me-2">Add LinkedIn</Button>
                    )}
                    {!showOtherURL && (
                        <Button variant="primary" onClick={() => setShowOtherURL(true)} className="mb-3 me-2">Add Other URL</Button>
                    )}
                </Form>
            </Card.Body>
        </Card>
    );
}

export default PersonalInfo;