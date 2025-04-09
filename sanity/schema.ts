import { type SchemaTypeDefinition } from "sanity";
import { category } from "./schemas/category";
import { home } from "./schemas/home";
import { article } from "./schemas/article";
import { author } from "./schemas/author";
import { events } from "./schemas/events";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    home,
    article,
    events,
    author,
  ],
};
