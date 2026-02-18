// Array of romantic messages
const romanticMessages = [
    "❤️ Kamu membuat hidupku lengkap! ❤️",
    "💕 Aku mencintaimu selamanya! 💕",
    "✨ Kamu adalah impian yang menjadi kenyataan! ✨",
    "🌹 Setiap hari denganmu adalah hari istimewa! 🌹",
    "💫 Cintaku untukmu tidak akan pernah hilang! 💫",
    "🎵 Dirimu adalah lagu terindah dalam hidupku! 🎵",
    "✨ Aku beruntung memilikimu! ✨",
    "💕 Terima kasih telah menjadi bagian dari hidupku! 💕",
    "🌟 Kamu adalah bintang terang malam gulitaku! 🌟",
    "❤️ Selamanya... hanya untukmu! ❤️"
];

// Background Music
const bgMusic = document.getElementById('bgMusic');
if (bgMusic) {
    bgMusic.volume = 0.3;
    bgMusic.currentTime = 0;
}

// Trigger music on first user interaction
document.addEventListener('click', function startMusic() {
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(e => console.log('Music play:', e));
    }
}, { once: true });

function showLove() {
    const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    const surpriseDiv = document.getElementById('surpriseMsg');
    
    // Create new paragraph
    const p = document.createElement('p');
    p.textContent = randomMessage;
    
    // Clear previous message and add new one
    surpriseDiv.innerHTML = '';
    surpriseDiv.appendChild(p);
    
    // Create floating hearts
    createFloatingHearts();
}

function createFloatingHearts() {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = '1';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        heart.style.animation = 'float-up 3s ease-out forwards';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => heart.remove(), 3000);
    }
}

// Add animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Add click anywhere to create hearts
document.addEventListener('click', function(event) {
    // Don't trigger if clicking on button
    if (event.target.classList.contains('romantic-btn')) return;
    
    // Create a single heart at click location
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = event.pageX + 'px';
    heart.style.top = event.pageY + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '999';
    heart.style.animation = 'float-up 2s ease-out forwards';
    
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
});

// Page load animation
window.addEventListener('load', function() {
    console.log('💕 Website yang indah telah dimuat! 💕');
});

// Make the page more interactive
let clickCount = 0;
const romanticBtn = document.querySelector('.romantic-btn');

romanticBtn.addEventListener('mouseenter', function() {
    this.textContent = '💝 Sentuh Aku! 💝';
});

romanticBtn.addEventListener('mouseleave', function() {
    this.textContent = 'Klik untuk Kejutan! 💝';
});
