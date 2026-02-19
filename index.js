const chalk = require('chalk');
const _progress = require('cli-progress');
const os = require('os');

console.clear();
console.log(chalk.red.bold(`
╔════════════════════════════════════════════╗
║       SYSTEM OVERRIDE : LEVEL 7            ║
║       AUTHORIZING KERNEL ACCESS...         ║
╚════════════════════════════════════════════╝
`));

// ২. 
let count = 60;
const countdown = setInterval(() => {
    process.stdout.write(`\r${chalk.yellow.bold("[!]")} ${chalk.white("SYSTEM IS UNLOCKING 👉: ")} ${chalk.red.bold(count)} ${chalk.white("সেকেন্ড বাকি...")}`);
    count--;

    if (count < 0) {
        clearInterval(countdown);
        console.log("\n" + chalk.green.bold("\n[+] ACCESS GRANTED 🥰! SYSTEM CHAKING 🌐..."));
        startHackerTool();
    }
}, 1000);

// ৩.  (Loading Animation)
const progressBar = new _progress.SingleBar({
    format: chalk.cyan('PROCESSING: ') + chalk.green('{bar}') + ' | {percentage}% | {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

async function startHackerTool() {
    console.log("");
    progressBar.start(100, 0);
    let value = 0;

    const timer = setInterval(() => {
        value += 5;
        progressBar.update(value);

        if (value >= 100) {
            clearInterval(timer);
            progressBar.stop();
            showDetails();
        }
    }, 100);
}

// ৪. All the details of the phone 🌐🌍
function showDetails() {
    console.log("\n" + chalk.blue.bold("--- Target Device Lock ⚙️ ---"));
    
    const details = [
        `> IP ADDRESS : ${Math.floor(Math.random() * 255)}.168.1.${Math.floor(Math.random() * 255)}`,
        `> PROCESS EXECUTIVE : ${os.arch()}`,
        `> PLATFORM : ${os.platform()}`,
        `> SYSTEM RAM : ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        `> BATTERY STATUS : ${chalk.bgGreen.black(" CHARGING ")}`,
        `> STATUS : ${chalk.bgRed.white(" ACCORD SUCCESS ")}`
    ];

    let i = 0;
    const detailInterval = setInterval(() => {
        if (i < details.length) {
            console.log(chalk.green(details[i]));
            i++;
        } else {
            clearInterval(detailInterval);
            liveNetworkMonitor();
        }
    }, 500);
}


function liveNetworkMonitor() {
    const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    let x = 0;
    console.log("\n" + chalk.magenta.bold("--- LIVE NET WORTH MONITOR ---"));
    
    setInterval(() => {
        let speed = (Math.random() * 25).toFixed(2);
        let packets = Math.floor(Math.random() * 5000);
        process.stdout.write(
            `\r${chalk.cyan(frames[x])}  ${chalk.white("SPEED:")} ${chalk.green(speed + " Mbps")} | ${chalk.white("PACKAGE:")} ${chalk.yellow(packets + " Pkts/s")}`
        );
        x = (x + 1) % frames.length;
    }, 100);
}
