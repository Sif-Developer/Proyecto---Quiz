let tiempoRestante = 100;
let contadorID;
let contadorJS = document.getElementById("contador");
let botonEmpezar = document.getElementById("boton-empezar");
let botonSiguiente = document.getElementById("boton-siguiente");
let contenedorPreguntas = document.getElementById("contenedor-preguntas");
let contenedorEmpezar = document.getElementById("contenedor-empezar");
let preguntaJS = document.getElementById("pregunta-titulo");
let botonRespuesta = document.getElementById("boton-respuesta");
let chequeaRespuesta = document.getElementById("chequea-respuesta");
let mejoresResultados = document.getElementById("mejores-resultados");
let botonEnviarNombre = document.getElementById("boton-enviar-nombre");
let botonLimpiarPuntuacion = document.getElementById(
  "boton-limpiar-puntuacion"
);
let campoEscribeNombre = document.getElementById("nombre-jugador");
let botonReiniciarQuiz = document.getElementById("boton-reiniciar");
let campoPuntuacion = document.getElementById("tu-puntuacion");

let randomizarPreguntas, indicePreguntaActual;

//? El botonEmpezar llama a la primera pregunta y el botonSiguiente la muestra

botonEmpezar.addEventListener("click", empezarQuiz); //empezarQuiz es una función que definimos más abajo
botonSiguiente.addEventListener("click", () => {
  indicePreguntaActual++;
  escribePreguntaSiguiente();
});

//? Contador Tiempo

function marcaTiempo() {
  tiempoRestante--;
  contadorJS.contenidoTexto = "Tiempo: " + tiempoRestante;
  if (tiempoRestante <= 0) {
    guardarPuntuacion();
  }
}

//?Empezar Quiz

function empezarQuiz() {
  contadorID = setInterval(marcaTiempo, 1000);
  contenedorEmpezar.classList.add("hide");
  randomizarPreguntas = preguntas.sort(() => Math.random() - 0.5);
  indicePreguntaActual = 0;
  contenedorPreguntas.classList.remove("hide");

  //? El contador comenzará cuando el boton de start sea clickado
  marcaTiempo();
  escribePreguntaSiguiente();
}

//? SIGUIENTE PREGUNTA

function escribePreguntaSiguiente() {
  reiniciarEstado();
  enseñaPregunta(randomizarPreguntas[indicePreguntaActual]);
}

//? ENSEÑA LA PREGUNTA
//ESTO HABRÁ QUE CAMBIARLO POR LA API Y SU FORMA DE SACAR QUESTIONS AND ANSWERS

function enseñaPregunta(question) {
  preguntaJS.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", seleccionaRespuesta);
    botonRespuesta.appendChild(button);
  });
}

//? REINICIAR ESTADO

function reiniciarEstado() {
  botonSiguiente.classList.add("hide");
  chequeaRespuesta.classList.add("hide");
  while (botonRespuesta.firstChild) {
    botonRespuesta.removeChild(botonRespuesta.firstChild);
  }
}

//? SELECCIONAR RESPUESTA

function seleccionaRespuesta(e) {
  let botonSeleccionado = e.target;
  let correct = botonSeleccionado.dataset.correct;
  chequeaRespuesta.classList.remove("hide");
  botonSiguiente.classList.remove("hide")//? Aparece el botón next;
  if (correct) {
    chequeaRespuesta.innerHTML = "BUENA!! has acertado!";
  } else {
    chequeaRespuesta.innerHTML = "MAL!! no has acertado";
  }
  if (tiempoRestante <= 10) {
    tiempoRestante = 0;
  } else {
    tiempoRestante -= 10;
  }
}
Array.from(botonRespuesta.children).forEach((button) => {
  crearClaseEstado(button, button.dataset.correct);
});
if (randomizarPreguntas.length > indicePreguntaActual + 1) {
  botonSiguiente.classList.remove("hide");
  chequeaRespuesta.classList.remove("hide");
} else {
  botonEmpezar.classList.remove("hide");
  guardarPuntuacion();
}

//? Chequea y enseña la resptesta correcta y crea la opción de que se pueden poner botones de colores

function crearClaseEstado(element, correct) {
  limpiarClaseEstado(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// //? BORRAR TODAS LAS CLASES

function limpiarClaseEstado(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// function crearClaseEstado(element, correct) {
//   limpiarClaseEstado(element);
//   if (correct) {
//     element.classList.add("correct");
//   } else {
//     element.classList.add("wrong");
//   }
// }

// // Remove all the classes
// function limpiarClaseEstado(element) {
//   element.classList.remove("correct");
//   element.classList.remove("wrong");
// }

// // //? GUARDAR PUNTUACIÓN

// function guardarPuntuacion() {
//   clearInterval(contadorID);
//   contadorJS.textContent = "Tiempo" + tiempoRestante;
//   setTimeout(function () {
//     localStorage.setItem("puntuacion", JSON,stringify(puntuacion))
//     contenedorPreguntas.classList.add("hide");
//     document.getElementById("contenedor-puntuacion").classList.remove("hide");
//     document.getElementById("tu-puntuacion").textContent =
//       "Tu puntación final es" + tiempoRestante;
//   }, 2000);
// }

// // //? CONSEGUIR PUNTUACIÓN DESDE LOCAL STORAGE

// let loadScores = function () {
//   if (!puntuacionGuardada) {
//     return false;
//   }
// };
// //Convertir puntuación de stringify a array

// puntuacionGuardada = JSON.parse(puntuacionGuardada);
// let nombres = document.querySelector("#campo-escribe-nombre")
// let nuevaPuntuacion = {
//     puntuacion: tiempoRestante,
//     nombres: nombres
// }
// puntuacionGuardada.push(nuevaPuntuacion);
// console.log(puntuacionGuardada);

// puntuacionGuardada.forEach((puntuacion) => {
//   campoEscribeNombre.innerText = puntuacion.nombres;
//   campoPuntuacion.innerText = puntuacion.puntuaciones;
// });
