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



function App() {
  let user= false
  return (
    <>
     <BrowserRouter>
    <Routes>
     
        
          <Route path="/" element={user?<Home/>:<Register/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/verify/:id" element={<Verification/>} />
          
       
      
    </Routes>
  </BrowserRouter>
      
    </>
 
  );
}

export default App;
