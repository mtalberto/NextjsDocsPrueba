
{/*loading.tsx es un archivo Next.js especial creado sobre Suspense, que le permite crear una interfaz de usuario 
alternativa para mostrarla como reemplazo mientras se carga el contenido de la página     */}
{/*Un DashboardSkeleton es una versión simplificada de la interfaz de usuario. Muchos sitios web los utilizan como
 marcador de posición (o respaldo) para indicar a los usuarios que el contenido se está cargando.  */}

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton/>;
  }