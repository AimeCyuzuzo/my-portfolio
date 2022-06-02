import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/uikit-3.14.3/css/uikit.min.css'
import '../styles/uikit-3.14.3/js/uikit.min.js'
import { NextUIProvider, createTheme} from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Layout>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Layout>
    </div>
  )
}

export default MyApp
