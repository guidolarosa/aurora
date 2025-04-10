"use client";

import {
  EditorProvider,
  PortableTextEditable,
  defineSchema,
} from "@portabletext/editor";
import { EventListenerPlugin } from "@portabletext/editor/plugins";
import { useEditor } from "@portabletext/editor";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  QuoteIcon,
  RemoveFormatting,
  Underline,
} from "lucide-react";

import type {
  RenderDecoratorFunction,
  RenderStyleFunction,
} from "@portabletext/editor";
import { FormField, FormItem, FormLabel } from "../ui/form";
import { useFormContext } from "react-hook-form";

function Toolbar() {
  // useEditor provides access to the PTE
  const editor = useEditor();

  // Iterate over the schema (defined earlier), or manually create buttons.
  const styleButtons = schemaDefinition.styles.map((style) => (
    <Button
      key={style.name}
      variant={"outline"}
      className="rounded-none first:rounded-l last:rounded-r border-l-0 first:border-l"
      title={style.name}
      onClick={() => {
        // Send style toggle event
        editor.send({
          type: "style.toggle",
          style: style.name,
        });
        editor.send({
          type: "focus",
        });
      }}
    >
      {style.name === "normal" && <RemoveFormatting />}
      {style.name === "blockquote" && <QuoteIcon />}
      {style.name === "h1" && <Heading1 />}
      {style.name === "h2" && <Heading2 />}
      {style.name === "h3" && <Heading3 />}
    </Button>
  ));

  const decoratorButtons = schemaDefinition.decorators.map((decorator) => (
    <Button
      key={decorator.name}
      variant={"outline"}
      className="rounded-none first:rounded-l last:rounded-r border-l-0 first:border-l"
      title={DeviceOrientationEvent.name}
      onClick={() => {
        // Send decorator toggle event
        editor.send({
          type: "decorator.toggle",
          decorator: decorator.name,
        });
        editor.send({
          type: "focus",
        });
      }}
    >
      {decorator.name === "strong" && <Bold />}
      {decorator.name === "em" && <Italic />}
      {decorator.name === "underline" && <Underline />}
    </Button>
  ));
  return (
    <div className="flex gap-4 mb-2 items-center">
      <div>{styleButtons}</div>
      <div>{decoratorButtons}</div>
    </div>
  );
}

const renderStyle: RenderStyleFunction = (props) => {
  if (props.schemaType.value === "h1") {
    return <h1>{props.children}</h1>;
  }
  if (props.schemaType.value === "h2") {
    return <h2>{props.children}</h2>;
  }
  if (props.schemaType.value === "h3") {
    return <h3>{props.children}</h3>;
  }
  if (props.schemaType.value === "blockquote") {
    return <blockquote>{props.children}</blockquote>;
  }
  return <>{props.children}</>;
};

const renderDecorator: RenderDecoratorFunction = (props) => {
  if (props.value === "strong") {
    return <strong>{props.children}</strong>;
  }
  if (props.value === "em") {
    return <em>{props.children}</em>;
  }
  if (props.value === "underline") {
    return <u>{props.children}</u>;
  }
  return <>{props.children}</>;
};

const schemaDefinition = defineSchema({
  // Decorators are simple marks that don't hold any data
  decorators: [{ name: "strong" }, { name: "em" }, { name: "underline" }],
  // Styles apply to entire text blocks
  // There's always a 'normal' style that can be considered the paragraph style
  styles: [
    { name: "normal" },
    { name: "h1" },
    { name: "h2" },
    { name: "h3" },
    { name: "blockquote" },
  ],

  // The types below are left empty for this example.
  // See the rendering guide to learn more about each type.

  // Annotations are more complex marks that can hold data (for example, hyperlinks).
  annotations: [],
  // Lists apply to entire text blocks as well (for example, bullet, numbered).
  lists: [],
  // Inline objects hold arbitrary data that can be inserted into the text (for example, custom emoji).
  inlineObjects: [],
  // Block objects hold arbitrary data that live side-by-side with text blocks (for example, images, code blocks, and tables).
  blockObjects: [],
});

const RichTextEditor = () => {
  const { control } = useFormContext();

  return (
    <EditorProvider
      initialConfig={{
        schemaDefinition,
      }}
    >
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descripción</FormLabel>
            <div className="border border-stone-200 p-2 rounded-lg">
              <Toolbar />
              <EventListenerPlugin
                on={(event) => {
                  if (event.type === "mutation") {
                    field.onChange(JSON.stringify(event.value))
                  }
                }}
              />
              <PortableTextEditable
                className="rounded-lg p-4 focus:outline-0"
                renderStyle={renderStyle}
                renderDecorator={renderDecorator}
                renderBlock={(props) => <div>{props.children}</div>}
                renderListItem={(props) => <>{props.children}</>}
                renderPlaceholder={() => (
                  <div className="pl-4 text-stone-500">Por favor ingresá un detalle de tu propuesta...</div>
                )}
                value={field.value}
              />
            </div>
          </FormItem>
        )}
      />
    </EditorProvider>
  );
};

export default RichTextEditor;
