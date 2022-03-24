function wordWidget() {

    const enteredSentence = [];

    const add = (sentence) => {
        let sentences = sentence
        sentence = "";
        enteredSentence.push(sentences)
        return enteredSentence
    }
    const getWords = () => 
        enteredSentence[0].split(' ').length
    
    const checkWord = (check, sentence) => {
        let words = sentence
        if(check > 4){
            return words
        }
    }

    const longestWord = (words) => {
        
        let findLong = words.split(' ');
       
        let mostLongest = '';
        let longWordHighlight = '';
        let highlightMostLong = '';

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
        getWords,
        checkWord,
        storedSentences,
        longestWord
    }
}