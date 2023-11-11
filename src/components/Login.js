import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        console.log("TODO: handle login")
        event.preventDefault();
        // TODO: handle login
    };

    const handleGuestLogin = (event) => {
        console.log("TODO: handle guest login")
        navigate('/resume-builder');
    };

    return (
        <div className="d-flex justify-content-center vh-100">
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Login</h2>
                    <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Login
                    </Button>
                    <div className="mt-3">
                        <Button variant="secondary" onClick={handleGuestLogin}>
                        Continue as Guest
                        </Button>
                    </div>
                    </Form>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;