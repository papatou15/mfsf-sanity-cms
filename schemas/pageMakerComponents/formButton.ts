import { defineType, defineField } from "sanity";

export const formButton = defineType({
    name: 'formButton',
    title: 'Bouton (Formulaire)',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string'
        }),
        defineField({
            name: 'form',
            type: 'reference',
            to: [{ type: 'formulaires' }],
            title: 'Formulaire lié',
            description: `À utiliser seulement pour que l'utilisateur puisse remplir le formulaire.`,
          }),
        defineField({
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Gros avec fond', value: 'coloredbg' },
                    { title: 'Petit avec fond', value: 'smallbg' },
                    { title: 'Gros sans fond', value: 'colorless' },
                    { title: 'Petit sans fond', value: 'smallcolorless' }
                ]
            }
        })
    ]
})