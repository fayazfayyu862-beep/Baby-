const button = document.querySelector("button");

button.addEventListener("click", () => {
    button.innerHTML = "❤️ Nice to meet you!";
    button.style.background = "#ff4d88";

    setTimeout(() => {
        button.innerHTML = "Talk to Me";
        button.style.background = "#ff8fab";
    }, 2500);
});
