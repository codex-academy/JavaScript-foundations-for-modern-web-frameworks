function wordWidget() {

    const enteredSentence = [];

    const add = (sentence) => {
        enteredSentence.push(sentence)
        return enteredSentence
    }

    const getWords = () => 
        enteredSentence[0].split(' ').length
    
    // const getCounter = () => {
    //     return enteredSentence.length
    // }
    return {
        add,
        getWords,
        // getCounter
    }
}