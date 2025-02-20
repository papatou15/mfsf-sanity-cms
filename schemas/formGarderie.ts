import { defineField, defineType } from "sanity";
import formatPhoneNumber from "./utils/formatPhoneNumber";
import { CheckmarkCircleIcon, DocumentTextIcon, HelpCircleIcon, UserIcon, WarningOutlineIcon } from "@sanity/icons";

export const formGarderie = defineType({
    name: 'formGarderie',
    title: 'Formulaire: Halte-Garderie',
    type: 'document',
    groups: [
        {name: 'renseignements', title: 'Renseignements personnels', icon: UserIcon},
        {name: 'urgence', title: 'Urgence', icon: WarningOutlineIcon},
        {name: 'importantInfo', title:'Informations importante', icon: HelpCircleIcon},
        {name: 'misc', title: 'Autre', icon: DocumentTextIcon},
        {name: 'autorizations', title: 'Autorisations', icon: CheckmarkCircleIcon},
    ],
    fields: [
        defineField({
            name: 'nom',
            title: 'Prénom',
            type: 'string',
            group: 'renseignements'
        }),
        defineField({
            name: 'nomFamille',
            title: 'Nom de famille',
            type: 'string',
            group: 'renseignements'
        }),
        defineField({
            name: 'refFamille',
            title: 'Parent',
            type: 'reference',
            to: [{type: 'inscription'}],
            options: {
                disableNew: true,
            },
            group: 'renseignements',
        }),
        defineField({
            name: 'genre_check',
            title: 'Genre',
            type: 'object',
            group: 'renseignements',
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
            group: 'renseignements',
        }),
        defineField({
            name: 'noAssuranceMaladie',
            title: `No d'assurance maladie`,
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: 'adresse',
            title: 'Adresse',
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: 'ville',
            title: 'Ville',
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: 'zip_code',
            title: 'Code postal',
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: "phone",
            title: "Numéro de téléphone",
            type: "array",
            group: 'renseignements',
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
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: 'momName',
            title: 'Nom de la mère',
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: 'dadName',
            title: 'Nom du père',
            type: 'string',
            group: 'renseignements',
        }),
        defineField({
            name: 'emergencyContact',
            title: `Personnes à contacter en cas d'urgence`,
            type: 'array',
            group: 'urgence',
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
            type: 'string',
            group: 'misc'
        }),
        defineField({
            name: 'allergieCheck',
            title: 'Allergies?',
            type: 'boolean',
            initialValue: false,
            options: {
                layout: "checkbox"
            },
            group: 'importantInfo'
        }),
        defineField({
            name: 'allergiesForm',
            title: `Formulaire d'allergies`,
            type: 'object',
            fields: [
                defineField({
                    name: 'allergies',
                    title: 'Allergie(s)',
                    type: 'array',
                    of: [{type: 'string'}]
                }),
                defineField({
                    name: 'asthmaCheck',
                    title: 'Asthme?',
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'prescription',
                    title: 'Prescription',
                    type: 'text'
                }),
                defineField({
                    name: 'hopital',
                    title: 'Hôpital',
                    type: 'string',
                }),
                defineField({
                    name: 'dossier',
                    title: '# de dossier',
                    type: 'string'
                }),
                defineField({
                    name: 'medecin',
                    title: 'Médecin traitant (pédiatre)',
                    type: 'string'
                }),
                defineField({
                    name: "phone",
                    title: "Numéro de téléphone du médecin",
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
            ]
        }),
        defineField({
            name: 'healthProblems',
            title: 'Santé',
            type: 'object',
            group: 'importantInfo',
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
            of: [{type: 'string'}],
            group: 'misc'
        }),
        defineField({
            name: 'hobby',
            title: 'Activité et/ou jeu préféré',
            type: 'text',
            group: 'misc'
        }),
        defineField({
            name: 'concerns',
            title: 'Préocupations',
            type: 'object',
            group: 'importantInfo',
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
            name: 'reasons',
            title: `Raison d'utilisation de la Halte-Garderie`,
            type: 'text',
            group: 'misc'
        }),
        defineField({
            name: 'authGroup',
            title: 'Autorisations',
            type: 'object',
            group: 'autorizations',
            fields: [
                defineField({
                    name: 'firstAid',
                    title: `Document d'autorisation à administrer les premiers soins signé?`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'photoAuth',
                    title: `Document d'autorisation à prendre des photos signé?`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'sunscreen',
                    title: `Crème solaire sans paba`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'chasseMoustique',
                    title: `Chasse moustique et tique`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'walk',
                    title: `Promenade dans les environs`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'docFonctionnement',
                    title: `Feuille de fonctionnement de la halte signée?`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: "checkbox"
                    }
                }),
            ]
        }),
    ]
})