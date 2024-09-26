import { defineType, defineField } from "sanity";

export const eventType = defineType({
    name: 'event',
    title: 'Événements',
    description: 'Cette section est pour les événements (ex.: AGA, Vente de garage, etc)',
    type: "document",
    fields: [
        defineField({
            name: 'nom',
            title: `Titre de l'événement`,
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
                            title: `Date de l'événement`,
                            type: 'date',
                        }),
                        defineField({
                            name: "members",
                            title: 'Inscriptions',
                            type: 'array',
                            of: [
                                defineField({
                                    type: "reference",
                                    to: [{ type: "inscription" }]
                                })
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