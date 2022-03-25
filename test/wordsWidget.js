function wordWidget() {

    const enteredSentence = [];

    const add = (sentence) => {
        enteredSentence.push(sentence)
        return enteredSentence
    }
    const getWordsLength = () => enteredSentence[0].split(' ').length
    const getWords = () => enteredSentence[0].split(' ')
    
    const checkWord = (check, sentence) => {
        let words = sentence
        if(check > 4){
            console.log(words);
            return words
        }
    }

    const longestWord = (words) => {
        
        let findLong = words.toString().split(' ');
       
        let mostLongest = '';
        let longWordHighlight = '';

      for(let i = 0; i < findLong.length; i++){
          let longestWord = findLong[i];
          if (mostLongest.length >= longestWord.length) {
            longWordHighlight += `<mark>  ${longestWord}  </mark>`
        }
          else if(longestWord.length >= mostLongest.length){
              mostLongest = longestWord;
              
            }
        }
        console.log(mostLongest);
        
        return findLong.filter(theLongest => theLongest.length === mostLongest.length)

    }
    const storedSentences = () => {
        
    }
    return {
        add,
        getWordsLength,
        checkWord,
        storedSentences,
        longestWord, getWords
    }
}