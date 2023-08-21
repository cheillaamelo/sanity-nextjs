import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/objects/blockContent";
import category from "./schemas/documents/category";
import post from "./schemas/documents/post";
import author from "./schemas/documents/author";
import page from "./schemas/documents/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, page],
};
