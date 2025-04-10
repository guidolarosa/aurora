import AppSidebar from "@/components/custom/Sidebar";
import VoteForm from "@/components/custom/VoteForm";

import { SidebarProvider } from "@/components/ui/sidebar";


const NewEntryPage = () => {

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <h1>Crear nueva votación</h1>
          <VoteForm />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default NewEntryPage;
