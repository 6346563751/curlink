import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footbar } from '../components/Footbar'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>RXSUM - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row w-full flex-1 px-20 text-center">
        <div class="flex flex-1 items-center">
          <p class="text-6xl text-gray-800 font-bold mb-2">
            Imagine a <span class="text-yellow-400">free</span> place between <span class="text-red-400">work</span> and <span class="text-red-400">professionals</span>...
          </p>
        </div>
        <div class="flex flex-1">
          <img src="/Create-rafiki.svg" alt=""/>
        </div>
      </main>
    </div>
  )
}