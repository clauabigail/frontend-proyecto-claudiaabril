import { TbSquareRoundedPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
  
    <header className="flex justify-between items-center w-[740px] bg-black my-20 mt-28">
      <div className="text-white">
        <h1 className="text-3xl font-extrabold">{title}</h1>
        <span>Registro de Equipos</span>
      </div>

      <Link to='../equipos/new'>
        <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white flex justify-between items-center gap-4">
          <TbSquareRoundedPlus size="2rem" />
          Nuevo Equipo
        </button>
      </Link>

      <Link to='/equipos/updateEquipoStatus'>
        <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white flex justify-between items-center gap-4">
          <TbSquareRoundedPlus size="2rem" />
          Actualizar Existente
        </button>
      </Link>

      <Link to='/equipos/deleteEquipo'>
        <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white flex justify-between items-center gap-4">
          <TbSquareRoundedPlus size="2rem" />
          Eliminar  Equipo
        </button>
      </Link>

    </header>
   
  )
}

export default Header