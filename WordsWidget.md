# Words widget

Create a widget that allows a user to enter a sentence of 5 or more words. When the user clicks a button the sentence should be analyzed.

The widget: 

* should **highlight** any word that is **longer than 4 characters**,
* and show **how many words** are in the sentence.

Once the above functionality is working. Deploy your widget to GitHub pages.

Select a decent color sceme for your widget from [coolors](https://coolors.co/).

## Hide & highlight

There should be an option to hide all words shorter than 5 characters. Use a checkbox.

Highlight the longest word in the sentence if there is no other word in the sentence that got the same length.

## Keep track

Keep track of the last 5 sentences entered and show them on the screen. If you click on any of these sentences details for it should be shown as if it was the sentence that was typed in.

## Adding configuration & storage

Make the word limit a variable number using a slider/text element. If the world limit is 0 no words should be highlighted and nothing should be shown for the entered sentence.

Store the last 5 sentences in `localStorage` - reload data after refreshing the screen.
