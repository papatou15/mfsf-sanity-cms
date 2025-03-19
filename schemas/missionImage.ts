import { defineType, defineField } from "sanity";

export const missionImage = defineType({
    name: 'missionImage',
    title: 'Image de la mission',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ],
    preview: {
        select: {
            title: 'Image pour section "Notre Mission"',
            media: 'image',
        },
        prepare({ title, media }) {
            return {
                title: title,
                media: media,
            }
        }
    }
})