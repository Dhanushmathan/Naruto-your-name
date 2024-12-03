const inputEl = document.getElementById("inputTxt");
const btnEl = document.querySelector("button");
const nameGreetEl = document.querySelector("#nameGreet");
const changeBGEl = document.querySelector("#changeBG");
const hokageTextEl = document.querySelector("#hokageTxt");

function captalizeWords(words) {
    // split the words
    const wordsWithSpaces = words.split(" ");

    const captilizeWords = wordsWithSpaces.map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    });

    return captilizeWords.join(" ");
}

changeBGEl.addEventListener("click", () => {

    const bodyEl = document.body
    let colorCode = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

    bodyEl.style.backgroundColor = colorCode;

    console.log(bodyEl);

})

btnEl.addEventListener("click", () => {
    showWelcomeCard()
})

function showWelcomeCard() {
    const inputName = inputEl.value.trim();

    // Form Validation : min 3 max 20
    if ((inputName.length > 3 && inputName.length <= 20)) {
        let text = inputEl.value

        nameGreetEl.style.display = "block"

        nameGreetEl.innerText = `👋 Hiii ${captalizeWords(text)}, Welcome to our Comrade`
    } else {
        alert("This is vaild not your name")
    }
}

document.addEventListener("DOMContentLoaded", () => {

    nameGreetEl.style.display = "none"

    // enter key
    document.addEventListener('keyup', (event) => {
        if (event.code === "Enter") {
            showWelcomeCard()
        }
    })



    // classname style added
    // hokageTextEl.className = "text-red-800 text-xl font-semibold";
    // classlist add
    // hokageTextEl.classList.add("text-red-800", "font-semibold", "text-3xl", "bg-gray-600")

    // classlist remove
    // hokageTextEl.classList.remove("bg-gray-600")

})
