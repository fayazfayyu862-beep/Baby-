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

// =======================
// Open Button
// =======================

const button = document.getElementById("openBtn");

button.addEventListener("click", function () {

    // Play Music
    const music = document.getElementById("bgMusic");

    music.play().catch(function(error){
        console.log("Music Error:", error);
    });

    // Hide Button
    button.style.display = "none";

    // Show Envelope
    document.getElementById("envelope").style.display = "block";

});

// =======================
// Envelope
// =======================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function(){

    envelope.classList.add("open");

    setTimeout(function(){

        document.getElementById("letter").style.display = "block";

        document.getElementById("letter").scrollIntoView({
            behavior:"smooth"
        });

    },1000);

});

// =======================
// Floating Hearts
// =======================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (4 + Math.random()*3) + "s";

    hearts.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },7000);

}

setInterval(createHeart,500);

// =======================
// Gallery
// =======================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(function(slide){

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,4000);

document.getElementById("nextPhoto").addEventListener("click",function(){

    nextSlide();

});

document.getElementById("prevPhoto").addEventListener("click",function(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

});
