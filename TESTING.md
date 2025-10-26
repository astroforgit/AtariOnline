# Testing the File Upload Feature

## What Was Fixed

The file upload feature had several issues that have been resolved:

1. **Variable Scoping Issue** - Fixed the problem where `cartData` and `diskData` weren't properly accessible
2. **Better Error Handling** - Added try-catch blocks and detailed console logging
3. **UI Improvements** - Added visual feedback when files are selected
4. **Button State Management** - The "Load Emulator" button is now disabled until a file is selected

## How to Test

### Step 1: Open the Games Page

The page should already be open in your browser at:
```
http://localhost:3000/games/games-mame.html
```

If not, run:
```bash
npm run dev:games
```

### Step 2: Open Browser Console

Press **F12** to open the browser developer tools and go to the **Console** tab. You should see:
```
ATARI ONLINE - Games MAME page loaded
File upload feature enabled
```

### Step 3: Select a File

1. Look for the "Upload Game Files" section at the top of the page
2. Click on "Choose File" for either:
   - **Cartridge** (.car, .rom, .bin files)
   - **Disk** (.atr, .xfd, .atx files)
3. Select a file from your filesystem

**Expected Behavior:**
- The "Load Emulator" button should become enabled (green)
- The status area should show: "Selected: [filename]"
- Console should show: "Files selected: [...]"

### Step 4: Load the Emulator

1. Click the **"Load Emulator"** button
2. Watch the status messages

**Expected Status Messages:**
1. "Reading files..." (blue text)
2. "Loading emulator..." (blue text)
3. **Page will reload automatically**

**Console Messages to Look For (before reload):**
```
Cartridge file loaded: [filename] Size: [bytes]
Starting emulator with files: {...}
Stored cart data in sessionStorage
Reloading page to start emulator with uploaded files...
```

**Console Messages After Reload:**
```
ATARI ONLINE - Games MAME page loaded
File upload feature enabled
Found uploaded files in sessionStorage
Loading uploaded cartridge: [filename] Size: [bytes]
Auto-load configuration: {...}
```

### Step 5: Verify Emulator Loads

After the page reloads, the MAME emulator should start loading:
- You'll see the MAME boot screen
- The Atari 8-bit computer will boot
- Your uploaded game/disk should load automatically

## Troubleshooting

### Issue: "Nothing happens when I select a file"

**Check:**
1. Open browser console (F12) - are there any errors?
2. Is the "Load Emulator" button enabled (green)?
3. Does the status show your selected file?

**Solution:**
- Make sure you're selecting a valid file type (.car, .rom, .bin, .atr, .xfd, .atx)
- Check that the file isn't corrupted
- Try a different file

### Issue: "Load Emulator button stays disabled"

**Check:**
1. Did you actually select a file?
2. Check browser console for errors

**Solution:**
- Refresh the page (Ctrl+R or Cmd+R)
- Try selecting the file again
- Make sure JavaScript is enabled in your browser

### Issue: "Error reading files"

**Check Console for:**
```
Error reading cartridge file: [error details]
Error reading disk file: [error details]
```

**Solution:**
- The file might be corrupted
- Try a different file
- Make sure the file is a valid Atari format

### Issue: "Error mounting files"

**Check Console for:**
```
Error mounting files: [error details]
```

**Solution:**
- The file format might not be supported
- Try a different file
- Check that JSMESSLoader is loaded properly

### Issue: "Error starting emulator"

**Check Console for:**
```
Error creating/starting emulator: [error details]
```

**Solution:**
- Check that all emulator files are present:
  - `/js/emulators/mame/mamea800xl.js`
  - `/js/emulators/mame/mamea800xl.wasm`
  - `/emulators/mame/a800xl-bd.zip`
  - `/emulators/mame/a800xl.cfg`
- Refresh the page and try again

## Test Files

If you don't have any Atari files to test with, the page includes a default game (Joust) that loads automatically if you don't upload anything.

You can find test files in the project:
- **Cartridges:** `games/joust.car`, `games/pacman.car`, `games/moonpatrol.car`
- **Disks:** `games/karate.atr`, `games/pacman.atr`

## Expected Console Output (Success)

When everything works correctly, you should see something like:

**Before clicking "Load Emulator":**
```
ATARI ONLINE - Games MAME page loaded
File upload feature enabled
Files selected: ["Cartridge: joust.car"]
```

**After clicking "Load Emulator":**
```
=== loadEmulatorWithFiles() called ===
Files from inputs: {cart: "joust.car", disk: "none"}
Starting to read files...
Cartridge file loaded: joust.car Size: 16384
Starting emulator with files: {cart: "joust.car", disk: "none"}
Stored cart data in sessionStorage
Reloading page to start emulator with uploaded files...
```

**After page reload:**
```
ATARI ONLINE - Games MAME page loaded
File upload feature enabled
Found uploaded files in sessionStorage
Loading uploaded cartridge: joust.car Size: 16384
Auto-load configuration: {cart: "", disk: ""}
[Emulator starts loading...]
```

## Browser Compatibility

Tested and working on:
- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari (may have some limitations)

## Performance Notes

- Larger files (>1MB) may take a few seconds to load
- The emulator itself takes 5-10 seconds to initialize
- First load is slower as WASM files are downloaded and compiled

## Success Criteria

✅ File selection enables the button
✅ Status messages appear correctly
✅ Console shows detailed logging
✅ Emulator loads without errors
✅ Game/disk runs in the emulator

If all of these work, the file upload feature is functioning correctly!

