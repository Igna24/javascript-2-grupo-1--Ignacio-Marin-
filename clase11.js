// 1. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es par o impar.
function esParOImpar(numero) {
  return new Promise((resolve) => {
    resolve(numero % 2 === 0 ? "par" : "impar");
  });
}


// 2. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es primo o no.
function esPrimo(numero) {
  return new Promise((resolve, reject) => {
    if (numero <= 1) {
      resolve("no es primo");
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          resolve("no es primo");
        }
      }
      resolve("es primo");
    }
  });
}

//preubas
esParOImpar(4)
  .then((resultado) => console.log("Es un numero", resultado))
  .catch((error) => console.error(error.message));

esPrimo(7)
  .then((resultado) => console.log("el numero es", resultado))
  .catch((error) => console.error(error.message));
