const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Anda Harus Menulis Sesuatu!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
    inputBox.value = "";
    saveData();
    inputBox.value = "";
    removeData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
   }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();     
        removeData();
    } 
}, false );

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function removeData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function hiddenTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
hiddenTask();