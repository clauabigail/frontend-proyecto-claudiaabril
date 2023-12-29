import { TbChevronRight } from "react-icons/tb";
import { formatNumber } from "../../utils";
import BaseTag from "../shared/BaseTag";
import { Link } from "react-router-dom";

const InvoiceList = ({ invoices }) => {
  return (
    <main className=" flex flex-col grid-cols-3 gap-4">
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <div className="">
       

              <div className="font-extrabold flex justify-between bg-blue-900 text-yellow-50 flex inset-x-2 top-6 z-50 ml-4">
                <span>Codigo</span>
                <span>Fecha de instalacion</span>
                <span>Nombre de Equipo</span>
                <span>Costo</span>
                <span>Estado</span>
              </div>
      
      {/* {JSON.stringify(invoices)} */}

      {invoices && invoices.map(invoice => {
        return (
          <div className="">

         <article
            className="bg-blue-400 px- py- rounded-lg flex justify-between text-white text-base items-center justify-items-center gap-3"
            key={invoice.id}
            >       
            
              <div className="w-20">
                <span className="text-slate-400">#</span>
                <span className="font-extrabold uppercase">{invoice.code}</span>
              </div>
              <div className="w-44 font-semibold">{invoice.invoice.date}</div>
              <div className="w-44 font-semibold">{invoice.bill.to.client.name}</div>
              <div className="w-44 text-3xl font-extrabold">
                {invoice.invoice.currency.symbol}
                {formatNumber(invoice.invoice.grandTotal)}
              </div>
              <div>
                {invoice.status === 'paid'
                  && <BaseTag label={invoice.status} bgColor='bg-emerald-400/20' dotColor='text-emerald-400'  />
                }
                {invoice.status === 'pending'
                  && <BaseTag label={invoice.status} bgColor='bg-orange-400/20' dotColor='text-orange-400'  />
                }
                {invoice.status === 'draft'
                  && <BaseTag label={invoice.status} bgColor='bg-slate-400/20' dotColor='text-slate-400'  />
                }
              </div>
              <div className="w-10 flex justify-center">
                <Link to={`/invoices/${invoice.id}`}>
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

export default InvoiceList