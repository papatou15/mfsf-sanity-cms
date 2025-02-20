import { defineType, defineField } from "sanity";

export const dateField = defineType({
    name: "dateField",
    type: "object",
    title: "Date Picker",
    fields: [
      defineField({
        name: "label",
        type: "string",
        title: "Label",
      }),
      defineField({
        name: "required",
        type: "boolean",
        title: "Required",
      }),
    ],
  });
  