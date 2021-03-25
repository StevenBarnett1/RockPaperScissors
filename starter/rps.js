const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let wins = 0;
let losses = 0;
let ties = 0;

console.log("Welcome to Rock/Paper/Scissors\n");
console.log("  Type 'r' for Rock");
console.log("  Type 'p' for Paper");
console.log("  Type 's' for Scissors");
console.log("  Type 'q' to quit\n");

function processCommand() {

    console.log(`${wins} - ${losses} - ${ties}`);

    rl.question('> ', (cmd) => {
        cmd = cmd.toLowerCase();

        // Calculate computer's move
        let cpu;
        const randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0) cpu = "r";
        if (randomNum === 1) cpu = "p";
        if (randomNum === 2) cpu = "s";

        console.log(`You pick ${cmd}, computer picks ${cpu}.`)

        if (cmd === 'h') {

            console.log("Help:\n");
            console.log("  Type 'r' for Rock");
            console.log("  Type 'p' for Paper");
            console.log("  Type 's' for Scissors");
            console.log("  Type 'q' to quit\n");

        } else if (cmd === 'q') {
            rl.close();
            return;

        } else if (cmd === 'r') {
            if (cpu === 'r') {
                console.log("You tie.\n");
                ties++;
            } else if (cpu === 'p') {
                console.log("You lose...\n");
                losses++;
            } else if (cpu === 's') {
                console.log("You win!\n");
                wins++;
            }

        } else if (cmd === 'p') {
            if (cpu === 'p') {
                console.log("You tie.\n");
                ties++;
            } else if (cpu === 's') {
                console.log("You lose...\n");
                losses++;
            } else if (cpu === 'r') {
                console.log("You win!\n");
                wins++;
            }

        } else if (cmd === 's') {
            if (cpu === 's') {
                console.log("You tie.\n");
                ties++;
            } else if (cpu === 'r') {
                console.log("You lose...\n");
                losses++;
            } else if (cpu === 'p') {
                console.log("You win!\n");
                wins++;
            }

        } else {
            console.log("Invalid command.\n");
            console.log("  Type 'r' for Rock");
            console.log("  Type 'p' for Paper");
            console.log("  Type 's' for Scissors");
            console.log("  Type 'q' to quit\n");
        }

        processCommand();
    });
}

processCommand();

