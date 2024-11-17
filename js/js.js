let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    greetParagraph.innerHTML = "Thank you for contacting us " + fname + "!";
}