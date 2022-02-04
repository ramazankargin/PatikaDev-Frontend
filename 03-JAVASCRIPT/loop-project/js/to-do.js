// Html sayfasındaki elemanların seçilmesi

let liveBtn     = document.querySelector('#liveToastBtn')
let listDOM     = document.querySelector('#list')
let taskDOM     = document.querySelector('#task')
let ulLength    = document.getElementsByTagName("li"); //var olan tüm li elementlerini alıp ulLength'e atayarak kaç li olduğunu hesapladık.

for(let i=0; i < ulLength.length; i++){
    let closeBtn = document.createElement("span");
    closeBtn.textContent = "\u00D7";
    closeBtn.classList.add("close");
    closeBtn.onclick = removeBtn;
    ulLength[i].append(closeBtn);
    ulLength[i].onclick = check;
}


liveBtn.addEventListener('click', elemanEkle)


function check() {
    this.classList.toggle("checked");
}

function removeBtn() {
    this.parentElement.remove();
}


// Eleman eklemek için 

function elemanEkle() {
    if(taskDOM.value == ""){
        $(".error").toast("show");
    } else {
        $(".success").toast("show");

        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.value = "";

        // Sonradan eklenen maddeleri silmek için yapılan aynı işlemler
        liDOM.onclick = check;

        let closeBtn = document.createElement("span");
        closeBtn.textContent = "\u00D7";
        closeBtn.classList.add("close");
        closeBtn.onclick = removeBtn;


        liDOM.append(closeBtn);
        listDOM.append(liDOM);
        inpurElement.value = ("");
    }
}