import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'
import { frFRLocale } from '@sanity/locale-fr-fr'

export default defineConfig({
  name: 'default',
  title: 'electron-sanity-test',

  projectId: 'm2q9id0y',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), frFRLocale()],

  schema: {
    types: schemaTypes,
  },
})
