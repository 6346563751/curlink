import 'tailwindcss/tailwind.css'

import { Navbar } from '../components/Navbar'
import { Footbar } from '../components/Footbar'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footbar/>
    </>
  )
}

export default MyApp
