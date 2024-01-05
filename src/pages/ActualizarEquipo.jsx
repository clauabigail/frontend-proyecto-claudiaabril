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
    <>
      <Header title='Equipos' />

      <EquipoLista equipos={equipos} />
    </>
  )
}

export default ActualizarEquipo