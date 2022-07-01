import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useRef } from 'react';
import Resourses from '../features/resouces';

function Login() {
  let username=useRef(null)
  let password=useRef(null)
  let handlesubmit=(e)=>{
    e.preventDefault()
    let data={
      email:username.current.value,
      password:password.current.value

    }
    let resources= new Resourses()
    resources.login(data)
    


  }
  return (
    <div>Login 
        <form onSubmit={handlesubmit}>
          <input ref={username} type='text' name='email or number' placeholder='enteremail or number'/>
          <input ref={password} type='password' name='password' placeholder='enter your password'/>
          <button type='submit'>login</button>
        </form>
    </div>
  )
}

export default Login