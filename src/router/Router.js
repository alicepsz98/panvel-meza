import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import Error from '../pages/Error/index'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Error />
      </Switch>
    </BrowserRouter>
  ) 
}

export default Router;