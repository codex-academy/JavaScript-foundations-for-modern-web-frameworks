const sentenceEnter = document.querySelector('.text-input');
const countWords = document.querySelector('.counter');
const analyzeElem = document.querySelector('.Analyze');
const addSentence = document.querySelector('.Add')
const displaySentences = document.querySelector('.displaySentence')

let wordInstance = wordWidget();

// if(wordInstance.getCounter()){
//     countWords.innerHTML = wordInstance.getCounter()
  
//   }

addSentence.addEventListener('click', function(){
    console.log(sentenceEnter.value);
     displaySentences.innerHTML= wordInstance.add(sentenceEnter.value);
    console.log(displaySentences);
    countWords.innerHTML = wordInstance.getWords()
    console.log(countWords);
})

analyzeElem.addEventListener('click', function(){
    let highlight = '';
    let theSentences = sentenceEnter.value.split(' ');
        for(let i = 0; i < theSentences.length; i++){
        let wordHighlighted = theSentences[i];{
            if(wordHighlighted.length > 4) {
            highlight += `<mark>${wordHighlighted}</mark>`
                // displaySentences.innerHTML = sentences
                // displaySentences.classList.add('blue')
            }
            else {
                highlight += wordHighlighted
            }
        }
    }
                    displaySentences.innerHTML = highlight;

})
