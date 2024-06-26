let randomNumber = Math.floor((Math.random() * 10) + 1);
let guess = 0;

document.getElementById("btnguess").onclick = function () {
    guess++;

    let x = parseInt(document.getElementById("guess").value);
    if (isNaN(x) || x < 1 || x > 10) {
        alert("Invalid number. type  between 1 and 10.");
        return;
    }
    if (x === randomNumber) {
        alert("You win...! "+ " GUESS NO."+ guess );
    } else if (x > randomNumber) {
        alert("Sorry...! Try a Smaller Number | NO."+ guess);
    } else {
        alert("Sorry...! Try a Greater Number | NO."+ guess);
    }
};