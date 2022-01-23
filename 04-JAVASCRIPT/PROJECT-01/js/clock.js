let firstName   = prompt("Lütfen adınızı giriniz.")
let secondName  = prompt("Lütfen soyadınızı giriniz.")

let myName              = document.querySelector("#myName")
myName.innerHTML        = `${firstName}`
let myLastName          = document.querySelector("#myLastName")
myLastName.innerHTML    = `${secondName}`
firstName.length    < 0    ? firstName  : "Adinizi girmediniz."
secondName.length   < 0   ? secondName : "Soyadi bilginizi girmediniz."

myName.innerHTML        = `${firstName  ? firstName     : "Adinizi belirtmediniz!"}`
myLastName.innerHTML    = `${secondName ? secondName    : "Soyadinizi belirtmediniz!"}`

function showTime() {
    let d    = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba", "Perşembe","Cuma","Cumartesi"];
    let time = document.querySelector('#myClock')
    
    time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}: Günlerden : ${days[d.getUTCDay()]}`
    setTimeout(showTime, 1000);
}
showTime();