import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {siteStructure} from './utils/deskStructure'
import {RocketLaunch, Monitor} from '@phosphor-icons/react'

import {theme} from 'https://themer.sanity.build/api/hues?default=6c6860&primary=d8d2ca;600&transparent=a59d93&positive=43d675;500;lightest:fff&caution=fbd024;500;lightest:fff&critical=lightest:fff;darkest:101112&lightest=ffffff&darkest=2e2e2e'
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
    theme
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
    theme
  },
])
