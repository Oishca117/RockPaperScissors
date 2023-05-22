function getComputerChoice{
    const options = ['rock', 'paper', 'scissors'];

    const randomOption = Math.floor(Math.random() * options.length);

    console.log(randomOption, options[randomOption]);
}