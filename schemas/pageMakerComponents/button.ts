import { defineType, defineField } from "sanity";

export const button = defineType({
    name: 'button',
    title: 'Bouton',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string'
        }),
        defineField({
            name: 'link',
            title: 'Lien',
            type: 'url'
        }),
        defineField({
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Gros avec fond', value: 'coloredbg' },
                    { title: 'Petit avec fond', value: 'smallbg' },
                    { title: 'Gros sans fond', value: 'colorless' },
                    { title: 'Petit sans fond', value: 'smallcolorless' }
                ]
            }
        })
    ]
})