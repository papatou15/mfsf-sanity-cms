import { defineType, defineField } from "sanity";

export const radioField = defineType({
    name: "radioField",
    type: "object",
    title: "Boutons radio",
    fields: [
      defineField({
        name: "label",
        type: "string",
        title: "Question",
      }),
      defineField({
        name: "options",
        type: "array",
        title: "Options",
        of: [{ type: "string" }],
      }),
      defineField({
        name: "required",
        type: "boolean",
        title: "Requis?",
      }),
    ],
  });
  