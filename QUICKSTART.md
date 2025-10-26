# Quick Start Guide - ATARI ONLINE

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Development Server

### Option 1: Main Index Page
```bash
npm run dev
```
Opens the main landing page at `http://localhost:3000`

### Option 2: Specific Pages

Run any specific page directly:

```bash
# Games page (with file upload feature)
npm run dev:games

# Atari BASIC
npm run dev:basic

# Atari Assembler Editor
npm run dev:assembler

# FastBasic
npm run dev:fastbasic

# Logo (English)
npm run dev:logo

# MAC/65 Assembler with DDT
npm run dev:mac65

# Demos
npm run dev:demos
```

## Using the Games Page with File Upload & Library

1. Run the games page:
   ```bash
   npm run dev:games
   ```

2. The page will open in your browser at `http://localhost:3000/games/games-mame.html`

### Option 1: Upload and Play

3. **Upload your game files:**
   - Click "Choose File" for Cartridge (.car, .rom files)
   - OR Click "Choose File" for Disk (.atr, .xfd files)
   - OR Upload both!

4. Click "Load Emulator" button

5. The file is automatically saved to your library AND loaded in the emulator

6. Play your game!

### Option 2: Play from Library

3. **Browse your saved games** in the "Saved Games Library" tree

4. **Double-click** any game file to load it instantly

5. The page reloads and your game starts automatically!

### Managing Your Library

- **Click** a file to see options: save, load, delete
- **Create folders** to organize your games
- **Download** games from library to your computer
- All files are stored in your browser's IndexedDB (persistent storage)

### Controls

- **F1** = HELP
- **F2** = START
- **F3** = SELECT
- **F4** = OPTION
- **Arrow Keys** = Joystick movement
- **Left ALT** = Fire button
- **F7** = Break
- **Left ALT** (on symbols) = Inverse
- **CTRL + Symbols** = Arrows

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### CORS Issues
The file upload feature was specifically designed to avoid CORS issues. If you're still experiencing problems:
- Make sure you're uploading files from your local computer
- Check that the file extensions are correct (.car, .rom, .atr, .xfd)
- Try refreshing the page

### Emulator Not Loading
- Check browser console for errors (F12)
- Ensure all required files are present in the project
- Verify that the WASM files are accessible

### Port Already in Use
If port 3000 is already in use, Vite will automatically try the next available port (3001, 3002, etc.)

## File Formats Supported

### Cartridge Files
- `.car` - Atari cartridge format
- `.rom` - ROM image
- `.bin` - Binary file

### Disk Files
- `.atr` - Atari disk image
- `.xfd` - Atari disk image (alternative format)
- `.atx` - Protected disk image

## Tips

1. **First Time Users**: Try the default Joust game that loads automatically
2. **File Size**: Larger files may take longer to load
3. **Browser Compatibility**: Works best in modern browsers (Chrome, Firefox, Edge, Safari)
4. **Performance**: For best performance, use a desktop browser

## Need Help?

- Check the main README.md for more detailed information
- Visit the original project documentation
- Check browser console for error messages

## What's Next?

- Explore other emulator pages (BASIC, Logo, Assembler)
- Try the live tutorials from AtariProjects.org
- Upload your own Atari programs and games
- Experiment with assembly language programming

Enjoy your Atari computing experience! 🎮

