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

function randomiseStudent() {
  let student = document.getElementById('Student');
  let studentInfo = document.getElementById('studentInfo');

  //Do not touch
  let randomNumber = Math.floor(Math.random() * 8);
  let Student = '';
  let info = '';
  if (randomNumber === 0) {
    Student = 'Alex Martinez';
    info = '"Kean gave me the confidence to pursue my dreams in tech!"';
  } else if (randomNumber === 1) {
    Student = 'Brianna Lee';
    info = '"The professors at Kean truly care about your success."';
  } else if (randomNumber === 2) {
    Student = 'Carlos Rivera';
    info = '"I made lifelong friends and connections at Kean University."';
  } else if (randomNumber === 3) {
    Student = 'Danielle Chen';
    info = '"Kean’s hands-on learning prepared me for my career."';
  } else if (randomNumber === 4) {
    Student = 'Ethan Patel';
    info = '"The campus community is so welcoming and diverse."';
  } else if (randomNumber === 5) {
    Student = 'Fatima Hassan';
    info = '"Kean helped me discover my passion for research."';
  } else if (randomNumber === 6) {
    Student = 'Gabriel Johnson';
    info = '"I loved the opportunities for internships and growth."';
  } else if (randomNumber === 7) {
    Student = 'Hannah Kim';
    info = '"Kean University set me up for success after graduation."';
  }
  // Set the randomized values in the DOM
  if (student) student.textContent = Student;
  if (studentInfo) studentInfo.textContent = info;
}

// Call the function to randomize student on load
window.addEventListener('load', randomiseStudent);


//Parts of the code were generated using AI