import { defineField, defineType } from "sanity";

export const bannerType = defineType({
    name: 'banner',
    title: 'Bannière',
    type: "document",
    fields: [
        defineField({
            name: 'bannerList',
            title: 'Liste des bannières',
            description: `Seulement la première de la liste sera montrée. Le champ "active" doit être coché dans les options de la bannière pour qu'elle soit affichée`,
            type: 'array',
            validation: (rule) => rule.required(),
            of: [
                defineField({
                    name: 'banners',
                    title: 'Bannières',
                    type: 'object',
                    fields: [
                        defineField({
                            type: 'string',
                            name: 'banner',
                            title: 'Titre de la bannière'
                        }),
                        defineField({
                            type: 'string',
                            name: 'textContent',
                            title: 'Contenu',
                            description: 'Garder le texte court et concis'
                        }),
                        defineField({
                            type: 'url',
                            name: 'link',
                            title: 'Lien'
                        }),
                        defineField({
                            type: 'image',
                            name: 'bannerBgImage',
                            title: 'Image de fond'
                        }),
                        defineField({
                            type: 'color',
                            title: 'Couleur de fond',
                            name: 'bgColor',
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
                        }),
                        defineField({
                            type: 'boolean',
                            name: 'isActive',
                            title: 'Active?'
                        })
                    ]
                })

            ]
        }),

    ]
})