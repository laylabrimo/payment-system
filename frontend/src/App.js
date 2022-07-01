import logo from './logo.svg';
import './App.css';
import Register from './componenets/Register';
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
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



function App() {
  let [user,setuser]=useContext(Usercontext)
  console.log('from bilaw',user)
  let userka= user?true:false
  return (
    <>
     <BrowserRouter>
    <Routes>
     
        
          <Route path="/" element={user=='null'?<Loading/>:user==null?<Login/>:<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/verify/:id" element={<Verification/>} />
          
       
      
    </Routes>
  </BrowserRouter>
      
    </>
 
  );
}

export default App;
