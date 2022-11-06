import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';





function FormPage() {
    const navigate = useNavigate()
    const [state, setState] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!state) {  
            alert("Activity field cannot be left blank")
        }
        else {
            let request = {
                activity: state,
                status: "Pending",
                timeTaken: "00:00:00"
            }
            axios.post('http://localhost:8080/task', request, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
               
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data.message);
                    navigate('/todolist') 
                })
                .catch(function (error) {
                    alert('error')
                    console.log(error.message)
                });
        }
    }

    return (
        <>
            <br /> <br /><br />
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Activity</Form.Label>
                        <Form.Control type="text" placeholder="Enter Activity to be done"
                            onChange={(e) => { setState(e.target.value) }}
                        />
                    </Form.Group>

                    <Button variant="secondary" size="sm"
                        onClick={() => { navigate('/todolist') }}
                    >
                        Back
                    </Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button variant="success" type="submit" size="sm"
                        onClick={submit}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    )
}

export default FormPage