const moreButton = document.getElementById("more-button");
const details = document.getElementById("details");

let count = 0;
moreButton.addEventListener("click", () => {
    if (count == 0) {
        details.style.display = "block";
        count++;
    } else {
        details.style.display = "none";
        count--;
    }
});

const hiddenSection = document.querySelector('.first-entry-container');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = hiddenSection.offsetTop;

    if (scrollPosition >= sectionPosition - window.innerHeight / 2) {
        hiddenSection.style.display = 'block';
    }
});

function goToWikipediaPage(stackItem) {
    let item = stackItem.textContent;
    switch(item) {
        case "Java":
            window.open("https://en.wikipedia.org/wiki/Java_(programming_language)");
            break;
        case "HTML":
            window.open("https://en.wikipedia.org/wiki/HTML");
            break;
        case "CSS":
            window.open("https://en.wikipedia.org/wiki/CSS");
            break;
        case "SQL":
            window.open("https://en.wikipedia.org/wiki/SQL");
            break;
        case "Arduino":
            window.open("https://en.wikipedia.org/wiki/Arduino");
            break;
    }
}