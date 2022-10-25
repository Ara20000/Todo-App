let editbtn;
let deletebtn;
// let deleteLastBtn;
let formData;
let todoListUl;
let todoListInput;

function onEditBtn() {
    alert("I am editing.");
}

// function onDeleteBtn() {
//     alert("I am deleting");
// }

// function onDeleteBtn() {
//     deleteLastBtn.removeChild(li);
// }

function onDeleteBtn() {
    deletebtn.removeChild(li);
}


function addListenersToDeleteButtons() {
    const buttonCollection = document.querySelectorAll("#delete-btn")
    console.log(buttonCollection);
    const LastButton = buttonCollection [buttonCollection.length - 1];
    LastButton.addEventListener("click", onDeleteBtn);
}

function showTodoItem(todo) {
    let li = document.createElement('li');
    li.innerHTML = `<div class= "div-main-wrapper">
    <input type="checkbox" title="checkbox" class="input-checkbox" id="checkbox-input">
    <span class="span-todo"> ${todo} </span>
    <div class="div-wrapper">
        <button id="edit-btn" class="todo-btn" onclick="onEditBtn()">edit</button>
        <button id="delete-btn" class="todo-btn">delete</button>
    </div>
</div>`

li.classList.add("todo-li");

todoListUl.appendChild(li);

}

function onSubmitForm(event) {
    event.preventDefault();

    const todoValue = todoListInput.value;

    showTodoItem(todoValue);
}

function setup() {
    editbtn = document.getElementById("edit-btn");
    deletebtn = document.getElementById("delete-btn");
    // deleteLastBtn = deletebtn [deletebtn.length - 1];
    formData = document.getElementById("section-form");
    todoListUl = document.getElementById("section-ul");
    todoListInput = document.getElementById("input-form");

    formData.addEventListener("submit", onSubmitForm);
    editbtn.addEventListener("click", onEditBtn);
    deletebtn.addEventListener("click", addListenersToDeleteButtons);
}

setup();

// todoListUl.addEventListener("click", (event) => {
//     if(event.target.getElementById === "delete-btn") {
//         const deletebtn = event.target;
//         const li = deletebtn.parentNode;
//         const ul = li.parentNode;
//         if(deletebtn === 'remove') {
//             ul.removeChild(li);
//         }
//     }
// }

// function toDeleteBtn() {
//     deletebtn = document.getElementById("delete-btn");
//     console.log(deletebtn);
//     deleteLastBtn = deletebtn [deletebtn.length - 1];

//     deleteLastBtn.addEventListener("click", onDeleteBtn);
// }





// function todoList(todo) {
//     let todoListUl = document.getElementById("section-ul");
//     let li = document.createElement('li');
//     li.innerHTML = `<div>
//        <input type="checkbox" title="checkbox" class="input-checkbox" id="checkbox-input">
//         <span class="span-todo"> ${todo} </span>
//        <div class="div-wrapper">
//        <button type="button" id="edit-btn" class="todo-btn">Edit</button>
//     <button type="button" id="delete-btn" class="todo-btn">Delete</button>
//        </div>
//     </div>`

    
//     todoListUl.appendChild(li);
//     li.classList.add("todo-li");
// }

// function onSubmitForm(e) {
//     e.preventDefault();

//     let inputForm = document.getElementById("input-form").value;
//     todoList(inputForm);

// }

// let formData = document.getElementById("section-form");

// formData.addEventListener("submit", onSubmitForm);
