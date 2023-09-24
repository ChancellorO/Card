import axios from "axios";
import './Test.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Test() {
    const [Profile, setProfile] = useState({
        username: '',
        password: '',
        email: ''
    })

    const handleChange = (event)  => {
        let {name, value} = event.target
        const newProfile = { ...Profile, [name]: value}
        console.log(newProfile);
        setProfile(newProfile); 
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevents browser from reloading.

        axios.post("http://localhost:8000/backend/register", Profile)
        .then((res) => {
            alert("Successfully Signed Up!")
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        
        <Container>
            <Row>
                <Col>
                    <h1>Sign Up Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form method="post" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" name="username" value={Profile.username} onChange={handleChange} placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" name="email" value={Profile.email} onChange={handleChange} placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={Profile.password} onChange={handleChange} placeholder="Enter Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

            {/* <form method="post" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username: </label>
                <input type="text" name="username" placeholder="username" value={Profile.username} onChange={handleChange}></input>
                <br />
                <label>Password: </label>
                <input type="text" name="password" placeholder="password" value={Profile.password} onChange={handleChange}></input>
                <br />
                <button type="submit">Submit form</button>
            </form>             */}
        </Container>        
    );
}

export default Test;