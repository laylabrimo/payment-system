import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import pay from './pay';

const Product = () => {
    let [product, setProduct] = React.useState(null);
    let params=useParams()
    useEffect(()=>{
        console.log(params)
        const product = products.find(product => product.id === parseInt(params.id));
        setProduct(product);

    },[product])
    let handlepay=async()=>{
      pay({
            reason: product.name,
            amount: product.price
        })
        .then((res) => {
            // REDIRECT TO RES.payment_url
            window.location.href = res.payment_url;
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
      
    }
    return (
        <div className='productinfo' style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'white'

        }}> 
            <div >
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <p>{product?.price}</p>
                <button
                onClick={handlepay}
                
                style={{
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
                }} >pay with paysom</button>
            </div>
        </div>
    )
}
       


export default Product;