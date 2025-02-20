import { defineType, defineField } from "sanity";

export const textField = defineType({
    name: "textField",
    type: "object",
    title: "Entrée de texte",
    fields: [
      defineField({
        name: "label",
        type: "string",
        title: "Libellé",
      }),
      defineField({
        name: "placeholder",
        type: "string",
        title: "Valeur par défaut",
      }),
      defineField({
        name: "required",
        type: "boolean",
        title: "Requis?",
      }),
    ],
  });
  