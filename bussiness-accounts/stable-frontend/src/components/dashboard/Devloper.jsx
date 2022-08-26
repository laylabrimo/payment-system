import React, { useEffect } from 'react';
import { Box, Button, Divider, Heading, Link, List, ListIcon, ListItem, Tab, Table, TableCaption, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import Newappform from '../common/popups/Newapp';
import Apicaller from '../../resources/api';
import { Accountcontext } from '../../context/Acoountcontext';
import { TableContainer } from '@mui/material';
import { ArrowForwardIcon, ArrowLeftIcon } from '@chakra-ui/icons';


const Devloper = () => {
    let [createapp, setcreateapp] = React.useState(false);
    let [account,setaccount]=React.useContext(Accountcontext)
    let [showsecretkey, setshowsecretkey] = React.useState({
        show: false,
        secretkey: "",
        
    });
    let handshowsecret=(publishablekey)=>{
        console.log(publishablekey)
        // find app secretkey
        let app= apps.find(app=>app.appsecretssecrets[0].publishkey==publishablekey)
        setshowsecretkey({
            show: true,
            secretkey: app.appsecretssecrets[0].Secretkey
        })

    }
   
    let [apps, setapps] = React.useState([]);
    useEffect(()=>{
        let getapps=async()=>{
            let api=new Apicaller()
            let res= await api.getapps(account.businessid)
            setapps(res)

        }
        getapps()
    },[])
    console.log(apps)
    if (apps){
        return (
            <Box width='100%' margin={4} display='flex' flexDirection='column' padding={4}    height='100%'>
                <Heading size='lg'>Your Apps </Heading>
                <Divider margin={6}/>
                
                <TableContainer>
  <Table variant='simple'>
    <TableCaption>*You can create only 10 apps if you need more  <Link>Contact us</Link></TableCaption>
    <Thead>
      <Tr>
        <Th>App Name</Th>
        <Th>publishble Key</Th>
        <Th>Secet Key</Th>
        <Th></Th>
       
      </Tr>
    </Thead>
    <Tbody>
        {apps.map(app=>(
            <Tr key={app}>
                 <Td>{app.appname}</Td>
            <Td>{app.appsecretssecrets[0].publishkey}</Td>
            <Td>{showsecretkey.show?app.appsecretssecrets[0].Secretkey:<>********************
            <Button onClick={()=>{
                handshowsecret(app.appsecretssecrets[0].publishkey)
            }}>show</Button>

            
            </>}</Td>
            <Td>{app.publishablekey}</Td>
            <Td><ArrowForwardIcon/></Td>
        </Tr>
        ))}
      
    </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>
                <Button onClick={()=>setcreateapp(true)}>Create New App</Button>
                {<Newappform open={createapp} setopen={setcreateapp} onsave={async(e)=>{
    let api=new Apicaller()
    let res=await api.registerapp(e,account.businessid)
    console.log(res)
}} />}
                <Newappform show={createapp} setshow={setcreateapp}/>
            </Box>
        )
    }
    return (
        <div>

<Heading size='md'>You don't have any apps yet please create your first app
</Heading>
<Box m={4}>
    <Button onClick={()=>{
        setcreateapp(true)

    }}>Create New App</Button>

</Box>
{<Newappform open={createapp} setopen={setcreateapp} onsave={async(e)=>{
    let api=new Apicaller()
    let res=await api.registerapp(e,account.businessid)
    console.log(res)
}} />}
        </div>
    );
};

export default Devloper;