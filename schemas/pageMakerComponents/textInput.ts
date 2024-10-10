import { defineType, defineField } from "sanity";

export const textInput = defineType({
    name: 'textInput',
  type: 'object',
  title: 'Bloc de texte',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Bloc de texte',
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare({ title }) {
      return {
        title: title || 'No text',
        subtitle: 'Bloc de texte',
      };
    },
  },
})