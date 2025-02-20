import { defineType, defineField } from "sanity";

export const dropdownField = defineType({
    name: "dropdownField",
    type: "object",
    title: "Liste déroulante",
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
  