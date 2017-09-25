import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Blog from './components/blog'
import NewPost from './components/new-post'
import Post from './components/post'
import NotFound from './components/not-found'

export default (
  <BrowserRouter>
    <div>
      <App />
      <Switch>
        <Route exact path='/' component={Blog} />
        <Route path='/posts/:id' component={Post} />
        <Route path='/posts/new' component={NewPost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
