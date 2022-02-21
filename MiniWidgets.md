# Mini Widgets

Here are some Mini Widgets we will use to refresh your DOM web development skills.
## Guessing game

Create a guessing game that gives users the chance to guess a number between 1 and 100.

If the guess is to low or too high show the appropriate message of:
* `Your guess is to high`,
* `You guess is to low`,

If the correct number is guessed show this message: `Correct, the secret number is ${number}`

If the widget is refreshed a new secret number is created.

Create a random secret number using `let randomNumber = Math.ceil((Math.random() * 100))`

Possible approaches:

* `innerHTML` with String literal
* `createElement` with `appendChild`
* `innerHTML` with `HandlebarsJS`.

## Country counter

Given arrays of Country names and flags create a web page that show a list of countries with their flags. 

```js
const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

```

Find flags here: https://emojipedia.org/flags/

Next: 
* add the ability to add more countries,
* sort by countries alphabetically by name,
* store the data in localStorage,
* add search support.

