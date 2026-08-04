// =========================
// TYPEWRITER
// =========================

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

// =========================
// OPEN BUTTON
// =========================

const button = document.getElementById("openBtn");
const envelopeBox = document.getElementById("envelope");
const music = document.getElementById("bgMusic");

button.addEventListener("click", function () {

    // Play music
    music.play().catch(function (err) {
        console.log(err);
    });

    // Hide button
    button.style.display = "none";

    // Show envelope
    envelopeBox.classList.remove("hidden");

});

// =========================
// ENVELOPE
// =========================

const envelope = document.querySelector(".envelope");

envelope.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        document.getElementById("letter").style.display = "block";

        document.getElementById("letter").scrollIntoView({
            behavior: "smooth"
        });

    }, 900);

});

// =========================
// HEARTS
// =========================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 500);

// =========================
// GALLERY
// =========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(i) {

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    slides[i].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 5000);

document.getElementById("nextPhoto").addEventListener("click", nextSlide);

document.getElementById("prevPhoto").addEventListener("click", previousSlide);

// =========================
// AUTO SCROLL
// =========================

const letter = document.getElementById("letter");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            setTimeout(function () {

                document.querySelector(".gallery").scrollIntoView({
                    behavior: "smooth"
                });

            }, 12000);

        }

    });

});

observer.observe(letter);
