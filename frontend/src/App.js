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
import { Box } from '@mui/material';
import Verification from './componenets/reusable/Verification';
import Home from './componenets/Home';
import Startprocess from './componenets/reusable/Startprocess';
import Faceverification from './componenets/reusable/verifications/Faceverification';
import Login from './componenets/Login';
import { useContext, useState, React, useEffect } from 'react';
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
var socket = io('http://192.168.0.108:4000');








function App() {


  let [Recievedsound,setrecievedsound]=useSound(moneyrecieved)
  let [user,setuser]=useContext(Usercontext)
  let [messagee,setmessagee]=useContext(Snackcontext)
  let [message,setmessage]=useState('')

  let [not,setnot]=useState(false)

  socket.on('connect',()=>{
    console.log('connecred ..')
  })
  socket.on('recievemoney',(payload)=>{
   setmessage('waxaad $'+payload.amount+' ka heshay '+payload.name)
   setnot(true)
   Recievedsound()
  
  })
  
  console.log('from bilaw',user)
  let userka= user?true:false
 
  
  return (
    <>
  
    {not && <Notifications message={message} not_open={not} setnot_open={setnot}/>}
    
     <BrowserRouter>
    <Routes>
     
        
          <Route path="/" element={user=='null'?<Loading/>:user==null?<Login/>:<Home/>}/>
          <Route path="/recharge" element={user=='null'?<Loading/>:user==null?<Login/>:<Recharge/>}/>
          <Route path="/myaccount" element={user=='null'?<Loading/>:user==null?<Login/>:<Myaccount/>}/>
          <Route path="/sendmoney" element={user=='null'?<Loading/>:user==null?<Login/>:<Sendmoney/>}/>
          <Route path="/pm" element={user=='null'?<Loading/>:user==null?<Login/>:<Paymentmethods/>}/>
          <Route path="/card" element={user=='null'?<Loading/>:user==null?<Login/>:<Paymentmethods/>}/>



          <Route path="/login" element={user=='null'?<Loading/>:user==null?<Login/>:<Navigate to='/'/>}/>
          <Route path="/verify/:id" element={<Verification/>} />
          
       
      
    </Routes>
  </BrowserRouter>
      
    </>
 
  );
}

export default App;
