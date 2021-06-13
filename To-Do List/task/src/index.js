let inputText = document.querySelector('#input-task');
let myButton = document.querySelector('#add-task-button');
let delButton = document.querySelector('.delete-btn')
let list = document.querySelector('.container ul');
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];


myButton.addEventListener('click', (e)=>{
    if(inputText.value != "") {
        // e.preventDefault();
        //create li
        let myLi = document.createElement('li');
        let context = '<span class="task"><input type="checkbox" onclick="myFunction(this);">'+ inputText.value +'</span><button class="delete-btn" onclick="return this.parentNode.remove();"></button>';

        myLi.innerHTML = context;
        list.appendChild(myLi);
        // taskList.push(myLi);
        localStorage.setItem("tasks","Ram");
        console.log(list);
        JSON.stringify(list)
    }
    inputText.value = "";
})
function myFunction(e1) {
    if (e1.checked == true){
        e1.parentNode.style.textDecoration = 'line-through';
    }else
    { e1.parentNode.style.textDecoration = 'none';
    }
}

// let taskList = [
//     // .. tasks objects
// ]
// localStorage.setItem("tasks", JSON.stringify(list))
// function taskload() {
//     if (taskList.length !== 0) {
//         console.log("Yes!");
//         // let i = 0;
//         for (let i = 0; i <= taskList.length; i++) {
//             console.log("hello");
//             let myLi = document.createElement('li');
//             let context = taskList[i];
//             myLi.innerHTML= context;
//             list.appendChild(myLi);
//         }
//     }
//     console.log("Maybe");
// }
//
// taskload();

