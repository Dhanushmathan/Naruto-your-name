const ulEl = document.querySelector("#hokageUl");
const liEl = document.createElement("li")


liEl.innerText = "Naruto Hokage"

liEl.setAttribute("class", "bg-pink-700 text-white px-4 py-2 font-semibold rounded")

// comment
const commentEl = document.createComment("This is Command")

ulEl.append(liEl, commentEl)


const ulFragment = document.createDocumentFragment()

for (let i = 1; i <= 10; i++) {
    const liEl2 = document.createElement("li");
    liEl2.innerText = `Number ${i}`;
    liEl2.setAttribute("class", "bg-pink-700 text-white px-4 py-2 mt-2 font-semibold rounded");
    ulFragment.append(liEl2);
}
ulEl.append(ulFragment);