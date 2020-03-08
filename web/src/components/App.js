// Imports
import React from 'react'
import {Route, Switch} from 'react-router-dom'

// App Imports
import {routes} from '../setup/routes'
import Layout from './common/Layout'
import Home from './home/Home'
import About from './home/About'
import CasesList from './cases/List'
import ThoughtsCreate from './cases/Create'
import ThoughtsView from './cases/View'

// Component
const App = () => (
  <Layout>
    <Switch>
      {/* Common */}
      <Route path={routes.home} component={Home} exact/>
      <Route path={routes.about} component={About}/>

      {/* Cases */}
      <Route path={routes.cases.list} component={CasesList} exact/>
      <Route path={routes.cases.create} component={ThoughtsCreate}/>
      <Route path={routes.cases.view(':id')} component={ThoughtsView}/>
    </Switch>
  </Layout>
)

export default App
