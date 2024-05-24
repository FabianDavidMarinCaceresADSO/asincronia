
fetch('user.json')
  .then(response => response.json())
  .then(data => {

    const aprendices = data.users.filter(user => user.aprendiz);

  
    aprendices.forEach(aprendiz => {
      console.log("Nombre:", aprendiz.name);
      console.log("Usuario:", aprendiz.user);
      console.log("Aprendiz:", aprendiz.aprendiz);
      console.log("-------------------------");
    });
  })
  .catch(error => {
    console.error('Se produjo un error:', error);
  });

