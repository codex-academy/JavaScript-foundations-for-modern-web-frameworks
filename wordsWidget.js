function wordWidget() {

    const enteredSentence = [];

    const add = (sentence) => {
        enteredSentence.push(sentence)
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
    return {
        add,
        getWords,
        checkWord
    }
}