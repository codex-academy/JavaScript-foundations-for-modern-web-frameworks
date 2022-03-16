const sentenceEnter = document.querySelector('.text-input');
const countWords = document.querySelector('.counter');
const analyzeElem = document.querySelector('.Analyze');
const hideElem = document.querySelector('.Hide')
const displaySentences = document.querySelector('.displaySentence')

let wordInstance = wordWidget();


analyzeElem.addEventListener('click', function(){
    console.log(sentenceEnter.value);
    displaySentences.innerHTML= wordInstance.add(sentenceEnter.value);
    console.log(displaySentences);
    countWords.innerHTML = wordInstance.getWords();
    console.log(countWords);

    let highlight = '';
    let theSentences = sentenceEnter.value.split(' ');
        for(let i = 0; i < theSentences.length; i++){
        let wordHighlighted = theSentences[i];
        {
            if(wordHighlighted.length > 4) {
            highlight += `<mark>  ${wordHighlighted}  </mark>`
            }
            else {
                highlight += wordHighlighted + ' '
            }
        }
    }
                    displaySentences.innerHTML = highlight;
                    countWords.innerHTML = theSentences.length


})

hideElem.addEventListener('click', function(){
    let selectedCheck = document.querySelector('input[name="check"]:checked');

    console.log(sentenceEnter.value);
    displaySentences.innerHTML =  wordInstance.checkWord(selectedCheck.value, input.value)

    let newHighlight = '';
    let wordCheck = sentenceEnter.value.split(' ');
    for(let i = 0; i < wordCheck.length; i++){
        let highlightWord = wordCheck[i];
        {
            if(highlightWord.length > selectedCheck){
                newHighlight += `<mark> ${highlightWord} </mark>`
            }
            else {
                newHighlight += highlightWord
            }
        }
    }
    displaySentences.innerHTML = newHighlight;

    btn.onclick = () => {
        alert(selectedCheck.value);
     };
})