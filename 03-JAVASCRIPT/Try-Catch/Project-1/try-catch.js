function valid(){
    try{
        if(document.querySelector("#dogumTarihi").value == ""){
            throw "Doğum tarihiniz boş geçemezsiniz!";
        }
    } catch(err){
        alert("Error: " , err);
    }
}