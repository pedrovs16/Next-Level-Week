//COLOCA E TIRAR ABA DE PESQUISA
const aSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

aSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})
close.addEventListener("click", () => {
    modal.classList.add("hide")
})