import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
// import documents from "@/mocks/documents";
import Image from "next/image";
import {
  FileText,
  Video,
  Link as LinkIcon,
  Search,
  Plus,
  Book,
  Download,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { PortableText } from "next-sanity";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Aurora | Documentos",
  description: "Documentos de la comunidad",
};

const DocumentsPage = async () => {
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="w-4 h-4" />;
      case "video":
        return <Video className="w-4 h-4" />;
      case "link":
        return <LinkIcon className="w-4 h-4" />;
      default:
        return <Book className="w-4 h-4" />;
    }
  };

  const supabase = await createClient();
  const { data: documents } = await supabase
    .from("documents")
    .select("*, uploader:uploaded_by(*)");

  return (
    <SidebarProvider>
      <div className="font-[family-name:var(--font-geist-sans)] w-full">
        <AppSidebar />
        <div className="flex ml-64 p-10 flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-2">Documentos</h1>
            <Link
              href="/dashboard/documents/add-document"
              className={buttonVariants({ variant: "outline" })}
            >
              <Plus />
              Añadir documento
            </Link>
          </div>
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
          <div className="border rounded-md overflow-hidden">
            <Table>
              <TableHeader className="bg-stone-50">
                <TableRow>
                  <TableHead>Documento</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Subido por</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents?.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <p className="font-medium mb-1">{doc.title}</p>
                      <div className="text-sm line-clamp-2">
                        <PortableText value={JSON.parse(doc.description)} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <div className="rounded-full px-2 py-0.5 flex items-center gap-1 bg-stone-200 text-xs">
                          {getTypeIcon(doc.type)}
                          {doc.type}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-xs rounded-full px-2 py-0.5 bg-white border w-fit">
                        {doc.category}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="relative min-w-8 h-8 rounded-full bg-amber-400">
                          <Image
                            src={doc.uploader.avatar_url}
                            alt={doc.uploader.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">
                            {doc.uploader.name} {doc.uploader.lastname}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/${doc.file_url}`}
                        download={doc.uploader.name}
                        className={buttonVariants({ variant: "outline" })}
                      >
                        <Download />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DocumentsPage;
