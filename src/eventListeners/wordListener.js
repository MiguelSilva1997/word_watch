import WordService from '../services/wordService'
import $ from 'jquery'


$(document).ready(() => {
  WordService.getTopWord();

  $('button').on('click', (event) => {
    WordService.sortWords();
  })

  $('textarea').keypress((event) => {
    let key = event.keyCode
    if (key === 13) {
      WordService.sortWords();
    }
  })
})
