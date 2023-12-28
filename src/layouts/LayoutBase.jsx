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
    <div className="bg-black">
      <header className='bg-blue-200 py-4 px-6  absolute inset-x-0 top-0 z-50'>
        
          <nav className='flex items-center justify-between p-6 lg:px-8 '>
                <div className='flex lg:f'>
                  <h1 className='font-bold'>Catalogo App</h1>
                  {/* {JSON.stringify(user)} */}
                </div>
                

            {user?.email && (
              <div className='flex items-center justify-center gap-6 p-6 lg:px-8 absolute inset-x-0 top-0 z-50 ml-40 mt-4' aria-label="Global">
                
                <div className='font-bold'>
                  Welcome, {user.fullname}
                </div>

                <Link
                  to='/'
                  className='hover:text-orange-800'
                >
                  Home
                </Link>
                <Link
                  to='/catalogo-componentes'
                  className='hover:text-orange-800'
                  
                >
                  Equipos-Partes
                </Link>
                <Link
                  to='/actualizar-equipo'
                  className='hover:text-orange-800'
                >
                  Actualizar-Equipo-Existencias
                </Link>

                <button
                  className='text-red-800 font-medium'
                  onClick={handleLogout}
                >Logout</button>
              </div>
            )}

            {!user?.email && (
              <>
                <div className='flex gap-8 '>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </div>
              </>
            )}
          </nav>
        
      </header>

      <main className='m-6'>
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default LayoutBase