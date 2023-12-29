import { Toaster, toast } from 'sonner'
const CatalogoComponentes = () => {
 
  return (
    <div className=" flex  absolute mt-20 ml-0  inset-x-2 top-6 z-50">
        <aside className=" w-1/6"> 

            <div className=' mt-2 container flex justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]' >
                <h4 className="font-bold" >Equipos</h4>
            </div>


            <div className="mt-4">
            <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filtrar Equipo..."/>
    
            </div>
         
                {/*usar react router con enlaces a las paginas que van a aparecer en la subparte*/}
            
            
            <section className=" mt-4 font-bold">
                Componentes
            {/*Outlet para renderizar*/}
              

            </section>

            <div class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <a href="#" aria-current="true" class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
                AIR COOLER ASSEMBLY
                </a>
                <a href="#" class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                AIR COOLER Y PIPING ASSY MASTER
                </a>
                <a href="#" class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                TEMPERATURE TRANSMITER ASSY

                </a>
               
            </div>

          </aside>

        <div class="flex inset-x-2 top-6 z-50 ml-4">
            <div class="flex w-96  h-96 relative">
            <img src="../images/413- Parte 7 - Temperature Transmiter Assy .jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <form className="w-96 mx-auto mt-28 ">
      <h1 className="text-center text-3xl mb-8 text-black">Componente - Detalle</h1>

      <Toaster richColors />

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg">
        <label className="font-medium">
          Código
          <input
            type="email"
            name="email"
            placeholder="nombre@dominio.com"
            className="border w-full p-3"
            required
           />
        </label>
        <label className="font-medium">
          Nombre
          <input
            type="password"
            name="password"
            placeholder="Clave"
            className="border w-full p-3"
            required
                      />
        </label>
        
      </div>
    </form>

            <div className="flex  inset-x-2 top-6 z-50 ml-4 divide-slate-100">
                  <div className=' mt-2 container flex justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]' >
                    <h4 className="font-bold" >Detalle</h4>
                      <form className="mt-8 ml-0 grid-cols-2">
                        <div className="flex justify-between gap-8">
                          <div>
                            Codigo
                          </div>
                          <span>
                          Ch7089
                          </span>
                        </div>

                        <div className="flex justify-between gap-8">
                          <div>
                            Nombre
                          </div>
                          <span>
                          Valvula
                          </span>
                        </div>

                        <div className="flex justify-between gap-8">
                          <div>
                            Fecha de Instalacion
                          </div>
                          <span>
                          20/12/2022
                          </span>
                        </div>
                        
                        <div div className="flex justify-between gap-8">
                          <div>
                            Precio
                          </div>
                          <span>
                          $1200.00
                          </span>
                        </div>  
                        
                          <div className="flex justify-between gap-8">
                          <div>
                            Estado
                          </div>
                          <span>
                          Instalado
                          </span>
                        </div>

                        

                      
                      </form>
                  </div>
            </div>


        </div>
      
        
    </div>

  
    
    
  )
}

export default CatalogoComponentes