

import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const User = () => {

    const theme=useContext(ThemeContext)

    const textStyle = {
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    }

    return (
        <>
            <h1 style={textStyle}>User comp</h1>
        </>
    )
}

export default User