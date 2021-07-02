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
          <p>Already a member? <Link href="/login"><span className="text-gray-700">Sign In</span></Link></p>
        </div>
        <div className="absolute top-3 left-3 z-10">
          <p className="text-4xl font-serif text-white ml-10 my-10"><Link href="/">RXSUM</Link></p>
        </div>
        <div className="flex flex-1 min-h-screen bg-gray-800">
          <Image src="/Subscriber-bro.svg" height={700} width={700} alt=""/>
        </div>
        <div className="h-screen flex flex-auto justify-center items-center">
          <div className="">
            <p className="text-6xl font-serif font-bold mb-2 text-gray-700 mb-10">Sign Up</p>
            <div className="flex mb-2">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Last Name
                </label>
                <input type="email" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="Last name"/>
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  First name
                </label>
                <input type="email" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="First name"/>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Password
                </label>
                <input type="email" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="****************"/>
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Confirm password
                </label>
                <input type="email" className="w-full bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="****************"/>
              </div>
            </div>
            <div className="flex">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Username
                </label>
                <input type="email" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="Username01"/>
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Email
                </label>
                <input type="email" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="Email@web.com"/>
              </div>
            </div>
            <button type="submit" className="w-full bg-gray-800  mt-10 rounded-2xl text-white px-6 py-2 rounded font-medium hover:bg-gray-900 transition duration-200 each-in-out">Sign Up</button>
            </div>
          </div>
      </main>
    </>
  )
}