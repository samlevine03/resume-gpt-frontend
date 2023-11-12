import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

function GenericEntry({ entry, onUpdateField, onToggleField, config, onRemove, isFirst }) {

    const renderField = (field) => {
        switch (field.type) {
            case 'select':
                return (
                    <Form.Select 
                        name={field.name} 
                        value={entry[field.name]} 
                        onChange={(e) => onUpdateField(field.name, e.target.value)}>
                        <option value="">{field.defaultOption}</option>
                        {field.options.map(option => <option key={option} value={option}>{option}</option>)}
                    </Form.Select>
                );
            case 'month':
                return (
                    <Form.Control
                        type="month"
                        name={field.name}
                        value={entry[field.name]}
                        onChange={(e) => onUpdateField(field.name, e.target.value)}
                        disabled={field.conditional ? entry[field.conditional] : false}
                    />
                );
            case 'checkbox':
                return (
                    <Form.Check 
                        className="mt-2" // Adds a small top margin
                        type="checkbox"
                        label={field.label}
                        checked={entry[field.name]}
                        onChange={(e) => onUpdateField(field.name, e.target.checked)}
                    />
                );
            case 'array':
                if (Array.isArray(entry[field.name])) {
                    return entry[field.name].map((item, index) => (
                        <Row key={index} className="mb-2 align-items-center">
                            <Col sm="8">
                                <Form.Control
                                    type="text"
                                    value={item}
                                    onChange={(e) => onUpdateField(field.name, e.target.value, index)}
                                    placeholder={field.placeholder}
                                />
                            </Col>
                            <Col sm="4">
                                {index === 0 ? (
                                    <Button onClick={() => onUpdateField(field.name, '', 'add')} className="me-2">Add</Button>
                                ) : (
                                    <Button variant="danger" onClick={() => onUpdateField(field.name, '', 'remove', index)} className="me-2">Remove</Button>
                                )}
                            </Col>
                        </Row>
                    ));
                }
            case 'text':
            default:
                return (
                    <Form.Control
                        type="text"
                        name={field.name}
                        value={entry[field.name]}
                        onChange={(e) => onUpdateField(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        disabled={field.toggleable && !entry[field.toggleField]}
                    />
                );
        }
    };
    

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col sm="10">{config.title}</Col>
                    {!isFirst && onRemove && (
                        <Col sm="2">
                            <Button variant="danger" onClick={onRemove} className="float-end">Remove</Button>
                        </Col>
                    )}
                </Row>
            </Card.Header>
            <Card.Body>
                {config.fields.map((field, index) => (
                    <Form.Group as={Row} key={index} className="mb-2 align-items-center">
                        {field.type !== 'checkbox' && (
                            <Form.Label column sm="2">{field.label}</Form.Label>
                        )}
                        <Col sm={field.toggleable ? "8" : "10"}>
                            {renderField(field)}
                        </Col>
                        {field.toggleable && (
                            <Col sm="2">
                                <Button variant="secondary" onClick={() => onToggleField(field.toggleField)}>
                                    {entry[field.toggleField] ? <EyeSlash /> : <Eye />}
                                </Button>
                            </Col>
                        )}
                    </Form.Group>
                ))}
            </Card.Body>
        </Card>
    );
    
}

export default GenericEntry;
