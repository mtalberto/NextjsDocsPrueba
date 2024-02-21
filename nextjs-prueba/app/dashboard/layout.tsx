import SideNav from '@/app/ui/dashboard/sidenav';
 
{/*   childrenapoyo. Este hijo puede ser una página u otro diseño. En su caso, las páginas internas 
/dashboard se anidarán automáticamente dentro de un <Layout />formato similar:  basicamente tendra el estilo
las paginas que esten anidadas dentro de esta carpeta y subcarpetas */}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}