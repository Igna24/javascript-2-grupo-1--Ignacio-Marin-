const product = {
  name: 'productName',
  price: 200,
  quantity: 50,
  tax: 13,
  category: ['home'],
  subCategory: 'furniture',
  total: function () {
    return this.price + (this.price * this.tax / 100);
  },
};

product.nuevoKey = 'es un nuevo key';
product.category.push('xcategory');
delete product.subCategory;

function estudianteNuevo(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, cursosMatriculados, cursosCursados) {
  const datos = {};

  datos.nombre = nombre;
  datos.apellidos = apellidos;
  datos.fechaNacimiento = fechaNacimiento;
  datos.id = id;
  datos.nuevoIngreso = nuevoIngreso;
  datos.carrera = carrera;
  datos.cursosMatriculados = cursosMatriculados || [];
  datos.cursosCursados = cursosCursados || [];
  datos.cursosAprobados = [];


  datos.matricular = function (curso) {
    this.cursosMatriculados.push(curso);
  };

  datos.retirarMatricula = function (curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  };

  datos.estadoCurso = function(curso){
    if (curso.nota >= 70){
      curso.estado = "aprobado"
    }else{
      curso.estado = "reprobado"
    }
    this.cursosAprobados.push(curso)
  }

  return datos;
}

const andy = estudianteNuevo('Andy', 'Smith', '1990-10-30', 'a-0001', true,
  'Historía del Arte', ['Introducción a la pintura']);
const ana = estudianteNuevo('Ana', 'Patel', '1990-10-30', 'arq-0001', true,
  'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I']);

const listaEstudiantes = [andy, ana];

andy.matricular('Historia del Arte I');
ana.retirarMatricula('Historia del Arte I');

function EstudianteConstructor(nombre, apellidos, fechaNacimiento, id,
  nuevoIngreso, carrera, cursosMatriculados, cursosCursados, cursosAprobados) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNacimiento = fechaNacimiento;
  this.id = id;
  this.nuevoIngreso = nuevoIngreso;
  this.carrera = carrera;
  this.cursosMatriculados = cursosMatriculados || [];
  this.cursosCursados = cursosCursados || [];
  this.cursosAprobados = cursosAprobados || []

  this.matricular = function (curso) {
    this.cursosMatriculados.push(curso);
  }; 

  this.retirarMatricula = function (curso) {
    const index = this.cursosMatriculados.indexOf(curso);
    if (index > -1) {
      this.cursosMatriculados.splice(index, 1);
    }
  };

  this.estadoCurso = function(curso) {
    if (curso.nota >= 70) {
      curso.estado = "aprobado"
    } else {
      curso.estado = "reprobado"
    }
    this.cursosAprobados.push(curso)
  }

}

const estudiantePrueba = new EstudianteConstructor('Test', 'Testing', '1990-10-30',
  'arq-0001', false, 'Arquitectura', ['Introducción a la pintura', 'Historia del Arte I'],
  [{ curso: 'Prueba', nota: 80 }, { curso: "mate", nota: 70 }]);

console.log(estudiantePrueba);

console.log("------------------------------")

console.log(estudiantePrueba.estadoCurso)

// 1. Crear un método que permita agregar cursos a la lista de cursos aprobados.
// El usuario debe poder ingresar un objeto con el nombre del curso, nota.
// 2. Y dependiendo la nota se agrega de manera automática una propiedad nueva que 
// se llama estado: cuyo valor sera de aprobado (nota > 70) o reprobado (nota < 70)