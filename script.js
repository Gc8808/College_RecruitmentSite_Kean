//Startup lines

const splash = document.getElementById('splash');
const content = document.getElementById('main-content');
const progressBar = document.getElementById('progress-bar');
const audio = document.getElementById('startup-sound');



// Play sound on load
window.addEventListener('load', () => {
  audio.play().catch(err => {
    console.log("Autoplay blocked, will try on interaction:", err);
    // Optional fallback: play on first user interaction
    document.body.addEventListener('click', () => audio.play(), { once: true });
  });
});

let progress = 0;
const intervalTime = 50; // ms
const totalTime = 5000; // 5 seconds
const steps = totalTime / intervalTime;

const interval = setInterval(() => {
  progress++;
  progressBar.style.width = `${(progress / steps) * 100}%`;
  if (progress >= steps) {
    clearInterval(interval);
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
      content.style.display = 'block';
    }, 1000); // match fade out time
  }
}, intervalTime);





    


document.getElementById('applyButton').addEventListener('click', () => {
endMessage.classList.remove('d-none'); // Show the message
endMessage.classList.add('d-block'); // Ensure it's displayed properly
});

document.getElementById('closeButton').addEventListener('click', () => {
  document.getElementById('end').classList.add('d-none');
});