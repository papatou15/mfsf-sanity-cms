import { defineField, defineType } from "sanity";
import { UserIcon, UsersIcon, TaskIcon } from "@sanity/icons";
import MemberActivitiesInput from "./components/MemberActivitiesInput";
import MemberEventsInput from "./components/MemberEventsInput";
import formatPhoneNumber from "./utils/formatPhoneNumber"

export const inscriptionType = defineType({
    name: 'inscription',
    title: 'Inscriptions',
    icon: UsersIcon,
    type: "document",
    groups: [
        { name: 'renseignements', title: 'Renseignements personnels', icon: UserIcon },
        { name: 'inscriptions', title: 'Inscriptions', icon: TaskIcon },
        { name: 'otherInfos', title: 'Autres renseigments' }
    ],
    fields: [
        defineField({
            name: 'nom',
            title: 'Prénom',
            type: "string",
            group: 'renseignements',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'nom_famille',
            title: "Nom de famille",
            type: "string",
            group: 'renseignements',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'zip_code',
            title: 'Code postal',
            type: 'string',
            group: 'renseignements',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "phone",
            title: "Numéro de téléphone",
            type: "array",
            of: [
                defineField({
                    type: 'object',
                    name: 'phone_form',
                    fields: [
                        {
                            name: 'phone_type', title: 'Type', type: 'string', options:
                            {
                                list: [
                                    { title: 'Maison', value: 'home' },
                                    { title: 'Cellulaire', value: 'cell' },
                                    { title: 'Bureau', value: 'work' },
                                    { title: 'Autre', value: 'other' }
                                ]
                            }
                        },
                        { name: 'phone_no', type: 'string', title: "Numéro de téléphone" }
                    ],
                    preview: {
                        select: {
                            phone_type: 'phone_type',
                            phone_no: 'phone_no'
                        },
                        prepare({ phone_type, phone_no }) {
                            const phoneFormatted = formatPhoneNumber(phone_no)

                            return {
                                title: `${phoneFormatted} (${phone_type})`
                            }
                        }
                    }
                })
            ],
            group: 'renseignements',
        }),
        defineField({
            name: "email",
            title: "Courriel",
            type: "string",
            group: 'renseignements',
        }),
        defineField({
            name: 'member_check',
            title: 'Membre?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        }),
        defineField({
            name: 'member_form',
            title: 'Formulaire de membre',
            type: 'object',
            hidden: ({ parent }) => !parent.member_check,
            fields: [
                defineField({
                    name: 'occupation',
                    title: 'Occupation',
                    type: 'string',
                    options: {
                        list: [
                            { title: "Emploi temps plein", value: "full_time" },
                            { title: "Emploi temps partiel", value: "half-time" },
                            { title: "Sans emploi/Au foyer", value: "at_home" },
                            { title: "Travailleur autonome", value: "autonome" },
                            { title: "Aux études", value: "etudiant" },
                            { title: "Retraité", value: "retraite" },
                            { title: "Préfère ne pas répondre", value: "no_answer" }
                        ]
                    }
                }),
                defineField({
                    name: 'date_naissance',
                    title: 'Date de naissance',
                    type: 'date',
                }),
                defineField({
                    name: 'langue_principale',
                    title: 'Langue principale parlée à la maison',
                    type: 'string'
                }),
                defineField({
                    name: 'langues_secondaires',
                    title: 'Autres langues parlées',
                    type: 'array',
                    of: [defineField({ name: "langue", title: "Langue", type: 'string' })]
                }),
                defineField({
                    name: 'familial_status',
                    title: 'Statut familial',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Célibataire', value: 'celibataire' },
                            { title: 'En couple', value: 'couple' },
                            { title: 'Marié(e)', value: 'marie' },
                            { title: 'Veuf(ve)', value: 'veuf' },
                            { title: 'Conjoint de fait', value: 'conjoint' },
                            { title: "Préfère ne pas répondre", value: "no_answer" }
                        ]
                    }
                }),
                defineField({
                    name: 'scolarity',
                    type: 'string',
                    title: 'Niveau de scolarité complété',
                    options: {
                        list: [
                            "Primaire",
                            "Secondaire",
                            "Cégep",
                            "DEP",
                            "Université"
                        ]
                    }
                }),
                // defineField({
                //     name: 'paid_check',
                //     title: 'Cotisation payée?',
                //     type: 'boolean',
                //     components: {
                //         input: PaidBooleanInputWrapper
                //     }
                // }),
                defineField({
                    name: 'adhesionTime',
                    type: 'date',
                    title: `Date d'adhésion`,
                }),
                defineField({
                    name: 'paidTime',
                    type: 'date',
                    title: 'Journée payée',
                    // readOnly: ({ value }) => !!value
                }),
                defineField({
                    name: 'paidMethod',
                    type: 'string',
                    title: 'Méthode de paiement',
                    options: {
                        list: [
                            { title: 'Espèce', value: 'monnaie' },
                            { title: 'Crédit', value: 'credit' },
                            { title: 'Débit', value: 'debit' },
                            { title: 'Gratuité', value: 'free' }
                        ]
                    }
                }),
                defineField({
                    name: 'renewTime',
                    type: 'date',
                    title: 'Date de renouvellement',
                }),
                defineField({
                    name: 'transactionId',
                    type: 'string',
                    title: 'ID de Transaction Stripe',
                    description: "Généré automatiquement quand le membre s'inscrit sur le site web et paye par Stripe",
                    readOnly: true
                }),
                defineField({
                    name: 'family_members_old',
                    title: 'Autres membres de la famille (ancien)',
                    type: 'array',
                    of: [
                        defineField({
                            type: 'object',
                            name: 'family_member',
                            fields: [
                                { name: 'nom', title: 'Prénom', type: 'string' },
                                { name: 'nom_famille', title: 'Nom de famille', type: 'string' },
                                { name: 'age', title: 'Date de naissance', type: 'date' },
                                {
                                    name: 'genre_check', type: 'object', fields: [
                                        {
                                            name: 'genre', title: 'Genre', type: 'string', options: {
                                                list: [
                                                    { title: 'Homme', value: 'homme' },
                                                    { title: 'Femme', value: 'femme' },
                                                    { title: 'Autre', value: 'autre' },
                                                    { title: "Préfère ne pas répondre", value: "no_answer" }
                                                ]
                                            }
                                        },
                                        { name: 'other_genre', title: 'Autre', type: 'string', hidden: ({ parent }) => parent?.genre !== 'autre' },
                                    ]
                                },
                                {
                                    name: 'familyLink', title: 'Lien de famille', type: 'string', options: {
                                        list: [
                                            { title: 'Père', value: 'pere' },
                                            { title: 'Mère', value: 'mere' },
                                            { title: 'Conjoint(e)', value: 'conjoint' },
                                            { title: 'Grand-père', value: 'grand-pere' },
                                            { title: 'Grand-mère', value: 'grand-mere' },
                                            { title: 'Fils', value: 'fils' },
                                            { title: 'Fille', value: 'fille' },
                                            { title: 'Neveu', value: 'neveu' },
                                            { title: 'Nièce', value: 'niece' },
                                            { title: 'Oncle', value: 'oncle' },
                                            { title: 'Tante', value: 'tante' },
                                            { title: 'Ne sais pas', value: 'no_idea' },
                                            { title: "Préfère ne pas répondre", value: "no_answer" }
                                        ]
                                    }
                                }
                            ],
                            preview: {
                                select: {
                                    nom: 'nom',
                                    nom_famille: 'nom_famille',
                                    date: 'age',
                                    familyLink: 'familyLink'
                                },
                                prepare({ nom, nom_famille, date, familyLink }) {
                                    return {
                                        title: `${nom} ${nom_famille} | ${familyLink || "Lien inconnu"}`,
                                        subtitle: date,
                                    }
                                }
                            }
                        })
                    ]
                }),
                defineField({
                    name: 'family_members',
                    title: 'Autres membres de la famille',
                    type: 'object',
                    fields: [
                        defineField({
                            type: 'object',
                            name: 'conjoint',
                            title: 'Conjoint/Conjointe',
                            fields: [
                                { name: 'nom', title: 'Prénom', type: 'string' },
                                { name: 'nom_famille', title: 'Nom de famille', type: 'string' },
                                { name: 'age', title: 'Date de naissance', type: 'date' },
                                defineField({
                                    name: "phone",
                                    title: "Numéro de téléphone",
                                    type: "array",
                                    of: [
                                        defineField({
                                            type: 'object',
                                            name: 'phone_form',
                                            fields: [
                                                {
                                                    name: 'phone_type', title: 'Type', type: 'string', options:
                                                    {
                                                        list: [
                                                            { title: 'Maison', value: 'home' },
                                                            { title: 'Cellulaire', value: 'cell' },
                                                            { title: 'Bureau', value: 'work' },
                                                            { title: 'Autre', value: 'other' }
                                                        ]
                                                    }
                                                },
                                                { name: 'phone_no', type: 'string', title: "Numéro de téléphone" }
                                            ],
                                            preview: {
                                                select: {
                                                    phone_type: 'phone_type',
                                                    phone_no: 'phone_no'
                                                },
                                                prepare({ phone_type, phone_no }) {
                                                    const phoneFormatted = formatPhoneNumber(phone_no)

                                                    return {
                                                        title: `${phoneFormatted} (${phone_type})`
                                                    }
                                                }
                                            }
                                        })
                                    ],
                                }),
                                {
                                    name: 'genre_check', type: 'object', fields: [
                                        {
                                            name: 'genre', title: 'Genre', type: 'string', options: {
                                                list: [
                                                    { title: 'Homme', value: 'homme' },
                                                    { title: 'Femme', value: 'femme' },
                                                    { title: 'Autre', value: 'autre' },
                                                    { title: "Préfère ne pas répondre", value: "no_answer" }
                                                ]
                                            }
                                        },
                                        { name: 'other_genre', title: 'Autre', type: 'string', hidden: ({ parent }) => parent?.genre !== 'autre' },
                                    ]
                                },
                                defineField({
                                    name: 'scolarity',
                                    type: 'string',
                                    title: 'Niveau de scolarité complété',
                                    options: {
                                        list: [
                                            "Primaire",
                                            "Secondaire",
                                            "Cégep",
                                            "DEP",
                                            "Université"
                                        ]
                                    }
                                }),
                                defineField({
                                    name: 'occupation',
                                    title: 'Occupation',
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: "Emploi temps plein", value: "full_time" },
                                            { title: "Emploi temps partiel", value: "half-time" },
                                            { title: "Sans emploi/Au foyer", value: "at_home" },
                                            { title: "Travailleur autonome", value: "autonome" },
                                            { title: "Aux études", value: "etudiant" },
                                            { title: "Retraité", value: "retraite" },
                                            { title: "Préfère ne pas répondre", value: "no_answer" }
                                        ]
                                    }
                                })
                            ],
                            preview: {
                                select: {
                                    nom: 'nom',
                                    nom_famille: 'nom_famille',
                                    date: 'age',
                                    familyLink: 'familyLink'
                                },
                                prepare({ nom, nom_famille, date, familyLink }) {
                                    return {
                                        title: `${nom} ${nom_famille} | Conjoint/Conjointe`,
                                        subtitle: date,
                                    }
                                }
                            }
                        }),
                        defineField({
                            name: 'childrenUnder18',
                            type: 'array',
                            title: 'Enfants de moins de 18 ans',
                            of: [
                                defineField({
                                    type: 'object',
                                    name: 'children',
                                    title: 'Enfant',
                                    fields: [
                                        { name: 'nom', title: 'Prénom', type: 'string' },
                                        { name: 'nom_famille', title: 'Nom de famille', type: 'string' },
                                        { name: 'age', title: 'Date de naissance', type: 'date' },
                                        {
                                            name: 'genre_check', type: 'object', fields: [
                                                {
                                                    name: 'genre', title: 'Genre', type: 'string', options: {
                                                        list: [
                                                            { title: 'Homme', value: 'homme' },
                                                            { title: 'Femme', value: 'femme' },
                                                            { title: 'Autre', value: 'autre' },
                                                            { title: "Préfère ne pas répondre", value: "no_answer" }
                                                        ]
                                                    }
                                                },
                                                { name: 'other_genre', title: 'Autre', type: 'string', hidden: ({ parent }) => parent?.genre !== 'autre' },
                                            ]
                                        },
                                        {
                                            name: 'familyLink', title: 'Lien de famille', type: 'string', options: {
                                                list: [
                                                    { title: 'Fils', value: 'fils' },
                                                    { title: 'Fille', value: 'fille' },
                                                    { title: 'Neveu', value: 'neveu' },
                                                    { title: 'Nièce', value: 'niece' },
                                                    { title: "Préfère ne pas répondre", value: "no_answer" }
                                                ]
                                            }
                                        }
                                    ],
                                    preview: {
                                        select: {
                                            nom: 'nom',
                                            nom_famille: 'nom_famille',
                                            date: 'age',
                                            familyLink: 'familyLink'
                                        },
                                        prepare({ nom, nom_famille, date, familyLink }) {
                                            return {
                                                title: `${nom} ${nom_famille} | ${familyLink || "Lien inconnu"}`,
                                                subtitle: date,
                                            }
                                        }
                                    }
                                }),
                            ]
                        }),
                        defineField({
                            name: 'childrenOver18',
                            type: 'array',
                            title: 'Enfants de 18-25 ans aux études',
                            of: [
                                defineField({
                                    type: 'object',
                                    name: 'child',
                                    title: 'Enfant',
                                    fields: [
                                        { name: 'nom', title: 'Prénom', type: 'string' },
                                        { name: 'nom_famille', title: 'Nom de famille', type: 'string' },
                                        { name: 'age', title: 'Date de naissance', type: 'date' },
                                        {
                                            name: 'genre_check', type: 'object', fields: [
                                                {
                                                    name: 'genre', title: 'Genre', type: 'string', options: {
                                                        list: [
                                                            { title: 'Homme', value: 'homme' },
                                                            { title: 'Femme', value: 'femme' },
                                                            { title: 'Autre', value: 'autre' },
                                                            { title: "Préfère ne pas répondre", value: "no_answer" }
                                                        ]
                                                    }
                                                },
                                                { name: 'other_genre', title: 'Autre', type: 'string', hidden: ({ parent }) => parent?.genre !== 'autre' },
                                            ]
                                        },
                                        {
                                            name: 'familyLink', title: 'Lien de famille', type: 'string', options: {
                                                list: [
                                                    { title: 'Fils', value: 'fils' },
                                                    { title: 'Fille', value: 'fille' },
                                                    { title: 'Neveu', value: 'neveu' },
                                                    { title: 'Nièce', value: 'niece' },
                                                    { title: "Préfère ne pas répondre", value: "no_answer" }
                                                ]
                                            }
                                        },
                                        defineField({
                                            name: 'school',
                                            type: 'string',
                                            title: 'Établiseement scolaire fréquenté',
                                        })
                                    ],
                                    preview: {
                                        select: {
                                            nom: 'nom',
                                            nom_famille: 'nom_famille',
                                            date: 'age',
                                            familyLink: 'familyLink'
                                        },
                                        prepare({ nom, nom_famille, date, familyLink }) {
                                            return {
                                                title: `${nom} ${nom_famille} | ${familyLink || "Lien inconnu"}`,
                                                subtitle: date,
                                            }
                                        }
                                    }
                                })
                            ]
                        }),
                        defineField({
                            name: 'handicappedMemberCheck',
                            type: 'boolean',
                            title: "Membre de la famille en situation d'handicap?",
                            options: {
                                layout: 'checkbox'
                            },
                            initialValue: false
                        }),
                        defineField({
                            name: 'handicappedMemberSection',
                            type: 'object',
                            title: 'Section membre handicappé',
                            hidden: ({parent}) => parent?.handicappedMemberCheck === false,
                            fields: [
                                defineField({
                                    name: 'functionnal',
                                    type: 'boolean',
                                    title: 'Fonctionnel?',
                                    options: {
                                        layout: 'checkbox'
                                    }
                                }),
                                defineField({
                                    type: 'object',
                                    name: 'handicappedMember',
                                    title: 'Renseignements sur la personne',
                                    fields: [
                                        { name: 'nom', title: 'Prénom', type: 'string' },
                                        { name: 'nom_famille', title: 'Nom de famille', type: 'string' },
                                        { name: 'age', title: 'Date de naissance', type: 'date' },
                                        {
                                            name: 'genre_check', type: 'object', fields: [
                                                {
                                                    name: 'genre', title: 'Genre', type: 'string', options: {
                                                        list: [
                                                            { title: 'Homme', value: 'homme' },
                                                            { title: 'Femme', value: 'femme' },
                                                            { title: 'Autre', value: 'autre' },
                                                            { title: "Préfère ne pas répondre", value: "no_answer" }
                                                        ]
                                                    }
                                                },
                                                { name: 'other_genre', title: 'Autre', type: 'string', hidden: ({ parent }) => parent?.genre !== 'autre' },
                                            ]
                                        },
                                        {
                                            name: 'diagnostic',
                                            type: 'string',
                                            title: 'Diagnostique'
                                        }
                                    ],
                                }),
                                defineField({
                                    name: 'helperCheck',
                                    type: 'boolean',
                                    title: 'Proche aidant?',
                                    options: {
                                        layout: 'checkbox'
                                    }
                                }),
                                defineField({
                                    type: 'object',
                                    name: 'helper',
                                    title: 'Renseignements sur la personne',
                                    hidden: ({parent}) => parent?.helperCheck === false,
                                    fields: [
                                        { name: 'nom', title: 'Prénom', type: 'string' },
                                        { name: 'nom_famille', title: 'Nom de famille', type: 'string' },
                                    ],
                                }),
                            ]
                        })
                    ]
                }),
                defineField({
                    name: 'immediate_family',
                    type: 'number',
                    title: 'Nombre de personnes composant la famille immédiate'
                }),
                defineField({
                    name: 'revenus',
                    title: 'Revenus familiaux',
                    type: 'string',
                    options: {
                        list: [
                            { title: `0 - 10'000$`, value: '<10k' },
                            { title: `10'001$ - 20'000$`, value: '10k-20k' },
                            { title: `20'001$ - 30'000$`, value: '20k-30k' },
                            { title: `30'001$ - 40'000$`, value: '30k-40k' },
                            { title: `40'001$ - 50'000$`, value: '40k-50k' },
                            { title: `50'001 et +`, value: '>50k' },
                            { title: "Préfère ne pas répondre", value: "no_answer" }
                        ]
                    }
                }),
            ]
        }),
        defineField({
            name: 'benevole_check',
            title: 'Bénévole?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        }),
        defineField({
            name: 'benevole_form',
            title: 'Formulaire bénévole',
            type: 'object',
            hidden: ({ parent }) => !parent.benevole_check,
            fields: [
                defineField({
                    name: 'actif_check',
                    title: 'Actif?',
                    type: 'boolean',
                    options: {
                        layout: "checkbox"
                    }
                }),
                defineField({
                    name: 'code_check',
                    title: `Code d'éthique signé?`,
                    type: 'boolean',
                    options: {
                        layout: 'checkbox'
                    }
                }),
                defineField({
                    name: 'domaines',
                    title: 'Domaines à couvrir',
                    type: 'array',
                    of: [{ type: 'string' }],
                    options: {
                        layout: 'grid',
                        list: [
                            { title: 'Distribution des denrées', value: 'denrees' },
                            { title: 'Lavage des jouets', value: 'jouets' },
                            { title: 'Ménage', value: 'menage' },
                            { title: 'Cuisson de nourriture', value: 'cuisine' },
                            { title: 'Friperie', value: 'friperie' },
                            { title: 'Travaux sur le terrain', value: 'terrain' },
                            { title: 'Travaux de scrétariats', value: 'secretariat' },
                            { title: 'Vider le camion et tri de nourriture', value: 'camion' },
                        ]
                    }
                }),
                defineField({
                    name: 'disponibilites',
                    title: 'Disponibilitées',
                    type: 'array',
                    of: [{ type: 'string' }],
                    options: {
                        layout: 'grid',
                        list: [
                            { title: 'Lundi AM', value: 'lundi-am' },
                            { title: 'Lundi PM', value: 'lundi-pm' },
                            { title: 'Mardi AM', value: 'mardi-am' },
                            { title: 'Mardi PM', value: 'mardi-pm' },
                            { title: 'Mercredi AM', value: 'mercredi-am' },
                            { title: 'Mercredi PM', value: 'mercredi-pm' },
                            { title: 'Jeudi AM', value: 'jeudi-am' },
                            { title: 'Jeudi PM', value: 'jeudi-pm' },
                            { title: 'Vendredi AM', value: 'vendredi-am' },
                            { title: 'Vendredi PM', value: 'vendredi-pm' },
                            { title: 'Samedi AM', value: 'samedi-am' },
                            { title: 'Samedi PM', value: 'samedi-pm' },
                        ]
                    }
                }),
                defineField({
                    name: 'raison',
                    title: `Pourquoi je veux m'impliquer comme bénévole`,
                    type: 'text'
                }),
                defineField({
                    name: 'heures',
                    title: 'Heures accumulées',
                    type: 'number'
                }),
                defineField({
                    name: 'codeEthiqueSigned',
                    title: `Code d'éthique signé?`,
                    type: 'boolean',
                    initialValue: false,
                    options: {
                        layout: 'checkbox'
                    }
                })
            ]
        }),
        defineField({
            name: 'employee_check',
            title: 'Employé?',
            type: 'boolean',
            options: {
                layout: 'checkbox'
            }
        }),
        defineField({
            name: "connaissance",
            title: 'Comment avez-vous entendu parlé de la maison de la famille',
            type: 'string',
            options: {
                list: [
                    { title: 'Site Internet', value: 'website' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Autre membre', value: 'membre' },
                    { title: 'Famille', value: 'famille' },
                    { title: "Lors d'un événement de quartier", value: 'event' },
                    { title: 'Ancien membre', value: 'pastMember' },
                    { title: 'Autre', value: 'other' },
                    { title: 'Préfère ne pas répondre', value: 'nePasRepondre' }
                ]
            }
        }),
        defineField({
            name: 'moreInfo',
            type: 'object',
            title: 'Informations complémentaires',
            group: "otherInfos",
            fields: [
                defineField({
                    name: 'livingPlace',
                    type: 'object',
                    title: 'Quartier',
                    fields: [
                        defineField({
                            name: 'habitation',
                            type: 'boolean',
                            title: 'Habitez-vous à Saint-François ou Duvernay-Est?',
                            options: {
                                layout: 'checkbox'
                            },
                            initialValue: false
                        }),
                        defineField({
                            name: 'otherPlace',
                            type: 'string',
                            title: 'Si non, où?',
                            hidden: ({ parent }) => parent?.habitation === true
                        }),
                        defineField({
                            name: 'howLong',
                            type: 'string',
                            title: 'Depuis combien de temps?',
                            hidden: ({ parent }) => parent?.habitation === false
                        })
                    ]
                }),
                defineField({
                    name: 'immigration',
                    type: 'boolean',
                    title: `Êtes vous issus de l'immigration?`,
                    options: {
                        layout: 'checkbox'
                    }
                }),
                defineField({
                    name: 'immigrationSection',
                    type: "object",
                    title: "Section sur l'immigration",
                    hidden: ({ parent }) => parent?.immigration === false,
                    fields: [
                        defineField({
                            name: 'immigrationTime',
                            type: 'string',
                            title: 'Si oui, depuis combien de temps?',
                        }),
                        defineField({
                            name: 'immigrationIssuesCheck',
                            type: 'boolean',
                            title: "Vivez-vous des enjeux avec l'immigration?",
                            options: {
                                layout: 'checkbox'
                            },
                            initialValue: false,
                        }),
                        defineField({
                            name: 'immigrationIssues',
                            type: 'text',
                            title: 'Si oui, lequel?',
                        }),
                        defineField({
                            name: 'immigrationStatus',
                            type: 'string',
                            title: "Quel est votre statut d'immigrant?",
                        }),
                        defineField({
                            name: 'demarche',
                            type: 'text',
                            title: 'Est-ce que vous savez quelle démarche a été entreprise ou quelle démarche devez-vous faire?'
                        })
                    ]
                }),
                defineField({
                    name: 'principalIncome',
                    type: 'string',
                    title: 'Source de revenu principale (plus haut revenu)',
                    options: {
                        list: [
                            'Emplois',
                            'Assurance salaire (privée)',
                            'Régime de retraite',
                            'Prêts et bourse',
                            'Chômage',
                            'CNESST',
                            'SAAQ',
                            'Pension de retraite',
                            'Aide financière de dernier recours (aide sociale)',
                            'Pension de veuve',
                            'Allocations familiales',
                            'Pension alimentaire',
                            'Allocation au logement',
                            'Autre'
                        ]
                    }
                }),
                defineField({
                    name: 'otherPrincipalIncome',
                    type: 'string',
                    title: 'Autre',
                    hidden: ({ parent }) => parent?.principalIncome !== 'Autre'
                }),
                defineField({
                    name: 'otherIncomes',
                    type: 'array',
                    title: 'Autres sources de revenus',
                    of: [{ type: 'string' }],
                    options: {
                        list: [
                            'Emplois',
                            'Assurance salaire (privée)',
                            'Régime de retraite',
                            'Prêts et bourse',
                            'Chômage',
                            'CNESST',
                            'SAAQ',
                            'Pension de retraite',
                            "Aide financière de dernier recours (aide sociale)",
                            'Pension de veuve',
                            'Allocations familiales',
                            'Pension alimentaire',
                            'Allocation au logement',
                            'Autre'
                        ]
                    }
                }),
                defineField({
                    name: 'otherSecondaryIncome',
                    type: 'string',
                    title: 'Autre',
                    hidden: ({ parent }) => !parent?.otherIncomes?.includes('Autre')
                }),
                defineField({
                    name: 'transport',
                    type: 'array',
                    title: 'Quel est votre moyens de transport pour venir à la Maison de la Famille?',
                    of: [{ type: 'string' }],
                    options: {
                        list: [
                            'Voiture',
                            'Autobus',
                            'À pied',
                            'Vélo',
                            'Autre'
                        ]
                    }
                }),
                defineField({
                    name: 'otherTransport',
                    type: 'string',
                    title: 'Autre',
                    hidden: ({ parent }) => !parent?.transport?.includes('Autre')
                }),
                defineField({
                    name: 'pastMemberCheck',
                    type: 'boolean',
                    title: 'Avez-vous déjà été membre dans le passé?',
                    options: {
                        layout: 'checkbox'
                    },
                    initialValue: false
                }),
                defineField({
                    name: 'pastMemberTime',
                    type: 'string',
                    title: 'Quand?',
                    hidden: ({ parent }) => parent?.pastMemberCheck === false
                }),
                defineField({
                    name: 'interestedActivities',
                    type: 'array',
                    title: 'Activités/Services intéressé',
                    of: [{ type: 'string' }],
                    options: {
                        list: [
                            'Pause-café',
                            'Soirée décaf',
                            'Cuisine collective',
                            'Jardin collectif',
                            'Espace 6-12',
                            'Les petits explorateurs',
                            'Halte garderie',
                            'Parc intérieur',
                            'Les SU-Pères',
                            'Pères et Cie',
                            '1-2-3 Bébé!',
                            "Y'APP",
                            'Activités familiales',
                            'Dépannage alimentaire'
                        ]
                    }
                }),
                defineField({
                    name: 'activitiesComments',
                    type: 'text',
                    title: 'Commentaires'
                }),
                defineField({
                    name: 'familyDynamics',
                    type: 'text',
                    title: 'Dynamique familiale'
                }),
                defineField({
                    name: 'demands',
                    type: 'text',
                    title: 'Demandes'
                }),
                defineField({
                    name: 'foodHelpReasons',
                    type: 'array',
                    title: "Raisons de la demande d'aide alimentaire",
                    of: [{ type: 'string' }],
                    options: {
                        list: [
                            'Salaire insuffisant',
                            'Travail temps partiel',
                            'Sans emploi',
                            'Accident',
                            'Événement imprévue',
                            'Maladie',
                            'Chômage',
                            "Précarité de l'emploi",
                            'Endettement',
                            "Perte d'emploi",
                            "Séparation",
                            "Pension alimentaire",
                            "Coût des logements élevé",
                            "Difficulté à budgeter"
                        ]
                    }
                }),
                defineField({
                    name: 'foodHelpReasonOther',
                    type: 'text',
                    title: "Raison autre de la demande d'aide alimentaire"
                }),
                defineField({
                    name: 'SIPPECriterias',
                    type: 'array',
                    title: 'Critères SIPPE',
                    of: [{ type: 'string' }],
                    options: {
                        list: [
                            "Grossesse 12 semaines et + jusqu'à 2 ans",
                            "Revenus",
                            "Faible scolarité",
                            "Vit de l'isolement"
                        ]
                    }
                })
            ]
        }),
        defineField({
            name: "formSubmissions",
            type: "array",
            title: "Form Submissions",
            of: [
                {
                    type: "reference",
                    to: [{ type: "formulaires" }],
                    title: "Submitted Forms",
                    description: "Forms submitted by this member",
                },
            ],
        }),
        defineField({
            name: "enrolledActivities",
            title: "Activitées inscrites",
            type: "string",
            components: {
                input: MemberActivitiesInput
            },
            readOnly: true,
            group: 'inscriptions',
        }),
        defineField({
            name: "enrolledEvents",
            title: "Événements inscrits",
            type: "string",
            components: {
                input: MemberEventsInput
            },
            readOnly: true,
            group: 'inscriptions',
        }),
        defineField({
            name: "notes",
            title: 'Notes additionnelles',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
    initialValue: {
        member_check: false,
        benevole_check: false,
        employee_check: false,
        enrolledActivities: "Aucune activitée",
    },
    preview: {
        select: {
            nom: 'nom',
            nom_famille: 'nom_famille',
            zip_code: 'zip_code',
            nom_conjoint: 'member_form.family_members.conjoint'
        },
        prepare({ nom, nom_famille, zip_code, nom_conjoint }) {
            const conjointFormatted = nom_conjoint ? `|| ${nom_conjoint.nom} ${nom_conjoint.nom_famille}` : ''

            console.log(nom_conjoint)

            // const conjointFormatted = `${conjoint.nom} ${conjoint.nom_famille}` || ''

            const nameFormatted = `${nom} ${nom_famille} ${conjointFormatted}` || 'Membre inconnu'

            return {
                title: nameFormatted,
                subtitle: zip_code,
            }
        }
    }
})