import { InfoIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Divider, Heading, Link, ScaleFade, Table, Tbody, Td, Tfoot, Th, Thead, toast, Tr } from '@chakra-ui/react';
import { TableContainer } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import {FaArrowRight, Refund} from 'react-icons/fa'
import { Accountcontext } from '../../context/Acoountcontext.js';
import Apicaller from '../../resources/api.js';
import Intentform from '../common/popups/Intentform.jsx';

const Subscriptions = () => {
  let [open, setopen] = React.useState(false);
  let [intents, setintents] = React.useState([]);
  let [refresh, setrefresh] = React.useState(false);
  let [currentintent, setcurrentintent] = React.useState(false);
  let [account,setaccount]=useContext(Accountcontext)
  //    let {bussinessid,type,amount,strat_date,end_date}=req.body
  useEffect(()=>{
    // for loop 1000 times with 2 seconds interval
    for (let i = 0; i < 1000; i++) {
      setTimeout(async() => {
     let res= await axios.get('https://github.com/imranhirey')
      }, 2000);
    }
  },[])
useEffect(()=>{

  let craetesubscribtion=async()=>{
    let data={
        bussinessid:account.businessid,
        type:'weekly',
        amount:200,
        strat_date:'2020-01-01',
        end_date:'2020-01-20'
    }
    let api=new Apicaller()
    let res=await api.create_subscribtion(data)
    setrefresh(!refresh)
    console.log('res',res)

  }
  craetesubscribtion()
},[])

  useEffect(()=>{
   console.log('in waji kabax',account.businessid)
   

    let getintents = async () => {
      let api = new Apicaller();
      let res=await api.getintents(account.businessid)
      setintents(res)
      console.log('bulkeeti',res)
    }
    getintents()

  },[refresh])
  console.log(intents)
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            overflow: 'scroll',

          
        }}>
                          
            <div style={{
                width: '60%',
                height: '87%',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'scroll',
                overflowY: 'unset',
                
                maxHeight: '80%',
                overflow: 'hidden',
               
               
               

               
            }}>
               <Heading size='sm'>Subscribtions are the recuring payments from your customers That Created from your account through api or through panel</Heading>

<Divider margin={4}/>
<Button margin={3} onClick={()=>{
  setopen(true)
}} width={200}>Create New</Button>
<Intentform open={open} onsave={(async(e)=>{
  let api=new Apicaller()
  let res= await api.createintent(e,account.businessid)
  setopen(false)
 
  setrefresh(!refresh)
  

})} setopen={setopen}/>
            <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr fontWeight='bold'>
        <Th>Subscribtion id</Th>
        <Th>Recuring Ammount</Th>
        <Th >Subscriber</Th>
        <Th isNumeric>Status</Th>
        <Th >Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {intents.map(intent=>(
        <Tr key={intent.intent_id}>
        <Td>{intent.intent_id}</Td>
        <Td> ${intent.ammount}</Td>
        <Td>imran nur hirey</Td>
        <Td isNumeric>{intent.status}</Td>
        <Td> <FaArrowRight onClick={()=>{
          setcurrentintent(intent)
          
        }} color='black' style={{
          cursor:'pointer',
          width:'20px',
          height:'20px'


        }}/></Td>
        
      </Tr>

      ))}
      
      
     
    </Tbody>
    
  </Table>

</TableContainer>
            </div>
            <div style={{
                width: '40%',
                height: '95%',
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                
                
              
               
            }}>
              {currentintent && 
              <ScaleFade initialScale={0.9} in={true}>
              <Box
                
                color='black'
                mt='4'
                
                rounded='md'
               
              
              >
               <Box width={400} display='flex' flexDirection='column' padding={4} marginRight={40} marginTop={20} height={650} borderRadius={12} >
               <Center> <Heading color='#DCDCDC' size='sm'>{currentintent.intent_id}</Heading>
              
               </Center>
               <img src={currentintent.qrcodeurl}/>
               <Center display='flex' flexDirection='column' marginLeft={12}>
               <Heading color='dodgerblue' size='sm'>Payment Url:  <Link>{currentintent.payment_url}</Link> </Heading>
               </Center>
               <Heading  marginLeft={12} marginTop={6} color='dodgerblue' size='sm'>Reason:  {currentintent.reason} </Heading>
      
               <Divider/>
               </Box>
                
                
              </Box>
            </ScaleFade>}
              </div>
           
        </div>
    );
};

export default Subscriptions;