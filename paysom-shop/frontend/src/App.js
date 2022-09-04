import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Products from './components/products';
import Product from './components/product';
import Sucess from './components/Sucess';

function App() {
  let route= useNavigate()
  return (
   
    <Routes>
      <Route  path="/" element={<><h1>I AM HOME PAGE</h1> <button style={{
                width: '200px',
                height: '50px',
                backgroundColor: 'DODGERBLUE',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px'
            }}
            onClick={()=>{
              route('/products')
            }}
            
            >GO TO PRODUCTS</button></>} />
 <Route path='/products' element={<Products/>}/>
 <Route path='/product/:id' element={<Product/>}/>
 <Route path='/success' element={<Sucess/>}/>


    </Routes>

  )
}

export default App;
