function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
console.log(getComputerChoice());

