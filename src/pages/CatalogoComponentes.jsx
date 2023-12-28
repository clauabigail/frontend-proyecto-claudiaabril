
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
            <ul>
                <li>
                 <a href="">Valvula</a> 
                </li>
                <li>
                  <a href="">Cilindro hidraulico</a>
                </li>
              </ul>
        </aside>

        
        {/*<div class="dropdown"><li class=" even">
          <button class="mainmenubtn">Main Menu</button><li class=" odd">
          <div class="dropdown-child"><li class=" even">
            <a href="http://wwww.tudominio.com/page1.html">Sub Menu 1</a>
            <a href="http://wwww.tudominio.com/page2.html">Sub Menu 2</a>
            <a href="http://wwww.tudominio.com/page3.html">Sub Menu 3</a>
            <a href="http://wwww.tudominio.com/page4.html">Sub Menu 4</a>
            <a href="http://wwww.tudominio.com/page5.html">Sub Menu 5</a>
          </div>
  </div>*/}
        <div class="flex inset-x-2 top-6 z-50 ml-4">
  

            <div class="flex w-96  h-96 relative">
            <img src="../images/413- Parte 7 - Temperature Transmiter Assy .jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>

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