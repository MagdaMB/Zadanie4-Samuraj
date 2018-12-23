document.body.addEventListener("mousemove", (event) => {

    document.querySelector("h1").textContent = `Moja pozycja to: ${event.clientX}, ${event.clientY}`;

    document.body.style.backgroundColor = `#${event.clientX}${event.clientY}`;


})