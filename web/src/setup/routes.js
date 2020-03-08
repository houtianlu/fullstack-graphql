// App Imports
import {APP_URL_API} from './config'

// APP Routes
export const routes = {
  home: '/',

  about: '/about',

  cases: {
    list: '/cases',

    create: '/cases/create',

    view: (id) => {
      return `/cases/${ id }`
    }
  },
}

export const routesApi = APP_URL_API
