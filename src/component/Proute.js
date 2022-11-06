import React from 'react'
import { Navigate } from 'react-router-dom'

function Proute({ children }) {
    const jwt = localStorage.getItem('token')
    return jwt ? children : (alert("Login to continue, Double click Ok to login again"), <Navigate to='/' />)
}

export default Proute