const toDoform = document.querySelector('.js-toDoForm'),
      toDoinput = toDoform.querySelector('input'),
      toDolist = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
const toDos = [];

function loadToDos() {
    const loaded_todos = localStorage.getItem(TODOS_LS);
    if (loaded_todos !== null) {
        const parsedToDos = JSON.parse(loaded_todos);
        parsedToDos.forEach(function(toDo){
            showToDos(toDo.name);
        });
    } 
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function showToDos(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerHTML = '❌';
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDolist.appendChild(li);
    const toDoObject = {
        name: text,
        id: newId
    }
    toDos.push(toDoObject);
    saveToDos();
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDoinput.value;
    showToDos(currentValue);
    toDoinput.value = "";
}

function init() {
    loadToDos();
    toDoform.addEventListener('submit', submitHandler);
}

init();