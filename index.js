const sentenceEnter = document.querySelector('.text-input');
const countWords = document.querySelector('.counter');
const analyzeElem = document.querySelector('.Analyze');
const hideElem = document.querySelector('.Hide');
const displaySentences = document.querySelector('.displaySentence')

let wordInstance = wordWidget();


analyzeElem.addEventListener('click', function () {
    console.log(sentenceEnter.value);
    displaySentences.innerHTML = wordInstance.add(sentenceEnter.value);
    // console.log(displaySentences);
    countWords.innerHTML = wordInstance.getWords();
    // console.log(countWords);.
    let findMostLong = wordInstance.longestWord(sentenceEnter.value)
    // console.log(findMostLong);

    let highlight = '';

    let theSentences = sentenceEnter.value.split(' ');
    for (let i = 0; i < theSentences.length; i++) {
        let wordHighlighted = theSentences[i];
        console.log(findMostLong, wordHighlighted);
        if (wordHighlighted.length > 4) {
            if(findMostLong.includes(wordHighlighted)){
                highlight += `<mark style="background-color: green; color: black;">  ${wordHighlighted}  </mark>`

            }
            else{
                highlight += `<mark> ${wordHighlighted} </mark>`
            }
        }
        else {

            highlight += wordHighlighted + ' ';
        }

    }
    console.log(highlight);
    displaySentences.innerHTML =  highlight ;
    countWords.innerHTML = theSentences.length;

})

hideElem.addEventListener('click', function () {
    let selectedCheck = document.querySelector('input[name="check"]:checked');

    console.log(sentenceEnter.value);
    displaySentences.innerHTML = wordInstance.checkWord(selectedCheck.value)

    let mostLongHighlight = wordInstance.longestWord(sentenceEnter.value)
    // console.log(mostLongHighlight);

    let newHighlight = '';
    // let newLongWordHl = ' ';
    let wordCheck = sentenceEnter.value.split(' ');
    for (let i = 0; i < wordCheck.length; i++) {
        let highlightWord = wordCheck[i];
        {
            if (highlightWord.length > 4) {
                newHighlight += `<mark> ${highlightWord}</mark> `
            }
            // if(mostLongHighlight.length < 5){
            //     newLongWordHl += `<mark style="background-color: green; color: white;> ${mostLongHighlight}</mark> `
            // }
            else {
                newHighlight + mostLongHighlight + ' ';
                // newLongWordHl += ' ';
            }
        }
    }
    displaySentences.innerHTML = newHighlight + mostLongHighlight;

})
