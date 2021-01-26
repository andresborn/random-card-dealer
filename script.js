const cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
const cardSuits = [`<i class="bi bi-suit-club-fill"></i>`,`<i class="bi bi-suit-spade-fill"></i>`,`<i class="bi bi-suit-heart-fill" style="color:red;"></i>`,`<i class="bi bi-suit-diamond-fill" style="color:red;"></i>`];

const icon1 = document.querySelector("#icon1-paragraph")
const icon2 = document.querySelector("#icon2-paragraph")
const number = document.querySelector("#number-paragraph")
const button = document.querySelector("#button")

const getRandom = (array) => {
    const rand = Math.floor((Math.random() * array.length))
    return array[rand]
}
console.log(getRandom(cardNumbers))
console.log(getRandom(cardSuits))

const randomCard  = () => {
    number.textContent = getRandom(cardNumbers)
    const suit = getRandom(cardSuits)
    icon1.innerHTML = suit
    icon2.innerHTML = suit
}

button.addEventListener("click", randomCard)