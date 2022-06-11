import React, { useState,useEffect } from 'react'

import { Box,Button,Card,CardActionArea,CardActions,CardContent,CardHeader,LinearProgress,Link,TextField, Typography} from '@mui/material';
import verify from '../../../images/verify.svg'
import {LoadingButton} from '@mui/lab'
import { DomainVerification, Check } from '@mui/icons-material';
import resourses from '../../../features/resouces';
export default function Emailverify() {
  let [verificationstarted,setverificationstarted]=useState(false)
  let [emailverified,setemailverified]=useState(false)

 useEffect(()=>{
  let sendverificationcode=async()=>{
    let Res= new resourses()
    Res.verificationtype='email'
    Res.email='imran@gmail.com'
    await Res.sendverificationcode()
    .then((x)=>{
      console.log(x.code)
    })
    
    
  } 
  sendverificationcode()
 },[])
  let verifyemail=()=>{
    setverificationstarted(true)
    
   
    setTimeout(() => {
      setverificationstarted(false)
      
    }, 3000);

  }
  return (
    <Box className='verification ' sx={{
      width:'100vw',
      height:'100vh',
      background:'secondary',
      display:'flex'
    }} >
    <Box className='verification form ' sx={{
      flex:1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    
     
    }}>
      
     <Card sx={{
       width:{xs:'90%',sm:'90%',md:'50%'}
     }} >
       <CardHeader translate='yes' title='step 1 verify your email' />
       {verificationstarted && <LinearProgress/>}
       <CardContent>
       <TextField disabled={verificationstarted} helperText="we have sent 6 didgit code to your email" fullWidth label='Enter the code here'/>
       </CardContent>
       <CardActionArea>
         <CardActions>
           <LoadingButton sx={{
             borderRadius:'15px'
           }} onClick={()=>{
             verifyemail()
           }} variant='contained' loading={verificationstarted} startIcon={verificationstarted?null:<Check/>} loadingPosition='end' fullWidth>{verificationstarted?'Checking':'Verify'}</LoadingButton>
         </CardActions>
       </CardActionArea>
       <CardContent>
        <Link>cant't get the code</Link>
       </CardContent>
     </Card>
    </Box>
    <Box className='verification details' sx={{
      display:{xs:'none',sm:'none',md:'flex'},
      flex:1,
      justifyContent:'center',
      alignItems:'center'
     
    }} >
      <Box className='verification details image' sx={{
        
        padding:'12px',
       
      }}>
        <img width='90%/>' src={verify}/>
      </Box>
      
    </Box>
    </Box>
  )
}
