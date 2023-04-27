const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  // Previene la acción por defecto del formulario
  
  const searchTerm = document.getElementById('search').value;
  
  // Aquí puedes utilizar el término de búsqueda como quieras
  console.log(`El término de búsqueda es: ${searchTerm}`);
});