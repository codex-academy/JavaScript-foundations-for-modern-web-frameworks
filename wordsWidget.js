function wordWidget() {

    const enteredSentence = [];

    const add = (sentence) => {
        let sentences = sentence
        enteredSentence.push(sentences)
        return enteredSentence
    }

    const getWords = () => 
        enteredSentence[0].split(' ').length
    
    const checkWord = (check, sentence) => {
        let words = sentence
        if(check){
            return words
        }
    }
    
    const longestWord = (theLongest) => {
        
        let findLong = theLongest.split(' ');
        console.log(findLong);
        let mostLongest = '';

      for(let i = 0; i < findLong.length; i++){
          let longestWord = findLong[i];
          if(longestWord.length >= mostLongest.length){
              mostLongest = longestWord;
          }
        }

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