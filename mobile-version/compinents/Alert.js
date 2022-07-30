import React from "react";
import { Alert, Collapse, Button, VStack, HStack, IconButton, CloseIcon, Box, Text, Center, NativeBaseProvider, View } from "native-base";

function Appalert(props) {
  const [show, setShow] = React.useState(true);
  return <Box w="90%" alignItems="center">
      <Collapse isOpen={props.openalert}>
        <Alert w="100%" maxW="400" status="error">
          <VStack space={1} flexShrink={2} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                 {props.message}
                </Text>
              </HStack>
              <IconButton variant="unstyled" _focus={{
              borderWidth: 0
            }} icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => props.setopenalert(false)} />
            </HStack>
            
            
            
         
          </VStack>
        </Alert>
      </Collapse>
     
    </Box>;
}

module.exports=Appalert