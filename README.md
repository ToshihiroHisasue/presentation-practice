# 🎤 Presentation Practice Site

British English pronunciation practice site for Shionogi Data Science presentation.

## 📋 Features

- ✅ **Infinite Loop Playback** - Audio automatically repeats for continuous practice
- ✅ **Speed Control** - Practice at 0.5x, 0.75x, 1x, 1.25x, 1.5x, or 2x speed
- ✅ **Full Transcript** - Complete script with auto-highlighting
- ✅ **Progress Tracking** - Visual progress bar with time display
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Keyboard Shortcuts** - Quick controls for efficient practice

## 🎹 Keyboard Shortcuts

- **Space** - Play/Pause
- **← / →** - Rewind/Forward 5 seconds
- **↑ / ↓** - Increase/Decrease playback speed
- **R** - Restart from beginning

## 📁 File Structure

```
presentation-practice/
├── index.html          # Main HTML file
├── style.css          # Styling
├── script.js          # Audio player logic
├── audio/
│   └── presentation.mp3  # British English audio
└── README.md          # This file
```

## 🚀 Setup Instructions

### 1. Download Audio File

Download the British English audio file from:
https://www.genspark.ai/api/files/s/CbrdbBu1

Save it as `audio/presentation.mp3` in the project directory.

### 2. Local Testing

Open `index.html` in your web browser to test locally.

**Note:** Some browsers may block audio autoplay. If the audio doesn't play, check your browser's autoplay settings.

### 3. GitHub Repository Setup

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Presentation practice site"

# Create main branch
git branch -M main

# Add remote origin (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/presentation-practice.git

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be available at:
   `https://YOUR_USERNAME.github.io/presentation-practice/`

## 🎯 Usage Tips

1. **First Practice** - Listen at 0.75x speed to catch all pronunciation details
2. **Build Speed** - Gradually increase to 1x, then 1.5x for faster practice
3. **Shadow Speaking** - Speak along with the audio to practice timing
4. **Focus Mode** - Hide the transcript initially, then check for difficult parts
5. **Loop Practice** - Let it play continuously while you repeat each section

## 🔧 Customization

### Change Audio Source

Edit `index.html` line 19:
```html
<source src="audio/YOUR_AUDIO_FILE.mp3" type="audio/mpeg">
```

### Adjust Colors

Edit `style.css` to change the color scheme:
```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Speed Options

Edit `index.html` and add options to the speed select:
```html
<option value="2.5">2.5x</option>
```

## 📱 Mobile Usage

The site is fully responsive and works great on mobile devices. Use it during commutes or anywhere for convenient practice!

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **No backend needed** - Static site, easy to deploy
- **Lightweight** - Fast loading and minimal resource usage
- **Browser Compatibility** - Works on all modern browsers

## 📝 License

Created for Shionogi presentation practice. For internal use.

## 🆘 Troubleshooting

**Audio doesn't play:**
- Check that `audio/presentation.mp3` exists in the correct location
- Try a different browser (Chrome, Firefox, Safari, Edge)
- Check browser autoplay settings

**GitHub Pages not working:**
- Ensure repository is public (or you have GitHub Pro for private repos)
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory

**Transcript not showing:**
- Check browser console for JavaScript errors
- Ensure all files are properly uploaded to GitHub

---

Good luck with your presentation! 🎉