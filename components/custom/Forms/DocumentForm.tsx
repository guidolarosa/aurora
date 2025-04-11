"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/custom/RichTextEditor";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/utils/supabase/client";

interface DocumentForm {
  title: string;
  description: string;
  short_description: string;
  file: File;
  type: "libro" | "video" | "pdf" | "link";
  category: "archivo" | "organización" | "multimedia" | "doctrina";
  uploaded_by: string;
}

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "El título debe tener al menos 2 caracteres.",
    })
    .max(100, {
      message: "El título debe tener como máximo 100 caracteres.",
    }),
  description: z.string(),
  short_description: z.string(),
  type: z.string(),
  category: z.string(),
  file: z.any(),
});

const documentTypes = [
  {
    value: "libro",
    label: "Libro",
  },
  {
    value: "video",
    label: "Video",
  },
  {
    value: "pdf",
    label: "PDF",
  },
  {
    value: "link",
    label: "Link",
  },
];

const categories = [
  {
    value: "doctrina",
    label: "Doctrina",
  },
  {
    value: "multimedia",
    label: "Multimedia",
  },
  {
    value: "organización",
    label: "Organización",
  },
  {
    value: "archivo",
    label: "Archivo",
  },
];

const DocumentForm = () => {
  const { push } = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  
  const supabase = createClient();
  const onSubmit = async (data: DocumentForm) => {
    const {
      data: { user },
    }: any = await supabase.auth.getUser();
    const { file } = data;
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { data: fileData, error: fileError } = await supabase.storage
      .from("documents")
      .upload(`uploads/${fileName}`, file);

    if (fileError) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: submitData, error } = await supabase
      .from("documents")
      .insert([
        {
          title: data.title,
          description: data.description,
          short_description: data.short_description,
          file_url: fileData.fullPath,
          category: data.category,
          type: data.type,
          uploaded_by: user.id,
        },
      ]);

    if (!error) {
      push("/dashboard/documents");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Título del documento..." {...field}></Input>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="short_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción Breve</FormLabel>
              <FormControl>
                <Input
                  placeholder="Escriba una descripción breve..."
                  {...field}
                ></Input>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <RichTextEditor />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <FormControl>
                  <Select onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo de documento..." />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel>Categoría</FormLabel>
                <FormControl>
                  <Select onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría del documento..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="file"
          render={({ field: { onChange } }) => (
            <FormItem>
              <FormLabel>Archivo</FormLabel>
              <FormControl>
                <Input
                  id="picture"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    onChange(file); // <-- esto guarda el archivo en el form state
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormItem className="mt-8">
          <Button className="w-fit">Crear</Button>
        </FormItem>
      </form>
    </Form>
  );
};

export default DocumentForm;
