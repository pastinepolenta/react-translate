import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'

function translationsReducer(state = {}, action) {
  switch (action.type) {
    case 'TRANSLATIONS_GET_SUCCESS':
      return {
        ...state,
        translations: action.payload
      }
    default:
      return state
  }
}

const store = createStore(translationsReducer, {})

class AppProvider extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
}

export default AppProvider