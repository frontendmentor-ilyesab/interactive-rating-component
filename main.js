const submitButton = document.querySelector("button");
const ratingBox = document.querySelector(".rating-box");
const thankYouTemplate = document.querySelector("template");

const ACTIVE_RATING_CLASS_NAME = "rating__active";

let activeRating = null;

function showThankYou() {
    if(!activeRating) return;
    document.body.removeChild(document.body.firstElementChild);
    document.body.append(thankYouTemplate.content.cloneNode(true));
    const ratingResult = document.querySelector(".rating__result");
    ratingResult.textContent = ratingResult.textContent.replace("x", activeRating.textContent);
}

function setRating({target: elem}) {
    if (elem.tagName !== "SPAN") return;
    if (activeRating !== elem) {
        activeRating?.classList.remove(ACTIVE_RATING_CLASS_NAME);
        elem.classList.add(ACTIVE_RATING_CLASS_NAME);
        activeRating = elem;
    } 
}

submitButton.addEventListener("click", showThankYou);
ratingBox.addEventListener("click", setRating);