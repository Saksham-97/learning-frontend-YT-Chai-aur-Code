import React, { useContext } from 'react'
import UserDataContext from '../context/UserDataContext'

function Profile() {
    const { user } = useContext(UserDataContext)

    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
