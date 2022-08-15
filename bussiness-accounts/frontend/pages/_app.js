import { Userprofider } from '../profiders/userprofider'
import Authwrapper from '../services/auth/authwrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Userprofider>
  <Authwrapper>
  <Component {...pageProps} />
  </Authwrapper>
  </Userprofider>
 
  </>
}

export default MyApp
