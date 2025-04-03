

let cards = ["./src/chocolate.jpg", "./src/chocolate.jpg",
    "./src/cupcake.jpeg", "./src/cupcake.jpeg",
    "./src/donuts.jpg", "./src/donuts.jpg",
    "./src/icecream.jpg", "./src/icecream.jpg",
    "./src/icecream2.png", "./src/icecream2.png",
    "./src/lollypop.jpg", "./src/lollypop.jpg",
    "./src/brigadeiro.jpg", "./src/brigadeiro.jpg",
    "./src/pudim.jpg", "./src/pudim.jpg",
    "./src/bombom.jpg", "./src/bombom.jpg",
    "./src/macarrom.jpg", "./src/macarrom.jpg",
]
let openCards = [];

let shuffleCards = cards.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < cards.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    img.src = shuffleCards[i];
    box.appendChild(img)
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];
    if (document.querySelectorAll(".boxMatch").length === cards.length) {
     openPopup()
    }
}

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
 
}