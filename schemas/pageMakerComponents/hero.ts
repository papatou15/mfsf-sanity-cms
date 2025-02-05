import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: 'heroSection',
  type: 'object',
  title: 'Hero',
  fields: [
    { name: 'title', type: 'string', title: 'Titre' },
    { name: 'subTitle', type: 'string', title: 'Sous-titre' },
    { name: 'image', type: 'image', title: 'Image', options: { metadata: [] } },
    {
      name: 'layout',
      type: 'string',
      title: 'Disposition',
      options: {
        list: [
          { title: 'Par défaut (Titre à gauche, image à droite)', value: 'default' },
          { title: 'Alternatif (Title à droite, image à gauche)', value: 'mirrored' },
        ],
        layout: 'radio'
      },
    },
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
      title: 'title',
      media: 'backgroundImage',
    },
  },

})