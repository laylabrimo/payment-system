import React from 'react'
import Navbar from '../../components/navbar'

function Home() {
  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin:'12px'
    }}>
<Navbar/>
    </div>
  )
}

export default Home