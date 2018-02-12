const API = `https://wordwatch-api.herokuapp.com/api/v1/`

export default class WordWatch {

  static getTopWord() {
    return fetch(API + `top_word`)
      .then(response => response.json())
  }

  static postWord(words) {
    return fetch(API + `words`, {
      method: 'POST',
      headers:
      { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word: { value: words}})
    }).then(response => response.json())
  }
}
