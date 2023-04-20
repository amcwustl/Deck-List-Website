
const psych = document.getElementById("psych");
const dark = document.getElementById("dark");

psych.addEventListener("click", function(){
    const changeColor = confirm("Are you sure you want a more groovy experience?");
    if (changeColor) {
        document.body.style.backgroundImage = "radial-gradient(circle, #ff00ff, #00ffff, #ffff00, #ff00ff, #00ff00, #ff0000)";
    }
});

dark.addEventListener("click", function(){
    const changeColorDark = confirm("Paint it black?");
    if (changeColorDark) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
    }
});

