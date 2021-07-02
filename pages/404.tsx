import { Navbar } from '../components/Navbar'
import { Footbar } from '../components/Footbar'

export default function Privacy(): JSX.Element {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col justify-center items-center mx-10 font-mono">
        <p className="text-7xl font-serif font-bold my-10">404 - page non trouvée</p> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oiKj0Z_Xnjc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </main>
      <Footbar/>
    </>
  )
}