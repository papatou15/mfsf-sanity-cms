import { defineType, defineField } from "sanity";

export const textOnPicture = defineType({
    name: 'textOnPicture',
    type: 'object',
    title: 'Texte sur image',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Titre'
        }),
        defineField({
            name: 'text',
            type: 'text',
            title: 'Texte'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }),
        defineField({
            name: 'layout',
            type: 'string',
            title: 'Disposition',
            options: {
                list: [
                    {title: 'Texte à gauche, image à droite', value: 'default'},
                    {title: 'Text à droite, image à gauche', value: 'reverse'}
                ]
            }
        }),
        defineField({
            name: 'bgColor',
            type: 'color',
            title: 'Couleur de fond',
            options: {
                colorList: [
                    '#8800C8',
                    '#E2B41B',
                    '#FFC300',
                    "#20453E",
                    "#e5e5e5",
                    "#000000",
                    "F9EFE3"
                ]
            }
        })
    ],
    preview: {
        select: {
            layout: 'layout',
            title: 'title'
        },
        prepare({title, layout}){
            return {
                title: `${title}`,
                subtitle: `Disposition: ${layout === 'default' ? 'Par défaut' : 'Inversé'}`
            }
        }
    }
})