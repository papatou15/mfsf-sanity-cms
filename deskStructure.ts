import { StructureBuilder } from 'sanity/structure';
import { UsersIcon, CalendarIcon, ComposeIcon, DocumentIcon, DocumentsIcon, EarthGlobeIcon, EnvelopeIcon, MenuIcon, CogIcon } from '@sanity/icons';

export default (S: StructureBuilder) =>
  S.list()
    .title('Tableau de Bord')
    .items([
      // 🔹 Section 1: Inscriptions (Top Priority)
      S.listItem()
        .title('Inscriptions')
        .icon(UsersIcon)
        .schemaType('inscription')
        .child(S.documentTypeList('inscription')),

      S.divider(),

      // 🔹 Section 2: Activités et Événements
      S.listItem()
        .title('Activités et Événements')
        .icon(CalendarIcon)
        .child(
          S.list()
            .title('Activités et Événements')
            .items([
              S.documentTypeListItem('activity').title('Activités').icon(ComposeIcon),
              S.documentTypeListItem('event').title('Événements').icon(CalendarIcon),
            ])
        ),

      S.divider(),

      // 🔹 Section 3: Formulaires
      S.listItem()
        .title('Formulaires')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Formulaires')
            .items([
              S.documentTypeListItem('form6-12').title('Formulaire 6-12 ans').icon(DocumentIcon),
              S.documentTypeListItem('formGarderie').title('Formulaire Garderie').icon(DocumentIcon),
              S.documentTypeListItem('contactForm').title('Formulaire de Contact').icon(EnvelopeIcon),
              S.documentTypeListItem('formulaires').title('Formulaires')
            ])
        ),

      S.divider(),

      // 🔹 Section 4: Navigation du Site
      S.listItem()
        .title('Navigation du Site')
        .icon(EarthGlobeIcon)
        .child(
          S.list()
            .title('Navigation')
            .items([
              // Singleton Menu
              S.listItem()
                .title('Menu')
                .icon(MenuIcon)
                .child(S.editor().schemaType('menu').documentId('menu')),

              // Pages
              S.documentTypeListItem('pageMaker').title('Pages').icon(DocumentsIcon),
            ])
        ),

      S.divider(),

      // 🔹 Section 5: Paramètres du Site (Bottom)
      S.listItem()
        .title('Paramètres du Site')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Paramètres')
            .items([
              // Singleton Contact
              S.listItem()
                .title('Contact')
                .icon(EnvelopeIcon)
                .child(S.editor().schemaType('contact').documentId('contact')),

              S.listItem()
                .title('Bannière')
                .child(S.editor().schemaType('banner').documentId('banner'))
            ])
        ),
    ]);
