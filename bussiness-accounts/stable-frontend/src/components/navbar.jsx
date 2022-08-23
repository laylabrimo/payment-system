import React from 'react'
import { LinearProgress } from '@material-ui/core';

function Navbar() {
  return (
    <div style={{
        width:'95%',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'6px',
       
    }}>
       <div style={{
        flex:0.1,
        marginRight:'8px'
      
       }}>
        <img src='/images/logo.png' width={200} height={200}/>
       </div>
        <div style={{
        flex:1,
        height:'50px',
        backgroundColor:'#EEEE',
        borderRadius:'7px',
        opacity:0.2

    }}>
      
    </div>
    </div>
  )
}

export default Navbar