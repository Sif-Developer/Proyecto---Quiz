const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const notaElement = document.querySelector(".nota");

let currentQuestionIndex;
let nota = 0;
const questions = [
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "medium",
      "question": "When was the original Star Wars: Battlefront II released?",
      "correct_answer": "October 31, 2005",
      "incorrect_answers": [
        "December 18, 2004",
        "November 21, 2006",
        "September 9, 2007"
      ]
    },
    {
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Who is the lead singer of Silverchair?",
      "correct_answer": "Daniel Johns",
      "incorrect_answers": [
        "Ben Gillies",
        "Chris Joannou",
        "George Costanza"
      ]
    },
    {
      "category": "Science & Nature",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which one of these is scientific term for &quot;Brain Freeze&quot;?",
      "correct_answer": "Sphenopalatine Ganglioneuralgia",
      "incorrect_answers": [
        "Hyacinthoides Italica",
        "Amaranthus Retroflexus",
        "Amblyomma Americanum"
      ]
    },
    {
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which of these songs is not by Tatsuro Yamashita?",
      "correct_answer": "Lucky Lady Feel So Good ",
      "incorrect_answers": [
        "Merry-Go Round",
        "Let&#039;s Dance Baby",
        "Love Talkin&#039;"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Against which country did the Dutch Republic fight the Eighty Years&#039; War?",
      "correct_answer": "Spain",
      "incorrect_answers": [
        "France",
        "England",
        "Portugal"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What was found in 1946 by two young shepards near a cave?",
      "correct_answer": "Dead Sea Scrolls",
      "incorrect_answers": [
        "The Blackbeard Chest",
        "Sheep",
        "The First Oaxaca Cave Sleeper"
      ]
    },
    {
      "category": "Entertainment: Television",
      "type": "boolean",
      "difficulty": "easy",
      "question": "In &quot;Star Trek&quot;, Klingons are aliens.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "category": "Sports",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the full name of the footballer &quot;Cristiano Ronaldo&quot;?",
      "correct_answer": "Cristiano Ronaldo dos Santos Aveiro",
      "incorrect_answers": [
        "Cristiano Ronaldo los Santos Diego",
        "Cristiano Armando Diego Ronaldo",
        "Cristiano Luis Armando Ronaldo"
      ]
    },
    {
      "category": "Entertainment: Japanese Anime & Manga",
      "type": "multiple",
      "difficulty": "hard",
      "question": "In the Overlord Anime who was Cocytus made by?",
      "correct_answer": "Warrior Takemikazuchi",
      "incorrect_answers": [
        "Peroroncino",
        "Ulbert Alain Odle",
        "Bukubukuchagama"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which one of the first four titles of the &quot;Grand Theft Auto&quot; franchise started the series of iconic image grid cover arts?",
      "correct_answer": "Grand Theft Auto III",
      "incorrect_answers": [
        "Grand Theft Auto",
        "Grand Theft Auto II",
        "Grand Theft Auto Vice City"
      ]
    }
  ]

// pasar a PARSE las questions
console.log(questions[0].question



// Vamos a denominar las variables que cogemos de la base de datos de una manera concreta para programar acorde a esas variables. De esta manera si cambiamos de base de datos y han cambiado los nombres de las propiedades del objeto las cambiaríamos rápidamente.


// const { name: nombre } = questionsParse;

 questionsPrueba = [
     {
         "category": "Entertainment: Video Games",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Which one of the first four titles of the &quot;Grand Theft     Auto&quot; franchise started the series of iconic image grid cover arts?",
         "correct_answer": "Grand Theft Auto III",
         "incorrect_answers": [
           "Grand Theft Auto",
           "Grand Theft Auto II",
           "Grand Theft Auto Vice City"
         ]
       }
     ]
 const answers = (correct_answer,incorrect_answers) => {
    console.log(answers)
}
    


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