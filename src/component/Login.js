import React, { useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const [state, setState] = useState({  
        email: "",
        password: ""
    });
    const loginFunc = (e) => { 
        e.preventDefault();
        localStorage.setItem('userName', state.email)
        axios.post('http://localhost:8080/user/login', state)
            .then(function (response) {
                if (response.data.message === "success") {
                    localStorage.setItem('token', response.data.token)
                    navigate('/todolist')
                }
                else {
                    alert(response.data.message)
                }
            })
            .catch(function (error) {
                alert('error')
            });
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
                    <div class="col text-center">
                        <Button variant="success"
                            onClick={loginFunc}
                        >Login</Button>
                        <br />
                        <br />
                        <Card.Text>
                            No Account ? <span style={{ color: "blue" }} onClick={() => navigate('/signup')}><strong> Sign Up !</strong></span>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login