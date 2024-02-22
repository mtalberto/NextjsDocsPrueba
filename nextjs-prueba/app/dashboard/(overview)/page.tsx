
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';
import { fetchLatestInvoices } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton,LatestInvoicesSkeleton,CardSkeleton } from '@/app/ui/skeletons';
{/*La página es un componente asíncrono . Esto le permite utilizarlo awaitpara recuperar datos.       */}

{/* se refiere a una secuencia de solicitudes de red que dependen de la finalización de solicitudes anteriores
 debemos esperar a fetchRevenue()que se ejecute antes de fetchLatestInvoices()poder comenzar a ejecutarse   */}
export default async function Page() {
    
    ;
    return (
        
        <main>
           
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
          </h1>
       
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
       
          </div>
        </main>
      );
}