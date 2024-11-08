const cardObjectDefinitions = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];

const cardBackImgPath = "/images/card-back-blue.png";

const cardContainerElem = document.querySelector(".card-container");

{
  //try to replicate this
  /* <div class="card">
  <div class="card-inner">
    <div class="card-front">
      <img src="/images/card-JackClubs.png" alt="" class="card-img" />
    </div>
    <div class="card-back">
      <img src="/images/card-back-Blue.png" alt="" class="card-img" />
    </div>
  </div>
</div>; */
}

const createCard = (cardItem) => {
  //create div elements
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");

  //create front and back image elements for a card
  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  //add class and id to card element
  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  //add class to inner,front, and back card element
  addClassToElement(cardInnerElem, "card-inner");
  addClassToElement(cardFrontElem, "card-front");
  addClassToElement(cardBackElem, "card-back");

  //add class and src to img
  addClassToElement(cardFrontImg, "card-img");
  addClassToElement(cardBackImg, "card-img");

  addSrcToImageElem(cardBackImg, cardBackImgPath);
  addSrcToImageElem(cardFrontImg, cardItem.imagePath);

  //add back and front image element as child clement to back card element
  addChildElement(cardBackElem, cardBackImg);
  addChildElement(cardFrontElem, cardFrontImg);

  //add back and front card element as child to inner element
  addChildElement(cardInnerElem, cardFrontElem);
  addChildElement(cardInnerElem, cardBackElem);

  //add inner element as child to card element
  addChildElement(cardElem, cardInnerElem);

  //add card element as child element to appropriate grid cell
};

const createElement = (elemType) => {
  return document.createElement(elemType);
};

const addClassToElement = (cardElem, className) => {
  cardElem.classList.add(className);
};

const addIdToElement = (cardElem, id) => {
  cardElem.id = id;
};

const addSrcToImageElem = (imgElem, src) => {
  imgElem.src = src;
};

const addChildElement = (parentElem, childElem) => {
  parentElem.appendChild(childElem);
};

function addCardToGridCell(card) {}
