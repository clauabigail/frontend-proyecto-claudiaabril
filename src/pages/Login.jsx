import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
// import useAuth from '../hooks/useAuth.js'
import { UserContext } from '../context/UserContext'

const Login = () => {
  const { storeUser } = useContext(UserContext)
  const navigate = useNavigate()
  // const { setAuth } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // console.log('Guardando la data del usuario...')

    const { email, password } = form
    const url = `https://657d0455853beeefdb9a3094.mockapi.io/api/v1/users?email=${email}&password=${password}`
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    setForm({
      email: '',
      password: '',
    })

    if (data.length === 1) {
      const clonedData = { ...data[0] }

      delete clonedData.password
      storeUser(clonedData)
      navigate('/')

    } else {
      toast.error('User login error!')
    }

    // Redireccionar a la vista /login
  }

  return (
    <div  className=" w-full grid md:grid-cols-2 md:items-center gap-10 md:justify-center">

       <div className="size-92 md:items-center">
        <img src="./molino.jpg" className="md:gap-4 h-auto rounded-lg md:size-auto" alt="" />
       </div>
      <div>
          <div>
          <h1 className="text-center text-3xl text-white ">Catálogo App - Login</h1>
          </div>
        <form className="align-center mb-24 mt-10 gap-4" onSubmit={handleLogin}>
          

          <Toaster richColors />

          {/*<pre>{JSON.stringify(form, null, 2)}</pre>*/}

          <div className="flex flex-col gap-4 text-black bg-slate-200 p-8 shadow-lg rounded-lg">
            <label className="font-medium">
              Email
              <input
                type="email"
                name="email"
                placeholder="nombre@dominio.com"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form.email}
              />
            </label>
            <label className="font-medium">
              Password
              <input
                type="password"
                name="password"
                placeholder="Clave"
                className="border w-full p-3"
                required
                onChange={handleChange}
                value={form.password}
              />
            </label>
            
            <input
              type="submit"
              value='Login'
              className="w-full bg-amber-400 p-3 font-medium hover:text-red-800"
            />
          </div>
        </form>
        </div>
    </div>
  )
}

export default Login