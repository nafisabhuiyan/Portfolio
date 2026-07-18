const words = [
    "Frontend Developer"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const text = document.getElementById("typed-text");
function typeEffect(){
    if(!text) return;
    let currentWord = words[wordIndex];
    if(!isDeleting){
        text.textContent =
        currentWord.substring(0,charIndex + 1);
        charIndex++;
        if(charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect,1500);
            return;
        }
    }
    else{
        text.textContent =
        currentWord.substring(0,charIndex - 1);
        charIndex--;
        if(charIndex === 0){
            isDeleting = false;
            wordIndex++;
            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect,isDeleting ? 60 : 120);
}
typeEffect();
const bar = document.getElementById("bar");
const menu = document.querySelector(".menu");
if(bar){
    bar.addEventListener("click",()=>{
        menu.classList.toggle("active");
    });
}
document.querySelectorAll(".menu a").forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("active");
    });
});
const cards = document.querySelectorAll(".project-card");
cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";
});
function revealCards(){
    cards.forEach(card=>{
        let position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            card.style.opacity="1";
            card.style.transform="translateY(0)";
        }
    });
}
window.addEventListener("scroll",revealCards);
revealCards();
const footer = document.querySelector("footer p");
if(footer){
    footer.innerHTML =
    "© " + new Date().getFullYear() +
    " Nafisa. All Rights Reserved.";
}