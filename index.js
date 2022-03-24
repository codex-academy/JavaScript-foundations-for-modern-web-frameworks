const sentenceEnter = document.querySelector('.text-input');
const checkedBox = document.querySelector('.checkbox')
const countWords = document.querySelector('.counter');
const analyzeElem = document.querySelector('.Analyze');
const hideElem = document.querySelector('.Hide');
const displaySentences = document.querySelector('.displaySentence')

let wordInstance = wordWidget();

analyzeElem.addEventListener('click', function () {
    console.log(sentenceEnter.value);
    displaySentences.innerHTML = wordInstance.add(sentenceEnter.value);
    countWords.innerHTML = wordInstance.getWords();
    let findMostLong = wordInstance.longestWord(sentenceEnter.value)

    let highlight = '';

    let theSentences = sentenceEnter.value.split(' ');
    for (let i = 0; i < theSentences.length; i++) {
        let wordHighlighted = theSentences[i];
        if (wordHighlighted.length > 4) {
            if (findMostLong.includes(wordHighlighted)) {
                highlight += `<mark style="background-color: green; color: white;">  ${wordHighlighted}  </mark>`
            }
            else {
                highlight += `<mark> ${wordHighlighted} </mark>`
            }
        }
        else {
            highlight += wordHighlighted + ' ';
        }
    }
    console.log(highlight);
    displaySentences.innerHTML = highlight;
    countWords.innerHTML = theSentences.length;

})

hideElem.addEventListener('click', function () {
    let selectedCheck = document.querySelector('input[name="check"]:checked');
   console.log(checkedBox.checked);
   if(checkedBox.checked == false){
    displaySentences.innerHTML = wordInstance.add(sentenceEnter.value);
    countWords.innerHTML = wordInstance.getWords();
    let findMostLong = wordInstance.longestWord(sentenceEnter.value)

    let highlight = '';

    let theSentences = sentenceEnter.value.split(' ');
    for (let i = 0; i < theSentences.length; i++) {
        let wordHighlighted = theSentences[i];
        if (wordHighlighted.length > 4) {
            if (findMostLong.includes(wordHighlighted)) {
                highlight += `<mark style="background-color: green; color: white;">  ${wordHighlighted}  </mark>`
            }
            else {
                highlight += `<mark> ${wordHighlighted} </mark>`
            }
        }
        else {
            highlight += wordHighlighted + ' ';
        }
    }
    console.log(highlight);
    displaySentences.innerHTML = highlight;
    countWords.innerHTML = theSentences.length;
   } else{
    console.log(sentenceEnter.value);
    displaySentences.innerHTML = wordInstance.checkWord(selectedCheck)
    
    let mostLongHighlight = wordInstance.longestWord(sentenceEnter.value)
    let newHighlight = '';
    let wordCheck = sentenceEnter.value.split(' ');

    for (let i = 0; i < wordCheck.length; i++) {
        let highlightWord = wordCheck[i];

        if (highlightWord.length > 4) {
            if(mostLongHighlight.includes(highlightWord)){
                newHighlight += `<mark style="background-color: green; color: white;">  ${highlightWord}  </mark>`
            }
            else{
                newHighlight += `<mark> ${highlightWord} </mark>`
            }
        }
        else {
            newHighlight + mostLongHighlight + ' ';
        }
    }
    displaySentences.innerHTML = newHighlight;
   }
 
})
