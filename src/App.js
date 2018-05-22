import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TranslationContext from './translationContext'
import { connect } from 'react-redux'
import transKeys from './translation-keys.json'

class App extends Component {
  render() {
    if (!this.props.translations) {
      setTimeout(() => {
        this.props.getTranslationsDispatch()
      }, 1000)
    }
    return (
      <div className="App">
        <TranslationContext.Provider value={this.props.translations}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{_t('Welcome to React')}!</h1>
          </header>
          <p className="App-intro">
            {_t('This is a translation test')} <br />
          </p>
        </TranslationContext.Provider>
      </div>
    )
  }
}

const mapState = state => {
  const { translations } = state
  return {
    translations
  }
}

const mapDispatch = dispatch => {
  return {
    getTranslationsDispatch: () => {
      console.warn(transKeys)
      // MOCK translations API
      return dispatch({
        type: 'TRANSLATIONS_GET_SUCCESS',
        payload: Object.keys(transKeys).reduce((accu, current) => {
          accu[current] = 'FRA_' + current
          return accu
        }, {})
      })
    }
  }
}

export default connect(mapState, mapDispatch)(App)
