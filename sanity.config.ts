import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {siteStructure} from './utils/deskStructure'
import {RocketLaunch, Monitor} from '@phosphor-icons/react'
export default defineConfig([
  {
    name: 'production',
    title: 'Production',
    projectId: 'lvdw1vu7',
    dataset: 'production',
    plugins: [structureTool({structure: siteStructure}), visionTool()],
    schema: {
      types: schemaTypes,
    },
    icon: RocketLaunch,
    basePath: '/prod',
    apiVersion: '2025-01-24',
  },
  {
    name: 'staging',
    title: 'Staging',
    projectId: 'lvdw1vu7',
    dataset: 'stage',
    plugins: [structureTool({structure: siteStructure}), visionTool()],
    schema: {
      types: schemaTypes,
    },
    icon: Monitor,
    basePath: '/stage',
    apiVersion: '2025-01-24',
  },
])
