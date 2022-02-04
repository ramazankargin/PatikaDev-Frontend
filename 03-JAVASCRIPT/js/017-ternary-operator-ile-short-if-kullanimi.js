// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

// let userName = prompt("Kullanici Bilginiz Yaziniz")
// let info = document.querySelector("#info")

// // ternary kullanimi:
// // kosul ? dogruysa : yanlissa

// // userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("

// info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`

// let userName = prompt("Kullanici bilgilerinizi giriniz: ");
// let info = document.querySelector("#info");

// //ternary kullanimi: 
// // kosul dogruysa : yanlissa 
// // userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi :("

// info.innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi :("}`
  
var money = 40;
var canBuy = 
    (money < 17) ? "Satin alamazsiniz..":
    (money > 30) ? "Satin alabilirsiniz...":
    "Para miktarinizi girmeniz gerekmektedir..";

console.log(canBuy) //Satin alabilirsiniz..


