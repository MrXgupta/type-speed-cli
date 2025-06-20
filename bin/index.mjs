#!/usr/bin/env node

import readline from 'readline';
import chalk from 'chalk';
import boxen from 'boxen';
import figlet from 'figlet';
import wrap from 'word-wrap';
import process from 'node:process';

const sentences = [
  "Typing is a skill that improves with daily practice.",
  "A fast typist can complete tasks more efficiently.",
  "Accuracy matters more than speed when typing professionally.",
  "Programming requires both logic and clarity of thought.",
  "Consistent habits build muscle memory in your fingers.",
  "The keyboard layout affects your overall typing experience.",
  "Use all fingers instead of hunting and pecking.",
  "Avoid looking at the keyboard while typing.",
  "Posture and hand position impact long-term comfort.",
  "Use short typing sessions to build endurance.",
  "Fast typists often start slow and improve gradually.",
  "Set goals to improve typing speed weekly.",
  "Correcting mistakes slows you down more than typing carefully.",
  "Practice with real-world content to boost performance.",
  "Use online tools to benchmark your speed and accuracy.",
  "The space bar is the most frequently used key.",
  "Try not to use backspace unless absolutely needed.",
  "Look ahead as you type to prepare for the next word.",
  "Maintain a steady rhythm while typing.",
  "Typing tests simulate real writing scenarios.",
  "Challenge yourself with different types of content.",
  "Mistakes help you learn and adjust your habits.",
  "Using typing games can make learning fun.",
  "Switching keyboards might affect your accuracy at first.",
  "A good typist is also a good thinker.",
  "Keep your wrists relaxed and elevated.",
  "Take breaks during long typing sessions.",
  "Speed isn't everything; control and flow matter too.",
  "Learn shortcuts to save time in your daily workflow.",
  "Use a comfortable keyboard for long typing sessions.",
  "Avoid distractions to stay focused while typing.",
  "Create typing drills based on your daily writing tasks.",
  "Review your results to identify patterns in mistakes.",
  "Keep your nails trimmed to avoid miskeys.",
  "Try to type without making a sound to practice light touch.",
  "Don't rush — let accuracy drive speed naturally.",
  "Keyboard lighting isn't necessary but can help at night.",
  "Memorizing word patterns can boost your muscle memory.",
  "Try alternating between typing and dictation for balance.",
  "Listen to instrumental music while typing to stay in flow.",
  "Switch between devices to improve adaptive typing skills.",
  "Track your WPM weekly to see growth.",
  "Typing quotes or lyrics can add fun to your practice.",
  "Use tab and enter keys efficiently when formatting text.",
  "Coding requires a different typing rhythm than writing essays.",
  "Think one phrase ahead while typing.",
  "Typing is like playing an instrument — rhythm matters.",
  "The fewer corrections you make, the faster you become.",
  "Great writers are often great typists too.",
  "Backspace is helpful, but don’t depend on it too much."
];

const shuffled = sentences.sort(() => 0.5 - Math.random());
const paragraph = shuffled.slice(0, 10).join(' ');

let userInput = '';
let startTime = null;
let interval;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

function calculateStats() {
  const elapsed = (Date.now() - startTime) / 1000;
  const correct = userInput.split('').filter((ch, i) => ch === paragraph[i]).length;
  const wpm = ((userInput.length / 5) / elapsed) * 60;
  const accuracy = (correct / userInput.length) * 100;
  return { elapsed, wpm, accuracy, correct };
}

function renderUI() {
  console.clear();

  console.log(
    boxen(figlet.textSync('TypeTest CLI', { horizontalLayout: 'default' }), {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      align: 'center'
    })
  );

  console.log(
    boxen(wrap(paragraph, { width: 70 }), {
      padding: 1,
      borderStyle: 'round',
      title: 'Typing Challenge (Press Enter to Finish)',
      titleAlignment: 'center',
      margin: 1
    })
  );

  console.log(chalk.cyan("\nStart typing below:\n"));
  console.log(boxen(userInput || chalk.gray("(waiting...)"), {
    padding: 1,
    borderStyle: 'single',
    align: 'left',
    title: 'Your Input'
  }));

  if (startTime) {
    const { elapsed, wpm, accuracy } = calculateStats();
    console.log(
      boxen(`🕒 Time: ${elapsed.toFixed(1)}s  ⌨️  WPM: ${Math.round(wpm)}  ✅ Accuracy: ${isNaN(accuracy) ? 0 : accuracy.toFixed(1)}%`, {
        title: 'Live Stats',
        padding: 1,
        borderStyle: 'classic',
        align: 'center',
        margin: 1
      })
    );
  }

  console.log();
}

function endTest() {
  clearInterval(interval);
  const { elapsed, wpm, accuracy, correct } = calculateStats();
  console.clear();
  console.log(
    boxen(`\n🕒 Time: ${elapsed.toFixed(2)}s\n⌨️  WPM: ${Math.round(wpm)}\n✅ Accuracy: ${accuracy.toFixed(2)}%\n❌ Mistakes: ${userInput.length - correct}`, {
      title: 'Final Stats',
      padding: 1,
      borderStyle: 'classic',
      margin: 1
    })
  );
  console.log(boxen(chalk.greenBright('Made by Alok Gupta'), {
    padding: 1,
    align: 'center',
    borderStyle: 'bold'
  }));
  process.exit(0);
}

process.stdin.on('keypress', (str, key) => {
  if (!startTime) {
    startTime = Date.now();
    interval = setInterval(() => {
      renderUI();
    }, 1000);
  }

  if (key.name === 'return') {
    endTest();
  }

  if (key.name === 'backspace') {
    userInput = userInput.slice(0, -1);
  } else if (!key.ctrl && !key.meta && key.sequence.length === 1) {
    userInput += str;
  }

  renderUI();
});

renderUI();
