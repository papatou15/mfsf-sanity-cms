import { defineType, defineField } from "sanity";

export const missionImage = defineType({
    name: 'missionImage',
    title: 'Mission',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'missionText',
            title: 'Notre Mission',
            type: 'text',
        })
    ],
    preview: {
        select: {
            title: 'Notre Mission',
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