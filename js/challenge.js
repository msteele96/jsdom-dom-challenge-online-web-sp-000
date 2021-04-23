const counter = document.getElementById("counter");
let currentText = counter.innerText;
let currentNumber = parseInt(currentText);
const buttons = document.querySelectorAll("button")




document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const comment = document.getElementById("comment-form")

    startCounter();
    heart.addEventListener("click", addLike);
    plus.addEventListener("click", increaseCount);
    minus.addEventListener("click", decreaseCount);
    pause.addEventListener("click", toggleCounter);
    comment.addEventListener("submit", addComment);
    

});

function addLike() {
    const newLike = document.createElement("li");
    newLike.textContent = `${currentText} was liked`;
    document.querySelector("ul.likes").appendChild(newLike);
};

function startCounter() {
    intervID= setInterval(increaseCount, 1000);
    pause.innerText = "pause"
};

function increaseCount() {
    currentText = currentNumber++;
    counter.innerText = currentText;
};

function decreaseCount() {
    currentText = currentNumber--;
    counter.innerText = currentText;
};

function stopCounter() {
    clearInterval(intervID);
    pause.innerText = "resume";
};

function toggleCounter() {
    if (pause.innerText === "pause") {
        stopCounter()
        disableButtons()
    } else {
        startCounter()
        enableButtons()
    }
};

function disableButtons() {
    buttons.forEach(button => button.disabled = true)
    buttons[3].disabled = false
};

function enableButtons() {
    buttons.forEach(button => button.disabled = false)
};

const addComment = event => {
    event.preventDefault();
    const input = document.getElementById("comment-input");
    const newComment = document.createElement("p");
    newComment.textContent = input.value;
    document.getElementById("list").appendChild(newComment);
    event.target.reset();
};