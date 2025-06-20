# ⌨️ type-speed-cli

[![npm version](https://img.shields.io/npm/v/type-speed-cli.svg)](https://www.npmjs.com/package/type-speed-cli)
[![license](https://img.shields.io/npm/l/type-speed-cli.svg)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/MrXgupta/type-speed-cli?style=social)](https://github.com/MrXgupta/type-speed-cli)

A blazing fast, minimal, and fun typing speed test right in your terminal!

> Measure your typing speed (WPM), accuracy, and test your reflexes like a pro — without ever leaving your terminal.

## ✨ Features

- ⚡ Instant typing test in CLI  
- 🧠 Random word generator (or custom paragraphs)  
- ⏱️ Real-time WPM & accuracy calculation  
- 📊 Performance summary on completion  
- 🎨 Colorful, clean terminal UI  
- 🛠️ Cross-platform support (macOS/Linux/Windows)

## 📦 Installation

### From npm

```bash
npm install -g type-speed-cli
```

### From GitHub

```bash
git clone https://github.com/your-username/type-speed-cli.git
cd type-speed-cli
npm install
npm link
```

## 🚀 Usage

```bash
typetest
```

### Optional Flags

```bash
typetest --words 50       # Number of words (default: 30)
typetest --time 60        # Duration in seconds (alternative mode)
typetest --paragraph      # Type from a real paragraph instead of word list
typetest --file input.txt # Use a custom input file
```


## 🧩 Sample Output

```
Typing Test Complete!

Words Per Minute: 78 WPM
Accuracy:         94.3%
Time Taken:       60s
Mistakes:         4
```

## 🛠️ Built With

- Node.js  
- Inquirer / Readline  
- Chalk (for terminal colors)  
- Ora (for loading animations)  
- Figlet (for ASCII banners)

## 🤝 Contributing

Pull requests are welcome! If you have ideas for enhancements or new features, feel free to open an issue or submit a PR.

```bash
git clone https://github.com/your-username/type-speed-cli
npm install
npm run dev
```

## 📄 License

MIT License © [MrXgupta](https://github.com/MrXgupta)

## 📦 Publish on npm

```bash
npm login
npm publish
```

## 🌟 Show Your Support

If you like this CLI, star the repo and share it with others!

[⭐ Star on GitHub](https://github.com/MrXgupta/type-speed-cli)
