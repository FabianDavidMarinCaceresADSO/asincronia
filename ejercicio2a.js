

fetch('userx.json')
  .then(response => response.json())
  .then(data => {
    // Filtrar los usuarios que son aprendices
    const aprendices = data.users.filter(user => user.aprendiz);

    // Crear un array de objetos con solo el nombre y el avatar de cada aprendiz
    const aprendicesInfo = aprendices.map(aprendiz => {
      return { Nombre: aprendiz.name, Avatar: aprendiz.avatar };
    });

    // Mostrar la tabla en la consola
    console.table(aprendicesInfo);
  })
  .catch(error => {
    console.error('Se produjo un error:', error);
  });