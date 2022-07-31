import { StyleSheet, Text, Alert,View,TextInput,Button, Keyboard,TouchableOpacity } from 'react-native'
import React from 'react'
import {  Divider, Image, Link, Spinner } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import cncelicon from  '../assets/icons/cancel.png'

export default function Throwotp({otp,chargetheuser}) {
    let navigate=useNavigation()
    let [loading,setloading]=React.useState(false)
    
    let handlechange=(pin)=>{
        if(pin.length===6){
            setloading(true)
            Keyboard.dismiss()
            if (pin!=otp){
                Alert.alert('no wrong')
                setloading(false)
            }
            else{
                setloading(false)
                chargetheuser()
            }

        }
       

    }
  return (
    <View style={{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        backgroundColor:'#1d3552',
        marginTop:30

    
    }}>
        <View   style={{
             color:'white',
             alignSelf:'flex-start',
             position:'absolute',
             top:0,
             

         
           }}>
           <TouchableOpacity onPress={()=>{
            navigate.navigate('home')
           }}>
           <Image  alt='shaqo la'aan style={{
                tintColor:'white',
                width:30,
                height:30,
                position:'absolute',
                top:10,
                left:12
            }} source={cncelicon}/>
           </TouchableOpacity>
       
        </View>
       
           <>
           
         
          <View style={{
              width:200,
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
          }}>
          <Text style={{
              fontSize:10,
              color:'#d7dbd7'
          }}>To protect you against scammers and un usual activities from your account we have to check and verify this transaction  by sending you 6 digit pin to your phone number please enter it below </Text>
          </View>
          
           <View style={{
           width:200,
           height:40,
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           borderRadius:6,
           margin:9,

           
       }}>
       <TextInput editable={!loading} selectTextOnFocus={!loading} style={{
          
           fontSize:24,
           color:'white',
           padding:6,
           borderWidth:2,
           width:200,
           borderColor:'#1d3552',
           borderBottomColor:'#cfcfcf',
          


       }} onChange={(e)=>handlechange(e.nativeEvent.text)} keyboardType='number-pad'  autoFocus={true} maxLength={6} placeholder=''/>
       
       </View>
       {loading &&  <View style={{
            width:300,
            height:50,
          
            display:'flex',
            justifyContent:'center',
            alignItems:"center",
            borderRadius:10,
            marginTop:5
        }}>
            <Text style={{
                color:'white',
                marginBottom:6
            }}>Checking</Text>
            <Spinner/>
            </View>}
           </>
  
       
       
   
    </View>
  )
}

const styles = StyleSheet.create({})