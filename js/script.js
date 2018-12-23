document.body.addEventListener("mousemove", (event) => {

    document.querySelector("h1").textContent = `Moja pozycja to: ${event.clientX}, ${event.clientY}`;

    // document.body.style.backgroundColor = `#${event.clientX}${event.clientY}`;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${red},${green},${blue}`;

})