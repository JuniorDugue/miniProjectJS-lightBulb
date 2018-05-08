// JavaScript Document

function bulbSwitch() {
    const bulb = document.getElementById("lightbulb");
    if (bulb.src.match("lighton")) {
        bulb.src = "img/lightoff.jpg";
    } else {
        bulb.src = "img/lighton.jpg";
    }
}  