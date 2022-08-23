import React from 'react'
import {Button,Divider,LinearProgress, Link, TextField,Al} from '@material-ui/core'
import getUserGeolocationDetails from '../../micro-services/getlocation';
import Apicaller from '../../api/resources';
function Login() {
let [logininfo,setLogininfo] = React.useState({
    email:'',
    password:''
})
let [loading,setLoading] = React.useState(false)
 let handlechange=()=>{

        setLogininfo({
            ...logininfo,
            [event.target.name]:event.target.value
        })
        console.log(logininfo)
        

 }
 let handlesubmit=async()=>{
      setLoading(true)
        console.log(logininfo)
        let userlocation=await getUserGeolocationDetails()
        console.log(userlocation)
        let data={
            logininfo:logininfo,
            userlocation:userlocation
            
        }
        let api=new Apicaller()
        let res=await api.login(data)
        setLoading(false)
        console.log(res.data.msg=='login successful')

 }


  return (
   <div style={{
    width:'100vw',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
   }}>
   <div style={{
    width:'400px',
    height:'400px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',


   }}>
   
    <div style={{
        width:'100px',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:'50%',
        marginBottom:'20px',
    }}>
        <img src="/images/logo.png" alt="logo" style={{width:'300px',height:'300px'}}/>
        <Divider/>
    </div>
  
    <TextField onChange={()=>{
        handlechange()
    }} name='email' disabled={loading} label="Email" variant="outlined" style={{width:'100%',margin:'6px'}}/>
    <TextField onChange={()=>{
        handlechange()
    }} name='password' disabled={loading} type='password' label="Password" variant="outlined" style={{width:'100%',margin:'6px'}}/>
    <Button onClick={()=>{
        handlesubmit()
    }} variant="contained" disabled={loading} color="primary" style={{width:'100%',margin:'6px'}}>Login</Button>
    {loading ? <LinearProgress style={{
        width:'100%',
        height:'5px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'6px'

     }}/>:''}
    <Divider/>
    <div>
    <Link>Forgot password?</Link>
   
    </div>
    <p style={{
        textAlign:'center',
        fontSize:'12px',
        color:'dodgerblue',
        marginTop:'10px',
    }}>Don't have an account? <Link>Sign up</Link></p>
    
   
    
    

   </div>


   </div>
  )
}

export default Login