document.body.addEventListener("click", (event) => {
    if ((event.clientX % 2 === 0) && (event.clientY % 2 === 0)) {
        document.body.style.backgroundColor = "red";
        document.querySelector("h1").textContent = `Moje współrzędne to: ${event.clientX}, ${event.clientY}`;
    } else if ((event.clientX % 2 != 0) && (event.clientY % 2 != 0)) {
        document.body.style.backgroundColor = "blue";
        document.querySelector("h1").textContent = `Moje współrzędne to: ${event.clientX}, ${event.clientY}`;
    } else {
        document.body.style.backgroundColor = "green";
        document.querySelector("h1").textContent = `Moje współrzędne to: ${event.clientX}, ${event.clientY}`;
    }
})