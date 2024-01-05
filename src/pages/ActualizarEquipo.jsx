import { Toaster, toast } from 'sonner'
const CatalogoComponentes = () => {
 
  return (
    <div className="border-t container border-white grid md:grid-cols-2 md:items-center gap-14 md:align-middle md:justify-stretch sm:my-1">
        

            <div className=' mt-2  flex justify-between ' >
                <h4 className="font-bold" >Chancadoras MP1250 - Toquepala</h4>
            </div>
             {/*usar react router con enlaces a las paginas que van a aparecer en la subparte*/}
             {/*Outlet para renderizar*/}
     
       
        <div className="grid md:grid-rows-2 w-full gap-4">
          <div>
          <img src="./public/379-AirCoolerPipingAssembly-mainComponent.jpg" alt="" />
          </div>
          <div>
              {/*<!-- Table responsive wrapper -->**/}
              
          <div class="overflow-x-auto bg-white dark:bg-neutral-700 h-[150px] overflow-y-scroll">

              {/*<!-- Search input -->*/}
              <div class="relative m-[2px] mb-3 mr-5 float-left">
                <label for="inputSearch" class="sr-only">Search </label>
                <input id="inputSearch" type="text" placeholder="Search..." class="block w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-neutral-500 dark:text-neutral-200">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </span>
              </div>

                  {/*<!-- Filter -->*/}
                  <div class="relative m-[2px] mb-3 float-right hidden sm:block">
                    <label for="inputFilter" class="sr-only">Filter</label>
                    <select id="inputFilter" class="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
                      <option value="1" selected>Last week</option>
                      <option value="2">Last month</option>
                      <option value="3">Yesterday</option>
                      <option value="4">Last 7 days</option>
                      <option value="5">Last 30 days</option>
                    </select>
                  </div>

{/*} <!-- Table -->*/}
<table class="min-w-full text-left text-black text-xs whitespace-nowrap">

  {/*<!-- Table head -->*/}
  <thead class="uppercase tracking-wider sticky top-0 outline outline-2 outline-neutral-200 dark:outline-neutral-600 bg-neutral-50 dark:bg-neutral-800 border-t">
    <tr>
      <th scope="col" class="px-6 py-4 border-x dark:border-neutral-600">
        Product
          <a href="" class="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
              fill="currentColor"
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
            </svg>
          </a>

      </th>
      <th scope="col" class="px-6 py-4 border-x dark:border-neutral-600">
        Price
          <a href="" class="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
              fill="currentColor"
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
            </svg>
          </a>

      </th>
      <th scope="col" class="px-6 py-4 border-x dark:border-neutral-600">
        Stock
          <a href="" class="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
              fill="currentColor"
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
            </svg>
          </a>

      </th>
      <th scope="col" class="px-6 py-4 border-x dark:border-neutral-600">
        Status
          <a href="" class="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="w-[0.65rem] h-[0.65rem] inline ml-1 text-neutral-500 dark:text-neutral-200 mb-[1px]"
              fill="currentColor"
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
            </svg>
          </a>

      </th>
    </tr>
  </thead>

  {/*<!-- Table body -->*/}
  <tbody className='text-black'>

    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
      <th scope="row" class="px-6 py-4 border-x dark:border-neutral-600">
        Handbag
      </th>
      <td class="px-6 py-4 border-x dark:border-neutral-600">$129.99</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">30</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
    </tr>

    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 bg-neutral-50 dark:bg-neutral-800">
      <th scope="row" class="px-6 py-4 border-x dark:border-neutral-600">
        Shoes
      </th>
      <td class="px-6 py-4 border-x dark:border-neutral-600">$89.50</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">25</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
    </tr>

    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
      <th scope="row" class="px-6 py-4 border-x dark:border-neutral-600">
        Bedding Set
      </th>
      <td class="px-6 py-4 border-x dark:border-neutral-600">$69.99</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">40</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
    </tr>

    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600 bg-neutral-50 dark:bg-neutral-800">
      <th scope="row" class="px-6 py-4 border-x dark:border-neutral-600">
        Dining Table
      </th>
      <td class="px-6 py-4 border-x dark:border-neutral-600">$449.99</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">5</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
    </tr>

    <tr class="border-b dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600">
      <th scope="row" class="px-6 py-4 border-x dark:border-neutral-600">
        Soap Set
      </th>
      <td class="px-6 py-4 border-x dark:border-neutral-600">$24.95</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">50</td>
      <td class="px-6 py-4 border-x dark:border-neutral-600">In Stock</td>
    </tr>

  </tbody>

  {/*<!-- Table footer -->*/}
  

</table>



          </div>
            <Toaster richColors />


        </div>



      </div>
       
    </div>
        
  )
}

export default CatalogoComponentes