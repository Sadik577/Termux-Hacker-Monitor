const chalk = require('chalk');
const _progress = require('cli-progress');
const os = require('os');

// ১. স্ক্রিন ক্লিয়ার এবং হ্যাকার হেডার
console.clear();
console.log(chalk.red.bold(`
╔════════════════════════════════════════════╗
║       SYSTEM OVERRIDE : LEVEL 7            ║
║       AUTHORIZING KERNEL ACCESS...         ║
╚════════════════════════════════════════════╝
`));

// ২. ১০ সেকেন্ডের কাউন্টডাউন ফাংশন
let count = 10;
const countdown = setInterval(() => {
    process.stdout.write(`\r${chalk.yellow.bold("[!]")} ${chalk.white("সিস্টেম আনলক হচ্ছে: ")} ${chalk.red.bold(count)} ${chalk.white("সেকেন্ড বাকি...")}`);
    count--;

    if (count < 0) {
        clearInterval(countdown);
        console.log("\n" + chalk.green.bold("\n[+] এক্সেস গ্রান্টেড! পেলোড ইনজেক্ট করা হচ্ছে..."));
        startHackerTool();
    }
}, 1000);

// ৩. প্রগ্রেস বার (Loading Animation)
const progressBar = new _progress.SingleBar({
    format: chalk.cyan('প্রসেসিং: ') + chalk.green('{bar}') + ' | {percentage}% | {value}/{total}',
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

// ৪. ফোনের ডিটেইলস দেখানো
function showDetails() {
    console.log("\n" + chalk.blue.bold("--- টার্গেট ডিভাইস লগ ---"));
    
    const details = [
        `> আইপি অ্যাড্রেস : ${Math.floor(Math.random() * 255)}.168.1.${Math.floor(Math.random() * 255)}`,
        `> প্রসেসর আর্কিটেকচার : ${os.arch()}`,
        `> প্ল্যাটফর্ম : ${os.platform()}`,
        `> সিস্টেম র‍্যাম : ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        `> ব্যাটারি স্ট্যাটাস : ${chalk.bgGreen.black(" চার্জিং ")}`,
        `> স্ট্যাটাস : ${chalk.bgRed.white(" হ্যাকড সফল ")}`
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

// ৫. লাইভ নেটওয়ার্ক অ্যানিমেশন
function liveNetworkMonitor() {
    const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    let x = 0;
    console.log("\n" + chalk.magenta.bold("--- লাইভ নেটওয়ার্ক মনিটর ---"));
    
    setInterval(() => {
        let speed = (Math.random() * 25).toFixed(2);
        let packets = Math.floor(Math.random() * 5000);
        process.stdout.write(
            `\r${chalk.cyan(frames[x])}  ${chalk.white("স্পিড:")} ${chalk.green(speed + " Mbps")} | ${chalk.white("প্যাকেট:")} ${chalk.yellow(packets + " Pkts/s")}`
        );
        x = (x + 1) % frames.length;
    }, 100);
}
