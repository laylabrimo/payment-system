import { Userprofider } from '../profiders/userprofider'
import Authwrapper from '../services/auth/authwrapper'
import '../styles/globals.css'
import { Globalprofider } from '../profiders/global'
function MyApp({ Component, pageProps }) {
  return <>
 

  <Globalprofider>
  <Userprofider>
  <Authwrapper>
  <Component {...pageProps} />
  </Authwrapper>
  </Userprofider>
  </Globalprofider>
  
 
  </>
}

export default MyApp
