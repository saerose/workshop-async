# Async workshop 

## Getting started

1. Fork this repo so you can push your changes when you finish
2. Make sure you have installed node `v7.8.0` or newer
3. Perform a `npm i` in the project folder.
4. Code

## Exercises

Edit `async.js`:

You'll find several empty functions along with a `main` and a `randomNumber`. You can complete this exercise by running this code with node (or in your editor directly). You're goal is to log a random number provided by the `randomNumber` function in the `main` function. You're only allowed to call `console.log` in the `main` function.

1. Get the random number after a second calling `timeoutRandomNumber`.

2. Do the same but now calling `promiseRandomNumber`, which is meant to wrap the first function with a promise.

3. Use `asyncRandonNumber` which has to use `promiseRandomNumber` but using the keywords `async/await`.
