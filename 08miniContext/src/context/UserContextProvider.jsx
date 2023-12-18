import React, { useState } from 'react'
import UserDataContext from './UserDataContext.js'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContextProvider
