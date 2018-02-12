import WordWatch from '../request/wordWatchApi'
import $ from 'jquery'

export default class WordService {

  static getTopWord() {
    WordWatch.getTopWord()
      .then(word => {
        let top = Object.keys(word.word)
        $("#top-word").append(`${top[0]}`)
      })
  }

  static sortWords() {
    let body = $('textarea').val();
    let arrayOfWords = body.split(" ")
    this.countWords(arrayOfWords)
    $('textarea').val('');
  }

  static countWords(arrayOfWords) {
    let counter = {}
    arrayOfWords.forEach((word) => {
      if (counter[word.toLowerCase()] === undefined) {
        counter[word.toLowerCase()] = 1
      } else {
        counter[word.toLowerCase()] += 1
      }
    })
    this.insertWords(counter)
  }

  static insertWords(counter){
    $(".word-count p").remove();
    Object.keys(counter).forEach((word) => {
      this.sendWord(word)
      $(".word-count").append(`<p style="font-size:${counter[word]}em;">${word}</p>`)
    })
  }

  static sendWord(word) {
    WordWatch.postWord(word)
      .then(response => {
        console.log(response)
      })
  }

}
