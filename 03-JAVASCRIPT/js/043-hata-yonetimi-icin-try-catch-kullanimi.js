// hata-yonetimi-icin-try-catch-kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp


let products;

try {
  products.forEach(item => console.log(item));
} catch (error) {
  console.log("error:", error)
  // products = [1, 2, 3]
  // products.forEach(item => console.log(item));
}


console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)


//<input type="text" id="dogumTarihi"/>
//<button onclick="valid()"> Gönder </button>

function valid(){
  try{
    if(document.querySelector("#dogumTarihi").value == ""){
      throw 'Doğum tarihini boş geçemezsiniz';
    }
  } catch(err){
    alert("Error: ",err);
  }
}