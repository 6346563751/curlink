import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footbar } from '../components/Footbar'

export default function Privacy() {
  return (
    <>
      <main class="flex flex-col justify-center items-center mx-10 font-mono">
        <p class="text-7xl font-serif font-bold my-10">404 - page non trouvée</p> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oiKj0Z_Xnjc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main>
    </>
  )
}