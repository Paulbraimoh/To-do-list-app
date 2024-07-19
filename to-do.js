const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
if ( inputBox.value === ''){
    alert("you must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);

}
inputBox.value = "";
keepData();
}
listContainer.addEventListener("click",function(d){
    if(d.target.tagName === "LI"){
        d.target.classList.toggle("checked");
        keepData()
    }
    else if(d.target.tagName === "SPAN") {
        d.target.parentElement.remove();
        keepData()
    }
}, false);

function keepData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();