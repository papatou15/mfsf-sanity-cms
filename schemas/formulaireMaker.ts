import { defineField, defineType } from "sanity";
import SelectDateField from "./components/SelectDateField";

export const formulaireMaker = defineType({
    name: 'formulaires',
    title: `Formulaires d'inscription`,
    type: "document",
    fields: [
        defineField({
            name: 'formTitle',
            title: 'Titre du formulaire',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'formDesc',
            title: 'Description du formulaire',
            type: 'text',
        }),
        defineField({
            name: 'sections',
            type: 'array',
            title: 'Formulaire',
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
                { type: 'conditionalField' },
            ]
        }),
        defineField({
            name: "submissions",
            type: "array",
            title: "Réponses/Inscriptions",
            of: [
                defineField({
                    name: "submission",
                    type: "object",
                    title: "Submission",
                    fields: [
                        defineField({
                            name: "submittedAt",
                            type: "datetime",
                            title: "Envoyé à:",
                            initialValue: () => new Date().toISOString(),
                        }),
                        defineField({
                            name: "user",
                            type: "reference",
                            to: [{ type: "inscription" }],
                            title: "Membre",
                        }),
                        defineField({
                            name: "activity",
                            type: "reference",
                            to: [{ type: "activity" }],
                            title: "Activité/Service/Événement (si applicable)",
                        }),
                        defineField({
                            name: 'selectedDate',
                            title: 'Date',
                            type: 'string',
                            hidden: ({ parent }) => !parent?.activity,
                            components: {
                                input: SelectDateField
                            }
                        }),
                        defineField({
                            name: "answers",
                            type: "array",
                            title: "Réponses",
                            of: [
                                defineField({
                                    name: "answer",
                                    type: "object",
                                    fields: [
                                        { name: "question", type: "string", title: "Question" },
                                        { name: "response", type: "string", title: "Réponse" },
                                    ],
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            userName: "user.nom",
                            userFamilyName: "user.nom_famille",
                            activityTitle: "activity.nom",
                            activityDate: "selectedDate",
                            submittedAt: "submittedAt"
                        },
                        prepare({ userName, userFamilyName, activityTitle, activityDate, submittedAt }) {
                            return {
                                title: `${`${userName} ${userFamilyName}` || "Membre inconnu"}`,
                                subtitle: `${activityTitle || "Pas d'activité"} - ${activityDate ? activityDate : "Pas de date"
                                    }`,
                                description: `Envoyé à: ${submittedAt ? new Date(submittedAt).toLocaleDateString() : "Inconnu"
                                    }`
                            }
                        }
                    }
                }),
            ],
        }),
    ]
})