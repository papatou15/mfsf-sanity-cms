import { defineType, defineField } from "sanity";

export const contact = defineType({
    name: 'contact',
    type: 'document',
    title: 'Informations de contact',
    fields: [
        defineField({
            name: 'adress',
            type: 'string',
            title: 'Adresse'
        }),
        defineField({
            name: 'telephone',
            type: 'string',
            title: 'Téléphone',
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Courriel'
        })
    ]
})