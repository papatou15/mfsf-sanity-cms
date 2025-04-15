import { defineType, defineField } from "sanity";

export const temoignages = defineType({
    name: 'temoignages',
    title: 'Témoignages',
    type: 'document',
    fields: [
        defineField({
            name: 'temoignages',
            title: 'Témoignages',
            type: 'array',
            of: [
                defineField({
                    name: 'temoignage',
                    title: 'Témoignage',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Nom',
                            type: 'string',
                        }),
                        defineField({
                            name: 'text',
                            title: 'Témoignage',
                            type: 'text',
                        }),
                    ]
                })
            ]
        })
    ],
    preview: {
        prepare(){
            return {
                title: 'Témoignages'
            }
        }
    }
})