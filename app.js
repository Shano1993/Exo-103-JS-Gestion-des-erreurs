let result = document.getElementById('monDiv-error');
try {
    result.innerHTML = "Hello World";
}

catch (error) {
    alert("L'élément" + " " + result + " " + "n'existe pas !")
}