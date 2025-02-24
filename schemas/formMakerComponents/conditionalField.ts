import { defineType, defineField } from "sanity";

export const conditionalField = defineType({
    name: "conditionalField",
    type: "object",
    title: "Champ à condition",
    fields: [
        defineField({
            name: "label",
            type: "string",
            title: "Question",
        }),
        defineField({
            name: "triggerValue",
            type: "string",
            title: "Réponse trigger",
            description: "Si l'utilisateur choisi cette réponse, le(s) champ(s) dessous apparaîtront",
        }),
        defineField({
            name: "options",
            type: "array",
            title: "Options",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "revealedFields",
            type: "array",
            title: "Champs à révéler",
            of: [
                { type: 'largeTitle' },
                { type: 'mediumTitle' },
                { type: 'smallTitle' },
                { type: 'button' },
                { type: "textField" },
                { type: "checkboxField" },
                { type: "radioField" },
                { type: "dropdownField" },
                { type: 'dateField' },
                { type: 'conditionalField' }
            ],
        }),
    ],
});
