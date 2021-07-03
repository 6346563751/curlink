import Link from 'next/link'

export const Footbar = (): JSX.Element => {
  return (
    <>
      <footer className="items-center justify-center w-full bg-gray-800 text-white mt-20 pt-4">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-auto flex-col">
                <p className="text-5xl italic font-bold font-serif  ">The place<br/>for professionals</p>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-bold uppercase mb-2">A propos</span>
                <span className="my-2 text-gray-300  text-md hover:text-gray-500"><Link href="#">Carrière</Link></span>
                <span className="my-2 text-gray-300  text-md hover:text-gray-500"><Link href="#">CGU</Link></span>
                <span className="my-2 text-gray-300  text-md hover:text-gray-500"><Link href="/privacy">Confidentialité</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Contact</Link></span>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-bold uppercase mt-4 md:mt-0 mb-2">Produit</span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Aide</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Association</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Entreprise</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Particulier</Link></span>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-bold uppercase mt-4 md:mt-0 mb-2">Social</span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Blog</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Discord</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Instagram</Link></span>
                <span className="my-2 text-gray-300 text-md hover:text-gray-500"><Link href="#">Twitter</Link></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-gray-300 font-bold mb-2">
                  RXSUM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}