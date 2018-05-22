import React from 'react'
import TranslationContext from './translationContext'

const trans = t => {
    return (
        <TranslationContext.Consumer>
            {translations => translations ? translations[t] : '<<' + t + '>>' }
        </TranslationContext.Consumer>
    )
}

export default trans