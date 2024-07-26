import { defineField, defineType } from "sanity";
import formatPhoneNumber from "./utils/formatPhoneNumber";

export const form612 = defineType({
    name: 'form6-12',
    title: 'Formulaire: 6-12 ans',
    type: 'document',
    fields: [
        defineField({
            name: 'nom',
            title: 'Prénom',
            type: 'string',
        }),
        defineField({
            name: 'nomFamille',
            title: 'Nom de famille',
            type: 'string'
        }),
        defineField({
            name: 'genre_check',
            title: 'Genre',
            type: 'object',
            fields: [
                {name: 'genre', title: 'Genre', type: 'string', options: {
                    list: [
                        {title: 'Homme', value: 'homme'},
                        {title: 'Femme', value: 'femme'},
                        {title: 'Autre', value: 'autre'},
                    ]
                }},
                {name: 'other_genre', title: 'Autre', type: 'string', hidden: ({parent}) => parent?.genre !== 'autre'},
            ]
        }),
        defineField({
            name: 'date_naissance',
            title: 'Date de naissance',
            type: 'date',
        }),
        defineField({
            name: 'noAssuranceMaladie',
            title: `No d'assurance maladie`,
            type: 'string',
        }),
        defineField({
            name: 'adresse',
            title: 'Adresse',
            type: 'string',
        }),
        defineField({
            name: 'ville',
            title: 'Ville',
            type: 'string',
        }),
        defineField({
            name: 'zip_code',
            title: 'Code postal',
            type: 'string',
        }),
        defineField({
            name: "phone",
            title: "Numéro de téléphone",
            type: "array",
            of: [
                defineField({
                    type: 'object',
                    name: 'phone_form',
                    fields: [
                        {name: 'phone_type', title: 'Type', type: 'string', options: 
                            {list: [
                                {title: 'Maison', value: 'home'},
                                {title: 'Cellulaire', value: 'cell'},
                                {title: 'Bureau', value: 'work'},
                                {title: 'Autre', value: 'other'}
                            ]}
                        },
                        {name: 'phone_no', type: 'string', title: "Numéro de téléphone"}
                    ],
                    preview: {
                        select: {
                            phone_type: 'phone_type',
                            phone_no: 'phone_no'
                        },
                        prepare({ phone_type, phone_no }){
                            const phoneFormatted = formatPhoneNumber(phone_no) 

                            return{
                                title: `${phoneFormatted} (${phone_type})`
                            }
                        }
                    }
                })
            ],
        }),
        defineField({
            name: 'email',
            title: 'Courriel',
            type: 'string'
        }),
        defineField({
            name: 'momName',
            title: 'Nom de la mère',
            type: 'string'
        }),
        defineField({
            name: 'dadName',
            title: 'Nom du père',
            type: 'string'
        }),
        defineField({
            name: 'emergencyContact',
            title: `Personnes à contacter en cas d'urgence`,
            type: 'array',
            of: [
                defineField({
                    name: 'contactForm',
                    title: 'Contact',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'nom',
                            title: 'Nom de la personne',
                            type: 'string'
                        }),
                        defineField({
                            name: "phone",
                            title: "Numéro de téléphone",
                            type: "array",
                            of: [
                                defineField({
                                    type: 'object',
                                    name: 'phone_form',
                                    fields: [
                                        {name: 'phone_type', title: 'Type', type: 'string', options: 
                                            {list: [
                                                {title: 'Maison', value: 'home'},
                                                {title: 'Cellulaire', value: 'cell'},
                                                {title: 'Bureau', value: 'work'},
                                                {title: 'Autre', value: 'other'}
                                            ]}
                                        },
                                        {name: 'phone_no', type: 'string', title: "Numéro de téléphone"}
                                    ],
                                    preview: {
                                        select: {
                                            phone_type: 'phone_type',
                                            phone_no: 'phone_no'
                                        },
                                        prepare({ phone_type, phone_no }){
                                            const phoneFormatted = formatPhoneNumber(phone_no) 
                
                                            return{
                                                title: `${phoneFormatted} (${phone_type})`
                                            }
                                        }
                                    }
                                })
                            ],
                        }),
                        defineField({
                            name: 'transportCheck',
                            title: `Autorisé à venir chercher l'enfant?`,
                            type: 'boolean',
                            initialValue: false,
                            options: {
                                layout: 'checkbox'
                            }
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'school',
            title: 'Quel école votre enfant fréquentes-t-il?',
            type: 'string'
        }),
        defineField({
            name: 'allergieCheck',
            title: 'Allergies?',
            type: 'boolean',
            initialValue: false,
            options: {
                layout: "checkbox"
            }
        }),
        defineField({
            name: 'healthProblems',
            title: 'Santé',
            type: 'object',
            fields: [
                defineField({
                    name: 'healthCheck',
                    title: 'Est-ce que votre enfant a des problèmes de santé?',
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    hidden: ({parent}) => !parent?.healthCheck
                })
            ]
        }),
        defineField({
            name: 'langue',
            title: 'Langues parlées',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'hobby',
            title: 'Activité et/ou jeu préféré',
            type: 'text'
        }),
        defineField({
            name: 'concerns',
            title: 'Préocupations',
            type: 'object',
            fields: [
                defineField({
                    name: 'concernsCheck',
                    title: 'Avez-vous des préoccupations dont vous aimeriez nous faire part au sujet de votre enfant?',
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    hidden: ({parent}) => !parent?.concernsCheck
                })
            ]
        }),
        defineField({
            name: 'firstAidSigned',
            title: `Document d'autorisation à administrer les premiers soins signé?`,
            type: 'boolean',
            initialValue: false,
            options: {
                layout: "checkbox"
            }
        }),
        defineField({
            name: 'photoAuthSigned',
            title: `Document d'autorisation à prendre des photos signé?`,
            type: 'boolean',
            initialValue: false,
            options: {
                layout: "checkbox"
            }
        }),
    ]
})