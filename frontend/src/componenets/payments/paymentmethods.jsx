import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Sidebar from '../Sidebar'
import { Usercontext } from '../../contexts/Usercontext';
import AddCardIcon from '@mui/icons-material/AddCard';
import Addpaymentmethodpopup from './popups/Addpaymentmethod-popup';
export default function Paymentmethods() {
let [user,setuser]=useContext(Usercontext)
let paymentmethods=user.finanaces.payment_methods
let havepaymentmethod=paymentmethods.length<=0?false:true
let [add,setadd]=useState(false)
let [open,setopen]=useState(false)

let Havpaymentmethod=()=>{
    
}
let Nopaymentmethod=()=>{
    return (
        <>
        <Box sx={{
            width:'90%',
            height:'90%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'

        }}>
        <AddCardIcon sx={{
            width:'100px',
            height:'100px'
        }}/>
        <Typography variant='h4'>you dont have any payment method to list please add one.</Typography>
        <Button onClick={()=>{
            setopen(true) 
        }} sx={{
            margin:'7px'
        }} variant='contained' >Add Payment Method</Button>
        </Box>
        </>
    )
    
}
  return (
    <div>
        <Sidebar>
           <Box sx={{
               width:'100vw',
               height:'100vh',
               padding:'5px',
               background:'white'
           }}>
               {open && <Addpaymentmethodpopup setopen={setopen} open={open}/>}
               <Nopaymentmethod/>

           </Box>
        </Sidebar>
    </div>
  )
}
