import 'tailwindcss/tailwind.css'

import { Navbar } from '../components/Navbar'
import { Footbar } from '../components/Footbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footbar/>
    </>
  )
}

export default MyApp
