import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/Sidebar";
import {
  MessageSquare,
  Users,
  MessagesSquare,
  Calendar,
  File,
  Vote,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora | Inicio",
  description: "Peronist Community",
};

export default function Home() {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <AppSidebar />
        <div className="flex h-screen bg-white ml-64 p-10 flex-col">
          <h1 className="text-3xl font-bold mb-6 w">
            ¡Bienvenidos, Compañeros!
          </h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Link
              href="/forum"
              className="bg-white p-6 rounded-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Foros de Debate
                <span className="text-sm font-normal text-stone-500">
                  (Nuevo)
                </span>
              </h2>
              <p className="text-stone-600 mb-4">
                Participa en discusiones sobre doctrina peronista, historia,
                política y más. Un espacio para el intercambio de ideas entre
                compañeros.
              </p>
            </Link>
            <Link
              href="/chat"
              className="bg-white p-6 rounded-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Chat Comunitario
              </h2>
              <p className="text-stone-600 mb-4">
                Conecta en tiempo real con otros compañeros. Comparte
                experiencias y mantente al día con las últimas novedades del
                movimiento.
              </p>
            </Link>
            <Link
              href="/chat"
              className="bg-white p-6 rounded-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessagesSquare className="w-5 h-5" />
                Mensajes Directos
              </h2>
              <p className="text-stone-600 mb-4">
                Sistema de mensajería privada para coordinar actividades y
                mantener conversaciones personales con otros miembros.
              </p>
            </Link>
            <Link
              href="/calendar"
              className="bg-white p-6 rounded-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Calendario de Eventos
              </h2>
              <p className="text-stone-600 mb-4">
                Mantente informado sobre próximos encuentros, charlas y
                actividades relacionadas con el movimiento peronista.
              </p>
            </Link>
            <Link
              href="/documents"
              className="bg-white p-6 rounded-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <File className="w-5 h-5" />
                Documentación
              </h2>
              <p className="text-stone-600 mb-4">
                Accede a documentos históricos, manifiestos y materiales de
                formación política del movimiento peronista.
              </p>
            </Link>
            <Link
              href="/vote"
              className="bg-white p-6 rounded-lg border border-stone-200 hover:bg-stone-50 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Vote className="w-5 h-5" />
                Votaciones
              </h2>
              <p className="text-stone-600 mb-4">
                Participa en las votaciones internas y ayuda a tomar decisiones
                importantes para nuestra organización.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
