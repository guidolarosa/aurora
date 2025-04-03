import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import documents from "@/mocks/documents";
import Image from "next/image";
import { FileText, Video, Link as LinkIcon, FileImage, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const DocumentsPage = () => {
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'link':
        return <LinkIcon className="w-4 h-4" />;
      default:
        return <FileImage className="w-4 h-4" />;
    }
  };

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <h1 className="text-2xl font-bold mb-2">Documentos</h1>
          <div className="flex items-center justify-between">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <Input
                type="text"
                placeholder="Buscar documentos..."
                className="w-full pl-9 pr-4 py-2 rounded-md border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent max-w-96"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Todas las categorías" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctrina">Doctrina</SelectItem>
                <SelectItem value="historia">Historia</SelectItem>
                <SelectItem value="discursos">Discursos</SelectItem>
                <SelectItem value="manifiestos">Manifiestos</SelectItem>
                <SelectItem value="formacion">Formación</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="rounded-md border bg-white">
            <div className="grid grid-cols-12 gap-4 p-4 border-b bg-stone-50 font-medium text-sm text-stone-600">
              <div className="col-span-4">Documento</div>
              <div className="col-span-2">Tipo</div>
              <div className="col-span-2">Categoría</div>
              <div className="col-span-2">Subido por</div>
              <div className="col-span-2">Detalles</div>
            </div>
            {documents.map((doc) => (
              <div key={doc.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-b-0 hover:bg-stone-50 cursor-pointer items-center">
                <div className="col-span-4">
                  <p className="font-medium mb-1">{doc.title}</p>
                  <p className="text-sm text-stone-500">{doc.description}</p>
                </div>
                <div className="col-span-2">
                  <div className="flex gap-2">
                    <div className="rounded-full px-2 py-0.5 flex items-center gap-1 bg-stone-200 text-xs">
                      {getTypeIcon(doc.type)}
                      {doc.type}
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs rounded-full px-2 py-0.5 bg-white border w-fit">
                    {doc.categories[0]}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image
                        src={doc.uploader.avatarUrl}
                        alt={doc.uploader.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{doc.uploader.name}</p>
                      <p className="text-stone-500">{doc.uploader.role}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-sm text-stone-500">
                  <p>{doc.fileSize || doc.duration || `${doc.itemCount} items`}</p>
                  <p>{doc.downloads ? `${doc.downloads} descargas` : doc.views ? `${doc.views} vistas` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DocumentsPage;
