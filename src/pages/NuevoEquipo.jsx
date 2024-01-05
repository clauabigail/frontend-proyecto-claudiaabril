import { useState, useContext, useEffect } from "react"
import { UserContext } from '../context/UserContext'
import { Toaster, toast } from 'sonner'

const NuevoEquipo = () =>  {
    const { user } = useContext(UserContext)
  
    const [form, setForm] = useState({
      newEquipo: ''
    })
  
    const getnewEquipoUser = async (Id) => {
      const url = `https://657d0455853beeefdb9a3094.mockapi.io/api/v1/equipos/${Id}`
  
      const response = await fetch(url)
  
      const data = await response.json()
  
      return data.newEquipo
    }
  
    useEffect(() => {
      getnewEquipoUser(user.id)
        .then(newEquipo => setForm({ newEquipo }))
    }, [])
  
    const handleChange = (event) => {
      const { name, value } = event.target
  
      setForm({ ...form, [name]: value })
    }
  
    const handleSavenewEquipo = async (event) => {
      event.preventDefault();
      
      console.log('Estoy por guardar la data...')
  
      const { newEquipo } = form
  
      const userId = user.id
      
  
      const url = `https://657d0455853beeefdb9a3094.mockapi.io/api/v1/equipos/${Id}`
  
      const options = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ newEquipo: Number(newEquipo) })
      }
  
      const response = await fetch(url, options)
  
      const data = await response.json()
  
      console.log(data)
  
      toast.success('newEquipo saved!')
    }
  
    return (
      <form className="w-96 mx-auto" onSubmit={handleSavenewEquipo}>
        <Toaster richColors />
  
        <h1 className="text-center text-3xl mb-8">Nuevo Equipo</h1>
  
        {/* {JSON.stringify(form)} */}
        {/* {JSON.stringify(user)} */}
  
        <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
          <label className="font-medium">
          Equipo
            <input
              type="number"
              name="newEquipo"
              placeholder="0"
              className="border w-full p-3"
              onChange={handleChange}
              value={form.newEquipo}
            />
          </label>
          <input
            type="submit"
            value="Save newEquipo"
            className="w-full bg-amber-300 p-3 font-medium"
          />
        </div>
      </form>
    )
  }

export default NuevoEquipo