const text = "Hey Baby...";

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("typewriter").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,150);

    }

}

window.onload = ()=>{

    typeWriter();

};

document.getElementById("openBtn").addEventListener("click",()=>{

    alert("Chapter 2 is coming... ❤️");

});
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("heart");

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration = (4+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,500);
