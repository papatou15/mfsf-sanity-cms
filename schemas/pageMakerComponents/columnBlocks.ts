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
        { type: 'textInput' },
        { type: 'stackBlock' },
        { type: 'card' },
        { type: 'button' },
        { type: 'image' },
        { type: 'carousel' },
        { type: 'textOnPicture' },
        { type: 'formButton' }
      ],
      hidden: ({ parent }) => parent.layout !== 'three',
    },
    defineField({
      name: 'bgColor',
      type: 'color',
      title: 'Couleur de fond',
      options: {
        colorList: [
            '#BBD143',
            '#95AA26',
            '#EA5045',
            '#9F4E48',
            '#F3943E',
            '#CD9054',
            "#00AEC3",
            "#2C939F",
            "#e5e5e5",
            "#000000",
            "#FFF8DD"
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