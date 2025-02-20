import { defineType, defineField } from "sanity";

export const checkboxField = defineType({
    name: "checkboxField",
    type: "object",
    title: "Cases à cocher",
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
  