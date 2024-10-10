import { defineType, defineField } from "sanity";

export const stringText = defineType({
    name: 'stringText',
    type: 'object',
    title: 'Ligne de texte',
    fields: [
        {
            name: 'string',
            type: 'string',
            title: 'Ligne de texte',
        },
    ],
    preview: {
        select: {
            title: 'string',
        },
        prepare({ title }) {
            return {
                title: title || 'Pas de texte',
                subtitle: 'Ligne de texte',
            };
        },
    },
})