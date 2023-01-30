const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 300) {
        topLink.classList.add('show-link');
        console.log(topLink.classList);
    } else{
        topLink.classList.remove('show-link');
        console.log(topLink.classList);
    }
})