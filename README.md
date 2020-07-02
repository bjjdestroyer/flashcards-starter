# FlashCards Project Mod 2

### Abstract
In this project, I created a game playable through the command line. This game showed a "card" with a question and 3 possible answers. The user chooses their answer and the game does not move on until the correct answer is chosen.

### Game in Use

### Next Steps
- Add in functionality that allows the user to use more than one data set to create cards

### Setup and Installation
1. Clone this repository and install on your computer through the command line
  - Open your terminal and find the directory you want to install the game in.
  - Copy and paste in:
    git clone git@github.com:bjjdestroyer/flashcards-starter.git
  - Move into the clone directory and install
    npm install
2. Once the game is installed, you can run the tests to see if they pass
  - Type in npm test in the terminal
  - In Round.js, the final method needs to change the console.log to a return and process.exit() needs to be commented out to pass the test and move one to the next testing suite.
3. To run the game itself
  - In the terminal, type in 
    node index.js
  - The game will start and you need to either type in the number of your answer choice or use your arrow keys to choose. Once chosen, press enter, and you've started the game!

