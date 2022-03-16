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
        if(check === "one"){
            return words
        }
        if(check === "two"){
            return words
        } if(check === "three"){
            return words
        } if(check === "four"){
            return words
        } if(check === "five"){
            return words
        }
    }
    return {
        add,
        getWords,
        checkWord
    }
}