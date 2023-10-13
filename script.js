const inputText = document.getElementById("input-form");
const taskContainer = document.getElementsByClassName("task-container")[0];

function addTask(){
    if(inputText.value==='')
    {
        alert('You have to write something');
    }
    else
    {
        let li=document.createElement('li')
        li.innerHTML = inputText.value;
        taskContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value='';
    saveData()
}

taskContainer.addEventListener('click',function(e){
    if(e.target.tagName == 'LI')
    {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName == 'SPAN')
    {
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("Data",taskContainer.innerHTML);
}

function showData(){
    taskContainer.innerHTML = localStorage.getItem("Data");
}
showData();