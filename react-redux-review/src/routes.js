import React from 'react'
import MovieForm from './components/MovieForm'
import MovieConfirm from './components/MovieConfirm'
import MovieList from './components/MovieList'

import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path="/" component={MovieForm} />
    <Route path="/confirm" component={MovieConfirm} />
    <Route exact path="/list" component={MovieList} />
  </Switch>
)
