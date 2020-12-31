const toDoform = document.querySelector('.js-toDoForm'),
      toDoinput = toDoform.querySelector('input'),
      toDolist = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function loadToDos() {
    const todos = localStorage.getItem(TODOS_LS);
    if (todos !== null) {
        // если есть список задач
    } 
}

function showToDos(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    delBtn.innerHTML = '❌';
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDolist.appendChild(li);
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