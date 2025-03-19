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
        }),
        defineField({
            name: 'headerLogo',
            type: 'image',
            title: 'Logo',
            description: 'Logo utilisé dans l\'en-tête'
        }),
        defineField({
            name: 'footerLogo',
            type: 'image',
            title: 'Logo',
            description: 'Logo utilisé dans le pied de page'
        })
    ]
})