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
                { type: 'formButton' },
                { type: 'carousel' },
                { type: 'textOnPicture' },
                { type: 'columnBlock' },
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
                    '#BBD143',
                    '#95AA26',
                    '#EA5045',
                    '#9F4E48',
                    '#F3943E',
                    '#CD9054',
                    "#00AEC3",
                    "#2C939F",
                    "#e5e5e5",
                    "#000000",
                    "#FFF8DD"
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