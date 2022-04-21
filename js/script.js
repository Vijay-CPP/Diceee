let button = document.getElementById("myBtn")

button.addEventListener("click", () => {
    let n = Math.random() * 6 + 1;
    n = Math.floor(n);

    address = "images/dice-" + n + ".png";
    let diceSound = document.getElementById("sound");
    diceSound.play();

    let image = document.querySelector("img");
    image.classList.add("anim");
    setTimeout(() => {
        image.classList.remove("anim");
    }, 500);
    image.classList.remove("dice-i");

    image.src = address;

});


