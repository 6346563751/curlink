import Link from 'next/link'

export const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className='w-full flex flex items-stretch items-center flex-wrap p-3 mb-3 border-gray-200 border-b'>
        <div className="flex flex-no-shrink items-stretch">
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current h-8 w-8 mr-2'
              >
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
              </svg>
              <span className='text-xl text-gray-800 font-bold uppercase tracking-wide'>
                RXSUM
              </span>
            </a>
          </Link>
        </div>
        <div className="flex items-stretch flex-no-shrink flex-grow">
          <div className="flex items-stretch justify-end ml-auto">
            <p className="flex flex-none py-2 px-4 items-center text-gray-800"><Link href="/login">Sign in</Link></p>
            <p className="flex flex-none py-2 px-4 items-center bg-gray-800 text-white rounded-2xl mx-4"><Link href="/register">Sign Up</Link></p>
          </div>
        </div>
      </nav>
    </>
  )
}