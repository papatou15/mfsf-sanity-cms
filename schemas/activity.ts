import { defineType, defineField } from "sanity";

export const activityType = defineType({
    name: 'activity',
    title: 'Activités et Événements',
    type: 'document',
    fields: [
        defineField({
            name: 'nom',
            title: `Titre de l'activité`,
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'dates',
            title: 'Dates',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'date',
                            title: `Date`,
                            type: 'date',
                        }),
                        defineField({
                            name: 'inscriptionOuverte',
                            title: 'Inscription ouverte?',
                            type: 'boolean',
                            options: {
                                layout: 'checkbox'
                            },
                            initialValue: false
                        }),
                        defineField({
                            name: 'openDate',
                            title: "Date d'ouverture des inscriptions",
                            type: 'datetime'
                        }),
                        defineField({
                            name: 'isVisible',
                            title: 'Visible?',
                            type: 'boolean',
                            description: "Rends la date visible dans le champ d'inscription sur le site web",
                            options: {
                                layout: 'checkbox'
                            },
                            initialValue: false
                        }),
                        defineField({
                            name: "members",
                            title: 'Inscriptions',
                            type: 'array',
                            of: [
                                {
                                    type: "reference",
                                    to: [{ type: "inscription" }]
                                }
                            ]
                        })
                    ],
                    preview: {
                        select: {
                            members: 'members',
                            date: 'date'
                        },
                        prepare({members, date}){

                            const memberAmount = members != undefined ? members.length : 0

                            return{
                                title: date,
                                subtitle: `${memberAmount} inscriptions`
                            }
                        }
                    }
                }
            ]
        })
    ]
})