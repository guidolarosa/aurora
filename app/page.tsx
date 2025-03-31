import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/Sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <AppSidebar />
        <div className="flex h-screen bg-white ml-64 p-10 flex-col">
          <h1 className="text-3xl font-bold mb-6 w">¡Bienvenidos, Compañeros!</h1>
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                Foros de Debate
                <span className="text-sm font-normal text-stone-500">(Nuevo)</span>
              </h2>
              <p className="text-stone-600 mb-4">
                Participa en discusiones sobre doctrina peronista, historia, política y más. Un espacio para el intercambio de ideas entre compañeros.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-xl font-bold mb-4">Chat Comunitario</h2>
              <p className="text-stone-600 mb-4">
                Conecta en tiempo real con otros compañeros. Comparte experiencias y mantente al día con las últimas novedades del movimiento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-xl font-bold mb-4">Mensajes Directos</h2>
              <p className="text-stone-600 mb-4">
                Sistema de mensajería privada para coordinar actividades y mantener conversaciones personales con otros miembros.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h2 className="text-xl font-bold mb-4">Calendario de Eventos</h2>
              <p className="text-stone-600 mb-4">
                Mantente informado sobre próximos encuentros, charlas y actividades relacionadas con el movimiento peronista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
