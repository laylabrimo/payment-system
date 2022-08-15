import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { Usercontext, Userprofider } from './screens/contexts/Usercontext';
import { Button, NativeBaseProvider } from 'native-base';
import Start from './screens/index';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './routes/Tabs';
import Hiddingroutes from './routes/Hiddingroutes';
import {io} from  'socket.io-client'
var socket = io('http://68.183.246.197:4000');

const App = () => {
   console.log(socket.connected)
  socket.on('connect',()=>{
    console.log('connecred ..')
  })
  console.log(socket.connected)
 
  return (
 


<NavigationContainer>
  <Userprofider>
    <NativeBaseProvider>
    <Start/>
    </NativeBaseProvider>
   

  </Userprofider>



</NavigationContainer>
       
     
  )
}

export default App

const styles = StyleSheet.create({})