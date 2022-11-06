import React from 'react'
import { Navigate } from 'react-router-dom'

function Eroute({ children }) {
    const jwt = localStorage.getItem('token')
    return !jwt ? children : (alert("You have already Logged in!!"), <Navigate to='/todolist' />)
}

export default Eroute