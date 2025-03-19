import { defineType, defineField } from "sanity";

export const adminTeamMember = defineType({
    name: 'adminTeamMember',
    title: 'Membre du conseil d\'administration',
    type: 'document',
    fields: [
        defineField({
            name: 'members',
            title: 'Membres',
            type: 'array',
            of: [
                defineField({
                    name: 'member',
                    title: 'Membre',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Nom',
                            type: 'string',
                        }),
                        defineField({
                            name: 'role',
                            title: 'Rôle',
                            type: 'string',
                        }),
                    ]
                })
            ]
        })
    ],
    preview: {
        prepare(){
            return {
                title: 'Membres du conseil d\'administration'
            }
        }
    }
})