import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from "react-hook-form"

export default function Home(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log({ data })

  return (
    <>
      <Head>
        <title>Curlink - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row w-full">
        <div className="absolute top-7 right-7 text-lg font-serif">
          <p>Don&#39;t have yet an account? <span className="text-gray-700"><Link href="/register">Sign Up</Link></span></p>
        </div>
        <div className="absolute top-3 left-3 z-10">
          <p className="text-4xl font-serif text-white ml-10 my-10"><Link href="/">Curlink</Link></p>
        </div>
        <div className="flex flex-initial min-h-screen bg-gray-800" style={{width: 31.03953147877013+"%"}}>
          <Image src="/Subscriber-bro.svg" height={700} width={700} alt=""/>
        </div>
        <div className="h-screen flex flex-auto justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <p className="text-6xl font-serif font-bold mb-2 text-gray-700 mb-10">Sign In</p>
            <div className="flex mb-2">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Email {
                    errors.email && <span className="text-red-400">(
                    {errors.email?.type === "required" && "This field is required"}
                    {errors.email?.type === "pattern" && "Invalid email"}
                    )</span>
                  }
                </label>
                <input type="email" className={"bg-gray-100 form-input px-4 py-3 rounded-full " + (errors.message && "border-red-400")} placeholder="Email@web.com"
                {...register("email", {
                  required: "Required",
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                })}/>
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Password {
                    errors.password && <span className="text-red-400">(
                    {errors.password?.type === "required" && "This field is required"}
                    {errors.password?.type === "minLength" && "Min length is 10"}
                    )</span>
                  }
                </label>
                <input id="password" type="password" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="****************"
                {...register("password", {
                  required: "Required",
                  minLength: 10
                })}/>
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
          </form>
        </div>
      </main>
    </>
  )
}