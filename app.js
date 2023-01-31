const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
const topLink = document.querySelector(".top-link")
const bodyEL = document.body;

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 300) {
        topLink.classList.add('show-link');
        console.log(topLink.classList);
    } else {
        topLink.classList.remove('show-link');
        console.log(topLink.classList);
    }
})

const matchMode = window.matchMedia('(prefers-color-scheme:dark)');
if (matchMode.matches === true) {
    bodyEL.classList.add("dark");
} else {
    bodyEL.classList.remove("dark")
}