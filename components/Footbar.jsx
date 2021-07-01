import Link from 'next/link'

export const Footbar = () => {
  return (
    <>
      <footer className="items-center justify-center w-full bg-gray-800 text-white mt-3 pt-4">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-auto flex-col">
                <p class="text-5xl italic font-bold font-serif  ">The place<br/>for professionals</p>
              </div>
              <div class="flex flex-1 flex-col">
                <span class="font-bold uppercase mb-2">A propos</span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Carrière</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">CGU</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Confidentialité</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Contact</a></span>
              </div>
              <div class="flex flex-1 flex-col">
                <span class="font-bold uppercase mt-4 md:mt-0 mb-2">Produit</span>
                <span class="my-2"><a href="#" class="text-gray-300 text-md hover:text-gray-500">Aide</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Association</a></span>
                <span class="my-2"><a href="#" class="text-gray-300 text-md hover:text-gray-500">Entreprise</a></span>
                <span class="my-2"><a href="#" class="text-gray-300 text-md hover:text-gray-500">Particulier</a></span>
              </div>
              <div class="flex flex-1 flex-col">
                <span class="font-bold uppercase mt-4 md:mt-0 mb-2">Social</span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Blog</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Discord</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Instagram</a></span>
                <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-gray-500">Twitter</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm text-gray-300 font-bold mb-2">
                  RXSUM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}