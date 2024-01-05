import { TbSquareRoundedPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
  
    <header className="flex justify-between items-center  bg-black">
      <div className="grid  gap-2">
        <Link to='/NuevoEquipo'>
          <button className="bg-gray-400 rounded-full px-5 py-3 font-abold text-white flex justify-between items-center gap-4">
            <TbSquareRoundedPlus size="2rem" />
            Nuevo Equipo
          </button>
        </Link>

        <Link to='/updateEquipoStatus'>
          <button className="bg-gray-400 rounded-full px-5 py-3 font-bold text-white flex justify-between items-center gap-4">
          Actualizar Existente
          </button>
        </Link>

        <Link to='/deleteEquipo'>
          <button className="bg-gray-400 rounded-full px-5 py-3 font-bold text-white flex justify-between items-center gap-4">
            -
            Eliminar  Equipo
          </button>
        </Link>
      </div>
    </header>
   
  )
}

export default Header