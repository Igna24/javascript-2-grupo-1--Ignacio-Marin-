// 1. Crear una clase Persona que reciba nombre, apellido, id, edad y ubicación.
// Agregar un método que se llame saludar, y que retorne un saludo con el nombre y apellido de la persona.

class Persona {
  constructor(nombre, apellido, id, edad, ubicacion) {
    this.nombre = nombre
    this.apellido = apellido
    this.id = id
    this.edad = edad
    this.ubicacion = ubicacion
  }
  saludar() {
    return `Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`
  }
}

// 2. Crear una clase Empleado que herede de Persona y reciba un parámetro sueldo, posición,
//  departamento, ingreso.
// Agregar un método que se llame imprimirSueldo, que imprima el sueldo anual del empleado,

class Empleado extends Persona {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso) {
    super(nombre, apellido, id, edad, ubicacion)
    this.sueldo = sueldo
    this.posicion = posicion
    this.departamento = departamento
    this.ingreso = ingreso
  }
  imprimirSueldo() {
    const anual = this.sueldo * 12
    console.log(`El sueldo anual de ${this.nombre} ${this.apellido} es ${anual}`)
  }
}

const personaResultado = new Persona("ignacio", "Marin", "1 1757 0554", 24, "Santa Ana")
console.log(personaResultado.saludar())

const empleadoResultado = new Empleado("Natalia", "Marin", "1 2345 6789", 30, "San Jose",
  2000, "Gerente", "Ventas", "01/01/2020");
empleadoResultado.imprimirSueldo();

// 3. Crear una clase Desarrollador que herede de Empleado, Desarrollador debe recibir
//  un parámetro llamado lenguajes (tiene que ser un array de objetos):
//   debe incluir nombreDeLenguaje y conocimiento (es un valor numérico del 1 al 100).
// Agregar un método se llame lenguajeDominado y que imprima el lenguaje que domina
//  el desarrollador:
// el lenguaje que domina depende del valor que tenga en la propiedad conocimiento,
//  de manera que se imprimar le lenguaje con mayor valor numérico
// Para el punto 3: Agregar un método que se llame agregarLenguaje para agregar
//  un nuevo lenguaje al array de lenguajes.

class Desarrollador extends Empleado {
  constructor(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso, lenguajes) {
    super(nombre, apellido, id, edad, ubicacion, sueldo, posicion, departamento, ingreso);
    this.lenguajes = lenguajes;
  }

  lenguajeDominado() {
    let lenguajeMayor = this.lenguajes[0];
    for (let i = 1; i < this.lenguajes.length; i++) {
      if (this.lenguajes[i].conocimiento > lenguajeMayor.conocimiento) {
        lenguajeMayor = this.lenguajes[i];
      }
    }
    return `El lenguaje dominado es ${lenguajeMayor.nombreDeLenguaje}.`;
  }

  agregarLenguaje(nombreDeLenguaje, conocimiento) {
    const nuevoLenguaje = { nombreDeLenguaje, conocimiento };
    this.lenguajes.push(nuevoLenguaje);
  }
}

const desarrollador1 = new Desarrollador("Luis", "González", 246810, 30,
  "Monterrey", 20000, "Desarrollador Senior", "Tecnología", "2020-01-01", [
  { nombreDeLenguaje: "JavaScript", conocimiento: 90 },
  { nombreDeLenguaje: "Python", conocimiento: 80 },
  { nombreDeLenguaje: "Java", conocimiento: 70 }
]);

console.log(desarrollador1.lenguajeDominado())

desarrollador1.agregarLenguaje("Angular", 50)
console.log(desarrollador1.lenguajes)