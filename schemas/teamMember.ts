import { defineField, defineType } from "sanity";

export const teamMember = defineType({
    name: 'teamMember',
    type: 'document',
    title: 'Membres de l\'équipe',
    fields: [
        defineField({
            name: 'employees',
            title: 'Employés',
            type: 'array',
            of: [
                defineField({
                    name: 'employee',
                    type: 'object',
                    title: 'Employé',
                    fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                            title: 'Nom',
                            validation: (rule) => rule.required()
                        }),
                        defineField({
                            name: 'role',
                            type: 'string',
                            title: 'Rôle',
                            validation: (rule) => rule.required()
                        }),
                        defineField({
                            name: 'description',
                            type: 'text',
                            title: 'Description',
                        }),
                        defineField({
                            name: 'picture',
                            type: 'image',
                            title: 'Photo',
                        }),
                        defineField({
                            name: 'contacts',
                            type: 'object',
                            title: 'Contacts',
                            fields: [
                                defineField({
                                    name: 'email',
                                    type: 'string',
                                    title: 'Courriel',
                                }),
                                defineField({
                                    name: 'phone',
                                    type: 'string',
                                    title: 'Téléphone',
                                }),
                            ]
                        })
                    ]
                })
            ]
        }),
    ],
})