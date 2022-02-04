const button = document.querySelector("#button");
button.addEventListener('dblclick', clickFunction);

function clickFunction(){
    document.getElementById("button").innerHTML = "NEW FORM"
}