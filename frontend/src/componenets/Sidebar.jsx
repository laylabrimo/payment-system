import { Avatar, Badge, Box, Typography, Button, TextField, Card, CardContent, CardHeader, CardActionArea, CardActions } from '@mui/material';
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useContext, useState } from 'react';
import { Usercontext } from '../contexts/Usercontext';
import Popupyesno from './reusable/Popupyesno';
import logo from '../images/logo-2.png'
import diulogo from '../images/diu-logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import imran from '../images/imran.jpg'
import CallReceivedIcon from '@mui/icons-material/CallReceived';
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
import Boxes from './reusable/Boxes';
import Resourses from '../features/resouces';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from 'react-router-dom';

export default function Sidebar(props) {
  let [showblance,setshowblance]=React.useState(true)
  let [user,setuser]=useContext(Usercontext)
  let [dashboardselcted,setdashboardselcted]=useState(false)
  let navigate=useNavigate()
  let listitems=[
    {name:'Dashboard',icon:<DashboardIcon/>,selected:dashboardselcted,path:'/'},
    {name:'Blance',icon:<AccountBalanceWalletIcon/>,selected:false,path:'/blance'},
    {name:'Recharge',icon:<MoveDownIcon/>,selected:false,path:'/recharge'},
    {name:'Account Security',icon:<SecurityIcon/>,selected:false,path:'/security'},
    {name:'History',icon:<HistoryIcon/>,selected:false,path:'/history'},
    {name:'Payment Methods',icon:<CreditCardIcon/>,selected:false,path:'/pm'},
    {name:'My donation account',icon:<VolunteerActivismIcon/>,selected:false,path:'/doations'},
    {name:'Settings',icon:<SettingsIcon/>,selected:false,path:'/settings'}
   
    
    
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
    height:'150px',
    background:'white',
    borderRadius:'10px',
    margin:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'8px'
  }}>
<img src={diulogo} width='200px' height='100px'/>    </Box>
    <Box sx={{
    width:'100%',
    height:'70%',
    background:'white',
    borderRadius:'10px',
    margin:'10px',
    padding:'8px'
   
  }}>
    <List  sx={{
    // selected and (selected + hover) states
    '&& .Mui-selected, && .Mui-selected:hover': {
      bgcolor: 'dodgerblue',
      '&, & .MuiListItemIcon-root': {
        color: 'white',
        borderRadius:'12px'
      },
    },
    // hover states
    '& .MuiListItemButton-root:hover': {
      bgcolor: 'orange',
      '&, & .MuiListItemIcon-root': {
        color: 'yellow',
      },
    },
  }}>
      
      {listitems.map(item=>(
        <ListItem onClick={()=>{
            window.location.replace(item.path)
            
        }} selected={item.selected} onSelect={()=>{
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
    <Box sx={{
   width:'100%',
   height:'50px',
   background:'#B23B3B',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   borderRadius:'12px'
    }}>
     
<LogoutIcon  sx={{
  color:'white',
  fontSize:'25px',
  margin:'9px'
}}/>
 <Button onClick={()=>{
   let resourses= new Resourses()
   resourses.logout()

 }}>
 <Typography  sx={{
   color:'white',
   fontSize:'25px'
 }}>logout</Typography>
 </Button>
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

{props.children}
   

</Box>


   </Box>
  )
}
