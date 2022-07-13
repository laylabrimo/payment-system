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
import { useContext } from 'react';
import { Usercontext } from './contexts/Usercontext';
import Loading from './componenets/reusable/loading';
import {io} from 'socket.io-client'
import Recharge from './componenets/payments/Recharge';
import Paymentmethods from './componenets/payments/paymentmethods';
import { Snackcontext } from './contexts/Snackbarcontext';
import Appsnackbar from './componenets/reusable/AppSnackbar';
const socket=io('http://localhost:4000')




function App() {
  let [user,setuser]=useContext(Usercontext)
  let [message,setmessage]=useContext(Snackcontext)
  
  console.log('from bilaw',user)
  let userka= user?true:false
 
    socket.on('labadalay',(data)=>{
      alert(data.codeka)
  
    })
  
  return (
    <>
    {message && <Appsnackbar message={message}/>}
     <BrowserRouter>
    <Routes>
     
        
          <Route path="/" element={user=='null'?<Loading/>:user==null?<Login/>:<Home/>}/>
          <Route path="/recharge" element={user=='null'?<Loading/>:user==null?<Login/>:<Recharge/>}/>
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
