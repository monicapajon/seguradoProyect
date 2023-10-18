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







