import React, { useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const navigate = useNavigate()
    const [state, setState] = useState({  
        email: "",
        password: "",
        confirmPassword: ""
    });
    const signUpFunc = (e) => { 
        e.preventDefault();
        if (state.password !== state.confirmPassword) {
            alert("Password and Confirm Password Do not Match")
        }
        else {
            axios.post('http://localhost:8080/user/register', state)
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data.message);
                    navigate('/')
                })
                .catch(function (error) {
                    alert('error')
                });
        }
    }
    return (
        <Container className='external'>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Card className='mx-auto ' style={{ width: '18rem' }}>
                <Card.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email"
                            onChange={(e) => {
                                setState({ ...state, email: e.target.value })
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Type your password here"
                            onChange={(e) => {
                                setState({ ...state, password: e.target.value })
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Type your password here"
                            onChange={(e) => {
                                setState({ ...state, confirmPassword: e.target.value })
                            }}
                        />
                    </Form.Group>
                    <div class="col text-center">
                        <Button variant="success"
                            onClick={signUpFunc}
                        >SignUp</Button>
                        <br />
                        <br />
                        <Card.Text>
                            Alredy Registered ?<span style={{ color: "blue" }} onClick={() => navigate('/')}>
                                <strong> Sign in !</strong></span>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SignUp