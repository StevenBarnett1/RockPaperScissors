const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let wins = 0;
let losses = 0;
let ties = 0;

// console.log("Welcome to Rock/Paper/Scissors\n");
// console.log("  Type 'r' for Rock");
// console.log("  Type 'p' for Paper");
// console.log("  Type 's' for Scissors");
// console.log("  Type 'q' to quit\n");

function processCommand() {

    console.log(`${wins} - ${losses} - ${ties}`);

    rl.question('Type r, p, s, l, or sp (h for help, q for quit): ', (cmd) => {
        cmd = cmd.toLowerCase();

        // Calculate computer's move
        let cpu;
        const randomNum = Math.floor(Math.random() * 5);
        if (randomNum === 0) cpu = "r";
        if (randomNum === 1) cpu = "p";
        if (randomNum === 2) cpu = "s";
        if (randomNum === 3) cpu = "l";
        if (randomNum === 4) cpu = "sp";

        if(getScore(cmd,cpu)===-1){
            losses++
            console.log("You Lose")
        }
        else if(getScore(cmd,cpu)===0){
            ties++
            console.log("You Tied")
        }
        else {
            console.log("You Win")
            wins++
        }

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
        }

        processCommand();
    });


    let getScore = (playerSign,cpuSign) => {

        let signs = {
            "r":{
                "p":-1,
                "s":1,
                "r":0,
                "sp":-1,
                "l":1
            },
            "p": {
                "p": 0,
                "s": -1,
                "r": 1,
                "sp":1,
                "l":-1
            },
            "s": {
                "p": 1,
                "s": 0,
                "r": -1,
                "sp":-1,
                "l":1
            },
            "sp": {
                "p": -1,
                "s": 1,
                "r": 1,
                "sp":0,
                "l":-1
            },
            "l": {
                "p": 1,
                "s": -1,
                "r": -1,
                "sp":1,
                "l":0
            }
        }
        return signs[playerSign][cpuSign]
    }
}

processCommand();
