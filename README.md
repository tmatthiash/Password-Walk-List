# Keyboard-Walk-Block
## About

Dead simple way to check if a string uses a known keyboard 'walk' pattern ie: '1qaz', 'qwer' etc.  Based off of the following list https://github.com/ndrix/keywalker/blob/master/sample_pws

Only looks for things in 4 character sets, ie: 'qaz' won't flag as a known pattern, '1qaz' will'.

## Installation 

`npm install --save keyboardwalkblock`

## Usage 

Import the function that checks the password (or whatever string):


```js

    import passwordMatchFound from 'keyboardwalkblock'

```


The function will return true or false, true if a pattern IS found in the password, false if the password is clean.

```js

    const password1 = '1qazstuff';
    console.log(passwordMatchFound(password1)  // Returns true

    const password2 = 'password';
    console.log(passwordMatchFound(password2)  // Returns false

```
