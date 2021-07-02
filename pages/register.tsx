import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>RXSUM - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row justify-center items-center w-full flex-1 px-80 pt-20">
        <div className="mb-4 md:flex flex-col items-center md:justify-between rounded-3xl border-gray-200 border-2 w-full">
          <p className="text-7xl font-serif font-bold my-5 text-gray-700">Sign Up</p>
          <div className="flex mb-10">
            <div className="mx-10">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full" placeholder="Last name"/>
            </div>
            <div className="mx-10">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                First name
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full" placeholder="First name"/>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="mx-10">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Password
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full" placeholder="****************"/>
            </div>
            <div className="mx-10">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Confirm password
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full" placeholder="****************"/>
            </div>
          </div>
          <div className="flex mb-10">
            <div className="mx-10">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Username
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full" placeholder="Username01"/>
            </div>
            <div className="mx-10">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Email
              </label>
              <input type="email" className="form-input px-4 py-3 rounded-full" placeholder="Email@web.com"/>
            </div>
          </div>
          <button type="submit" className="bg-gray-800 w-80 mb-10 rounded-xl text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-900 transition duration-200 each-in-out">Sign Up</button>
        </div>
      </main>
    </div>
  )
}