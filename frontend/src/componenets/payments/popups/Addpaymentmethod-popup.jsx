import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import resourses from '../../../features/resouces';

export default function Addpaymentmethodpopup({setopen,open}) {
 
  const [name,setname]=React.useState('')
  const [cardnumber,setcardnumber]=React.useState('')
  const [expm,setexpm]=React.useState('')
  const [expy,setexpy]=React.useState('')
  const [cvc,setcvc]=React.useState('')
  const [zip,setzip]=React.useState('')




 let handlesubmit=(event)=>{
  event.preventDefault();
  
 let data={
   name,cardnumber,expm,expy,cvc,zip
 }
 let Res= new resourses()
 let res = Res.addpaymentmethod(data)
 console.log(res)
 }

  const handleClose = () => {
    setopen(false);
  };

  return (
    <div>
     
      <Dialog sx={{
        borderRadius:'20px'
      }} open={open}  onClose={handleClose}>
        <DialogTitle>Add Your Card</DialogTitle>
        <form onSubmit={handlesubmit}>
        <DialogContent>
          <DialogContentText>
           we will keep your card in seure servers 
          </DialogContentText>
        
         <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(e)=>{
             setname(e.target.value)
            }}
            label="name"
            type="cardno"
            fullWidth
            variant="standard"
            required
            placeholder='name on the card'
            autoComplete='off'
          />
          <TextField
           autoComplete='off'
            autoFocus
            onChange={(e)=>{
              setcardnumber(e.target.value)
             }}
            margin="dense"
            id="name"
            label="Card Number"
            type="cardno"
            fullWidth
            variant="standard"
            required
            placeholder='5100 0000 0000 0000'
          />
          <TextField
           autoComplete='off'
            autoFocus
            onChange={(e)=>{
              setexpm(e.target.value)
             }}
            margin="dense"
            id="name"
            label="Exp Month"
            type="number"
            required
            placeholder='01'
            variant="standard"
          />
          <TextField
           autoComplete='off'
           onChange={(e)=>{
            setexpy(e.target.value)
           }}
            placeholder='2022'
            margin="dense"
            id="name"
            label="Exp Year"
            type="expyear"
            required
            variant="standard"
          />
          <TextField
           onChange={(e)=>{
            setcvc(e.target.value)
           }}
           autoComplete='off'
            autoFocus
            placeholder='121'
            margin="dense"
            id="name"
            label="CVC"
            type="expyear"
            required
            variant="standard"
          />
          <TextField
          onChange={(e)=>{
            setzip(e.target.value)
           }}
           autoComplete='off'
            autoFocus
            placeholder='Zip Code'
            margin="dense"
            id="name"
            label="Postal Code / Zip Code"
            type="expyear"
           
            variant="standard"
          />
         
          
        </DialogContent>
        <DialogActions>
          <Button color='warning' onClick={handleClose}>Cancel</Button>
          <Button type='submit' variant='contained'>Add</Button>
        </DialogActions>
        </form>
      </Dialog>

    </div>
  );
}
