import { defineField, defineType } from "sanity";

export const menuType = defineType({
    name: 'menu',
    title: 'Menus',
    type: 'document',
    fields: [
        defineField({
            name: 'pages',
            title: 'Pages',
            type: 'array',
            of: [
                defineField({
                    type: 'reference',
                    name: 'Page',
                    to: {type: 'pageMaker'}
                })
            ]
        })
    ]
})