import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Userprofider } from './contexts/Usercontext';
import Faceverification from './componenets/reusable/verifications/Faceverification';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Userprofider>
    <Auth0Provider
    domain="dev-2fa6ipdc.us.auth0.com"
    cli="Sgoe0UYZfAqdR1m3ab51iD2bIZRex1Wg"
    clientId='Sgoe0UYZfAqdR1m3ab51iD2bIZRex1Wg'
    
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  </Userprofider>
 
  
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
