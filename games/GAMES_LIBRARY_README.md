# Games Library Feature

## Overview

The games page now includes a **persistent games library** that stores your uploaded games in the browser's IndexedDB. This means your games are saved locally and you can easily reload them with a double-click!

## Features

### 📁 File Tree Browser
- Browse all your saved games in a tree structure
- Organized view with folders support
- Visual indication of file types

### 💾 Persistent Storage
- Games are saved to IndexedDB (browser database)
- Files persist across browser sessions
- No need to re-upload the same game multiple times

### 🎮 Easy Loading
- **Double-click** any game file to load it instantly
- No need to browse your computer each time
- Quick access to your favorite games

### 📤 File Management
- **Upload**: Add new games to your library
- **Download**: Save games from library to your computer
- **Delete**: Remove games you no longer need
- **Create Folders**: Organize your games

## How to Use

### Adding Games to Library

1. **Upload a file** using the upload section at the top:
   - Click "Choose File" for Cartridge or Disk
   - Select your game file
   - Click "Load Emulator"
   - The file is automatically saved to your library AND loaded in the emulator

2. **Or use the tree "load" button**:
   - Click on a folder in the tree
   - Click the "load" button that appears
   - Select a file from your computer
   - The file is saved to that folder

### Playing Games from Library

1. **Find your game** in the "Saved Games Library" tree
2. **Double-click** the game name
3. The page reloads and your game starts automatically!

### Managing Your Library

**When you click on a file**, you'll see these options:

- **save**: Download the file to your computer
- **load**: Upload a new file (replaces the current one)
- **del**: Delete the file from library

**When you click on a folder**, you'll see:

- **load**: Upload a file to this folder
- **mkdir**: Create a new subfolder
- **del**: Delete the folder (must be empty)

## File Types Supported

### Cartridge Files
- `.car` - Atari cartridge format
- `.rom` - ROM image
- `.bin` - Binary file

### Disk Files
- `.atr` - Atari disk image
- `.xfd` - Atari disk image (alternative format)
- `.atx` - Protected disk image

## Technical Details

### Storage Location
- Files are stored in **IndexedDB** under the "Games" root
- Each browser has its own separate storage
- Storage is persistent until you clear browser data

### Storage Limits
- IndexedDB typically allows 50MB+ per domain
- Exact limit depends on your browser and available disk space
- Most Atari games are small (8KB-128KB), so you can store hundreds

### Browser Compatibility
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Edge
- ✅ Safari (iOS 10+)

### How It Works

1. **Upload Flow**:
   ```
   Select File → Read to Memory → Save to IndexedDB → Save to sessionStorage → Reload Page → Load from sessionStorage → Start Emulator
   ```

2. **Double-Click Flow**:
   ```
   Double-Click → Read from IndexedDB → Save to sessionStorage → Reload Page → Load from sessionStorage → Start Emulator
   ```

3. **Why Reload?**:
   - The MAME emulator can't easily swap games while running
   - Reloading ensures a clean emulator state
   - sessionStorage preserves the file data across the reload

## Tips & Tricks

### Organizing Your Games

Create folders to organize by:
- **Genre**: Action, Puzzle, Adventure, etc.
- **Year**: 1980s, 1990s, etc.
- **Publisher**: Atari, Activision, etc.
- **Favorites**: Your most-played games

### Backing Up Your Library

1. Click on a file in the tree
2. Click "save" to download it
3. Store the downloaded files in a safe location
4. Re-upload them later if needed

### Sharing Games

1. Download a game from your library (click file → "save")
2. Share the file with others
3. They can upload it to their library

## Troubleshooting

### Tree doesn't show up
- Make sure JavaScript is enabled
- Check browser console for errors (F12)
- Try refreshing the page

### Files not saving
- Check if you have enough disk space
- Make sure you're not in private/incognito mode (some browsers limit IndexedDB)
- Check browser console for errors

### Double-click doesn't work
- Make sure you're double-clicking a file, not a folder
- Check that the file has a valid extension (.car, .rom, .atr, etc.)
- Look for errors in browser console

### Library disappeared
- Did you clear browser data/cache?
- Are you using the same browser and profile?
- IndexedDB is per-browser, per-profile

### File won't load in emulator
- Check that the file format is correct
- Try re-uploading the file
- Some ROM dumps may be incompatible

## Privacy & Security

- All files are stored **locally** in your browser
- Nothing is uploaded to any server
- Your games library is private to your browser
- Clearing browser data will delete your library

## Future Enhancements

Possible future features:
- Import/Export entire library as ZIP
- Search functionality
- File metadata (description, screenshots)
- Play count and last played date
- Favorites/ratings system
- Cloud sync (optional)

## Credits

This feature is inspired by the file tree implementation in the Bevy emulator, using:
- **Fancytree** - jQuery tree plugin
- **BrowserFS** - Browser filesystem abstraction
- **IndexedDB** - Browser database API

Enjoy your games library! 🎮

