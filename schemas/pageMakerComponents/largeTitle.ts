import { defineType, defineField } from "sanity";

export const largeTitle = defineType({
    name: 'largeTitle',
    type: 'object',
    title: 'Gros titre',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Gros titre',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Pas de titre',
                subtitle: 'Gros titre',
            };
        },
    },
})