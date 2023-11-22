import React from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';

function FileName({ fileName, setFileName }) {

    const handleChange = (event) => {
        setFileName(event.target.value);
    };

    return (
        <Card className="mb-3">
            <Card.Header>Resume Name</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">File Name</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter resume name" 
                                value={fileName}
                                onChange={handleChange} 
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default FileName;
