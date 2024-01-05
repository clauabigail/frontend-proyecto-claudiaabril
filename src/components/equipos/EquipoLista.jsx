import { TbChevronRight } from "react-icons/tb";
import { formatNumber } from "../../utils";
import BaseTag from "../shared/BaseTag";
import { Link } from "react-router-dom";

const EquipoLista = ({equipos}) => {
    return (
      <main className=" flex flex-col grid-cols-3 gap-4">
        
        <div className="">
         
  
                <div className="font-bold flex justify-between bg-black text-yellow-50 inset-x-2 top-6 z-50 ml-4">
                  <span>Id</span>
                  <span>Descripcion</span>
                  <span>Criticidad</span>
                  <span>Costo Unit.</span>
                  <span>Frec. Inspecc.</span>
                  <span>Detalle</span>
                 
                </div>
        
        {/* {JSON.stringify(equipos)} */}
  
        {equipos && equipos.map(equipo => {
          return (
            <div className="">
  
           <article
              className="border-t border-white font-thin rounded-lg flex justify-between text-white items-center justify-items-center gap-2"
              key={equipo.id}
              >       
              
                <div className="w-20">
                  <span className="text-slate-400">#</span>
                  <span className="font-extrabold uppercase">{equipo.Id}</span>
                </div>
                <div className="w-44 font-semibold">{equipo.descripcion}</div>
                <div className="w-44 font-semibold">{equipo.criticidad}</div>
                <div className="w-44 font-extrabold">
                  ${equipo.costoUni}
                </div>
                <div>
                  {equipo.criticidad === 'Baja'
                    && <BaseTag label={equipos.criticidad} bgColor='bg-green-300' dotColor='text-emerald-400'  />
                  }
                  {equipo.criticidad === 'Media'
                    && <BaseTag label={equipos.criticidad} bgColor='bg-yellow-300' dotColor='text-orange-400'  />
                  }
                  {equipo.criticidad === 'Alta'
                    && <BaseTag label={equipos.criticidad} bgColor='bg-red-400' dotColor='text-slate-400'  />
                  }
                </div>
                <div className="w-10 flex justify-center">
                  <Link to={`/equipos/${equipo.id}`}>
                    <TbChevronRight />
                  </Link>
                </div>
            
            </article>
            </div>
            
          )
          
        })
        
        
        }
        </div>
        
      </main>
      
    )
  }

export default EquipoLista