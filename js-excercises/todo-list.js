const todoList = ['make dinner', 'wash dishes'];

 renderTodo();

function renderTodo () {
let todoListHTML = '';

for (i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
    
    renderTodo();

}
