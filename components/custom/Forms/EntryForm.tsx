"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/custom/RichTextEditor";
import { Button } from "../../ui/button";
import { createClient } from "@/utils/supabase/client";

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
});

const EntryForm = () => {
  const supabase = createClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (e: { title: string; description: string }) => {
    const { data, error, status } = await supabase.from("votes").insert([
      {
        title: e.title,
        description: e.description,
      }
    ]);
    console.log(data, error, status);
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
              <Input placeholder="Título de la votación..." {...field}></Input>
            </FormItem>
          )}
        ></FormField>
        <RichTextEditor />
        <FormItem className="mt-8">
          <Button className="w-fit">Crear</Button>
        </FormItem>
      </form>
    </Form>
  );
};

export default EntryForm;
