import logo from './logo.svg';
import './App.css';
import Register from './componenets/Register';
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';
import Verification from './componenets/reusable/Verification';
import Home from './componenets/Home';
import Startprocess from './componenets/reusable/Startprocess';
import Faceverification from './componenets/reusable/verifications/Faceverification';
import Login from './componenets/Login';
import { useContext, useState, React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { Usercontext } from './contexts/Usercontext';
import Loading from './componenets/reusable/loading';

import Recharge from './componenets/payments/Recharge';
import Paymentmethods from './componenets/payments/paymentmethods';
import { Snackcontext } from './contexts/Snackbarcontext';
import Appsnackbar from './componenets/reusable/AppSnackbar';
import Sendmoney from './componenets/payments/Sendmoney';
import { io } from 'socket.io-client';
import Notifications from './componenets/reusable/Notifications';
import useSound from "use-sound";
import moneyrecieved from '../src/assets/moneyrecieved.wav'
import Myaccount from './componenets/reusable/Myaccount';
import Transaction from './componenets/reusable/Transaction';
import Security from './componenets/reusable/Security';
import Mycontacts from './componenets/reusable/Mycontacts';
import { Offline, Online } from "react-detect-offline";
import nointernet from '../src/assets/nointernet.png'
import Sidebar from '../src/componenets/Sidebar'
import Errorpage from './componenets/reusable/Errorpage';


var socket = io('http://68.183.246.197:4000');








function App() {


  let [Recievedsound,setrecievedsound]=useSound(moneyrecieved)
  let [user,setuser]=useContext(Usercontext)
  let [messagee,setmessagee]=useContext(Snackcontext)
  let [message,setmessage]=useState('')
  
console.log(user)
  let [not,setnot]=useState(false)

  socket.on('connect',()=>{
    console.log('connecred ..')
  })
  socket.on('disconnect',()=>{
   console.log('disconnected')
  })
  

  socket.on('recievemoney'+user?.cus_id,(payload)=>{
   setmessage('waxaad $'+payload.amount+' ka heshay '+payload.name)
   setnot(true)
   Recievedsound()
  
  })
  
  console.log('from bilaw',user)
  let userka= user?true:false
 
  if (window.innerWidth<1600){
    return(
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100vw',
        height:'100vh',
        flexDirection:'column'
      }}>
     <Typography sx={{
       padding:'16px',
       fontSize:'30px',
       fontWeight:'bold'
     }}>OOPS! SORRY FOR DISTURBING RIGHT NOW WE ARE COMPATIABLE WITH YOUR DEVICE</Typography>
     <Typography sx={{
       padding:'16px',
       fontSize:'20px',
       fontWeight:'bold',
       color:'dodgerblue'
     }}>OUR TEAM ARE WORKING HARD TO FIX THIS ISSUE</Typography>
    
      </Box>
     
    )
  }
  return (
    <>
  
    {not && <Notifications message={message} not_open={not} setnot_open={setnot}/>}
   
    <Offline>
       
       <Box sx={{
         width:'100vw',
         height:'100vh',
         display:'flex'
       }}>
         <Box sx={{
           display:'flex',
           justifyContent:'center'
         }}>
         <img src={nointernet} />
         </Box>
         <Box sx={{
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           flexDirection:'column'
         }}>
          <Box>
          <Typography sx={{
            fontSize:'27px',
            fontWeight:'bold',
            
          }} >OOPS! <span style={{
            color:'red'
          }}>WE LOST YOU</span></Typography>
           <Typography sx={{
            fontSize:'18px',
            fontWeight:'300',
            marginLeft:'30px'
            
          }} gutterBottom>we are nothing without you</Typography>
          </Box>
          <Box>
          <Button onClick={()=>{
            window.location.reload()
          }} variant='contained'>Retry</Button>
          </Box>
          

         </Box>

       </Box>
      
     </Offline>
    <Online>
    
    <BrowserRouter>
    <Routes>
    
     
     <Route path="/" element={user==='null'?<Loading/>:user===null?<Navigate to='/login'/>:<Home/>}/>
          <Route path="/recharge" element={user==='null'?<Loading/>:user===null?<Navigate to='/login'/>:<Recharge/>}/>
          <Route path="/myaccount" element={user==='null'?<Loading/>:user===null?<Navigate to='/login'/>:<Myaccount/>}/>
          <Route path="/history" element={user==='null'?<Loading/>:user===null?<Navigate to='/login'/>:<Transaction/>}/>
          <Route path="/error" element={<Errorpage/>}/>
          <Route path="/register" element={user==='null'?<Loading/>:user===null?<Register/>:<Navigate to='/'/>}/>

          <Route path="/mycontacts" element={user==='null'?<Loading/>:user===null?<Login/>:<Mycontacts/>}/>
          <Route path="/security" element={user==='null'?<Loading/>:user===null?<Login/>:<Security/>}/>
          <Route path="/sendmoney" element={user==='null'?<Loading/>:user===null?<Login/>:<Sendmoney/>}/>
          <Route path="/pm" element={user==='null'?<Loading/>:user===null?<Login/>:<Paymentmethods/>}/>
          <Route path="/card" element={user==='null'?<Loading/>:user===null?<Login/>:<Paymentmethods/>}/>



          <Route path="/login" element={user==='null'?<Loading/>:user===null?<Login/>:<Navigate to='/'/>}/>
          <Route path="/verify/:id" element={<Verification/>} />
    
        
         
       
      
    </Routes>
  </BrowserRouter>
    </Online>
      
    </>
 
  );
}

export default App;
