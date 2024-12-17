console.log('Todo App');

let todos = [];
let nextId = 1;

function addTodo(title, category) {
    const todo = {
        id: nextId++,
        title,
        category,
        completed: false
    };
    todos.push(todo);
    console.log('Todo aggiunto:', todo);
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    console.log('Todo eliminato:', id);
}

function toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        console.log('Todo aggiornato:', todo);
    }
}