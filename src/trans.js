import keys from './translation-keys.json'

const trans = t => {
    console.log(keys)
    return t.toUpperCase()
}

export default trans