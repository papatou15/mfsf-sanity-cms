import { defineType, defineField } from "sanity";

export const carousel = defineType({
    name: 'carousel',
    type: 'object',
    title: 'Carousel',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                defineField({
                    name: 'imageGroup',
                    title: 'Image et lien',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'carouselImage',
                            title: 'Image',
                            type: 'image'
                        }),
                        defineField({
                            name: 'link',
                            title: 'Lien',
                            type: 'url'
                        })
                    ],
                    preview: {
                        select: {
                            image: 'carouselImage',
                            link: 'link'
                        },
                        prepare({image, link}){
                            return{
                                title: `${image ? 'Image' : `Pas d'image`}`,
                                subtitle: `${link ? link : 'Pas de lien'}`
                            }
                        }
                    }
                })
            ]
        })
    ]
})