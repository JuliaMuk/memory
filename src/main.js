
import { images } from "../data.js";

images.sort(() => Math.random() - 0.5);
let openCards = [];


const container = document.querySelector('.container');
images.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('card' + item.id);
    const img = document.createElement('img');
    img.src = item.url;
    img.alt = "карточка";
    card.append(img);
    container.append(card);
    card.addEventListener("click", () => {
        if (openCards.length < 2) {
            card.classList.add("card-show");
            openCards.push(item);
            if (openCards.length == 2) {
                setTimeout(() => {
                    document.querySelector('.card' + openCards[0].id).classList.remove("card-show");
                    card.classList.remove("card-show");
                    openCards = []
                }, 5000)
            }
        }



    });
})





