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

    const letter = document.getElementById("letter");

    letter.style.display = "block";

    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

});
