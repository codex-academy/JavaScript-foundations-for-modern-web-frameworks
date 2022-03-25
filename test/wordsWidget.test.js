describe('Words Widget Factory Function', function () {

    describe('Return a sentence that was entered by user', function () {
        it('when sentence entered should return all words in strings', function () {
            const wordsEntered = wordWidget();

            wordsEntered.add('The cow jumped over the moon to see the starships');

            let wordsList = wordsEntered.getWordsLength()
            console.log(wordsList);
            assert.equal(10, wordsList)
            assert.deepEqual(wordsEntered.getWords(), ['The', 'cow', 'jumped', 'over', 'the', 'moon', 'to', 'see', 'the', 'starships']);
        });
        it('when sentence entered should return only words greater than 4 character', function () {
            const wordsEntered = wordWidget();

            wordsEntered.add('The cow jumped over the moon to see the starships above the highest skies');

            let wordsChecked = wordsEntered.checkWord(['jumped', 'starships','above','highest','skies'])

            assert.equal(wordsChecked, wordsEntered.checkWord(['jumped', 'starships','above','highest','skies'])
            );
        });
        it('when sentence entered should return only the longest word in sentence', function () {
            const wordsEntered = wordWidget();

            wordsEntered.add('The cow jumped over the moon to see the starships above the highest skies');

            wordsEntered.checkWord(['jumped', 'starships','above','highest','skies'])
            
            let theMostlongestWord = wordsEntered.longestWord(['starships'])

            assert.deepEqual(theMostlongestWord, wordsEntered.longestWord([ 'starships'])
            );
        });
    
    });
    describe('Return the length of sentence when entered by user', function () {
        it('when sentence entered should return the number of words', function () {
            const wordsEntered = wordWidget();
            
            wordsEntered.add(['The cow jumped over the moon to see the starships']);

            assert.equal(10, 10);
        });
    });
    
});