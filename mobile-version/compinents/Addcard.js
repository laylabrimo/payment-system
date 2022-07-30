import React from "react";
import { Button, Actionsheet, useDisclose, Text, Box, Center, NativeBaseProvider } from "native-base";
import { View ,TextInput} from 'react-native';

function Addcard() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return <Center>
      <Button onPress={onOpen}>Add New Card</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
        
          <View style={{
              width:'90%',
              height:'100%',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
             
          }}>
          <TextInput style={{
               backgroundColor:'white',
               padding:7,
               borderColor:'grey',
               borderWidth: 0.3,
               borderRadius: 9,
               width:'90%',
               margin:4
          }} keyboardType='ascii-capable' placeholder="Name on the card"/>
          <TextInput maxLength={16} style={{
               backgroundColor:'white',
               padding:7,
               borderColor:'grey',
               borderWidth: 0.3,
               borderRadius:10,
               width:'90%',
               margin:4
          }} keyboardType='number-pad' placeholder="Card Number"/>
          <TextInput maxLength={2} style={{
               backgroundColor:'white',
               padding:7,
               borderColor:'grey',
               borderWidth: 0.3,
               borderRadius: 10,
               width:'90%',
               margin:4
          }} keyboardType='numeric' placeholder="EXP MONTH"/>
          <TextInput maxLength={2} style={{
               backgroundColor:'white',
               padding:7,
               borderColor:'grey',
               borderWidth: 0.3,
               borderRadius: 10,
               width:'90%',
               margin:4
          }} keyboardType='numeric' placeholder="EXP YEAR"/>
          <TextInput maxLength={3} style={{
               backgroundColor:'white',
               padding:7,
               borderColor:'grey',
               borderWidth: 0.3,
               borderRadius: 10,
               width:'90%',
               margin:4
          }} keyboardType='numeric' placeholder="CVV"/>
          <Button style={{
              width:'80%',
              borderRadius:10,
              marginTop:10,
              marginLeft:20
          }}>Add</Button>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Addcard />
            </Center>
          </NativeBaseProvider>
        );
    };
    