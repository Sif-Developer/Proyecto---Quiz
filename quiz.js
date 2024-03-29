const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerGeneral = document.getElementById("container.quiz");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const notaElement = document.querySelector(".nota");
const disableButtons = document.getElementsByClassName("button");
const alertMessage = document.getElementById("alertMessage");

const home = document.getElementById("home");
const loadingCircle = document.getElementById("loadingCircle");

const loadingElement = document.getElementById("loadingElement");
console.log(loadingElement);
//End Page-Ranking//
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score");
const highscore = 0;
const finalScore = document.getElementById("final-score");

let currentQuestionIndex;
let nota = 0;
let questions = [];
let time;

//MOSTRAR PAGINAS

const showStartAndQuiz = document.getElementById("container-quiz-box");
const showSaveScoreBox = document.getElementById("container-score-box");
const showEndPage = document.getElementById("container-end");

const restartEndPageBtn = document.getElementById("restart-end-page");

// incorrect_answers.text.replace(/&quote/g, "");
// correct_answers.text.replace(/&quote/g, "");

axios
  .get(
    "https://opentdb.com/api.php?amount=3&category=31&difficulty=easy&type=multiple"
  )
  .then((res) => {
    questions = res.data.results;
  })
  .catch((err) => console.error(err));

// incorrect_answers.text.replaceAll(/&quote/g, "");

function loadingPage() {
  setTimeout(goHome, 3000);
}

function goHome() {
  loadingCircle.classList.replace("loading-container", "hide");
  home.classList.add("hide");
  container;
  questionContainerGeneral.classList.remove("hide");
}
loadingPage();

function loadingStartGame() {
  axios
    .get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
    .then((res) => {
      questions = res.data.results;
    })
    .catch((err) => console.error(err));
  animateValue(loadingNumber, 0, 100, 4000);
  questionContainerElement.classList.add("hide"); // Esto es para que se oculten las preguntas cuando Restart
  questionElement.classList.add("hide");
  loadingElement.classList.replace("hide", "loading");
  startButton.classList.replace("buttonStyle", "hide");
  nextButton.classList.replace("buttonAuxiliar", "hide");
  alertMessage.classList.add("hide");

  showEndPage.classList.add("hide");
  showStartAndQuiz.classList.remove("hide");

  animateValue();
  setTimeout(startGame, 3000);
}

function startGame() {
  loadingElement.classList.replace("loading", "hide");
  axios
    .get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
    .then((res) => {
      questions = res.data.results;
      questionContainerElement.classList.remove("hide");
      questionElement.classList.remove("hide");
      setNextQuestion();
    })
    .catch((err) => console.error(err));
  startButton.classList.replace("buttonStyle", "hide");
  username.classList.add("hide");
  saveScoreBtn.classList.add("hide");
  currentQuestionIndex = 0;
  nota = 0;

  // timing /////////////////////////////////////////

  time = questions.length * 5;
  intervalID = setInterval(countdown, 1000);
  ///////////////////////////////////////////////////
  questionContainerElement.classList.remove("hide");
}

//timing countdown ///////////////////////////////////

function countdown() {
  time--;
  displayTime();
  if (time <= 0) {
    clearInterval(intervalID);
    alertMessage.innerHTML = "Tiempo expirado";
    alertMessage.classList.remove("hide");
    endQuiz();
  }
}
//timing display ///////////////////////////////////
const timeDisplay = document.getElementById("time");
function displayTime() {
  timeDisplay.textContent = time <= 0 ? 0 : time;
}
///////////////////////////////////////////////////

function showQuestion(question) {
  notaElement.innerHTML = "Tu puntuación: " + nota;
  questionElement.innerText = question.question;

  let answers = [];
  question.incorrect_answers.forEach((incorrectAnswer) => {
    answers.push({ text: incorrectAnswer, correct: false });
  });

  answers.push({ text: question.correct_answer, correct: true });
  answers.sort(function () {
    return Math.random() - 0.5;
  });

  answers.map((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("buttonStyleAnswer");

    if (answer.correct) {
      button.dataset.correct = true;
    }
    // cuando clique una respuesta llama a la función
    button.addEventListener("click", function () {
      console.log(button.dataset.correct);
      disableButtons.disabled = true;
      if (button.dataset.correct == "true") {
        nota++;
        answerButtonsElement.children.disabled = true;
        notaElement.innerHTML = "Tu puntuación: " + nota;
        time = time + 5;
      } else {
        if (nota != 0) {
          nota = nota - 0.5;
          notaElement.innerHTML = "Tu puntuación: " + nota;
          time = time - 20;
        } else {
          notaElement.innerHTML = "Tu puntuación: " + nota;
          time = time - 20;
        }
      }

      selectAnswer();
    });
    answerButtonsElement.appendChild(button);
  });
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function setStatusClass(element, correct) {
  //pinta la respuesta corre e incorrecta
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function selectAnswer() {
  Array.from(answerButtonsElement.children).forEach((button) => {
    //llamamos a la función y le pasamos los botons y el botón correcto
    setStatusClass(button, button.dataset.correct);
    button.disabled = true;
  });
  if (questions.length > currentQuestionIndex + 1) {
    //si estamos en una pregunta que es menos que las preguuntas que quedan
    //es decir si son 10 preguntas y estamos en la 7
    //se muestra el boton siguiente porque aun quedan preguntas

    nextButton.classList.replace("hide", "buttonAuxiliar");
  } else {
    //si no quedan preguntas porque hemos terminado (10/10)

    // mostRecentScore(); //GUARDA EL SCORE EN LOCALSTORAGE TODAS LAS PREGUNTAS

    endQuiz();
    //Quita y muestra páginas//
  }
}

function endQuiz() {
  questionContainerElement.classList.add("hide");
  nextButton.classList.replace("buttonAuxiliar", "hide");
  startButton.innerText = "Restart"; //cambiamos el texto del botón start por "restart"
  startButton.classList.replace("hide", "buttonStyle"); // volvemos a mostrar el botón start

  //CAMBIA DE START/QUIZ A SAVE SCORE
  showStartAndQuiz.classList.add("hide");
  showSaveScoreBox.classList.remove("hide");

  username.classList.remove("hide");
  saveScoreBtn.classList.remove("hide");
  finalScore.textContent = "Puntuación: " + nota;
}

function resetState() {
  nextButton.classList.replace("buttonAuxiliar", "hide"); //escondemos el botón next
  while (answerButtonsElement.firstChild) {
    //bucle que se ejecuta si answerButtonsElemetnos
    //tiene un primer hijo
    //borramos el primer hijo de answerButtonsElements
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

startButton.addEventListener("click", loadingStartGame);

restartEndPageBtn.addEventListener("click", loadingStartGame);

//SaveUsers and Score
saveScoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const user = {
    //USER está declarado tanto arriba como abajo gracias.
    nombre: username.value,
    score: nota,
  };
  {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    printInHTML();
    showSaveScoreBox.classList.add("hide");
    showEndPage.classList.remove("hide");
  }
});

const users = JSON.parse(localStorage.getItem("users")) || []; //Si existe algo en el LocalStorage creará un array nuevo y mantendrá el anterior

//PrintUSers

function printInHTML() {
  const highScoreList = document.getElementById("highscoresList");
  const highScores = JSON.parse(localStorage.getItem("users"));
  highScoreList.innerHTML = highScores
    .map((nombre) => {
      console.log(nombre);
      return `<li class="high-score-result"> ${nombre.nombre} tiene una puntuación de:   ${nombre.score} </li>`;
    })
    .join("");
}

printInHTML();

//   const users = JSON.parse(localStorage.getItem("users")) || []; //Si existe algo en el LocalStorage creará un array nuevo y mantendrá el anterior

//   //PrintUSers

//   // const  highScoreList = document.getElementById("highscoresList")
//   // const highScores = JSON.parse(localStorage.getItem("users")) || [];

function animateValue(loadingNumber, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    loadingNumber.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const loadingNumber = document.getElementById("valueLoading");