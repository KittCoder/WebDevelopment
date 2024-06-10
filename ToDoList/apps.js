const todo_input = document.querySelector('.todo-input');
const btn = document.querySelector('.todo-btn');
const todo_list = document.querySelector('.todo-list');

btn.addEventListener('click', appendTask);
todo_list.addEventListener('click', itemEvent);

function appendTask(event) {
    event.preventDefault();
    if (todo_input.value != '') {
        const todo_div = document.createElement('div');
        todo_div.className = 'todo';

        const new_todo = document.createElement('li');
        new_todo.className = 'todo-item';
        new_todo.innerText = todo_input.value;

        todo_div.appendChild(new_todo);
        todo_input.value = '';

        const complete_btn = document.createElement('button');
        complete_btn.innerText = '✔';
        complete_btn.classList.add('complete-btn');

        todo_div.appendChild(complete_btn);

        const trash_btn = document.createElement('button');
        trash_btn.innerText = '❌';
        trash_btn.classList.add('trash-btn');

        todo_div.appendChild(trash_btn);

        todo_list.appendChild(todo_div);
    }
}

function itemEvent (event) {
    const item = event.target;
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fade-away');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        const todo_item = todo.querySelector('.todo-item');
        todo_item.classList.toggle('completed');
    } 
}