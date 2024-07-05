import { defineField, defineType } from "sanity";

export const benevoleActivitiesType = defineType({
    name: 'benevole_activite',
    title: 'Activités des bénévoles',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
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
                            console.log(members)

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