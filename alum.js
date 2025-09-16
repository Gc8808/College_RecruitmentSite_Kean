
function randomizeStudent() {
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
window.addEventListener('load', randomizeStudent);

//parts of the code were generated using AI


  
const majors = [
    "Accounting",
    "American Sign Language",
    "Anthropology",
    "Architecture",
    "Asian Studies",
    "Biology",
    "Business Administration",
    "Chemistry",
    "Communication",
    "Computer Science",
    "Cybersecurity",
    "Criminal Justice",
    "Early Childhood Education",
    "Earth Science",
    "Economics",
    "Elementary Education",
    "English",
    "Environmental Science",
    "Exercise Science",
    "Finance",
    "Fine Arts",
    "Forensic Psychology",
    "Global Business",
    "Graphic Design",
    "Health Information Management",
    "History",
    "Human Resource Management",
    "Information Technology",
    "Interior Design",
    "International Business",
    "Management",
    "Marketing",
    "Mathematical Sciences",
    "Media & Film",
    "Music",
    "Nursing",
    "Physical Education",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Administration",
    "Public Health",
    "Recreation Administration",
    "Social Work",
    "Sociology",
    "Spanish",
    "Special Education",
    "Speech-Language-Hearing Sciences",
    "Sustainability Science",
    "Theatre",
    "Therapeutic Recreation",
    "Visual Communication"
];

document.getElementById('searchMajorBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('majorInput').value.trim();
    let ans;
    if (majors.includes(inputValue)) {
        ans = `${inputValue} is available.`;
    } else {
        ans = `Sorry! ${inputValue} is not available.`;
    }
    document.getElementById('answer').innerText = ans;
});
