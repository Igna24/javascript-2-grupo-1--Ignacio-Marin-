class EstudianteConstructor {
  constructor(nombre, apellido, fechaNacimiento, codigoEstudiante, genero, carrera, cursosAprobados, cursosCursados) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.codigoEstudiante = codigoEstudiante;
    this.genero = genero;
    this.carrera = carrera;
    this.cursosAprobados = cursosAprobados || [];
    this.cursosCursados = cursosCursados.map((curso) => {
      if (curso.nota >= 70) {
        curso.estado = "aprobado";
      } else {
        curso.estado = "reprobado";
      }
      return curso;
    });
  }
}

const estudiantePrueba = new EstudianteConstructor("Test","Testing","1990-10-30","arq-0001",false,"Arquitectura",
  ["Introducción a la pintura", "Historia del Arte I"],
  [{ curso: "Prueba", nota: 80 }, { curso: "mate", nota: 70 }]
);

console.log(estudiantePrueba);