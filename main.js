var moreButton = document.getElementById("more-button");
var details = document.getElementById("details");

let count = 0;
moreButton.addEventListener("click", (e) => {
    if (count == 0) {
        details.style.display = "block";
        count++;
    } else {
        details.style.display = "none";
        count--;
    }
});