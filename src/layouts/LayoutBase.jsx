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
    <div className="w-full bg-black text-white">
     
       <nav
          className=" bg-blackrelative flex w-full items-center justify-between bg-white shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
          data-te-navbar-ref>
          {/*<!-- Container wrapper -->*/}
          < div class=" bg-slate-800 flex w-full  items-center justify-between px-4 gap-4">
                  <div>
                      <img src="./SCCO.jpg" className='size-6' />
                  </div>
             
              {user?.email && (
                  <div className="flex items-center gap-4 ">

                        <div className='grid grid-rows-2 gap-0'>
                          <div className='text-yellow-500 mt-8'>
                            Welcome, {user.fullname}
                          </div>
                          <div class="border-b border-white pb-3 pt-4 ml-0">
                                    
                                    <div class="flex justify-items-start gap-1">
                                      <div class="flex bg-slate-400 ml-0">
                                          <img class="h-6 w-6 rounded-full" src="./images/user.svg" alt=""/>
                                      </div>
                                    
                                      <div class="text-sm font-medium text-gray-300">{user.email}</div>
                                    
                                    </div>
                                    
                          </div>
                        </div> 

                        <div>
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div class="flex h-16 items-center justify-between">
                                  <div class="flex items-center">
                                    <div class="hidden md:block">
                                      <div class="ml-10 flex items-baseline space-x-4">
                                                                             
                                          <Link to='/' className='hover:text-orange-800  text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium'>
                                            Home
                                          </Link>
                                       
                                          <Link to='/equipos' className='hover:text-orange-800 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium'>
                                          Consulta - Equipo
                                          </Link>
                                       
                                          <Link to='/actualizar-equipo' className='hover:text-orange-800  text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium'>
                                          Actualizar
                                          </Link>
                                       
                                          <Link to='/reporte' className='hover:text-orange-800  text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium'>
                                          Reporte
                                          </Link>
                                       
                                          <button className='text-red-800 font-medium' onClick={handleLogout}>
                                            Logout
                                          </button>

                                      </div>
                                    </div>
                                  </div>
                               
                                  
                              </div>
                            </div>

                            {/* <!-- Mobile menu, show/hide based on menu state. -->*/}
                            <div className="md:hidden px-4" id="mobile-menu">
                              
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                               
                                          <Link to='/' className='hover:text-orange-800 "bg-gray-900 font-thin hover:bg-gray-700 text-white block rounded-md px-3 py-2 text-base " aria-current="page'>
                                            Home
                                          </Link>
                               
                                
                                          <Link to='/equipos' className='hover:text-orange-800 "text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-thin'>
                                          Consulta - Equipo
                                          </Link>
                               
                               
                                          <Link to='/actualizar-equipo' className='hover:text-orange-800 "text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-thin'>
                                          Actualizar
                                          </Link>
                               
                               
                                          <Link to='/reporte' className='hover:text-orange-800 "text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-thin'>
                                          Reporte
                                          </Link>
                                                         
                                          <button className='text-red-500 font-medium px-3' onClick={handleLogout}>
                                                Logout
                                          </button>
                                                                                      
                            </div>
                        </div>
                </div>
              )}

            {!user?.email && (
                  <div class="md:my-1 flex items-center lg:ml-auto">

                    <button type="button"
                      class="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary  hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                      <Link to='/login'>Login</Link>
                    </button>
                    <button type="button"
                      class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init data-te-ripple-color="light">
                      <Link to='/register'>Register</Link>
                    </button>
                  </div>
            )}

           
          </div>
          
        </nav>
       

      <main className='m-6 md:bg-black px-4'>
        <div className='container mx-auto '>
          <Outlet />
          
        </div>
      </main>
    </div>
  )
}

export default LayoutBase