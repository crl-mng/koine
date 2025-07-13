import {defineField, defineType, defineArrayMember} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const teamType = defineType({
  name: 'team',
  title: 'Persone',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'firstName',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Cognome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Ruolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenuto',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Link social',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Piattaforma',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'Twitter / X', value: 'twitter'},
                  {title: 'Sito personale', value: 'website'},
                ],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.uri({scheme: ['http', 'https']}).required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
            prepare({title, subtitle}) {
              return {
                title: title?.charAt(0).toUpperCase() + title?.slice(1),
                subtitle,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'lastName',
      role: 'role', // aggiungi il ruolo
      media: 'photo',
    },
    prepare({title, subtitle, role, media}) {
      return {
        title: `${title} ${subtitle}`,
        subtitle: role,
        media,
      }
    },
  },
})
