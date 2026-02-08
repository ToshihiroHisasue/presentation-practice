// Audio Player Elements
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const restartBtn = document.getElementById('restartBtn');
const speedSelect = document.getElementById('speedSelect');
const progressFill = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Transcript Elements
const toggleTranscriptBtn = document.getElementById('toggleTranscript');
const transcriptContent = document.getElementById('transcript');

// Initialize
let isPlaying = false;

// Play/Pause Toggle
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    } else {
        audioPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    }
    isPlaying = !isPlaying;
});

// Restart Button
restartBtn.addEventListener('click', () => {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
    isPlaying = true;
});

// Speed Control
speedSelect.addEventListener('change', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
});

// Progress Bar Update
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Update time display
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

// Set Duration Display
audioPlayer.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
});

// Click on Progress Bar to Seek
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    audioPlayer.currentTime = percentage * audioPlayer.duration;
});

// Format Time Helper Function
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Toggle Transcript Visibility
toggleTranscriptBtn.addEventListener('click', () => {
    transcriptContent.classList.toggle('hidden');
    toggleTranscriptBtn.textContent = transcriptContent.classList.contains('hidden') ? 'Show' : 'Hide';
});

// Auto-scroll Transcript (Optional Enhancement)
audioPlayer.addEventListener('timeupdate', () => {
    const paragraphs = transcriptContent.querySelectorAll('p');
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const totalParagraphs = paragraphs.length;
    
    // Estimate which paragraph should be highlighted based on time
    const estimatedParagraphIndex = Math.floor((currentTime / duration) * totalParagraphs);
    
    // Remove previous highlights
    paragraphs.forEach(p => p.classList.remove('highlight'));
    
    // Add highlight to current paragraph
    if (paragraphs[estimatedParagraphIndex]) {
        paragraphs[estimatedParagraphIndex].classList.add('highlight');
        
        // Auto-scroll to highlighted paragraph
        paragraphs[estimatedParagraphIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Spacebar: Play/Pause
    if (e.code === 'Space' && e.target.tagName !== 'SELECT') {
        e.preventDefault();
        playPauseBtn.click();
    }
    
    // Arrow Left: Rewind 5 seconds
    if (e.code === 'ArrowLeft') {
        audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
    }
    
    // Arrow Right: Forward 5 seconds
    if (e.code === 'ArrowRight') {
        audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
    }
    
    // Arrow Up: Increase speed
    if (e.code === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = speedSelect.selectedIndex;
        if (currentIndex < speedSelect.options.length - 1) {
            speedSelect.selectedIndex = currentIndex + 1;
            speedSelect.dispatchEvent(new Event('change'));
        }
    }
    
    // Arrow Down: Decrease speed
    if (e.code === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = speedSelect.selectedIndex;
        if (currentIndex > 0) {
            speedSelect.selectedIndex = currentIndex - 1;
            speedSelect.dispatchEvent(new Event('change'));
        }
    }
    
    // R key: Restart
    if (e.code === 'KeyR') {
        restartBtn.click();
    }
});

// Display keyboard shortcuts info on page load
console.log(`
🎹 Keyboard Shortcuts:
- Space: Play/Pause
- ← / →: Rewind/Forward 5 seconds
- ↑ / ↓: Increase/Decrease speed
- R: Restart
`);