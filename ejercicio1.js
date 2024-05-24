const filtrar = element => element.name === "taller-programacion";

(async () => {
  
  // Leer archivos json
  let response = await fetch('1user.json');
  let user = await response.json();
  
  // Consultar usuario github
  let respuestaGithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
  let usuariogithub = await respuestaGithub.json();

  usuariogithub.forEach(element => {
    if (element.name === "taller-progrogramacion") {
      console.log(element);
    }
  });

  let data = usuariogithub.filter(filtrar);
  console.log(data);
  console.log(usuariogithub);

})();

console.log(response)
