import { defineType} from "sanity";

export const contactFormType = defineType({
    name: 'contactForm',
    title: 'Questions',
    type: 'document',
    fields: [
        { name: 'email', type: 'string', title: 'Email', readOnly: true },
        { name: 'subject', type: 'string', title: 'Sujet', readOnly: true },
        { name: 'message', type: 'text', title: 'Message', readOnly: true },
        { name: 'createdAt', type: 'datetime', title: 'Submitted At', readOnly: true },
    ],
});
