const sentenceEnter = document.querySelector('.text-input');
const countWords = document.querySelector('.counter');
const analyzeElem = document.querySelector('.Analyze');
const hideElem = document.querySelector('.Hide');
const displaySentences = document.querySelector('.displaySentence')

let wordInstance = wordWidget();


analyzeElem.addEventListener('click', function(){
    console.log(sentenceEnter.value);
    displaySentences.innerHTML= wordInstance.add(sentenceEnter.value);
    console.log(displaySentences);
    let findMostLong =  wordInstance.longestWord(sentenceEnter.value)
    countWords.innerHTML = wordInstance.getWords();
    console.log(countWords);

    let highlight = '';
    let longestHighlight = '';

    let theSentences = sentenceEnter.value.split(' ');
        for(let i = 0; i < theSentences.length; i++){
        let wordHighlighted = theSentences[i];

        {
            if(wordHighlighted.length > 4) {
            highlight += `<mark>  ${wordHighlighted}  </mark>`
            if(findMostLong.length < 5)
            longestHighlight += `<mark style="background-color: green; color: white;"> ${findMostLong} </mark> `
            
            }
            else {
                highlight += wordHighlighted + ' '
                longestHighlight += findMostLong + ' '
            }
        }
    }
                    countWords.innerHTML = theSentences.length;
                    displaySentences.innerHTML = highlight + longestHighlight;
                    


})

hideElem.addEventListener('click', function(){
    let selectedCheck = document.querySelector('input[name="check"]:checked');

    console.log(sentenceEnter.value);
    displaySentences.innerHTML =  wordInstance.checkWord(selectedCheck.value)

    let newHighlight = '';
    let wordCheck = sentenceEnter.value.split(' ');
    for(let i = 0; i < wordCheck.length; i++){
        let highlightWord = wordCheck[i];
        {
            if(highlightWord.length > selectedCheck.value){
                newHighlight += `<mark> ${highlightWord}</mark> `
            }
            else {
                newHighlight += ' '
            }
        }
    }
    displaySentences.innerHTML = newHighlight;

})


// longestWordElem.addEventListener('click', function(){
//     console.log(sentenceEnter.value);
//     displaySentences.innerHTML =  wordInstance.longestWord(sentenceEnter.value)
//     console.log(wordInstance.longestWord(sentenceEnter.value));
//     let longWordHighlight = '';
//     let longCheck = sentenceEnter.value.split(' ');

//     for(let i = 0; i < longCheck.length; i++){
//         let longestWord = longCheck[i];
//         {
//             if(longestWord.length < sentenceEnter.value){
//                 longWordHighlight += `<mark style="background-color:red"> ${longestWord} </mark> `
//             }
//             else {
//                 longWordHighlight += ''
//             }
//         }
//     }
//     displaySentences.innerHTML = longWordHighlight;
// })