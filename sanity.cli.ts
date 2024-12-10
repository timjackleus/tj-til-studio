import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ey0l0ez5',
    dataset: 'sandbox',
  },
  project: {
    basePath: '/studio',
  },
  studioHost: 'timjackleus',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
