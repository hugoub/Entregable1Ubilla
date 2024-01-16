alert("Evaluador de películas")

let lista_peliculas = []
let continuar = true

function agregar_pelicula() {
  let nombre = prompt("nombre de pelicula")
  let descripcion = prompt("descripcion")
  let nota = prompt("nota")

  let pelicula = {
    nombre: nombre, 
    descripcion: descripcion, 
    nota: nota
  }

  lista_peliculas.push(pelicula)
}

function imprimir_peliculas(){
  console.log("Peliculas:")
  for (let pelicula of lista_peliculas) {
    console.log("Nombre:" + pelicula.nombre + "\n" + "Descripcion: " + pelicula.descripcion + "\n" + "Nota: " + pelicula.nota)
  }
}

function eliminar_ultima_pelicula(){
  lista_peliculas.pop()
}

function eliminar_primera_pelicula(){
  lista_peliculas.shift()
}

function eliminar_pelicula_nombre(){
  let nombre = prompt("Ingrese nombre de pelicula")
  let value = lista_peliculas.findIndex(pelicula => pelicula.nombre === nombre)

  if (value == undefined) {
    alert("Nombre no encontrado")
    console.log("Nombre no encontrado")
  }
  else {
    alert("Pelicula borrada exitosamente")
    console.log("Pelicula borrada exitosamente")
    lista_peliculas.splice(value, 1)
  }
}

while (continuar) {
  instruccion = prompt("Bienvenido al evaluador de peliculas \n Seleccione una opción \
  \n 1: Agregar Pelicula \n 2: Imprimir peliculas en consola \n 3: Eliminar última Pelicula agregada \
  \n 4: Eliminar Pelicula por Nombre \n 10: Salir")

  switch (instruccion){
    case "1":
      agregar_pelicula()
      break
    case "2":
      imprimir_peliculas()
      break
    case "3":
      eliminar_ultima_pelicula()
      break
    case "4":
      eliminar_pelicula_nombre()
      break
    case "10":
      continuar = false
      break
    case null:
      continuar = false
      break
    default:
      alert("Opción no reconocida. Por favor, seleccione una opción.")
  }
}

