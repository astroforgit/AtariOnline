# ATARI ONLINE

Web-based platform for running Atari 8-bit computer emulators and content directly in the browser.

## Features

- 🎮 **Multiple Atari Emulators** - MAME and custom JavaScript implementations
- 💻 **Online Development Environments** - Atari BASIC, Logo, FastBasic
- ⚙️ **Live Assembler Editors** - Atari Assembler, MAC/65 with DDT
- 🎯 **Games and Demos** - Classic Atari games and demos
- 📚 **Integration with AtariProjects.org** - Live tutorials
- 📁 **File Upload Support** - Upload your own game files without CORS issues!

## Quick Start

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

This will start Vite dev server at `http://localhost:3000`

To run directly with the games page:

```bash
npm run dev:games
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
AtariOnline/
├── games/           # Game emulator pages
├── basic/           # Atari BASIC environments
├── logo/            # Logo programming environments
├── assembler/       # Atari Assembler Editor
├── mac65/           # MAC/65 Assembler with DDT
├── fastbasic/       # FastBasic environment
├── demos/           # Atari demos
├── js/              # JavaScript libraries
│   ├── emularity/   # Emularity framework
│   └── emulators/   # MAME emulator files
├── emulators/       # Emulator binaries
├── roms/            # ROM files
└── img/             # Images and assets
```

## Usage

### Playing Games

1. Navigate to the games page
2. Upload your own cartridge (.car, .rom) or disk (.atr, .xfd) files
3. Click "Load Emulator"
4. Enjoy!

**Controls:**
- F1 = HELP
- F2 = START
- F3 = SELECT
- F4 = OPTION
- Arrow Keys = Joystick
- Left ALT = Fire

### Using BASIC

Navigate to the BASIC page and start coding in Atari BASIC directly in your browser!

### Assembler Programming

Use the Atari Assembler Editor or MAC/65 for assembly language programming.

## Technical Details

- **MAME Emulator** - Compiled to WebAssembly via Emscripten
- **Emularity Framework** - Browser-based emulation framework
- **File System** - IndexedDB for persistence
- **Audio** - SAP recording capabilities
- **Build Tool** - Vite for modern development experience

## Advanced: Adding ATR Images to Emulator

See `buildimg.sh` in each directory.

1. Modify `buildimg.sh` adding the required ATR to be embedded in `A8E.data` file
2. Modify the following lines on `A8E.js` based on the offset displayed by `buildimg.sh` script:

```javascript
// line 247 approx.
new DataRequest(7310944, 7444080, 0, 0).open('GET', '/data/logospa.atr');

// line 387 approx.
DataRequest.prototype.requests["/data/logospa.atr"].onload();
```

## License

GPL-3.0

## Credits

- MAME Emulator Team
- Emularity Framework
- AtariProjects.org for tutorials
- 8-bit and more for assembler tutorials
