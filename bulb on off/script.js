// document.getElementById('toggleButton').addEventListener('click', function() {
//     const bulb = document.getElementById('bulb');
//     const button = document.getElementById('toggleButton');

//     if (bulb.src.includes('bulb_off.png')) {
//         bulb.src = 'img/off.jpg';
//         button.textContent = 'Turn Off';
//     } else {
//         bulb.src = 'img/on';
//         button.textContent = 'Turn On';
//     }
// });

function turnOn() {
    document.getElementById("bulbImage").src = "img/on.png";
}

function turnOff() {
    document.getElementById("bulbImage").src = "img/bulb.png";
}
