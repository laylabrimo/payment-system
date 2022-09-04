import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../products';

const Products = () => {
    let route= useNavigate()
    return (
        <div className='products' style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'white'
            
        }}>
          {products.map(product=>(
            <>
            <div style={{
            width: '500px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <h1>{product.name}</h1>
        
            <p>${product.price}</p>
            <button style={{
                width: '200px',
                height: '50px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '20px'
            }}
            onClick={()=>{
                route(`/product/${product.id}`)
            }}
            
            >buy now</button>

          </div>
            </>
          ))}
           
        </div>
    );
};

export default Products;