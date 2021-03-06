import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'

import App from './containers/App'
// import registerServiceWorker from './registerServiceWorker'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
