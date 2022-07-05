import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Card, CardContent, CardHeader, TextField } from '@mui/material';
import { useRef } from 'react';
import Resourses from '../features/resouces';
import Appinputfield from './reusable/Appinputfield';
import logo from '../images/diu-logo.png'

function Login() {
  let [username,setusername]=useState(null)
  let [password,setpassword]=useState(null)
  let handlesubmit=(e)=>{
    e.preventDefault()
    let data={
      email:username,
      password:password

    }
    console.log(data)
    let resources= new Resourses()
    resources.login(data)
    resources.logged=true
    


  }
  return (

  <Box sx={{
    display:'flex',
    width:'100vw',
    height:'100vh',
    justifyContent:'center',
    alignItems:'center'
  }}>
    <Card sx={{width:'600px',height:'400px'}}>
      <img src={logo} width='200px' />
      <CardHeader title='Login'/>
      <CardContent>
      <form onSubmit={handlesubmit}>
          <Appinputfield onchange={(e)=>{
            setusername(e.target.value)
          }} type='text' name='email or number' placeholder='enteremail or number'/>
          <Appinputfield type='password' onchange={(e)=>{
            setpassword(e.target.value)
          }} name='password' placeholder='enter your password'/>
         <Button variant='contained' type='submit'>login</Button>
        </form>
        
      </CardContent>
    </Card>
  </Box>
    // <div>Login 
    //     <form onSubmit={handlesubmit}>
    //       <input ref={username} type='text' name='email or number' placeholder='enteremail or number'/>
    //       <input ref={password} type='password' name='password' placeholder='enter your password'/>
    //       <button type='submit'>login</button>
    //     </form>
    // </div>
  )
}

export default Login