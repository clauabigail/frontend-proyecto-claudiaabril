import { TbChevronRight } from "react-icons/tb";
import { formatNumber } from "../../utils";
import BaseTag from "../shared/BaseTag";
import { Link } from "react-router-dom";

const EquipoLista = ({equipos}) => {
    return (
      <main className=" flex flex-col grid-cols-3 gap-4">
        <div>
          <img src="./images/379-AirCoolerPipingAssembly-mainComponent.jpg" alt="equipo Principal" className="h-auto rounded-lg w-full md:object-center" />
        </div>
        
        <div className="">
         
  
                <div className="md:font-bold flex md:justify-between text-yellow-50 inset-x-2 top-4 z-50 ml-2 align-middle gap-2">
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
            <div className=" font-light">
  
           <article
              className="border-t font-thin border-white rounded-lg flex  text-white md:justify-between items-center md:justify-items-center gap-2"
              key={equipo.id}
              >       
              
                <div className=" ">
                  <span className="text-slate-400 font-thin">ID </span>
                  <span className="w-1/5 md:font-extrabold font-thin uppercase md:justify-between items-center md:justify-items-center ">{equipo.Id}</span>
                </div>
                <div className="w-1/5 md:font-semibold font-thin lowercase md:normal-case md:justify-between items-center md:justify-items-center">{equipo.descripcion}</div>
                <div className="w-1/5 md:font-semibold font-thin md:justify-between items-center md:justify-items-center">{equipo.criticidad}</div>
                <div className="w-1/5 md:font-semibold font-thin md:justify-between items-center md:justify-items-center">
                  ${equipo.costoUni}
                </div>
                <div className="w-1/5">
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
                  <Link to={`/EquipoDetalle/${equipo.Id}`}>
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