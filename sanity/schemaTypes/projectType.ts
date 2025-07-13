import {defineField, defineType, defineArrayMember} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Progetti',
  type: 'document',

// groups: [
//   {name: 'details', title: 'Details'},
// ],

  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sottotitolo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
  name: 'date',
  title: 'Data progetto',
  type: 'date',
  options: {
    dateFormat: 'MM-YYYY',
    calendarTodayLabel: 'Oggi',
  },
  validation: Rule => Rule.required(),
}),
    defineField({
      name: 'coverImage',
      title: 'Copertina',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      title: 'Contenuto',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fieldsets: [
            {
              name: 'meta',
              title: 'Metadati immagine',
              options: {collapsible: true, collapsed: true, columns: 2},
            },
          ],
          fields: [
            defineField({
              name: 'alt',
              title: 'Testo alternativo',
              type: 'string',
              fieldset: 'meta',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
              fieldset: 'meta',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galleria immagini',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fieldsets: [
            {
              name: 'meta',
              title: 'Metadati immagine',
              options: {collapsible: true, collapsed: true, columns: 2},
            },
          ],
          fields: [
             defineField({
              name: 'alt',
              title: 'Testo alternativo',
              type: 'string',
              fieldset: 'meta',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia',
              type: 'string',
              fieldset: 'meta',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'services',
      title: 'Servizi',
      description: 'La tipologia del servizio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'service'}],
        }),
      ],
    }),
    defineField({
      name: 'teams',
      title: 'Team',
      description: 'Chi ha lavorato al progetto',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'team'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'coverImage',
    },
  },
})
