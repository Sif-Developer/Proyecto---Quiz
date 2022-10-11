const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const notaElement = document.querySelector(".nota");

let currentQuestionIndex;
let nota = 0;

// EL ARRAY DE PREGUNTAS ESTÁ EN questions.JSON
// const questions = 

// pasar a PARSE las questions - ESTO HAY QUE BORRARLO
// console.log(questions[0].question)



// Vamos a denominar las variables que cogemos de la base de datos de una manera concreta para programar acorde a esas variables. De esta manera si cambiamos de base de datos y han cambiado los nombres de las propiedades del objeto las cambiaríamos rápidamente.


// const { name: nombre } = questionsParse;

 questionsPrueba = 
     {
         "category": "Entertainment: Video Games",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Which one of the first four titles of the &quot;Grand Theft     Auto&quot; franchise started the series of iconic image grid cover arts?",
         "correct_answer": "Grand Theft Auto III",
         incorrect_answers: [
           "Grand Theft Auto",
           "Grand Theft Auto II",
           "Grand Theft Auto Vice City"
         ]
       }


// ESTO ES PARA SACAR EL TEXTO Y CORRECTA/INCORRECTA DE LAS RESPUESTAS
const correctAnswer = {
  text: questionsPrueba.correct_answer,
  correct: true
}
console.log(correctAnswer)

const incorrectAnswers = {
  text: questionsPrueba.incorrect_answers,
  correct: false
}
console.log(incorrectAnswers)
// ESTO ES PARA METER TODAS LAS RESPUESTAS EN UN ARRAY
const answers = [correctAnswer.text,...incorrectAnswers.text]
// ESTO ES PARA RANDOMIZAR LAS RESPUESTAS, ASÍ ESE ARRAY SIEMPRE ESTÁ RANDOMIZADO Y NO SE REPITE ORDEN DE TRUE-FALSE
const answersRandom = answers 
    .map(value => ({value, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(({ value }) =>value)
console.log(answers)
console.log(answersRandom)


let unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, {cats: true}]

let shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
console.log(shuffled)


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