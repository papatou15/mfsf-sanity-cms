import { defineField, defineType } from "sanity";

export const formulaireMaker = defineType({
    name: 'formulaires',
    title: `Formulaires d'inscription`,
    type: "document",
    fields: [
        defineField({
            name: 'formTitle',
            title: 'Titre du formulaire',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'form',
            title: 'Formulaire',
            type: 'array',
            of: [
                defineField({
                    type: 'object',
                    name: 'fieldSelector',
                    title: 'Sélecteur de champs',
                    fields: [
                        {name: 'fields', title: 'Champs à rajouter', type: 'string', options: {
                            list: [
                                {title: 'Titre de niveau 1', value: 'h1Title'},
                                {title: 'Titre de niveau 2', value: 'h2Title'},
                                {title: 'Titre de niveau 3', value: 'h3Title'},
                                {title: 'Titre de niveau 4', value: 'h4Title'},
                                {title: 'Titre de niveau 5', value: 'h5Title'},
                                {title: 'Titre de niveau 6', value: 'h6Title'},
                                {title: 'Titre de niveau 7', value: 'h7Title'},
                                {title: 'Ligne de texte', value: 'stringInput'},
                                {title: 'Boîte de texte', value: 'richTextInput'}
                            ]
                        }},
                        // Titres
                        defineField({
                            name: 'titleStringField',
                            title: 'Titre',
                            type: 'string',
                            hidden: ({parent}) => {
                                const pattern = /^h\dTitle$/;
                                return !pattern.test(parent?.fields)
                            },
                        }),
                        // Ligne de texte
                        defineField({
                            name: 'stringField',
                            title: 'Texte',
                            type: 'string',
                            hidden: ({parent}) => parent?.fields !== "stringInput"
                        }),
                        // Boîte de texte formatée
                        defineField({
                            name: 'richTextField',
                            title: 'Texte',
                            type: 'array',
                            of: [{type: 'block'}],
                            hidden: ({parent}) => parent?.fields !== "richTextInput"
                        }),
                        defineField({
                            name: 'fieldValue',
                            title: 'Donnée',
                            type: 'array',
                            of: [{type: 'string'}],
                            hidden: ({parent}) => !parent?.fields
                        })
                    ]
                })
            ]
        })
    ]
})