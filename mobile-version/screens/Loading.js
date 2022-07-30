import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { Usercontext } from './contexts/Usercontext';
import { Spinner } from 'native-base';

export default function Loading() {
    let [user,setuser]=useContext(Usercontext)
    console.log('uhkuhkhkji',user)

  return (
    <View style={{
      flex:1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
     <Spinner size='sm'/>
    </View>
  )
}

const styles = StyleSheet.create({})