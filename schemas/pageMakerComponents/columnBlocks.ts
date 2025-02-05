import { defineField, defineType } from "sanity";

export const columnBlock = defineType({
  name: 'columnBlock',
  type: 'object',
  title: 'Colonnes',
  fields: [

    {
      name: 'layout',
      type: 'string',
      title: 'Disposition',
      description: 'Choisir entre une ou deux colonnes',
      options: {
        list: [
          { title: 'Deux colonnes', value: 'two' },
          { title: 'Trois colonnes', value: 'three' },
        ],
        layout: 'radio',
      },
    },

    {
      name: 'column1',
      type: 'array',
      title: 'Contenu colonne 1',
      of: [
        { type: 'largeTitle' },
        { type: 'mediumTitle' },
        { type: 'smallTitle' },
        { type: 'stringText' },
        { type: 'textInput' },
        { type: 'stackBlock' },
        { type: 'card' },
        { type: 'button' },
        { type: 'image' },
        { type: 'carousel' },
        { type: 'textOnPicture' }
      ],
      hidden: ({ parent }) => !parent.layout || parent.layout === undefined,
    },

    {
      name: 'column2',
      type: 'array',
      title: 'Contenu colonne 2',
      of: [
        { type: 'largeTitle' },
        { type: 'mediumTitle' },
        { type: 'smallTitle' },
        { type: 'stringText' },
        { type: 'textInput' },
        { type: 'stackBlock' },
        { type: 'card' },
        { type: 'button' },
        { type: 'image' },
        { type: 'carousel' },
        { type: 'textOnPicture' }
      ],
      hidden: ({ parent }) => !parent.layout || parent.layout === undefined,
    },

    {
      name: 'column3',
      type: 'array',
      title: 'Contenu colonne 3',
      of: [
        { type: 'largeTitle' },
        { type: 'mediumTitle' },
        { type: 'smallTitle' },
        { type: 'stringText' },
        { type: 'textInput' },
        { type: 'stackBlock' },
        { type: 'card' },
        { type: 'button' },
        { type: 'image' },
        { type: 'carousel' },
        { type: 'textOnPicture' }
      ],
      hidden: ({ parent }) => parent.layout !== 'three', // Hidden if layout is not three columns
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
      layout: 'layout',
    },
    prepare({ layout }) {
      return {
        title: `Colonnes: ${layout === 'two' ? 'Deux colonnes' : layout === 'three' ? 'Trois colonnes' : 'Pas de dispositions choisie'}`,
      };
    },
  },
})