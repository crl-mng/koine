import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Impostazioni sito',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Titolo del sito',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      title: 'Email di contatto',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefono',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'Chi siamo / About',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'headerLinks',
      title: 'Link di navigazione header',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'label', title: 'Testo', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Testo del footer',
      type: 'text',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Link del footer',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'label', title: 'Etichetta', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Piattaforma',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Website', value: 'website' },
                ],
                layout: 'dropdown',
              },
            },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'showCookieBanner',
      title: 'Mostra banner cookie',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})