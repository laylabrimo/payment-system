import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import chipicon from '../../../assets/icons/chip.png'
import {Image} from 'react-native'
import logo from '../../../assets/logo.png'
import {useContext} from 'react'
import { Usercontext } from '../../contexts/Usercontext';
import Addcard from '../../../compinents/Addcard'
import { Alert, Button } from 'native-base'
const Savedcards = () => {
  let [user,setuser]=useContext(Usercontext)
  console.log(user.finanaces.payment_methods)
  let [open,setopen]=React.useState(true)

  return (
    <View style={styles.cardwrapper}>
      {user.finanaces.payment_methods.map(card=>(

         <View  key={card.card.id} style={styles.card}>
        <Image style={{
          width:30,
          height:30,
          position:'absolute',
          top:40,
          left:15

        }} source={chipicon} />
       
        <Text style={{
          width:300,
          height:30,
          position:'absolute',
          top:80,
          left:15,
          color:'white',
          fontWeight:'bold',
          letterSpacing:5

        }}>**** **** **** {card.card.last4}</Text>
        <Text 
       style={{
          width:300,
          height:30,
          position:'absolute',
          top:110,
          left:200,
          color:'white',
          fontWeight:'bold',
          letterSpacing:1,
          fontSize:10

        }}>12/25</Text>
        <Text  style={{
          width:40,
          height:50,
          position:'absolute',
          top:110,
          right:80,
          color:'white',
          fontWeight:'bold',
          letterSpacing:2,
          fontSize:6

        }}>Valid Until</Text>
        <Text   style={{
          width:300,
          height:30,
          position:'absolute',
          top:110,
          left:20,
          color:'white',
          fontWeight:'bold',
          letterSpacing:2,
          fontSize:10

        }}>{user.name}</Text>
        
    
      </View>
      
     

      ))}
       <Addcard />

       <View>
         
      </View>
      
      
    </View>
  )
}

export default Savedcards

const styles = StyleSheet.create({
  cardwrapper:{
    flex:1,
    marginTop:40,
    display:'flex',
    alignItems:'center',
    padding:7,
  },
  card:{
    backgroundColor:'#095b87',
    width:'95%',
    height:150,
    borderRadius:10,
    margin:4
  }

})