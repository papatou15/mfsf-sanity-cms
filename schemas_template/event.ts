import {defineField, defineType} from 'sanity'
import {BlockContentIcon, CalendarIcon} from '@sanity/icons'
import { DoorsOpenInput } from './components/DoorsOpenInput'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial', icon: BlockContentIcon},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'details',
      options: {source: 'name'},
      validation: (rule) => rule
        .required()
        .error('Required to generate a page on the website'),
        hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      group: 'details',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio'
      },
    }),    
    defineField({
      name: 'date',
      type: 'datetime',
      group: 'details',
    }),
    defineField({
      name: 'doorsOpen',
      type: 'number',
      description: 'Number of minutes before the start time for admission',
      initialValue: 60,
      group: 'details',
      components: {
        input: DoorsOpenInput
      }
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      group: 'details',
      to: [{type: 'venue'}],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
      validation: (rule) =>
        rule.custom((value, context) => {
            if (value && context?.document?.eventType === 'virtual') {
                return 'Only in-person events can have a venue'
            }

            return true
        })
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      group: 'details',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'editorial',
    }),
    defineField({
      name: 'details',
      type: 'array',
      group: 'editorial',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
      group: 'details',
      description: 'Enter a valid URL to the ticket selling website'
    }),
  ],
  preview: {
    select: {
        name: 'name',
        venue: 'venue.name',
        artist: 'headline.name',
        date: 'date',
        image: 'image',
    },
    prepare({name, venue, artist, date, image}) {
        const nameFormatted = name || 'Untitled event'
        const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
        : 'No date'

        return{
            title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
            subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
            media: image || CalendarIcon
        }
    }
  },
})