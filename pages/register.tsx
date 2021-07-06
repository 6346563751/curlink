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
        <title>RXSUM - The place for professionals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row w-full">
        <div className="absolute top-7 right-7 text-lg font-serif">
          <p>Already a member? <span className="text-gray-700"><Link href="/login">Sign In</Link></span></p>
        </div>
        <div className="absolute top-3 left-3 z-10">
          <p className="text-4xl font-serif text-white ml-10 my-10"><Link href="/">RXSUM</Link></p>
        </div>
        <div className="flex flex-initial min-h-screen bg-gray-800" style={{width: 31.03953147877013+"%"}}>
          <Image src="/Subscriber-bro.svg" height={600} width={600} alt=""/>
        </div>
        <div className="h-screen flex flex-auto justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <p className="text-6xl font-serif font-bold mb-2 text-gray-700 mb-10">Sign Up</p>
            <div className="flex mb-2">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Last Name {
                    errors.lastname && <span className="text-red-400">(
                    {errors.lastname?.type === "required" && "This field is required"}
                    {errors.lastname?.type === "minLength" && "Min length is 2"}
                    )</span>
                  }
                </label>
                <input type="text" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="Last name"
                {...register("lastname", {
                  required: "Required",
                  minLength: 2
                })}/>
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  First name {
                    errors.firstname && <span className="text-red-400">(
                    {errors.firstname?.type === "required" && "This field is required"}
                    {errors.firstname?.type === "minLength" && "Min length is 2"}
                    )</span>
                  }
                </label>
                <input type="text" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="First name"
                {...register("firstname", {
                  required: "Required",
                  minLength: 2
                })}/>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="mr-10">
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
              <div className="">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Confirm password {
                    errors.confirmation && <span className="text-red-400">(
                    {errors.confirmation?.type === "required" && "This field is required"}
                    {errors.confirmation?.type === "validate" && "Incorrect password"}
                    )</span>
                  }
                </label>
                <input type="password" className="w-full bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="****************"
                {...register("confirmation", {
                  required: "Required",
                  validate: value => value === (document.getElementById("password") as HTMLInputElement).value
                })}/>
              </div>
            </div>
            <div className="flex">
              <div className="mr-10">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Username {
                    errors.username && <span className="text-red-400">(
                    {errors.username?.type === "required" && "This field is required"}
                    {errors.username?.type === "minLength" && "Min length is 3"}
                    )</span>
                  }
                </label>
                <input type="text" className="bg-gray-100 form-input px-4 py-3 rounded-full" placeholder="Username01"
                {...register("username", {
                  required: "Required",
                  minLength: 3
                })}/>
              </div>
              <div className="">
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
            </div>
            <button type="submit" className="w-full bg-gray-800  mt-10 rounded-2xl text-white px-6 py-2 rounded font-medium hover:bg-gray-900 transition duration-200 each-in-out">Sign Up</button>
            </div>
            </form>
          </div>
      </main>
    </>
  )
}