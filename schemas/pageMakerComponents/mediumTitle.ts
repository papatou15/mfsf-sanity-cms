import { defineType, defineField } from "sanity";

export const mediumTitle = defineType({
    name: 'mediumTitle',
    type: 'object',
    title: 'Titre médium',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre médium',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Pas de titre',
                subtitle: 'Titre médium',
            };
        },
    },
})