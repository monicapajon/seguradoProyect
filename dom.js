// @ts-nocheck
function showEvents(eventsToShow){
  const cardsContainer = document.getElementById('cards');
  const cardTemplate = document.getElementById('card-template');
  // @ts-ignore
  cardsContainer.textContent = ''

  eventsToShow.forEach(x => {
    const newCard = cardTemplate?.content.cloneNode(true);
    const img = newCard.querySelector('img');
    img.src = x.image
    

    cardsContainer?.appendChild(newCard)
  })
}

showEvents(events)
