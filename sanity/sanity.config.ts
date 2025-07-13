import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const deskStructure = (S: structureTool) =>
  S.list()
    .title('Koinè progettazione')
    .items([
      S.listItem()
        .title('Progetti')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Progetti')),

      S.listItem()
        .title('Servizi')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Servizi')),

      S.listItem()
        .title('Team')
        .schemaType('team')
        .child(S.documentTypeList('team').title('Persone')),

      S.divider(),

      S.listItem()
        .title('Impostazioni sito')
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
    ])

export default defineConfig({
  name: 'default',
  title: 'Koinè',

  projectId: 'eg1kb07i',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure, // 👈 usa la struttura custom
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
