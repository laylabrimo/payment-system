import React from 'react'
import { Box,CircularProgress} from '@mui/material'


export default function Loading() {
  return (
    <div>
        <Box sx={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <CircularProgress/>

        </Box>
    </div>
  )
}
