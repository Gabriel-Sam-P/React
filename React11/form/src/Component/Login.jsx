import { Alert, Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const[user,setuser]=useState("")
    const[pass,setpass]=useState("")
    const[error,seterror]=useState("")

    const form={'gabriel@gmail.com':'password1234'}


    const navigate = useNavigate()
    const clickhandle=()=>{
        seterror('')

        if (form[user]===pass)
        navigate('/Home')

        else
        seterror('wrong email and password')
    }
  return (
    <Grid container>
        <Grid size={{lg:12,md:12,sm:12,xs:12}} sx={{display:"flex",justifyContent:"center",margin:"130px"}}>
            <Box sx={{border: "2px solid black",
                width:"200px",
                padding:"50px", 
                borderRadius:"10px",
                boxShadow:"10px 10px 5px grey"}}>
                <h2 style={{margin:"0px"}}>Username</h2>
                <input type="text" placeholder='username' value={user} onChange={(e)=>setuser(e.target.value)}/>
                <br /><br />
                <h2 style={{margin:"0px"}}>Password</h2>
                <input type="password" placeholder='password' value={pass} onChange={(e)=>setpass(e.target.value)}/>
                <br /><br />
                {error && <Alert severity='error'>{error}</Alert>}
                <Button variant='contained' onClick={clickhandle}>Login</Button>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Login;