import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { WorkshopPage } from './WorkshopPage'
import { ReachUIPage } from './ReachUIPage'

export function App() {
  return (
    <div className="app">
      <aside>
        <nav>
          <a href="/">Home</a>
          <a href="/workshops">React Workshops</a>
          <a href="/oss">Open Source</a>
        </nav>
      </aside>
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/workshops" exact>
            <WorkshopPage />
          </Route>
          <Route path="/oss" exact>
            <ReachUIPage />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
