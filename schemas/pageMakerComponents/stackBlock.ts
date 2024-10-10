import { defineType, defineField } from "sanity";

export const stackBlock = defineType({
    name: 'stackBlock',
    type: 'object',
    title: 'Stack Block',
    fields: [
        {
            name: 'items',
            type: 'array',
            title: 'Blocks',
            of: [
                { type: 'image' },         // Add images
                { type: 'largeTitle' },
                { type: 'mediumTitle' },
                { type: 'smallTitle' },
                { type: 'stringText' },
                { type: 'textInput' },
                { type: 'card' },
                { type: 'button' },
                { type: 'stackBlock' },    // Allow stackBlock inside itself
            ],
        },
        {
            name: 'layout',
            type: 'string',
            title: 'Layout',
            options: {
                list: [
                    { title: 'Horizontal (Stack side by side)', value: 'horizontal' },
                    { title: 'Vertical (Stack top to bottom)', value: 'vertical' },
                ],
                layout: 'radio',
            },
        },
    ],
    preview: {
        select: {
            layout: 'layout',
            items: 'items',
        },
        prepare({ layout, items }) {
            return {
                title: `Stack: ${layout === 'horizontal' ? 'Horizontal' : 'Vertical'}`,
                subtitle: `${items.length} items`,
            };
        },
    },
})