import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Footbar } from '../components/Footbar'
import Script from 'next/script'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Curlink - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="flex flex-row w-full flex-1 px-20 text-center">
        <div className="flex flex-1 items-center">
          <p className="text-6xl text-gray-800 font-bold mb-2">
            Imagine a <span className="text-yellow-400">free</span> place between <span className="text-red-400">work</span> and <span className="text-red-400">professionals</span>...
          </p>
        </div>
        <div className="flex flex-1">
          <Image src="/Create-rafiki.svg" height={700} width={700} alt=""/>
        </div>
      </main>
       <p className="text-6xl mt-20 text-gray-800 font-bold mb-2 about">
            What&#39;s <span className="border-b-8 border-red-400">Curlink</span> ?
      </p>
       <p className="text-2xl mt-14 mx-20 text-gray-800 font-bold mb-2 about-desc">
        Curlink is a platform that allows companies and employees to build immutable and verifiable work experiences. De facto, Curlink extends the capabilities of the traditional Curriculum Vitae. Furthermore, the platform defines itself as a free marketplace for professionals.
      </p>

      <Script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" onLoad={() => {
        const sr = ScrollReveal({ reset: true })
        sr.reveal('.about', { duration: 1000 })
        sr.reveal('.about-desc', { duration: 1200 })
      }}/>

      <Footbar/>
    </div>
  )
}