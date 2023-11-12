import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

function ProjectEntry({ project, onUpdate, onRemove, isFirst }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ ...project, [name]: value });
    };

    const handleBulletChange = (index, value) => {
        const updatedBullets = [...project.bullets];
        updatedBullets[index] = value;
        onUpdate({ ...project, bullets: updatedBullets });
    };

    const addBullet = () => {
        onUpdate({ ...project, bullets: [...project.bullets, ''] });
    };

    const removeBullet = (index) => {
        const updatedBullets = project.bullets.filter((_, idx) => idx !== index);
        onUpdate({ ...project, bullets: updatedBullets });
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col sm="10">
                        <span>Project</span>
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
                    <Form.Label column sm="2">Project Name</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="projectName"
                            value={project.projectName}
                            onChange={handleChange}
                            placeholder="Enter project name"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Tech Stack</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            name="techStack"
                            value={project.techStack}
                            onChange={handleChange}
                            placeholder="Enter key technologies used"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2">
                    <Form.Label column sm="2">Date</Form.Label>
                    <Col sm="5">
                        <Form.Control
                            type="month"
                            name="startDate"
                            value={project.startDate}
                            onChange={handleChange}
                            placeholder="Start date"
                        />
                    </Col>
                </Form.Group>

                {project.bullets.map((bullet, index) => (
                    <Form.Group as={Row} key={index} className="mb-2 align-items-center">
                        <Form.Label column sm="2">Bullet {index + 1}</Form.Label>
                        <Col sm="8">
                            <Form.Control
                                type="text"
                                value={bullet}
                                onChange={(e) => handleBulletChange(index, e.target.value)}
                                placeholder="Enter project detail"
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

function Projects({ projectList, setProjectList, showProjects, setShowProjects }) {
    const handleAddProject = () => {
        setProjectList(prev => [...prev, {
            projectName: '',
            techStack: '',
            startDate: '',
            bullets: [''],
        }]);
    };

    const handleUpdateProject = (id, updatedProject) => {
        setProjectList(prev => prev.map((entry, index) => index === id ? updatedProject : entry));
    };

    const handleRemoveProject = (id) => {
        setProjectList(prev => prev.filter((_, index) => index !== id));
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                <Row className="align-items-center">
                    <Col sm="10">Side Project</Col>
                    <Col sm="2" className="text-end">
                        <Button variant="secondary" onClick={() => setShowProjects(!showProjects)} className="float-end">
                            {showProjects ? <EyeSlash /> : <Eye />}
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            {showProjects && (
                <Card.Body>
                    {projectList.map((project, index) => (
                        <ProjectEntry
                            key={index}
                            project={project}
                            onUpdate={(updated) => handleUpdateProject(index, updated)}
                            onRemove={() => handleRemoveProject(index)}
                            isFirst={index === 0}
                        />
                    ))}
                    <Button variant="primary" onClick={handleAddProject}>Add Another Project</Button>
                </Card.Body>
            )}
        </Card>
    );
}

export default Projects;