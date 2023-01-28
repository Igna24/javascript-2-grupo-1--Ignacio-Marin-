// Prueba Diagnostico

// I Parte: Teoría

// 1. Respuesta pregunta 1

//Indique los diferentes tipos de datos primitivos y dé un ejemplo de cada uno.

// tipo Boolean que son los que son true o false
// tipo number que claro son los numeros reales
// tipo undefined que es el que es NaN
// tipo string que son las letras

// ====================================================================================================


// 2. Respuesta pregunta 2

//Indique las 2 maneras con las cuales se pueden agregar propiedades nuevas
// a un objeto, adjunte un ejemplo para cada caso.

// utilizando el operador " propiedad " (comillas) 
// con los [ propiedad ] (corchetes cuadrados)

// ====================================================================================================


// 3. Respuesta pregunta 3

//Explique qué función tiene el += en el siguiente fragmento de código, y qué
// sería lo que muestra el console.log en cada caso.

// let list = 1231
// list += 3234
// console.log(list)
// list += 'textoDePrueba'
// console.log(list)

// lo que es el valor de "+=" es un operador para poder sumar lo siguiente o lo que es a la derecha
//de un valor para agregar ese valor que da la suma a alguna variable

// el primer resultado del list lo que va a dar en la consola seria el valor de "4465" ya que es el resultado 
//de la suma establecida

// el segundo resultado del list lo que va a darnos en la consola o terminal seria el valor siguiente 
//"1231texto prueba" ya que esto es una suma pero es de un string y un number lo cual no se suma
// si no que solamente se concatenan


// ====================================================================================================


// 4. Respuesta pregunta 4

//Explique qué hace el operador != y !==, en cada caso, y el resultado de cada

// A.
// const flag = false
// flag != true
// flag !== true

// B.
// const num = 10
// num !="10"
// num !== "10"

// para empezar el operador "!=" es un operador de desigualdad o sea que compara dos valores y si son
// "true" te devuelve que son "tru" y si son "false" pues te devuelve "false"

// y el operador "!==" es de igualdad desigual lo cual no solo nos va a hacer como el operador anterior
// o sea que no solo va a comparar su valor si no que tambien el tipo de dato

// A) true
// B) true

// ====================================================================================================


// 5. Respuesta pregunta 5

//¿Qué es una función anónima?

// No tengo muy claro que sera una funcion anonima mas me suena que debe ser algun tipo de funcion 
// la cual no cuenta con un nombre asignado cuando la declaramos

// ====================================================================================================


// 6. Respuesta pregunta 6
//Explique la diferencia entre los function declaration y los function expression

// una function declaration son las que se le da la palabra " function " seguido de un nombre
//mas unos parentesis y llaves

// y un function expression es que se asigna a una variable o s pasada como argumento a otra funcion


// ====================================================================================================


// 7. Respuesta pregunta 7
//¿Qué es un método?

// son los que permiten que un objeto tenfa acciones o realice algo como por el ejemplo los  "to string"

// ====================================================================================================


// 8. Respuesta pregunta 8
//Explique con sus propias palabras qué es recursividad.

// la recursividad es cuando una funcion se empieza a llamar a ella misma para resolver algun problema
// o que se divide como en pequenos problemas hasta que no se pueda llamar asi misma para realizar la acion

// ====================================================================================================


// II Parte: Ejercicios

// 1. Respuesta pregunta 1

// Función para separar números pares e impares
//Crear un programa que permita separar una lista de números aleatorios en
// dos listas nuevas, de manera que se separen los valores en pares e impares.
// Dicho programa debe recibir una lista de números como parámetro e iterar
// dicha lista, de manera que se pueda verificar si el número es par o impar y
// agrupar correctamente en la lista de números pares o impares. Al final debe
// imprimirse ambas listas.

// Importante: para resolver este programa debe hacer uso del ciclo for,
// además debe usar funciones. Los nombres de las variables y funciones que
// defina deben ser claros.

function evenOdd(number) {
  let even = []
  let odd = []

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      even.push(number[i])
    } else {
      odd.push(number[i])
    }
  }
  console.log("par:" + even, "\n", "impar:" + odd)
}
let number = [1, 2, 3, 5, 47]

evenOdd(number)


// ====================================================================================================


// 2. Respuesta pregunta 2

// Dado la siguiente lista de usuarios, debe iterar cada uno e imprimir en el html,
// dentro del div con el ID usuarios, los siguientes datos:
// a. Dentro de un <p> el nombre del usuario y el apellido
// b. Dentro de otro <p> el cargo que ocupa actualmente
// c. Dentro de un <a> el link de social media correspondiente únicamente a
// Facebook

const usuarios = [
  {
    "nombre": "SammyShark",
    "cargo": "CEO",
    "social_media": [
      {
        "descripcion": "twitter",
        "link": "https://twitter.com"
      },
      {
        "descripcion": "facebook",
        "link": "https://www.facebook.com"
      },
      {
        "descripcion": "github",
        "link": "https://github.com"
      }
    ]
  },
  {
    "nombre": "ShakedaLouis",
    "cargo": "CTO",
    "social_media": [

      {
        "descripcion": "twitter",
        "link": "https://twitter.com"
      },
      {
        "descripcion": "facebook",
        "link": "https://www.facebook.com"
      },
      {
        "descripcion": "github",
        "link": "https://github.com"
      }
    ]
  },
  {
    "nombre": "Bill Zaheer",
    "cargo": "Project Manager",
    "social_media": [
      {
        "descripcion": "twitter",
        "link": "https://twitter.com"
      },
      {
        "descripcion": "facebook",
        "link": "https://www.facebook.com"
      },
      {
        "descripcion": "github",
        "link": "https://github.com"
      }
    ]
  },
]

const divUsuarios = document.getElementById("usuarios");

function createTexto(element, value, atribute) {
  const elementHtml = document.createElement(element)
  elementHtml.innerHTML = value
  if (atribute) {
    elementHtml.setAttribute(atribute.atribute, atribute.value)
  }
  return elementHtml
}

usuarios.forEach(usuario => {

  const pNombreApellido = createTexto("p", usuario.nombre)
  // const pNombreApellido = document.createElement("p");
  // pNombreApellido.innerHTML = usuario.nombre;
  // divUsuarios.appendChild(pNombreApellido);

  const pCargo = createTexto("p", usuario.cargo)
  // const pCargo = document.createElement("p");
  // pCargo.innerHTML = usuario.cargo;
  // divUsuarios.appendChild(pCargo);

  // const aFacebook = document.createElement("a");
  const linkFacebook = usuario.social_media.find(r => r.descripcion === 'facebook').link;
  // aFacebook.setAttribute("href", linkFacebook);
  const aFacebook = createTexto("a", "facebook", { atribute: "href", value: linkFacebook })
  // aFacebook.innerHTML = "Facebook";

  divUsuarios.append(pNombreApellido, pCargo, aFacebook);
});

// ====================================================================================================