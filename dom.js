//--------------------------------- CHECKBOX------------------------------------------
// Obtener el contenedor de búsqueda
const searchContainer = document.getElementById('search');

// Crear un div para los checkboxes
const checkboxDiv = document.createElement('div');
checkboxDiv.classList.add('field', 'is-pulled-left'); // Usamos 'is-pulled-left' para alinear a la izquierda

// Crear etiquetas para cada checkbox
const categories = ["Food", "Museum", "Concert", "Race", "Books", "Cinema", "Party"];

categories.forEach(category => {
  const checkboxLabel = document.createElement('label');
  checkboxLabel.classList.add('checkbox');

  const checkboxInput = document.createElement('input');
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.setAttribute('id', category.toLowerCase()); // Usamos el nombre de la categoría en minúsculas como ID

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(document.createTextNode(category));

  checkboxDiv.appendChild(checkboxLabel);
});

// Agregar el div de checkboxes al contenedor de búsqueda
searchContainer.appendChild(checkboxDiv);


//----------------------------------- SEARCH--------------------------------------------

// Crear un div para el campo de búsqueda
const searchDiv = document.createElement('div');
searchDiv.classList.add('navbar-item', 'is-pulled-right'); // Usamos 'is-pulled-right' para alinear a la derecha

// Crear el campo de búsqueda
const searchInput = document.createElement('input');
searchInput.classList.add('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Buscar eventos');

// Agregar el campo de búsqueda al div
searchDiv.appendChild(searchInput);
searchContainer.appendChild(searchDiv);

//----------------------------------- CARDS----------------------------------------------

// @ts-nocheck
function showEvents(eventsToShow) {
  const cardsContainer = document.getElementById('cards');
  const cardTemplate = document.getElementById('card-template');

  // Limpiar el contenido del contenedor de tarjetas
  cardsContainer.innerHTML = '';

  eventsToShow.forEach(event => {
    const newCard = cardTemplate.content.cloneNode(true);

    // Modificar el contenido de la tarjeta con los datos del evento
    const cardImage = newCard.querySelector('.card-image img');
    cardImage.src = event.image;

    const title = newCard.querySelector('.title');
    title.textContent = event.name;

    const subtitle = newCard.querySelector('.subtitle');
    subtitle.textContent = event.description;

    const price = newCard.querySelector('.is-size-6');
    price.textContent = `Price: $${event.price}`;

    const detailsLink = newCard.querySelector('.button');
    detailsLink.href = `../pages/details.html?id=${event._id}`;
    detailsLink.textContent = 'Details';

    cardsContainer.appendChild(newCard);
  });
}

// Llamar a la función para mostrar las tarjetas
showEvents(events);

// * ----------------------------------------------------------------------------
// *                                Vistas
// * ----------------------------------------------------------------------------


// const mostrarVista = (nombre) => {
//  const vistas = $$('.vista')

//  for (let vista of vistas) {
//    vista.classList.add('is-hidden')
//  }

//  $(`#vista-${nombre}`).classList.remove('is-hidden')
// }

// Define la función mostrarVista que toma el nombre de la vista como argumento
// const mostrarVista = (nombre) => {
//   // Obtén todas las vistas (secciones)
//   const vistas = document.querySelectorAll('.vista');

//   // Recorre todas las vistas y ocúltalas
//   vistas.forEach((vista) => {
//     vista.classList.add('is-hidden');
//   });

//   // Muestra la vista que coincide con el nombre proporcionado
//   const vistaAMostrar = document.getElementById(`vista-${nombre}`);
//   if (vistaAMostrar) {
//     vistaAMostrar.classList.remove('is-hidden');
//   }
// };

// // Llama a la función mostrarVista con el nombre de la vista que deseas mostrar
// // Por ejemplo, para mostrar la vista "home":
// mostrarVista('contact');


// DOM.js

// Esta función muestra una vista y oculta las demás
// function mostrarVista(nombre) {
//   const vistas = document.querySelectorAll('.vista');

//   for (const vista of vistas) {
//     vista.classList.add('is-hidden');
//   }

//   const vistaAMostrar = document.getElementById(`ver-${nombre}`);
//   vistaAMostrar.classList.remove('is-hidden');
// }

// // Añade un evento de escucha para cada enlace del menú
// const enlacesDelMenu = document.querySelectorAll('.navbar-item');
// enlacesDelMenu.forEach(enlace => {
//   enlace.addEventListener('click', (event) => {
//     const vistaAMostrar = event.target.id.replace('ver-', ''); // Elimina "ver-" para obtener el nombre de la vista
//     mostrarVista(vistaAMostrar);
//   });
// });

// * ----------------------------------------------------------------------------
// *                                Vistas
// * ----------------------------------------------------------------------------
// */Ahorradas

// const mostrarVista = (nombre) => {
//   const vistas = $$('.vista')

//   for (let vista of vistas) {
//     vista.classList.add('is-hidden')
//   }

//   $(`#vista-${nombre}`).classList.remove('is-hidden')
// }



// const inicializarVistas = () => {
//   $('#ver-home').addEventListener('click', () => mostrarVista('home'))
//   $('#ver-upcomingEvents').addEventListener('click', () =>
//     mostrarVista('upcomingEvents')
//   )
//   $('#ver-pastEvents').addEventListener('click', () => mostrarVista('pastEvents'))
//   $('#ver-stats').addEventListener('click', () => mostrarVista('verStats'))
// }

// inicializarVistas()

// window.onload = inicializar

// friend

// DOM.js

//  función que muestra una vista y oculta las demás
function mostrarVista(nombre) {
  const vistas = document.querySelectorAll('.vista');

  for (const vista of vistas) {
    vista.classList.add('is-hidden');
  }

  const vistaAMostrar = document.getElementById(`ver-${nombre}`);
  vistaAMostrar.classList.remove('is-hidden');
}

// Añado un evento de escucha para cada enlace del menú
const enlacesDelMenu = document.querySelectorAll('.navbar-item');
enlacesDelMenu.forEach(enlace => {
  enlace.addEventListener('click', (event) => {
    const vistaAMostrar = event.target.id.replace('ver-', ''); // Elimina "ver-" para obtener el nombre de la vista
    mostrarVista(vistaAMostrar);
  });
});

// 
// El código  es la implementación de la función `mostrarVista(nombre)`.
//  Esta función se utiliza para mostrar una vista específica y ocultar las demás 
//cuando se hace clic en un enlace del menú. 

// 1. `mostrarVista(nombre)`: Esta función recibe un parámetro llamado `nombre`,
//  que representa el nombre de la vista que deseas mostrar. Primero, obtiene todas
//   las vistas con la clase "vista" y las oculta al agregar la clase "is-hidden".
//    Luego, encuentra la vista específica que deseas mostrar utilizando el `id` basado en 
//    el nombre y elimina la clase "is-hidden", lo que la hace visible.

// 2. A continuación, se agregó un evento de escucha a todos los elementos con
//  la clase "navbar-item" en el menú. Cuando se hace clic en uno de estos enlaces,
//   el evento captura el nombre de la vista a mostrar eliminando "ver-" del `id` del enlace y luego llama a la función `mostrarVista(nombre)` para mostrar esa vista y ocultar las demás.

// Este código es una forma efectiva de cambiar entre las secciones de tu página 
// web cuando se hace clic en los enlaces del menú. La función `mostrarVista(nombre)` es
//  la que maneja la lógica detrás de este comportamiento. Gracias por proporcionar el código
//   y la aclaración.








