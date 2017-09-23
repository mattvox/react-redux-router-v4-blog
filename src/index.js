import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, browserHistory } from 'react-router'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './reducers'
import routes from './routes'

import './index.css';

import registerServiceWorker from './registerServiceWorker'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, /*preloadedState,*/ composeEnhancers(
  applyMiddleware(promise, thunk),
));
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
