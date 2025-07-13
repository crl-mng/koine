import {defineField, defineType, defineArrayMember} from 'sanity'
import {CubeIcon} from '@sanity/icons'

export const serviceType = defineType({
  name: 'service',
  title: 'Servizi',
  icon: CubeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'coverImage',
      title: 'Copertina',
      type: 'image',
      options: {hotspot: true},
      // validation: (Rule) => Rule.required(),
    }),
  ],
})
