let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    //instrukcja if
    // if (e.keyCode === 38 && red >= 0) {
    //     red -= 5;
    //     green -= 5;
    //     blue -= 5;
    // } else if (e.keyCode === 40 && red <= 255) {
    //     red += 5;
    //     green += 5;
    //     blue += 5;
    // } else {
    //     alert("Naciśnij strzałkę w dół lub w górę!!!");
    // }

    //instrukcja switch
    switch (e.keyCode) {
        case 38:
            red -= 5;
            green -= 5;
            blue -= 5;
            break;
        case 40:
            red += 5;
            green += 5;
            blue += 5;
            break;
        default:
            alert("Naciśnij strzałkę w dół lub w górę!!!");
    }

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

window.addEventListener('keydown', changeColor);