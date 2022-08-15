import React, { useState,useContext } from 'react'
import styles from  '../../styles/auth/login.module.css'
import logo from '../../public/logo.png'
import {Start,KeyboardArrowRight} from '@mui/icons-material'
import Image from 'next/image'

import { Button ,Alert} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router';
function Login() {
    let {loginwrapper,loginbox,loginside,imageside,input,logininfo,log}=styles
    let [bn,setbn]=useState('')
    let [bp,setbp]=useState('')
    let router= useRouter()
  console.log(router)
    let [error,seterror]=useState('')
  return (
    <div className={loginwrapper}>
     {error &&  <Alert style={{
       width:'40%',
       marginBottom:'54px',
       borderRadius:'12px'
     }} severity="error">{error}</Alert>}

<div className={loginbox}>
    
    <div className={loginside}>
    
    <Image
      src={logo}
      alt="Picture of the author"
      width="300px"
      height="300px"
    />
        <input onChange={(e)=>{
          setbn(e.target.value)

        }} className={input} placeholder='Bussiness Number' name='bn' />
        <input  onChange={(e)=>{
          setbp(e.target.value)

        }} type='password' className={input} placeholder='Bussiness Password' name='bp' />
        
       
        <Button  disabled={!bn || !bp?true:false} fullWidth variant='contained' style={{
             margin:19,
             color:'white',
            width:'40%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'8px'
         }} color='primary'>Login </Button>
      
    </div>
    
    <div className={imageside}>
        <img  style={{
            opacity:0.5,
            objectFit:'cover',
            
        }} width={'100%'} height={'100%'} src='https://www.freshbooks.com/wp-content/uploads/set-up-business-bank-account.jpg.optimal.jpg'/>
    </div>

</div>
  
    </div>
  )
}
export async function getStaticProps(){

  return {
    props:{
      logged:true
    }
  }
}

export default Login