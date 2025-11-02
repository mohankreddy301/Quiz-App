const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2, // Paris
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1, // Mars
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3, // Pacific Ocean
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1925", "1901", "1938"],
    answer: 0, // 1912
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: 2, // Diamond
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: 1, // H2O
  },
  {
    question: "Which country is home to the Kangaroo?",
    options: ["USA", "India", "Australia", "Brazil"],
    answer: 2, // Australia
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
    answer: 3, // Tokyo
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0, // Hyper Text Markup Language
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: 1, // William Shakespeare
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
    answer: 2, // Hydrogen
  },
  {
    question: "What is the currency of the United Kingdom?",
    options: ["Euro", "Dollar", "Yen", "Pound Sterling"],
    answer: 3, // Pound Sterling
  },
  {
    question: "What is the human body's largest organ?",
    options: ["Heart", "Liver", "Skin", "Brain"],
    answer: 2, // Skin
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: 2, // 7
  },
  {
    question: "Which bird is known for its ability to mimic human speech?",
    options: ["Eagle", "Pigeon", "Ostrich", "Parrot"],
    answer: 3, // Parrot
  },
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const currentQuestionSet = document.getElementById("question-set");

startQuiz();

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

nextButton.addEventListener("click",() => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton()
  } else {
    startQuiz()
  }
});

function showScore() {
  resetData()
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion()
  } else {
    showScore()
  }
}

function showQuestion() {
  resetData();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + "." + currentQuestion.question;
  currentQuestionSet.innerHTML = `(${questionNumber}/${questions.length})`
  addOptionButtons(currentQuestion.options, currentQuestion.answer);
}

function addOptionButtons(options, answer) {
  for (let i = 0; i < options.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = options[i];
    button.className = "btn";
    if (i == answer) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  }
}

function selectAnswer(value) {
  const selectButton = value.target;
  const isCorrect = selectButton.dataset.correct === "true";
  if (isCorrect) {
    selectButton.classList.add("correct");
    score++;
  } else {
    selectButton.classList.add("in-correct");
  }
  Array.from(answerButtons.children).forEach((element) => {
    if (element.dataset.correct === "true") {
        element.classList.add("correct");
    }
    element.disabled = true;
  });
  nextButton.style.display = "block";
}


function resetData() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
