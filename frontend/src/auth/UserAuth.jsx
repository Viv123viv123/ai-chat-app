import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user.context'

const UserAuth = ({ children }) => {

    const { user, loading } = useContext(UserContext)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    useEffect(() => {
        if (!token) {
            navigate('/login')
            return
        }

        if (!loading && !user) {
            navigate('/login')
        }

    }, [token, loading, user, navigate])

    if (loading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default UserAuth