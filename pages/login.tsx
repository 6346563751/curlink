import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>RXSUM - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row w-full">
        <div className="absolute top-7 right-7 text-lg font-serif">
          <p>Don&#39;t have yet an account? <span className="text-gray-700"><Link href="/register">Sign Up</Link></span></p>
        </div>
        <div className="absolute top-3 left-3 z-10">
          <p className="text-4xl font-serif text-white ml-10 my-10"><Link href="/">RXSUM</Link></p>
        </div>
        <div className="flex flex-1 min-h-screen bg-gray-800">
          <Image src="/Subscriber-bro.svg" height={700} width={700} alt=""/>
        </div>
<div className="h-screen flex flex-auto justify-center items-center">
          <div className="">
            <p className="text-6xl font-serif font-bold mb-2 text-gray-700 mb-10">Sign In</p>
            <div className="flex mb-2">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Email
                </label>
                <input type="email" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="mail@mail.com"/>
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  password
                </label>
                <input type="email" className="w-full bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="****************"/>
              </div>
            </div>
            <div className="flex mb-2 w-full">
              <div className="w-full">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  A2F Code
                </label>
                <input type="email" className="w-full bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="XXXXXX"/>
              </div>
            </div>
            <button type="submit" className="w-full bg-gray-800  mt-10 rounded-2xl text-white px-6 py-2 rounded font-medium hover:bg-gray-900 transition duration-200 each-in-out">Sign In</button>
            </div>
          </div>
      </main>
    </>
  )
}