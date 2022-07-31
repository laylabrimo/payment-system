import React from "react";
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";

const Appconfirm = ({confirmopen,setconfirmopen,title,message,handleaction}) => {

  const onClose = () => setconfirmopen(false);

  const cancelRef = React.useRef(null);
  return <Center>
      
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={confirmopen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{title}</AlertDialog.Header>
          <AlertDialog.Body>
           {message}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={handleaction}>
                Send
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>;
};
export default Appconfirm

   
 