import { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

// import useAuth from '../hooks/useAuth'
import { UserContext } from '../context/UserContext'

const LayoutBase = () => {
  const { user, cleanUser } = useContext(UserContext)

  // const { isAuth, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    // logout()
    cleanUser()
  
    navigate('/login')
  }

  return (
    <div className="bg-black text-white">
      <section className='mb-40' >
       <nav
          class=" bg-blackrelative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
          data-te-navbar-ref>
          {/*<!-- Container wrapper -->*/}
          <div class=" bg-black flex w-full flex-wrap items-center justify-between px-6">
            <div class="flex items-center">
              {/*<!-- Toggle button -->*/}
              <button
                class="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                <span class="[&>svg]:w-7">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                    <path fill-rule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </button>

             {/*} <!-- Navbar brand -->*/}
              <a class="text-primary dark:text-primary-400" href="#!">
                <span class="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </span>
              </a>
            </div>
            

            {/*<!-- Collapsible wrapper -->*/}
            <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentY" data-te-collapse-item>
              {/*<!-- Left links -->*/}
              <ul class="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
                <li data-te-nav-item-ref>
                  <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
                    disabled>
                      
                      <Link
                            to='/'
                            className='hover:text-orange-800'
                          >
                            Home
                          </Link>
                      
                      </a>
                </li>
                <li data-te-nav-item-ref>
                  <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                      
                      <Link
                          to='/catalogo-componentes'
                          className='hover:text-orange-800'
                          
                        >
                          Equipos-Partes
                        </Link>
                      
                      </a>
                </li>
                <li class="mb-2 lg:mb-0" data-te-nav-item-ref>
                  <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                      <Link
                          to='/actualizar-equipo'
                          className='hover:text-orange-800'
                          
                        >
                          Actualizar
                        </Link>
                      
                      </a>
                </li>
                <li data-te-nav-item-ref>
                    <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                  >
                        
                        <button
                            className='text-red-800 font-medium'
                            onClick={handleLogout}
                          >Logout
                          </button>
                        
                        
                        </a>
                  </li>
                <li>
                {user?.email && (
                      <div className=' font-bold flex items-center justify-center gap-6 p-6 lg:px-8 absolute inset-x-0 top-0 z-50 ml-40 mt-4' aria-label="Global">
                            Welcome, {user.fullname}
                      </div>
                  )}
                  </li>
              </ul>
             {/*} <!-- Left links -->*/}
             
            </div>
           {/*} <!-- Collapsible wrapper -->*/}

           {/*} <!-- Right elements -->*/}

           {!user?.email && (
                <div class="my-1 flex items-center lg:my-0 lg:ml-auto">

                  <button type="button"
                    class="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    data-te-ripple-init data-te-ripple-color="light">
                    <Link to='/login'>Login</Link>
                  </button>
                  <button type="button"
                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init data-te-ripple-color="light">
                  <Link to='/register'>Register</Link>
                  </button>
                </div>
           )}

           {/*} <!-- Right elements -->*/}
          </div>
          {/*<!-- Container wrapper -->*/}
        </nav>
        </section>

      <main className='m-6'>
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default LayoutBase