import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import { Usercontext } from '../contexts/Usercontext';
import resourses from '../../resouces';
import Addcard from '../../compinents/Addcard';

const Myaccount = () => {
  let [user,setuser]=React.useContext(Usercontext)
    let navigate=useNavigation()

  return (
    <View>
      <Text>Myaccount</Text>
      <Button onPress={()=>{
        let Res=new resourses()
        Res.logout()
        setuser(null)
      }}>logout</Button>
     
    
    </View>
  )
}

export default Myaccount

const styles = StyleSheet.create({})