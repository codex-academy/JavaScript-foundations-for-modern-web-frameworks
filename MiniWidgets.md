# Mini Widgets

Here are some Mini Widgets we will use to refresh your DOM web development skills.
## Guessing game

Create a guessing game that gives users the chance to guess a number between 1 and 100.

If the guess is too low show : `Your guess is too low`
Or if too high show the message `Your guess is too high`
If the correct number is guessed show this message: `Correct, the secret number is ${number}`.

A new number should be generated 5 seconds after a successfull guess.

Show a message stating: `New game started!` I should stay on the screen for 3 seconds.

If the widget is refreshed a new secret number is created.

Create a random secret number using `let randomNumber = Math.ceil((Math.random() * 100))`

## Working with dynamic data

### Country flag list

Given arrays of Country names and flags create a web page that show a list of countries with their flags. 

```js
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

```

Find the flag emoji's here: https://emojipedia.org/flags/

Next steps: 
* add the ability to add more countries,
	* validate input including the flags - https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
* sort by countries alphabetically by name,
* store the data in localStorage,
* add search support.


### Fruit list

Given arrays of Fruit names and emoji create a web page that show a list of fruits with their emojis.


> Note: Emoji flags are noy supported on **Windows**, which displays two-letter country codes instead of emoji flag images.
If you are using ***Windows***, use the fruits list instead.

```
const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];

const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

```

Find the flag emoji's here: https://emojipedia.org/food-drink/

Next steps: 
* add the ability to add more fruits,
	* validate input including the fruits - https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
* sort by fruits alphabetically by name,
* store the data in localStorage,
* add search support.

#### Possible approaches:

* `innerHTML` with a Template String and the `.map` function.
* `createElement` with `appendChild`.
* `innerHTML` with `HandlebarsJS`.

Deploy your app to GitHub. Once deployed and you shared your URL with the mentors look at the next steps below.


