import { Button, Card, CardActionArea, CardContent, CardHeader } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { Usercontext } from '../../contexts/Usercontext';
import Sidebar from '../Sidebar';
import Areyousure from './popups/Areyousure';

const Subscribtions = () => {
  let [user,setuser]=useContext(Usercontext)
  let [subscribtions, setsubscribtions] = React.useState([])

    // get the query params from the url
    const { search } = useLocation();
    // parse the query params
    const queryParams = new URLSearchParams(search);
    // get the value of the query param
    const subid = queryParams.get('subid');
    const authrequired = queryParams.get('authrequired');
    const token= queryParams.get('token');

      // verify the token
      // if token is valid, then redirect to the payment page
      // else redirect to the login page
      console.log(token);
      useEffect(()=>{
        axios.post('http://localhost:5500/subscriptions/get',{
          sub_id:user.subscribtions
        })
        .then(res=>{
          console.log(res);
          setsubscribtions(res.data.subscriptions)
        }
        )


      },[])
    

console.log(subscribtions);
 

    return (
      <Sidebar>
        {subid &&    <Areyousure oktitle='subscribe' handleaction={()=>{
          alert('subscribed');
         }} closetitle='cancel' bodytext='subscribing this plan will caus you you to get recharged 50 usd for every week' open={true} headingtext='Confirm this action'/>}
         <div style={{
          width:'100%',
          height:'100%',
        
         }}>
         {subscribtions.map(sub=>(
          <>
           <div style={{
            width:'700px',
            height:'150px',
            backgroundColor:'#fafafa',
            borderRadius:'10px',
            display:'flex',


          }}>
         
            <div style={{
              width:'100px',
              height:'100%',
              backgroundColor:'#f2f2f2',
              borderRight:'2px dashed black',
              borderRadius:'10px 0px 0px 10px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              overflow:'hidden',

            }}>
            <h5 className='rotate' style={{
              fontSize:'16px',
            
              color:'black',
              writingMode:'vertical-rl',
            
              
            }}>{sub.sub_start_date.slice(0,10)}</h5>
            <h6>-</h6>

            </div>
            <div>
            <Card  style={{
              width:'600px',
              height:'100%',
              display:'flex',
            }}>
           <CardContent style={{
              display:'flex',
              width:'100%',
              flexDirection:'column',

           }}>
              <h3>Dahqaad Trial</h3>
              <h5>expires on -{sub.sub_end_date.slice(0,10)}</h5>
              <h5>price - ${sub.sub_amount}</h5>
              --- {sub.type} ---
           </CardContent>
           <CardActionArea style={{
              display:'flex',
              alignSelf:'center',
              marginLeft:'130px'

           }}>
              <Button  variant='contained' color='primary'>Cancel</Button>
              
            

           </CardActionArea>
        
           
       
            </Card>

            
            </div>
           

          </div>
            </>
         ))}

         </div>

      </Sidebar>
    );
};

export default Subscribtions;