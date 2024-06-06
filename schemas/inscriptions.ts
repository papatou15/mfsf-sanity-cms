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
            name: "adress",
            title: "Adresse",
            type: "string",
            description: "No. civique et rue",
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
            name: 'paid_check',
            title: 'Cotisation payée?',
            type: 'boolean',
            components: {
                input: PaidBooleanInputWrapper
            },
            hidden: ({ parent }) => !parent.member_check
        }),
        defineField({
            name: 'paidTime',
            type: 'date',
            title: 'Journée payée',
            hidden: ({ parent }) => !parent.member_check
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
            name: 'employee_check',
            title: 'Employé?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
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
                        {name: 'age', title: 'Date de naissance', type: 'date'}
                    ],
                    preview: {
                        select: {
                            nom: 'nom',
                            nom_famille: 'nom_famille',
                            date: 'age'
                        },
                        prepare({nom, nom_famille, date}){
                            return {
                                title: `${nom} ${nom_famille}`,
                                subtitle: date,
                            }
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'revenus',
            title: 'Revenus familiaux',
            type: 'number'
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
            adress: 'adress'
        },
        prepare({nom, nom_famille, adress}) {
            const nameFormatted = `${nom} ${nom_famille}` || 'Membre inconnu'

            return{
                title: nameFormatted,
                subtitle: adress,
            }
        }
    }
})