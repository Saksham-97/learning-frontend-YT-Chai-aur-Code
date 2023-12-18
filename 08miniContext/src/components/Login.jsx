import React, { useState, useContext } from 'react'
import UserDataContext from '../context/UserDataContext.js'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserDataContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login Page</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            {" "} {/*just to gove some space*/}
            <input
                type="passsword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

