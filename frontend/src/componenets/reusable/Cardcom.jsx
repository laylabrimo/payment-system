import React from 'react'
import { Box, Card, CardHeader } from '@mui/material';

export default function Cardcom() {
  return (
   
 
    <Box sx={{
        width:'600px',
        height:'200px',
        background:'white',
        borderRadius:'15px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center' ,
        flexDirection:'column'
        
    }}>
       
      
           
       <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'        }}>
        <span className='emboss number'>**** **** ****3405</span>
        </Box>
       


    </Box>
    


  )
}
