import RichTextEditor from "@/components/custom/RichTextEditor";
import AppSidebar from "@/components/custom/Sidebar";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SidebarProvider } from "@/components/ui/sidebar";

const NewEntryPage = () => {
  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <h1>Crear nueva entrada del foro</h1>
          <Form>
            <Input>Título de la votación...</Input>
            <RichTextEditor />
          </Form>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default NewEntryPage;
