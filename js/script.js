const box = document.querySelector("div");

let divX = 100;
let divY = 50;

box.style.left = `${divX}px`;
box.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

box.addEventListener('mousedown', (e) => {
    box.style.backgroundColor = "green";
    drawActive = !drawActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
});

box.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;

        box.style.left = `${divX}px`;
        box.style.top = `${divY}px`;
    }
});

box.addEventListener('mouseup', () => {
    box.style.backgroundColor = "black";
    drawActive = !drawActive;
});