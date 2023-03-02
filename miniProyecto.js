// Mini proyecto: Libreria
// Crear un programa que simule una librería. Debe tener las siguientes características:
// 1. Debe tener una clase Libreria que tenga las siguientes propiedades:
//      1.1 Nombre
//      1.2. Dirección
//      1.3. Libros // lista de libros
//      1.4. Comics // lista de comics
//      1.5. Debe contar un método que permita agregar libros y comics a la librería. CHECK
class libreria {
  constructor(nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion
    this.libros = libros || []
    this.comics = comics || []
  }

  agregarlibro(libro) {
    this.libros.push(libro)
  }

  agregarcomic(comic) {
    this.comics.push(comic)
  }

}

// 2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades:
//  título, autor, precio, cantidad y año. CHECK

class libro {
  #cantidad
  #anio
  constructor(titulo, autor, precio, cantidad, anio) {
    this.titulo = titulo
    this.autor = autor
    this.precio = precio
    this.#cantidad = cantidad
    this.#anio = anio
  }
  get cantidad() {
    return this.#cantidad;
  }
  set cantidad(cantidad) {
    this.#cantidad = cantidad;
  }

  get anio() {
    return this.#anio;
  }
  set anio(anio) {
    this.#anio = anio;
  }


  getInfo() {
    let info = `El titulo del libro es ${this.titulo}`
    if (this.#cantidad <= 0) {
      info = "No hay ejemplares disponibles"
    }
    return info
  }


}

// 3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades
//  extras: dibujante, editorial, volumen. CHECK
class comic extends libro {
  #cantidad
  constructor(titulo, autor, precio, cantidad, anio, dibujante, editorial, volumen) {
    super(titulo, autor, precio, cantidad, anio)
    this.dibujante = dibujante
    this.editorial = editorial
    this.volumen = volumen
  }
  getInfo() {
    let info = `El titulo del libro es ${this.titulo}`
    if (this.#cantidad <= 0) {
      info = "No hay ejemplares disponibles"
    }
    return info
  }
}

// 4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden
//  modificar la cantidad de libros disponibles, o el año, de igual forma deben ser propiedades
// privadas
// // ** tener en cuenta que para poder acceder y modificar las propiedades privadas debe 
// usar getters y setters

// 5. Debe haber un método que permita obtener la información completa de un libro o comic,
//  este debe llamarse "getInfo". CHECK

// 6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga
//  "No hay ejemplares disponibles". CHECK

const libreria1 = new libreria("primer dato", "segundo dato", ["un libro", "dos libro"], ["un comic", "dos comic"])

const libro1 = new libro("libro x", "nacho", 2000, 0, 2023)
const libro2 = new libro(" libro y", "juan", 255, 0, 2023)
const comic1 = new comic("comi1", "darrell", 256, 0, 5875, "marin", "asadf", 8)


console.log(libro1.getInfo())
console.log(comic1.getInfo())
console.log(libro2.getInfo())


libro1.anio = 655
console.log(`los anios modificados en libros es ${libro1.anio}`)

libro1.cantidad = 10;
console.log(`la cantidad de libros modificada es ${libro1.cantidad}`)

comic1.cantidad = 88
console.log(`la cantidad de comics modificada es ${comic1.cantidad}`)

comic1.anio = 4500
console.log(`los anios de comic modificados son ${comic1.anio}`)

console.log(libreria1)