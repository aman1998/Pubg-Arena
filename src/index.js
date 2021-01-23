import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers'
import App from './App';
import './n18next'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={(<div></div>)}> 
      <App />
    </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




