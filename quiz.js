const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const notaElement = document.querySelector(".nota");
const disableButtons = document.getElementsByClassName("button")

//End Page-Ranking//
const username = document.getElementById("username")
const saveScoreBtn = document.getElementById("save-score")
const highscore = 0;
const finalScore = document.getElementById("final-score")


let currentQuestionIndex;
let nota = 0;

// https://the-trivia-api.com/api/questions

// functionaxios
//   .get(https://the-trivia-api.com/api/questions)
//   .then(res=> {
//     return res.json();
//   })
//   .then (loadedQuestions => {
//     console.log(loadedQuestions.results)
//   });


 const questions = [
   {
     question: "What is 2 + 2?",
     answers: [
       { text: "4", correct: true },
       { text: "22", correct: false },
     ],
   },
   {
     question: "Is web development fun?",
     answers: [
       { text: "Kinda", correct: false },
       { text: "YES!!!", correct: true },
       { text: "Um no", correct: false },
       { text: "IDK", correct: false },
     ],
   },
   {
     question: "What is 4 * 2?",
     answers: [
       { text: "6", correct: false },
       { text: "8", correct: true },
       { text: "Yes", correct: false },
     ],
   },
 ];

function startGame() {
  startButton.classList.replace("buttonStyle", "hide");
  username.classList.add("hide")
  saveScoreBtn.classList.add("hide")
  currentQuestionIndex = 0;
  nota = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();

}

function showQuestion(question) {
  notaElement.innerHTML = "Tu puntuación: " + nota;
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btnDisabled")

    button.innerText = answer.text;
    if (answer.correct) {
      button.dataset.correct = true;
    }
    // cuando clique una respuesta llama a la función
    button.addEventListener("click", function () {

      disableButtons.disabled = true;
      if (button.dataset.correct == "true") {
        nota++;
        // answerButtonsElement.children.disabled=true
        notaElement.innerHTML = "Tu puntuación: " + nota;
        console.log(nota);
      } else {
        
        if (nota != 0) {
          nota = nota - 0.5;
           console.log(nota)
          notaElement.innerHTML = "Tu puntuación: " + nota;
        } else {
          notaElement.innerHTML = "Tu puntuación: " + nota;
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

    nextButton.classList.remove("hide");
  
    

    
  } else {
    //si no quedan preguntas porque hemos terminado (10/10)
    
    // mostRecentScore(); //GUARDA EL SCORE EN LOCALSTORAGE TODAS LAS PREGUNTAS
    
    finalScore.textContent = "Última nota: " +  nota;

    startButton.innerText = "Restart"; //cambiamos el texto del botón start por "restart"
    startButton.classList.replace("hide", "buttonStyle");
   username.classList.remove("hide")
    saveScoreBtn.classList.remove("hide")
     // volvemos a mostrar el botón start
  }
}

//GUARDA EL SCORE EN LOCALSTORAGE
// function  mostRecentScore(){  
// let user = JSON.parse((localStorage.getItem("user"))); //Imprimo la nota en el localStorage
// user.highscore = nota
// localStorage.setItem("user", JSON.stringify(user));
// }

function resetState() {
  nextButton.classList.add("hide"); //escondemos el botón next
  while (answerButtonsElement.firstChild) {
    //bucle que se ejecuta si answerButtonsElemetnos
    //tiene un primer hijo
    //borramos el primer hijo de answerButtonsElements
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});



//SaveUsers and Score
saveScoreBtn.addEventListener("click", function(e){
  e.preventDefault()
  const user = { //USER está declarado tanto arriba como abajo gracias.
    nombre : username.value,
    score: nota
  }
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users)); mostRecentScore(); 
  
  
})  

const users = JSON.parse(localStorage.getItem("users")) || []; //Si existe algo en el LocalStorage creará un array nuevo y mantendrá el anterior

//PrintUSers

const  highScoreList = document.getElementById("highscoresList")
const highScores = JSON.parse(localStorage.getItem("users")) || [];

highScoreList.innerHTML = highScores
.map(nombre => {
  return `<li class="high-score-result"> ${nombre.nombre} tiene una puntuación de:   ${nota.value} </li>`;
}).join("");


// highScoreList.innerHTML = highScores
//   .map(nombre => {
  //     return `<li class="high-score-result"> ${nombre.nombre} tiene una puntuación de:   ${nota.value} </li>`;
  //   }).join("");
  
  
// highScores.map(nota => {
  //   console.log(`${nota.score}`);
  // })               //ESTE SI DA LA NOTA
  
  
  