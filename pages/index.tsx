import Head from 'next/head'
import Image from 'next/image'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>RXSUM - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  )
}