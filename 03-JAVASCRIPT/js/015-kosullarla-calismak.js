// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// let username = prompt("Kullanici Adinizi Giriniz: ")
// // eger kullanici bilgisi varsa ekrana ismini yazdir
// // eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// // if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

// if(username.length > 0){
//     console.log(`Kullanici Bilginiz:rara ${username}`)
// } else{
//     console.log("Bilgi bulunmamaktadır.")
// }

// var x = 5;
// var y = 7;

// if(x > y){
//     console.log(x + " "+ "sayisi" + " " + y + " " +  "sayisindan büyüktür.");
// } else{
//     console.log(y + " " + "sayisi" + " " + x + " " + "sayisindan büyüktür.");
// }


// var ogrVizeNot = 29; 

// var ogrFinalNot = 60;

// var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

// if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
//     console.log("Not Ortalamaniz: " + ogrOrtalama + " " + "FF (kaldınız.)");
// }
// else if(ogrOrtalama >= 31 && ogrOrtalama <= 40) {
//     console.log("Not Ortalamaniz: " + " " + ogrOrtalama + "DC - KOŞULLU");
// }
// else if(ogrOrtalama >= 50 && ogrOrtalama <=84) {
//     console.log("Not Ortalamanız: "+ " " + ogrOrtalama + " " + "CC - GEÇTİNİZ");
// }
// else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
//     console.log("Not Ortalamaniz: " + " "+ ogrOrtalama + " " + "AA - GEÇTİNİZ. TEBRİKLER");
// }


// var randomSayi = Math.floor(Math.random() * 10);
// var tahmin = prompt("Bir sayi gir ve rastgele sayıyı bulmaya çalış!");

// if(tahmin === randomSayi && tahmin !=null) alert("Bildin!!!");
// else if(tahmin == "") alert("Boş giriş yaptınız!");
// else if(tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");

// else{
//     alert("Bir daha deneee :( , Random sayi : " + randomSayi);
// }


function vkiHesapla(){
    var weight = prompt("Lütfen kaç kg olduğunuzu giriniz!");
    var height = prompt("Lütfen boyunuzu giriniz!");
    var vkiOrtalama = weight/(height * height);

    if(vkiOrtalama < 18.5) return alert(`Vücut kitle indeksiniz: ${vkiOrtalama}, değeriniz düşüktür.`);
    if(vkiOrtalama >= 18.5 && vkiOrtalama <=24.99) return alert(`Vücut kitle indeksiniz: ${vkiOrtalama}, normal değerdesiniz.`);

    if(vkiOrtalama >= 25.00 && vkiOrtalama <=29.9) return alert(`Vücut kitle indeksiniz: ${vkiOrtalama}, kilolusunuz.`);
    if(vkiOrtalama >= 30) return alert(`Vücut kitle indeksiniz: ${vkiOrtalama}, aşırı kilolusunuz.`);
    return alert("Girdiğiniz değerleri kontrol ediniz");
}
vkiHesapla();