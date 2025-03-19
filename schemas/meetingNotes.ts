import { defineType, defineField } from "sanity";

export const meetingNotes = defineType({
    name: 'meetingNotes',
    type: 'document',
    title: 'Compte-rendus de rencontre',
    fields: [
        defineField({
            name: 'patient',
            type: 'object',
            title: 'Personne rencontrée',
            fields: [
                defineField({
                    name: 'memberCheck',
                    type: 'boolean',
                    title: 'Membre?'
                }),
                defineField({
                    name: 'name',
                    type: 'string',
                    title: 'Nom',
                    hidden: ({ parent }) => parent?.memberCheck
                }),
                defineField({
                    name: 'member',
                    type: 'reference',
                    title: 'Membre',
                    to: [{ type: 'inscription' }],
                    hidden: ({ parent }) => !parent?.memberCheck
                })
            ]
        }),
        defineField({
            name: 'meetings',
            type: 'array',
            title: 'Rencontres',
            of: [
                defineField({
                    name: 'meeting',
                    type: 'object',
                    title: 'Rencontre',
                    fields: [
                        defineField({
                            name: 'date',
                            type: 'date',
                            title: 'Date',
                            validation: (rule) => rule.required()
                        }),
                        defineField({
                            name: 'subjects',
                            type: 'array',
                            title: 'Sujets',
                            of: [
                                { type: 'string' }
                            ],
                            options: {
                                list: [
                                    { title: 'Difficultés avec la gestion du temps', value: 'time_management_issues' },
                                    { title: 'Difficultés avec son enfant', value: 'child_issues' },
                                    { title: 'Difficultés de couple', value: 'couple_issues' },
                                    { title: 'Séparation', value: 'separation' },
                                    { title: 'Difficulté avec l\'ex-conjoint', value: 'ex_partner_issues' },
                                    { title: 'Difficulté avec la famille élargie', value: 'extended_family_issues' },
                                    { title: 'Problèmes financiers/Besoins matériels/denrées alimentaires/vestimentaires', value: 'financial_material_needs' },
                                    { title: 'problèmes juridiques/la garde de l\'enfant', value: 'legal_child_custody_issues' },
                                    { title: 'Solitude/manque de support', value: 'loneliness_lack_of_support' },
                                    { title: 'Difficultés à s\'adapter', value: 'adaptation_issues' },
                                    { title: 'Bon coup', value: 'success_story' },
                                    { title: 'Annonce d\'une bonne nouvelle', value: 'good_news_announcement' },
                                    { title: 'Démarches juridiques', value: 'legal_procedures' },
                                    { title: 'Démarches d\'emploi', value: 'job_search' },
                                    { title: 'Démarches pour retour aux études', value: 'education_return' },
                                    { title: 'Recherches de logement', value: 'housing_search' },
                                    { title: 'Deuil', value: 'grief' },
                                    { title: 'Problème salubrité logement', value: 'housing_sanitation_issues' },
                                    { title: 'Immigration/Statut', value: 'immigration_status' },
                                    { title: 'Budget', value: 'budget' },
                                    { title: 'Épicerie/planification des repas', value: 'grocery_meal_planning' },
                                    { title: 'Développement et/ou besoin de l\'enfant', value: 'child_development_needs' },
                                    { title: 'Sécurité de l\'enfant', value: 'child_safety' },
                                    { title: 'Référence: Juridique', value: 'referral_legal' },
                                    { title: 'Référence: Besoins matériels/vestimentaires', value: 'referral_material_needs' },
                                    { title: 'Référence: Denrées alimentaires', value: 'referral_food_needs' },
                                    { title: 'Référence: CLSC', value: 'referral_clsc' },
                                    { title: 'Référence: Centre Jeunesse', value: 'referral_youth_center' },
                                    { title: 'Référence: Immigration', value: 'referral_immigration' },
                                    { title: 'Référence: Recherche d\'emploi', value: 'referral_job_search' },
                                    { title: 'Contact: Intervenant(e) du CLSC', value: 'contact_clsc_worker' },
                                    { title: 'Contact: Infirmier(ère) du CLSC', value: 'contact_clsc_nurse' },
                                    { title: 'Contact: Intervenant(e) Centre Jeunesse', value: 'contact_youth_center_worker' },
                                    { title: 'Contact: Intervenant(e) autre', value: 'contact_other_worker' },
                                    { title: 'Contact: Membre de la famille ou de l\'entourage', value: 'contact_family_member' }
                                ]
                            }
                        }),
                        defineField({
                            name: 'notes',
                            type: 'array', 
                            of: [{type: 'block'}],
                            title: 'Notes',
                            validation: (rule) => rule.required()
                        })
                    ]
                })
            ]
        })
    ],
    preview: {
        select: {
            memberFirstName: 'patient.member.nom',
            memberLastName: 'patient.member.nom_famille',
            handwrittenName: 'patient.name',
            isMember: 'patient.memberCheck'
        },
        prepare({ memberFirstName, memberLastName , handwrittenName, isMember }) {
            const memberName = `${memberFirstName} ${memberLastName}`;

            return {
                title: isMember ? memberName || 'Membre inconnu' : handwrittenName || 'Nom inconnu',
                subtitle: isMember ? 'Membre' : 'Non-membre/Autre'
            };
        }
    }
});