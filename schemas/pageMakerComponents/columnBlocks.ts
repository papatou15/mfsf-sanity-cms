import { defineField, defineType } from "sanity";

export const columnBlock = defineType({
  name: 'columnBlock',
  type: 'object',
  title: 'Colonnes',
  fields: [
    // Step 1: Layout selection comes first
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
    // Step 2: Column 1 content (conditionally visible)
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
      hidden: ({ parent }) => !parent.layout || parent.layout === undefined, // Hidden if no layout is selected
    },
    // Step 3: Column 2 content (conditionally visible)
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
      hidden: ({ parent }) => !parent.layout || parent.layout === undefined, // Hidden if no layout is selected
    },
    // Step 4: Column 3 content (conditionally visible, only for 3-column layout)
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