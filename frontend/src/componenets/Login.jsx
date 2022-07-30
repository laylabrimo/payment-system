import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Alert, Box, Button, Card, CardContent, CardHeader, Divider, LinearProgress, TextField } from '@mui/material';
import { useRef } from 'react';
import Resourses from '../features/resouces';
import Appinputfield from './reusable/Appinputfield';
import logo from '../images/diu-logo.png'
import loging from "../images/login.jpg";

import useSound from "use-sound";
import login from '../assets/login.mp3'
import { useNavigate } from 'react-router-dom';
function Login() {
let navigate=useNavigate()
  let [username,setusername]=useState(null)
  let [password,setpassword]=useState(null)
  let [loading,setloading]=useState(false)
  let [error,seterror]=useState('')
  let [success,setsuccess]=useState('')
  let [LoginSound]=useSound(login)
  React.useEffect(()=>{
    LoginSound()
  },[LoginSound])
  let handlesubmit=async(e)=>{
    e.preventDefault()
   setloading(true)
    let data={
      email:username,
      password:password

    }
    if (data.email && data.password){
      try {
      let resources= new Resourses()
      let res=await resources.login(data)
      console.log('jawaab',res)
      if(res.data.status=='notfound'){
        seterror('we can not find a user with that credentials')
        setloading(false)
      } 
      else{
       seterror('')
       setsuccess('sucess redirecting ....')
       setloading(false)
       setTimeout(() => {
         window.location.reload()
         
       }, 1000);
        
      }
      } catch (error) {
        seterror(error.message)
        setloading(false)
        
      }
      
    
  }
   else{
    setloading(false)
    seterror('Both fields are reuired')
    setTimeout(() => {
      seterror('')
    }, 2000);
   }
  
    


  }
  
  return (
<>

<Box sx={{
    display:'flex',
    width:'100vw',
    height:'100vh',
    justifyContent:'center',
    alignItems:'center'
  }}>
    
    <Box sx={{
      flex:1,
      margin:'10px'
    }}>
       <Card sx={{width:'700px',height:'500px'}}>
    
    <img src={logo} width='200px' style={{
      
      margin:'12px'
    }} />
    <CardHeader title='Login'/>
    <CardContent>
    <form style={{
      margin:'10px'
    }} onSubmit={handlesubmit}>
        <Appinputfield  onchange={(e)=>{
          setusername(e.target.value)
        }} type='email'  name='email or number' label='Email' placeholder='enteremail or number'/>
        <Divider/>
        <Appinputfield type='password' onchange={(e)=>{
          setpassword(e.target.value)
        }} name='password' label='password' placeholder='enter your password'/>
       <Button disabled={loading} sx={{marginBottom:'15px'}} variant='contained' type='submit'>login</Button>
      <Box>
      <Button onClick={()=>{
        window.location.replace('/register')
      }}>
        don't have an account
      </Button>
      </Box>
       {error && <Alert severity='error' >{error}</Alert>}
       {success && <Alert severity='success' >{success}</Alert>}
       {loading && <>
      <LinearProgress/>
       </>}
      </form>
      
    </CardContent>
    
  </Card>

    </Box>
    <Box 
      sx={{
        width: "100%",
        height: "100%",
        display: { xs: "none", sm: "none", md: "flex" },
        flex: 1.5,
        justifyContent: "center",
        margin:'14px'
    
    }}>
<img src={loging}/>
    </Box>
   
    
  </Box>
</>
  
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