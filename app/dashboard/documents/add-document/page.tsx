import AppSidebar from "@/components/custom/Sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import DocumentForm from "@/components/custom/Forms/DocumentForm";


const AddDocumentPage = () => {

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <h1>Añadir nuevo documento</h1>
          <DocumentForm />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AddDocumentPage;
