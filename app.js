
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

const renButton = document.getElementById("name-change");
const heading = document.getElementById("heading");

// isValid function adapted from here: https://codingbeautydev.com/blog/javascript-check-if-string-contains-only-letters-and-spaces/#:~:text=test()%20Method-,To%20check%20if%20a%20string%20contains%20only%20letters%20and%20spaces,Otherwise%2C%20it%20returns%20false%20.
function isValid(str) {
    return /^[A-Za-z\s]*$/.test(str);
};

renButton.addEventListener("click", function(){
    let name = ""
    while (true) {
        name = prompt("Please enter your name:");
        if (isValid(name) & name != null) {
            break;
        }
        else if (name == null) {
            console.log("User cancelled name input")
            return 1;
        }
        else {
            alert("Invalid input.  Please enter only letters and spaces");
        }
    }
    heading.textContent = name + " Renegade Leader";
});