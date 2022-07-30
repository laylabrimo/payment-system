import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/protectedscreens/Home';
import Login from '../screens/authscreens/login/Login';
import Myaccount from '../screens/protectedscreens/Myaccount';
import Settings from '../screens/protectedscreens/Settings';
import History from '../screens/protectedscreens/History'; 
import setingsicon from '../assets/setings.png'
import homeicon from '../assets/home.png'
import historyicon from '../assets/history.png'
import myaccounticon from '../assets/myaccount.png'
import qricon from '../assets/qrcode.png'
import Qrcode from '../screens/protectedscreens/Qrcodepay';
import {useEffect} from 'react'
import authrequired from '../auth.js/auth'
import {Alert} from 'react-native'




import {  Image, Text, View } from 'native-base';
import Qrcodepay from '../screens/protectedscreens/Qrcodepay';
import Sendmoney from '../screens/protectedscreens/Payments/Sendmoney';
import { createStackNavigator } from '@react-navigation/stack';
import Hiddingroutes from './Hiddingroutes';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


function MyTabs() {
  let navigate=useNavigation()
  
 
  
  return (
    
    <>
    
     
         <Tab.Navigator   defaultScreenOptions={{
        tabBarShowLabel:false,
  
      }}   screenOptions={{
        
        "tabBarHideOnKeyboard":"true",
        
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'white',
          borderRadius:12,
          height:90,
          shadowColor:'#7F5DF0',
          shadowOffset:{
            height:0,
            width:10
          },
          shadowOpacity:0.25,
          shadowRadius:3.5,
          
        
        }
      }}  >
       
        
        <Tab.Screen  name="Home" options={{
          headerShown:false,
          tabBarIcon:({focused})=>(
            <View style={{
              alignItems:'center',
              justifyContent:'center',
              top:10,
            }}>
              <Image alt='home' style={{
                width:25,
                height:25,
                tintColor:focused?'dodgerblue':'grey',
              }} resizeMode='contain' source={homeicon}/>
              <Text>Home</Text>
              
            </View>
          )
          
        }} component={Hiddingroutes} />
        
        <Tab.Screen name="myaccount" options={{
          tabBarIcon:({focused})=>(
            <View style={{
              alignItems:'center',
              justifyContent:'center',
              top:10,
            }}>
              <Image alt='setings' style={{
                width:25,
                height:25,
                tintColor:focused?'dodgerblue':'grey',
              }} resizeMode='contain' source={myaccounticon}/>
              <Text>Account</Text>
              
            </View>
          )
          
        }} component={Myaccount} />
         <Tab.Screen    options={{
            headerShown:false,
         
          tabBarIcon:({focused})=>(
            <View style={{
              alignItems:'center',
              justifyContent:'center',
              top:1,
            }}>
              <Image alt='setings' style={{
                width:50,
                height:50,
                
                tintColor:focused?'dodgerblue':'grey',
             
              }} resizeMode='contain' source={qricon}/>
              <Text>Pay</Text>
              
            </View>
          )
          
        }}  name="qrcode" component={Qrcode} />
        <Tab.Screen  options={{
          tabBarIcon:({focused})=>(
            <View style={{
              alignItems:'center',
              justifyContent:'center',
              top:10,
            }}>
              <Image alt='setings' style={{
                width:25,
                height:25,
                tintColor:focused?'dodgerblue':'grey',
              }} resizeMode='contain' source={historyicon}/>
              <Text>History</Text>
              
            </View>
          )
          
        }}  name="History" component={History} />
        <Tab.Screen options={{
          tabBarIcon:({focused})=>(
            <View style={{
              alignItems:'center',
              justifyContent:'center',
              top:10,
            }}>
              <Image alt='setings' style={{
                width:25,
                height:25,
                tintColor:focused?'dodgerblue':'grey',
              }} resizeMode='contain' source={setingsicon}/>
              <Text>Settings</Text>
              
            </View>
          )
          
        }}  name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
   
  );
}

export default MyTabs