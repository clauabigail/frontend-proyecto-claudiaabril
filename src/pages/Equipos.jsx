import { useEffect, useState } from "react"
import Header from "../components/Header"
import { fetchEquipos } from "../services/equipos"
import EquipoLista from "../components/equipos/EquipoLista"

const Equipos = () => {
  const [equipos, setEquipos] = useState([])

  useEffect(() => {
    fetchEquipos()
      .then(equipos => setEquipos(equipos))
  }, [])

  return (
    <>
      
      <EquipoLista equipos={equipos} />
    </>
  )
}

export default Equipos