function Home() {
  return (
    <div>
    
        <div style={{ backgroundImage: "url(/molino.jpg)" }} className=" bg-no-repeat text-center mt-28 w-auto  sm:py-48 lg:py-56">
        <header className=" w-auto justify-items-center  sm:py-48 lg:py-56">
          <h1 className=" mt-0 pt-0 font-bold tracking-tight text-white sm:text-4xl ">
                Catalogo de partes de equipos - Concentradora SPCC
          </h1>

              <p className="mt-6 text-lg leading-8 text-white text-or sm:mb-18">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
              </p>
                      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className=" sm:mb-8 sm:flex sm:justify-center">
                          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                          Ingreso a reporte de fallas.{' '}
                            <a href="#" className="font-bold text-indigo-900">
                              <span className="absolute inset-0" aria-hidden="true" />
                              Reportar <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>   
        </header>   
        </div>
     
       

                 
                  {/*<div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get started
                      </a>
                      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                   </div>*/}
                   <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023. All Rights Reserved.
                      </span>
                      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                          <li>
                              <a href="#" class="hover:underline me-4 md:me-6">About</a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline">Contact</a>
                          </li>
                      </ul>
                  </footer>
                         
    </div>
  )
}

export default Home




