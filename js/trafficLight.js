function redlight() {
    let red = document.querySelector("#redLight");
    red.classList.toggle("red");
}

function yellowlight() {
    let yellow = document.querySelector("#yellowLight");
    yellow.classList.toggle("yellow");
}

function greenlight() {
    let green = document.querySelector("#greenLight");
    green.classList.toggle("green");
}

const wait = (time) => new Promise((res) => setTimeout(res, time));
async function tl() {
    redlight();
    await wait(5000);
    redlight();
    yellowlight();
    await wait(3000);
    yellowlight();
    greenlight();
    await wait(5000);
    greenlight();
    yellowlight();
    await wait(3000);
    yellowlight();
}

tl();
setInterval(tl, 16_000);