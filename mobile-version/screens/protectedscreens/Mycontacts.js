import { FlatList, StyleSheet, Text, View,SafeAreaView ,Image,Button,Alert} from 'react-native'
import React from 'react'
import { Usercontext } from '../contexts/Usercontext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'native-base';




const Mycontacts = () => {
    let [user,setuser]=React.useContext(Usercontext)
    let [copiedtext,setcoppiedtext]=React.useState('')
    let mylist=user.contacts
    let show2wordsname=(name)=>{
        let namesplit=name.split(' ')
        let first=namesplit[0][0]
        let second=namesplit[1][0]
        return {
            first,second
        }

    }
   

    
  return (
    <View style={styles.contactswrapper}>

        {mylist.map(l=>(<>
            <View  style={{
            width:'86%',
            height:50,
            borderRadius:8,
            backgroundColor:'#f5f5f5',
            margin:10,
            display:'flex',
           alignItems:'center',
            flexDirection:'row'
        }}>
            <View style={{
                width:40,
                height:40,
                backgroundColor:'#ededed',
                borderRadius:50,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                margin:4
                
            }}>
                <Text>{show2wordsname(l.name).first+show2wordsname(l.name).second}</Text>
            </View>
           <View style={{
               display:'flex',
               justifyContent:'center',
               margin:7,
               flexDirection:'column'
           }}>
           <Text style={{
               fontSize:13,
               color:'#7F7F7F'

           }}>{l.name}</Text>
            <Text style={{
               fontSize:10,
               color:'#7F7F7F'

           }}>ACC {l.acc}</Text>
           </View>
           <TouchableOpacity onPress={()=>{
             
           }} >
               <Text style={{
                   borderWidth:0.6,
                   padding:4,
                   borderRadius:7
               }}>copy</Text>

           </TouchableOpacity>
           {/* {
               List.map(x=>{
                   if (x.name==!' ' || x.acc==null{
                       Alert.alert('')
                   })
               })
           } */}
         
          
        </View>
        </>))}
        
      
   
    </View>
  )
}

export default Mycontacts

const styles = StyleSheet.create({
    contactswrapper:{
        width:'100%',
        height:'100%',
        marginTop:26,
        backgroundColor:'white'
    },
   
})