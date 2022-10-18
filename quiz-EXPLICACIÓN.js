const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("questions");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const notaElement = document.querySelector(".nota");
const highScoreBtn = document.getElementById("highscore-btn")
let currentQuestionIndex;
let nota = 0;
let questionCounter = 0;
let availableQuestions = [];

// EL ARRAY DE PREGUNTAS ESTÁ EN questions.JSON
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

function startGame(){ //EMPIEZA EL JUEGO
  startButton.classList.replace("buttonStyle","hide"); //escondemos el botón START
  currentQuestionIndex = 0; //ahora mismo pregunta 0 del array (primera pregunta)
  questionContainerElement.remove("hide") //Muestra el container preguntas (estaba hide)
  setNextQuestion();

}

function showQuestion(question) { //hemos accedido a la pregunta en la que estamos en la función ShowQuestion. Una vez metidos en esa pregunta del array empezamos a sacar la información (question,answers) y la imprimimos donde y como queremos
  questionElement.innerText = question.question; //aqui accedemos a questions -> question; cogemos ese texto y lo imprimimos en questionElement (definido en HTML)
  question.answers.forEach((answer) => { //para cada respuesta que tengo dentro de answers le vamos a hacer lo siguiente.
    const answerButton = document.createElement("button"); //Creará un botón en html para cada respuesta que tendrá dentro lo siguiente:
    answerButton.innerText = answer.text; //los botones creados anteriormente tendrán este texto dentro : el texto que contiene cada pregunta del array de arriba

    if (answer.correct) {
      answerButton.dataset.correctAnswer = true; //aquí hemos dicho que la que es correct (true) la marcamos (con un dataset), le ponemos un nombre (correctanswer) y le decimos que es true.
    }
    answerButton.addEventListener("click", function () {
      if (answerButton.dataset.correctAnswer == "true") {
        nota++;
        notaElement.innerHTML = "Tu puntuación: " + nota;
      }
      else {
        notaElement.innerHTML = "Tu puntuación: " + nota;
      }

      selectAnswer();
    });
    
    answerButtonsElement.appendChild(answerButton); //aquí estamos diciendole que cree un hijo a answerButtonsElement en el html, metiendo answerButton ahí. Esto es para luego borrarlo en resetState.
  });  
}

function setNextQuestion() {
  resetState(); //para que entienda que tiene que borrarlo, está debajo
  showQuestion(questions[currentQuestionIndex]); 
  //aquí le indicamos que vamos a entrar a una posición de ese array, para que cuando metamos esta función en show question estemos ya dentro de la pregunta

}

function selectAnswer() {
  Array.from(answerButtonsElement.children).forEach((answers) => { //creamos un array con las respuestas que hemos impreso en los botones y recorremos cada una 
    setStatusClass(answers, answerButton.dataset.correct);
  });
  if (questions.length > currentQuestionIndex + 1 ) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) { // ponerle clase correct a las respuestas correctas y al resto incorrect, así luego podremos pintarlas con CSS.
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
  }

function resetState() {
  nextButton.classList.add("hide");
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
// Ocultamos el next button porque ya estamos en otra pregunta y no se puede pasar.
// Si tenemos respuestas en botones entonces borramos para volver a crearlas.
}

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click",() => {
  currentQuestionIndex++;
  setNextQuestion();
})







/////////////////////////////////////////////////////////////////////////////////////////////
// pasar a PARSE las questions (COMPROBARLO)
// fetch("questions.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((loadedQuestions) => {
//     questions = loadedQuestions;
//     startGame();
//   })
//   .catch((err) => {    //quiere decir que si por lo que sea no se cumple lo de arriba dará un error
//     console.error(err);
//   });



//   startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions];
//     // getNewQuestion();
//     console.log(availableQuestions)
// };

// startGame()


// Vamos a denominar las variables que cogemos de la base de datos de una manera concreta para programar acorde a esas variables. De esta manera si cambiamos de base de datos y han cambiado los nombres de las propiedades del objeto las cambiaríamos rápidamente.


// const { name: nombre } = questionsParse;

//  questionsPrueba = 
//      {
//          "category": "Entertainment: Video Games",
//          "type": "multiple",
//          "difficulty": "medium",
//          "question": "Which one of the first four titles of the &quot;Grand Theft     Auto&quot; franchise started the series of iconic image grid cover arts?",
//          "correct_answer": "Grand Theft Auto III",
//          incorrect_answers: [
//            "Grand Theft Auto",
//            "Grand Theft Auto II",
//            "Grand Theft Auto Vice City"
//          ]
//        }


// // ESTO ES PARA SACAR EL TEXTO Y CORRECTA/INCORRECTA DE LAS RESPUESTAS
// const correctAnswer = {
//   text: questionsPrueba.correct_answer,
//   correct: true
// }
// console.log(correctAnswer)

// const incorrectAnswers = {
//   text: questionsPrueba.incorrect_answers,
//   correct: false
// }
// console.log(incorrectAnswers)
// // ESTO ES PARA METER TODAS LAS RESPUESTAS EN UN ARRAY
// const answers = [correctAnswer.text,...incorrectAnswers.text]
// // ESTO ES PARA RANDOMIZAR LAS RESPUESTAS, ASÍ ESE ARRAY SIEMPRE ESTÁ RANDOMIZADO Y NO SE REPITE ORDEN DE TRUE-FALSE
// const answersRandom = answers 
//     .map(value => ({value, sort: Math.random()}))
//     .sort((a,b) => a.sort - b.sort)
//     .map(({ value }) =>value)
// console.log(answers)
// console.log(answersRandom)


// let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}]

// let shuffled = unshuffled
//     .map(value => ({ value, sort: Math.random() }))
//     .sort((a, b) => a.sort - b.sort)
//     .map(({ value }) => value)
   
// console.log(shuffled)


// EJEMPLO CLASE PARA IR TRADUCIENDO A NUESTRA APP

// function startGame() {
//   startButton.classList.add("hide");
//   currentQuestionIndex = 0;
//   questionContainerElement.classList.remove("hide");
//   setNextQuestion();
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question;
//   question.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;

//     if (answer.correct) {
//       button.dataset.correct = true;
//     }
//     // cuando clique una respuesta llama a la función


//     button.addEventListener("click", function () {
//       console.log(button.dataset.correct);
//       if (button.dataset.correct == "true") {
//         nota++;
//         notaElement.innerHTML = "Tu puntuación: " + nota;
//         console.log(nota);
//       } else {
//         if (nota != 0) {
//           nota = nota - 0.5;
//           notaElement.innerHTML = "Tu puntuación: " + nota;
//         }else{
//             notaElement.innerHTML = "Tu puntuación: " + nota;
//         }
//       }

//       selectAnswer();
//     });
//     answerButtonsElement.appendChild(button);
//   });
// }

// function setNextQuestion() {
//   resetState();
//   showQuestion(questions[currentQuestionIndex]);
// }

// function setStatusClass(element, correct) {
//   //pinta la respuesta corre e incorrecta
//   if (correct) {
//     element.classList.add("correct");
//   } else {
//     element.classList.add("wrong");
//   }
// }

// function selectAnswer() {
//   Array.from(answerButtonsElement.children).forEach((button) => {
//     //llamamos a la función y le pasamos los botons y el botón correcto
//     setStatusClass(button, button.dataset.correct);
//   });
//   if (questions.length > currentQuestionIndex + 1) {
//     //si estamos en una pregunta que es menos que las preguuntas que quedan
//     //es decir si son 10 preguntas y estamos en la 7
//     //se muestra el boton siguiente porque aun quedan preguntas
//     nextButton.classList.remove("hide");
//   } else {
//     //si no quedan preguntas porque hemos terminado (10/10)
//     startButton.innerText = "Restart"; //cambiamos el texto del botón start por "restart"
//     startButton.classList.remove("hide"); // volvemos a mostrar el botón start
//   }
// }

// startButton.addEventListener("click", startGame);

// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   setNextQuestion();
// });

// function resetState() {
//   nextButton.classList.add("hide"); //escondemos el botón next
//   while (answerButtonsElement.firstChild) {
//     //bucle que se ejecuta si answerButtonsElemetnos
//     //tiene un primer hijo
//     //borramos el primer hijo de answerButtonsElements
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
// }