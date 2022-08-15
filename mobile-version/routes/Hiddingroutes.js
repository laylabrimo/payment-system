import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Sendmoney from '../screens/protectedscreens/Payments/Sendmoney';
import Home from '../screens/protectedscreens/Home';
import Savedcards from '../screens/protectedscreens/Payments/Savedcards';
import Mycontacts from '../screens/protectedscreens/Mycontacts';

const Hiddingroutes = () => {
    let stack=createStackNavigator()
  return (
      <stack.Navigator>
           <stack.Screen options={{
              headerShown:false
          }} name='home' component={Home}/>
          
           <stack.Screen options={{
              headerShown:false
          }} name='savedcards' component={Savedcards}/>
         
          
      </stack.Navigator>
   
  )
}

export default Hiddingroutes

const styles = StyleSheet.create({})