import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function NavBarFile() {
    const navigate = useNavigate()
    const Logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/')
    }
    let userName = localStorage.getItem('userName')
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">To-Do-List</Navbar.Brand>
                <Card.Text>
                {userName.split("@")[0]}
                </Card.Text >
                <Button onClick={Logout}>Logout</Button>
            </Container>
        </Navbar >
    )
}

export default NavBarFile