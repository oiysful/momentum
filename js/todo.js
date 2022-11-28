const TODOS_KEY = "todos";
const COMPLETED_TODO_CLASS = "completed-todo";

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    if (newTodoObj.isChecked) span.classList.add(COMPLETED_TODO_CLASS);
    else span.classList.remove(COMPLETED_TODO_CLASS);
    span.addEventListener(COMMON_EVENTS.CLICK, check);

    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener(COMMON_EVENTS.CLICK, deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        isChecked: false
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function handelTodoCheck(li) {
    let fromTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
    fromTodos.forEach(todo =>  { if (todo.id === parseInt(li.id)) todo.isChecked = !todo.isChecked });
    return fromTodos;
}

function check(event) {
    todos = handelTodoCheck(event.target.parentElement);
    event.target.classList.toggle(COMPLETED_TODO_CLASS);
    saveTodos();
}

todoForm.addEventListener(COMMON_EVENTS.SUBMIT, handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}