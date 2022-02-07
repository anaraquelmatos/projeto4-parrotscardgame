let firstCard, secondCard;
let cards;
const all = [];
let cardHTML;
let closeCard = false;
const backGame = [
   'bobrossparrot.gif',
   'explodyparrot.gif',
   'fiestaparrot.gif',
   'metalparrot.gif',
   'revertitparrot.gif',
   'tripletsparrot.gif',
   'unicornparrot.gif'
]

function askUser() {

   while ((cards % 2 !== 0) || (cards < 4) || (cards > 14) || (cards === "") || (cards === null)) {
      cards = parseInt(prompt("Olá! Quantas cartas você deseja para iniciar o jogo? Escolha um número par de 1 a 14!"));
   }
}
askUser()

function selectCards() {


   for (let i = 0; i < cards / 2; i++) {

      cardHTML = `
      <div class = "card"  data-identifier="card">
      <img class = "front-end" data-identifier="front-face" src="Images/front.png" data-card="${backGame[i]}"/>
      <img class = "back-end" data-identifier="back-face" onclick="clickCards()" src="Images/${backGame[i]}"/>
      </div>`

      all.push(cardHTML);
      all.push(cardHTML);

   }

   all.sort(compare);


   for (i = 0; i < all.length; i++) {

      const card = document.querySelector(".all-cards");
      card.innerHTML += all[i];
   }

}

function compare() {
   return Math.random() - 0.5;
}


selectCards()

const changes = document.querySelectorAll(".card");

function clickCards() {

   if (closeCard === true) return false;

  this.classList.add("flip");

   if (!firstCard) {

      firstCard.innerHTML = this.innerHTML;

      return true;
   }

   if (!secondCard) {

      secondCard.innerHTML = this.innerHTML;

      return true;

   }

   searchMatch();

}


function searchMatch() {
  let = match = firstCard === secondCard;


  if (firstCard !== secondCard) {

    returnCards();

   }else{
      cleanCards();
 }

}

function returnCards() {
  closeCard = true;
   setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      cleanCards();
   }, 1000);


}

function cleanCards(match = false) {

   if (match) {
      firstCard.removeEventListener('click', clickCards);
      secondCard.removeEventListener('click', clickCards);
   }
   [firstCard, secondCard, closeCard] = [null, null, false];
}
changes.forEach(card => card.addEventListener('click', clickCards));