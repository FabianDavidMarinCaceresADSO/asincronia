// se definiendo la función flecha  filtrar, luego se filtran los elemtos que tenga como nombre taller-programacion devuelve true
// si el nombre del elemento es taller-programacion 
const filtrar = element => element.name === "taller-programacion";

// se solicita al archivo json para ver su contenido
fetch('user.json')
  
  // La promesa devuelta por fetch 'user.json' se resuelve con un objeto de respuesta 
  .then(response => response.json())
  .then(user => {
    // Consultar repositorios del usuario en GitHub
    return fetch(`https://api.github.com/users/${user.name}/repos`);
  })
  // Recibe los datos JSON de los repositorios de GitHub como argumento, que en este caso se llama usuariogithub
  .then(respuestaGithub => {
    if (!respuestaGithub.ok) {
      throw new Error(`Error al consultar GitHub: ${respuestaGithub.statusText}`);
    }
    // return response.json(); está solicitando al objeto response que extraiga su cuerpo
    return respuestaGithub.json();
  })
  .then(usuariogithub => {
    // mira  sobre cada repositorio
    usuariogithub.forEach(element => {
      // Verificar si el nombre del repositorio es "taller-programacion"
      if (element.name === "taller-programacion") {
        // Imprimir el repositorio en la consola
        console.log(element);
      }
    });

    // Filtrar los repositorios cuyo nombre sea "taller-programacion"
    let data = usuariogithub.filter(filtrar);
    // Imprimir los repositorios filtrados en la consola
    console.log(data);
    // Imprimir todos los repositorios en la consola
    console.log(usuariogithub);
  })
  
