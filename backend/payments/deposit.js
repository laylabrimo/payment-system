// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
let stripetk=''

const stripe = require('stripe')(stripetk)
//pm_1LHqMkBuBMeuylpxCLxeQD3O
//cus_Lzq7s2fRojD6MO
// Create a Customer:
let cretecust=async()=>{
   
// Charge the Customer instead of the card:
const paymentMethods = await stripe.customers.listPaymentMethods(
    'cus_Lzq7s2fRojD6MO',
    {type: 'card'}
  );
      console.log(paymentMethods.data[0])
}
cretecust()

// Charge the Customer instead of the card:
// const charge = await stripe.charges.create({
//   amount: 1000,
//   currency: 'usd',
//   customer: 'cus_Lzple7x1aKHDKs'd,
// });

// // YOUR CODE: Save the customer ID and other info in a database for later.

// // When it's time to charge the customer again, retrieve the customer ID.
// const charge = await stripe.charges.create({
//   amount: 1500, // $15.00 this time
//   currency: 'usd',
//   customer: customer.id, // Previously stored, then retrieved
// });