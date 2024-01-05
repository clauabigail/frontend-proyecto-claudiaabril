import { useEffect, useState } from "react"
import Header from "../components/Header"
import { fetchEquipos } from "../services/equipos"
import EquipoLista from "../components/equipos/EquipoLista"
const ActualizarEquipo = () => {
  const [equipos, setEquipos] = useState([])

  useEffect(() => {
    fetchEquipos()
      .then(equipos => setEquipos(equipos))
  }, [])

  return (
    <div className="grid md:items-end gap-14 sm:my-1 pl-4 sm:px-6 lg:px-8 ">
    <div className="h-auto rounded-lg size-auto md:object-center">
      <Header title='Equipos' />
    </div>

    <div className="">
      <EquipoLista equipos={equipos} />
    </div>
      

      
    </div>
  )
}

export default ActualizarEquipo