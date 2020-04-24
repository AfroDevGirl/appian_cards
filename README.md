# Appian Deck of Cards

This repo contains a solution for the Deck of Cards prompt, authored by Alexis Moody. This solution expands the original functionality of the prompt by creating a simple War like game for two players to interact with the deck of cards. I had a blast putting together this small node application and I hope you like what I've written! 

The rules of the game are pretty simple. Both players start with 5 cards and in each round either player can win or they can draw. When a player loses or draws in a round they have to pick up a new card. The first player to get rid of all of their cards wins!


## Installation

This application is pretty simple but does require Node(8+) and an install of the node_modules if you would like to run the tests.
Once node is installed run:

`npm install`

## Usage

A few scripts have been provided to interact with the application. You can do one of the following to run the game:

`npm run start`

`node main.js`

Both commands will print the results of the game.

## Tests

Tests have been written using Jest. To run the tests you can enter one of two commands

`npm run test`: Runs all of the tests and then exits

`npm run test:watch`: Runs all of the tests from changed files and continues running until instructed to quit

