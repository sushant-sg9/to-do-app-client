import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './Navbar'
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';

function TodoListPage() {
    const [state, setState] = useState([]); 
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8080/task',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
            .then(function (response) {
                setState(response.data.reverse());
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [state])
    return (
        <>
            <NavBar />
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Button variant="light" onClick={() => navigate('/form')}>Add New Activity</Button>
                </Container>
            </Navbar>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Activity</th>
                        <th>Status</th>
                        <th>Time Taken</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((task, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{task.activity}</td>
                                <td>{task.status}</td>
                                <td>{task.timeTaken}</td>
                                <td>Start</td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </>

    )
}

export default TodoListPage