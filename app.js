function getComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)];
}
const options = ['rock', 'paper', 'scissors'];
console.log(getComputerChoice(options));