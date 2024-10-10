import { defineType, defineField } from "sanity";

export const smallTitle = defineType({
    name: 'smallTitle',
    type: 'object',
    title: 'Petit titre',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Petit titre',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Pas de titre',
                subtitle: 'Petit titre',
            };
        },
    },
})