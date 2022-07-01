import { Avatar, Badge, Box, Typography } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import { Usercontext } from '../contexts/Usercontext';
import Popupyesno from './reusable/Popupyesno';
import logo from '../images/logo-2.png'
import diulogo from '../images/diu-logo.png'
import imran from '../images/imran.jpg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import SecurityIcon from '@mui/icons-material/Security';
import AppChart from './reusable/AppChart';


export default function Home() {
  let [user,setuser]=useContext(Usercontext)
  let listitems=[
    {name:'Dashboard',icon:<DashboardIcon/>},
    {name:'Details',icon:<InfoIcon/>},
    {name:'Money in',icon:<MoveDownIcon/>},
    {name:'Money out',icon:<MoveUpIcon/>},
    {name:'Blance',icon:<AttachMoneyIcon/>},
    {name:'Account Security',icon:<SecurityIcon/>},
    {name:'History',icon:<HistoryIcon/>},
    {name:'Settings',icon:<SettingsIcon/>}
   
    
    
  ]
  return (
   <Box className='wrapper' sx={{
     width:'100vw',
     height:'100vh',
     background:'#f7f7ff',
     display:'flex'
   }}>
<Box sx={{
  flex:1,
  display:'flex',
  margin:'16px',
  flexDirection:'column',
  



}}>
  <Box sx={{
    width:'100%',
    height:'100px',
    background:'white',
    borderRadius:'10px',
    margin:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }}>
<img src={diulogo} width='200px' height='100px'/>    </Box>
    <Box sx={{
    width:'100%',
    height:'70%',
    background:'white',
    borderRadius:'10px',
    margin:'10px',
   
  }}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
      {listitems.map(item=>(
        <ListItem onSelect={()=>{
          alert('waaw')
        }} sx={{
          cursor:'pointer'
        }}>
          <ListItemAvatar >
            <Avatar>
              {item.icon}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name}  />
        </ListItem>
      ))}
    </List>

    </Box>
</Box>


<Box sx={{
  flex:6,
 margin:'16px',

 

}}>
  <Box sx={{
    width:'98%',
    height:'100px',
   
    borderRadius:'10px',
    margin:'10px',
   
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center'
    
  }}>
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      
    }} className='user'>
  
       
       
   
  <Avatar
        alt="Remy Sharp"
        src={imran}
        sx={{ width: 56, height: 56 }}
      />
      <Box sx={{margin:'7px',}} >
        <Typography  sx={{
          fontWeight:'bold',
          fontFamily:'monospace'
        }} >{user.name}</Typography>
        <Typography sx={{
          fontWeight:'100',
          fontFamily:'cursive'
        }} variant='caption'>{user.email}</Typography>
      </Box>

    </Box>
    
      
  </Box>
  <Box sx={{
      width:'100%',
      height:'150px',
      display:'flex',
      alignItems:'center',
      padding:'10px'
    }}>
   <Box sx={{
     display:'flex',
     width:'300px',
     height:'200px',
     background:'white',
     borderRadius:'9px',
     flexDirection:'column'
   }} >
     <Box sx={{
       display:'flex',
       width:'100%',
       height:'35%',
       justifyContent:'space-between',
       
      
       
     }}>
     <Typography sx={{
       color:'black',
       fontSize:'20px',
       fontWeight:'bold',
       padding:'22px'
     }}>BALANCE</Typography>
      <InfoIcon color='action' sx={{ padding:'22px'}}/>
     
    
      
     
     </Box>
     
     <Box sx={{
       display:'flex',
       width:'100%',
       height:'35%',
       flexDirection:'column'
       
     }}>
     <Typography sx={{
       color:'black',
       fontSize:'40px',
       fontWeight:'bold',
       padding:'22px'
     }}>$ 130.<span style={{
       color:'blue'
     }}>89</span></Typography>
     
     
     </Box>
     <Box sx={{
       display:'flex',
       width:'100%',
       height:'35%',
       flexDirection:'column'
       
     }}>
     <Typography sx={{
       color:'#c6c6c6',
       fontSize:'15px',
       fontWeight:'bold',
       padding:'22px',
       letterSpacing:'4px'
     }}>updated now </Typography>
     
     
     </Box>
    


   </Box>
    <Box sx={{
     display:'flex',
     width:'300px',
     height:'200px',
     background:'white',
     borderRadius:'9px',
     flexDirection:'column'
   }} >
     <Box sx={{
       display:'flex',
       width:'100%',
       height:'35%',
       justifyContent:'space-between',
       
      
       
     }}>
     <Typography sx={{
       color:'black',
       fontSize:'20px',
       fontWeight:'bold',
       padding:'22px'
     }}>BALANCE</Typography>
      <InfoIcon color='action' sx={{ padding:'22px'}}/>
     
    
      
     
     </Box>
     
    
     <Box sx={{
       display:'flex',
       width:'100%',
       height:'35%',
       flexDirection:'column'
       
     }}>
     <Typography sx={{
       color:'#c6c6c6',
       fontSize:'15px',
       fontWeight:'bold',
       padding:'22px',
       letterSpacing:'4px'
     }}>updated now </Typography>
     
     
     </Box>
    


   </Box>
   <AppChart/>
    </Box>
  
</Box>
   </Box>
  )
}
