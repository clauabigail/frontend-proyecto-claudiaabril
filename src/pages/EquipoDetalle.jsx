import { Link, useParams, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import { TbChevronLeft } from "react-icons/tb";
import BaseTag from "../components/shared/BaseTag";
import { useEffect, useState } from "react";
import { deleteEquipo, getEquipo, updateEquipoStatus } from "../services/equipos";
import BaseButton from "../components/shared/BaseButton";

const EquipoDetalle = () => {
    const navigate = useNavigate()
  
    const { Id } = useParams()
    const [equipo, setEquipo] = useState(null)
    const [refresh, setRefresh] = useState(0)
    
    useEffect(() => {
      getEquipo(Id)
        .then(setEquipo)
        // .then(equipo => setEquipo(equipo))
    }, [refresh])
  
    if (!equipo) {
      return (
        <h1>No hay data</h1>
      )
    }
  
    const handleMarkAsCritic = async () => {
      console.log('mark as Criticidad Alta  clicked...')
  
      const res = await updateEquipoStatus(Id, 'Alto')
  
      if (res) {
        setRefresh(refresh + 1) 
      }
    }
  
    const handleEquipoDelete = async () => {
      console.log('deleting equipo...', Id)
  
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          // Aquí vamos a hacer la petición para eliminar el equipo con su id
          deleteEquipo(id)
            .then(res => {
              if (res) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your equip has been deleted.",
                  icon: "success"
                });
                navigate('/equipos')
              }
            })
        }
      });
    }
  
    return (
      <main className="w-[740px] m-auto flex flex-col gap-5">
        <Link
          to='/equipos'
          className="text-white font-bold flex gap-5 items-center"
        >
          <TbChevronLeft className="text-slate-400" />
          Go back
        </Link>
  
        <header
          className="flex justify-between items-center bg-slate-700 py-4 px-8 mt-10 rounded-lg"
        >
          <div className="flex items-center text-white gap-3">
            <h3>Status</h3>
            {equipo.status === 'bajo'
              && <BaseTag label={invoice.status} bgColor='bg-green-200' dotColor='text-emerald-400'  />
            }
            {equipo.status === 'medio'
              && <BaseTag label={invoice.status} bgColor='bg-yellow-200' dotColor='text-orange-400'  />
            }
            {equipo.status === 'alto'
              && <BaseTag label={invoice.status} bgColor='bg-red-200' dotColor='text-slate-400'  />
            }
          </div>
  
          <div className="flex items-center gap-3">
            {/* TODO: Crear un componente llamado BaseButton que puede ser reutilizado más abajo */}
            <Link to={`/equipos/${Id}/edit`}>
              <BaseButton
                label='Edit'
                bgColor='bg-slate-600'
              />
            </Link>
  
            <BaseButton
              label='Delete'
              bgColor='bg-red-500'
              onClick={handleInvoiceDelete}
            />
  
            <BaseButton
              label='Mark as Paid'
              bgColor='bg-violet-500'
              onClick={handleMarkAsPaid}
            />
          </div>
        </header>
  
        <section
          className="bg-slate-700 rounded-lg text-white p-10 mt-5 flex flex-col gap-10"
        >
          <div className="flex justify-between w-full">
            <div className="text-3cl">
              <span className="text-slate-400">#</span>
              <span className="font-extrabold">{equipo?.Id}</span>
              <div className="text-xl mt-1">{equipo?.descripcion}</div>
            </div>
            <div className="text-sm text-right">
              <div>{equipo?.ubicacionGeneral}</div>
              
            </div>
          </div>
  
          <div className="grid grid-cols-3 justify-center w-full">
            <div className="flex flex-col gap-10">
              <div>
                <div className="text-lg">Stock Almacen</div>
                <div className="text-xl font-extrabold">{equipo?.stockAlmacen}</div>
              </div>
              <div>
                <div className="text-lg">Frecuencia de Cambio Estimada</div>
                <div className="text-xl font-extrabold">{equipo?.frecCambioEstimada}</div>
              </div>
            </div>
            
            <div>
              <div className="text-lg">Codigo SAP</div>
              <div className="text-xl font-extrabold">
                {equipo?.codigoSAP}
              </div>
            </div>
          </div>
  
         
        </section>
  
        <pre className="text-white">{JSON.stringify(equipo, null, 2)}</pre>
  
      </main>
    )
  }

export default EquipoDetalle