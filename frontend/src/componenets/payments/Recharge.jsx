import { Alert, AlertTitle, Box, Button, ButtonGroup, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Usercontext } from '../../contexts/Usercontext'
import Sidebar from '../Sidebar'

export default function Recharge() {
    let [user,setuser]=useContext(Usercontext)
    console.log(user)
    let [error,seterror]=useState('')
    function Recahrcheform(){
        return (
            <>
            <TextField sx={{
                margin:'12px'
            }}  disabled  label='account name' value={user.finanaces.acc} placeholder='Your Account Number'/>
            <TextField sx={{
                margin:'12px'
            }}  disabled  label='account name' value={user.name} placeholder='Your Account Name'/>
            <OutlinedInput
            sx={{
                margin:'12px',
                fontSize:'20px'
            }}
            id="outlined-adornment-amount"
            
            onChange={(x)=>{
                if(x.currentTarget.value>user.finanaces.blance){
                    seterror('you dont have enough blance')
                }
            }}
            placeholder='Enter the amount'
            autoFocus
            error={error?true:false}
            startAdornment={<InputAdornment sx={{
                
            }} position="start"><Typography sx={{
                fontSize:'20px'
            }}>$</Typography></InputAdornment>}
            
          />
            
            </>
        )
    }
  return (
  
       <Sidebar>
         <Box sx={{
             width:'100vw',
             height:'100vh',
             display:'flex'
             
         }}>
  <Box sx={{
               width:'57%',
               height:'80%',
               display:'flex',
               flexDirection:'column',
               padding:'10px',
               background:'white',
               borderRadius:'20px'
               
           }}>
               <Typography sx={{
                   fontSize:'20px',
                   fontWeight:'bold',
                   letterSpacing:'7px',
                   marginBottom:'8px',
                   margin:'12px'
                   
               }}>TOP UP</Typography>
           <Recahrcheform/>
           <ButtonGroup sx={{
               margin:'12px'
           }}>
                <Button>$10</Button>
                <Button>$50</Button>
                <Button>$100</Button>
                <Button>$500</Button>
            </ButtonGroup>
            <Button sx={{
                margin:'9px'
            }} disabled={user.finanaces.payment_methods.length==0?true:false} variant='contained' >Recharge $170</Button>
          
               {user.finanaces.payment_methods.length<=0 &&
               
           
                 <Alert severity="error">please connect at least 1 payment method  to recharge your wallet</Alert>

               }
          
           </Box>
         <Box sx={{
             width:'200px',
             height:'60px',
             background:'dodgerblue',
             borderRadius:'20px',
             marginLeft:'30px',
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
            flexDirection:'column'
             
         }}>
        <Typography sx={{
            color:'white',
            
        }}>BLANCE: ${user.finanaces.blance}</Typography>
         </Box>
         <Box sx={{
              width:'200px',
              height:'60px',
              background:'dodgerblue',
              borderRadius:'20px',
              marginLeft:'30px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
             flexDirection:'column'
         }}>
        <Typography sx={{
            color:'white',
            
        }}>Personal Account</Typography>
         </Box>
      
         </Box>
           
       </Sidebar>
   
  )
}
