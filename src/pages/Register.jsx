import { useState } from "react"
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    budget: 0,
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    
    // console.log('Guardando la data del usuario...')
    

    const url = 'https://657d0455853beeefdb9a3094.mockapi.io/api/v1/users'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    setForm({
      fullname: '',
      email: '',
      password: '',
      budget: 0,
    })

    // Redireccionar a la vista /login
    navigate('/login')
  }

  return (
    <div className="  border-t border-white h-auto w-full grid md:grid-cols-2 md:items-center gap-10 md:justify-center">
      <div className="mt-2">
        <img src="./molino.jpg" alt="" />
      </div>
      <form className="w-96 mx-auto mt-10 mb-10" onSubmit={handleRegister}>
        <h1 className="text-center text-3xl mb-8 text-white">Catálogo App - Register</h1>
        <Toaster richColors />
        {/*<pre>{JSON.stringify(form, null, 2)}</pre>*/}

        <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg text-black">
          <label className="font-medium">
            Full name
            <input
              type="email"
              name="fullname"
              placeholder="Juan Perez"
              className="border w-full p-3"
              required
              onChange={handleChange}
              value={form.fullname}
            />
          </label>
          <label className="font-medium">
            Email
            <input
              type="text"
              name="email"
              placeholder="juan_perez@dominio.com"
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
              placeholder="password"
              className="border w-full p-3"
              required
              onChange={handleChange}
              value={form.password}
            />
          </label>
          <input
            type="submit"
            value='Register'
            className="w-full bg-amber-400 p-3 font-medium"
          />
        </div>
      </form>
    </div>
  )
}

export default Register