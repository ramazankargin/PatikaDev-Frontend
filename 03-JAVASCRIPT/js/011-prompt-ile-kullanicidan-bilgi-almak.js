 // ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Luften adinizi giriniz: ");

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`


function request()
{
    var word = prompt("Please entry a word", "Lutfen sadece kelime giriniz..")
    document.write(word)
}

 