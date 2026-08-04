const text = "Hey Baby...";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}

window.onload = function () {
    typeWriter();
};

const button = document.getElementById("openBtn");

button.addEventListener("click", function () {

    document.getElementById("envelope").style.display = "block";

});

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,500);
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function(){

    envelope.classList.add("open");

    setTimeout(function(){

        const letter = document.getElementById("letter");

        letter.style.display = "block";

        letter.scrollIntoView({
            behavior:"smooth"
        });

    },800);

});
