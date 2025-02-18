import { defineField, defineType } from "sanity";
import { UserIcon, UsersIcon, TaskIcon } from "@sanity/icons";
import MemberActivitiesInput from "./components/MemberActivitiesInput";
import MemberEventsInput from "./components/MemberEventsInput";
import formatPhoneNumber from "./utils/formatPhoneNumber"
import PaidBooleanInputWrapper from "./components/PaidBooleanInputWrapper";

export const inscriptionType = defineType({
    name: 'inscription',
    title: 'Inscriptions',
    icon: UsersIcon,
    type: "document",
    groups: [
        { name: 'renseignements', title: 'Renseignements personnels', icon: UserIcon },
        { name: 'inscriptions', title: 'Inscriptions', icon: TaskIcon }
    ],
    fields: [
        defineField({
            name: 'nom',
            title: 'Prénom',
            type: "string",
            group: 'renseignements',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'nom_famille',
            title: "Nom de famille",
            type: "string",
            group: 'renseignements',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'zip_code',
            title: 'Code postal',
            type: 'string',
            group: 'renseignements',
            validation: (rule) => rule.required()
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
            group: 'renseignements',
        }),
        defineField({
            name: "email",
            title: "Courriel",
            type: "string",
            group: 'renseignements',
        }),
        defineField({
            name: 'member_check',
            title: 'Membre?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        }),
        defineField({
            name: 'member_form',
            title: 'Formulaire de membre',
            type: 'object',
            hidden: ({ parent }) => !parent.member_check,
            fields: [
                defineField({
                    name: 'occupation',
                    title: 'Occupation',
                    type: 'string',
                    options: {
                        list: [
                            {title: "Emploi temps plein", value: "full_time"},
                            {title: "Emploi temps partiel", value: "half-time"},
                            {title: "Sans emploi/Au foyer", value: "at_home"},
                            {title: "Travailleur autonome", value: "autonome"},
                            {title: "Aux études", value: "etudiant"},
                            {title: "Retraité", value: "retraite"},
                            {title: "Préfère ne pas répondre", value: "no_answer"}
                        ]
                    }
                }),
                defineField({
                    name: 'date_naissance',
                    title: 'Date de naissance',
                    type: 'date',
                }),
                defineField({
                    name: 'langue_principale',
                    title: 'Langue principale parlée à la maison',
                    type: 'string'
                }),
                defineField({
                    name: 'langues_secondaires',
                    title: 'Autres langues parlées',
                    type: 'array',
                    of: [defineField({name: "langue", title: "Langue", type: 'string'})]
                }),
                defineField({
                    name: 'familial_status',
                    title: 'Statut familial',
                    type: 'string',
                    options: {
                        list: [
                            {title: 'Célibataire', value: 'celibataire'},
                            {title: 'En couple', value: 'couple'},
                            {title: 'Marié(e)', value: 'marie'},
                            {title: 'Veuf(ve)', value: 'veuf'},
                            {title: "Préfère ne pas répondre", value: "no_answer"}
                        ]
                    }
                }),
                // defineField({
                //     name: 'paid_check',
                //     title: 'Cotisation payée?',
                //     type: 'boolean',
                //     components: {
                //         input: PaidBooleanInputWrapper
                //     }
                // }),
                defineField({
                    name: 'adhesionTime',
                    type: 'date',
                    title: `Date d'adhésion`,
                }),
                defineField({
                    name: 'paidTime',
                    type: 'date',
                    title: 'Journée payée',
                    // readOnly: ({ value }) => !!value
                }),
                defineField({
                    name: 'paidMethod',
                    type: 'string',
                    title: 'Méthode de paiement',
                    options: {
                        list: [
                            {title: 'Espèce', value: 'monnaie'},
                            {title: 'Crédit', value: 'credit'},
                            {title: 'Débit', value: 'debit'},
                            {title: 'Gratuité', value: 'free'}
                        ]
                    }
                }),
                defineField({
                    name: 'renewTime',
                    type: 'date',
                    title: 'Date de renouvellement',
                }),
                defineField({
                    name: 'family_members',
                    title: 'Autres membres de la famille',
                    type: 'array',
                    of: [
                        defineField({
                            type: 'object',
                            name: 'family_member',
                            fields: [
                                {name: 'nom', title: 'Prénom', type: 'string'},
                                {name: 'nom_famille', title: 'Nom de famille', type: 'string'},
                                {name: 'age', title: 'Date de naissance', type: 'date'},
                                {name: 'genre_check', type: 'object', fields: [
                                    {name: 'genre', title: 'Genre', type: 'string', options: {
                                        list: [
                                            {title: 'Homme', value: 'homme'},
                                            {title: 'Femme', value: 'femme'},
                                            {title: 'Autre', value: 'autre'},
                                            {title: "Préfère ne pas répondre", value: "no_answer"}
                                        ]
                                    }},
                                    {name: 'other_genre', title: 'Autre', type: 'string', hidden: ({parent}) => parent?.genre !== 'autre'},
                                ]},
                                {name: 'familyLink', title: 'Lien de famille', type: 'string', options: {
                                    list: [
                                        {title: 'Père', value: 'pere'},
                                        {title: 'Mère', value: 'mere'},
                                        {title: 'Conjoint(e)', value: 'conjoint'},
                                        {title: 'Grand-père', value: 'grand-pere'},
                                        {title: 'Grand-mère', value: 'grand-mere'},
                                        {title: 'Fils', value: 'fils'},
                                        {title: 'Fille', value: 'fille'},
                                        {title: 'Neveu', value: 'neveu'},
                                        {title: 'Nièce', value: 'niece'},
                                        {title: 'Oncle', value: 'oncle'},
                                        {title: 'Tante', value: 'tante'},
                                        {title: 'Ne sais pas', value: 'no_idea'},
                                        {title: "Préfère ne pas répondre", value: "no_answer"}
                                    ]
                                }}
                            ],
                            preview: {
                                select: {
                                    nom: 'nom',
                                    nom_famille: 'nom_famille',
                                    date: 'age',
                                    familyLink: 'familyLink'
                                },
                                prepare({nom, nom_famille, date, familyLink}){
                                    return {
                                        title: `${nom} ${nom_famille} | ${familyLink || "Lien inconnu"}`,
                                        subtitle: date,
                                    }
                                }
                            }
                        })
                    ]
                }),
                defineField({
                    name: 'immediate_family',
                    type: 'number',
                    title: 'Nombre de personnes composant la famille immédiate'
                }),
                defineField({
                    name: 'revenus',
                    title: 'Revenus familiaux',
                    type: 'string',
                    options: {
                        list:[
                            {title: `0 - 10'000$`, value: '<10k'},
                            {title: `10'001$ - 20'000$`, value: '10k-20k'},
                            {title: `20'001$ - 30'000$`, value: '20k-30k'},
                            {title: `30'001$ - 40'000$`, value: '30k-40k'},
                            {title: `40'001$ - 50'000$`, value: '40k-50k'},
                            {title: `50'001 et +`, value: '>50k'},
                            {title: "Préfère ne pas répondre", value: "no_answer"}
                        ]
                    }
                }),
            ]
        }),
        defineField({
            name: 'benevole_check',
            title: 'Bénévole?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        }),
        defineField({
            name: 'benevole_form',
            title: 'Formulaire bénévole',
            type: 'object',
            hidden: ({ parent }) => !parent.benevole_check,
            fields: [
                defineField({
                    name: 'actif_check',
                    title: 'Actif?',
                    type: 'boolean',
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'code_check',
                    title: `Code d'éthique signé?`,
                    type: 'boolean',
                    options: {
                        layout: 'checkbox'
                    }
                }),
                defineField({
                    name: 'domaines',
                    title: 'Domaines à couvrir',
                    type: 'array',
                    of: [{type: 'string'}],
                    options: {
                        layout: 'grid',
                        list: [
                            {title: 'Distribution des denrées', value: 'denrees'},
                            {title: 'Lavage des jouets', value: 'jouets'},
                            {title: 'Ménage', value: 'menage'},
                            {title: 'Cuisson de nourriture', value: 'cuisine'},
                            {title: 'Friperie', value: 'friperie'},
                            {title: 'Travaux sur le terrain', value: 'terrain'},
                            {title: 'Travaux de scrétariats', value: 'secretariat'},
                            {title: 'Vider le camion et tri de nourriture', value: 'camion'},
                        ]
                    }
                }),
                defineField({
                    name: 'disponibilites',
                    title: 'Disponibilitées',
                    type: 'array',
                    of: [{type: 'string'}],
                    options: {
                        layout: 'grid',
                        list: [
                            {title: 'Lundi AM', value: 'lundi-am'},
                            {title: 'Lundi PM', value: 'lundi-pm'},
                            {title: 'Mardi AM', value: 'mardi-am'},
                            {title: 'Mardi PM', value: 'mardi-pm'},
                            {title: 'Mercredi AM', value: 'mercredi-am'},
                            {title: 'Mercredi PM', value: 'mercredi-pm'},
                            {title: 'Jeudi AM', value: 'jeudi-am'},
                            {title: 'Jeudi PM', value: 'jeudi-pm'},
                            {title: 'Vendredi AM', value: 'vendredi-am'},
                            {title: 'Vendredi PM', value: 'vendredi-pm'},
                            {title: 'Samedi AM', value: 'samedi-am'},
                            {title: 'Samedi PM', value: 'samedi-pm'},
                        ]
                    }
                }),
                defineField({
                    name: 'raison',
                    title: `Pourquoi je veux m'impliquer comme bénévole`,
                    type: 'array',
                    of: [{type: 'block'}]
                }),
                defineField({
                    name: 'heures',
                    title: 'Heures accumulées',
                    type: 'number'
                }),
                defineField({
                    name: 'codeEthiqueSigned',
                    title: `Code d'éthique signé?`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: 'checkbox'
                    }
                })
            ]
        }),
        defineField({
            name: 'employee_check',
            title: 'Employé?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        }),
        defineField({
            name: "connaissance",
            title: 'Comment avez-vous entendu parlé de la maison de la famille',
            type: 'string',
            options: {
                list: [
                    {title: 'Site Internet', value: 'website'},
                    {title: 'Instagram', value: 'instagram'},
                    {title: 'Facebook', value: 'facebook'},
                    {title: 'Autre membre', value: 'membre'},
                    {title: 'Famille', value: 'famille'},
                    {title: 'Autre', value: 'other'},
                    {title: 'Préfère ne pas répondre', value: 'nePasRepondre'}
                ]
            }
        }),
        defineField({
            name: "enrolledActivities",
            title: "Activitées inscrites",
            type: "string",
            components: {
                input: MemberActivitiesInput
            },
            readOnly: true,
            group: 'inscriptions',
        }),
        defineField({
            name: "enrolledEvents",
            title: "Événements inscrits",
            type: "string",
            components: {
                input: MemberEventsInput
            },
            readOnly: true,
            group: 'inscriptions',
        }),
        defineField({
            name: "notes",
            title: 'Notes additionnelles',
            type: 'array',
            of: [{type: 'block'}]
        }),
    ],
    initialValue: {
        member_check: false,
        benevole_check: false,
        employee_check: false,
        enrolledActivities: "Aucune activitée",
    },
    preview: {
        select: {
            nom: 'nom',
            nom_famille: 'nom_famille',
            zip_code: 'zip_code',
            nom_conjoint: 'member_form.family_members'
        },
        prepare({nom, nom_famille, zip_code, nom_conjoint}) {
            const conjoint = nom_conjoint?.find(member => member.familyLink === 'conjoint')

            const conjointFormatted = conjoint ? `|| ${conjoint.nom} ${conjoint.nom_famille}` : ''

            console.log(nom_conjoint)

            // const conjointFormatted = `${conjoint.nom} ${conjoint.nom_famille}` || ''

            const nameFormatted = `${nom} ${nom_famille} ${conjointFormatted}` || 'Membre inconnu'

            return{
                title: nameFormatted,
                subtitle: zip_code,
            }
        }
    }
})