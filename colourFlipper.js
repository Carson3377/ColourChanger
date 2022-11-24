const colours = ["green", "red", "rgba(133, 122, 200)", "#f15025", "blue", "hsl(199, 45, 89)"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}