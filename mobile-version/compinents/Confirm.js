import React from "react";
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base";

const Appconfirm = ({confirmopen,setconfirmopen}) => {

  const onClose = () => setconfirmopen(false);

  const cancelRef = React.useRef(null);
  return <Center>
      
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={confirmopen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Customer</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>;
};
export default Appconfirm

   
 