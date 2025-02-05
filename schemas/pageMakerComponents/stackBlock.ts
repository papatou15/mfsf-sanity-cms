import { defineType, defineField } from "sanity";

export const stackBlock = defineType({
    name: 'stackBlock',
    type: 'object',
    title: 'Bloc de contenu',
    fields: [
        {
            name: 'items',
            type: 'array',
            title: 'Blocks',
            of: [
                { type: 'image' },
                { type: 'largeTitle' },
                { type: 'mediumTitle' },
                { type: 'smallTitle' },
                { type: 'stringText' },
                { type: 'textInput' },
                { type: 'card' },
                { type: 'button' },
                { type: 'carousel' },
                { type: 'textOnPicture' },
                { type: 'stackBlock' },
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
        defineField({
            name: 'bgColor',
            type: 'color',
            title: 'Couleur de fond',
            options: {
                colorList: [
                    '#8800C8',
                    '#E2B41B',
                    '#FFC300',
                    "#20453E",
                    "#e5e5e5",
                    "#000000",
                    "F9EFE3"
                ]
            }
        })
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