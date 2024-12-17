let todos = [];
let nextId = 1;

function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        nextId = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    }
}


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(title, category) {
    const todo = {
        id: nextId++,
        title,
        category,
        completed: false
    };
    todos.push(todo);
    saveTodos();
    console.log('Todo aggiunto:', todo);
}


function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    console.log('Todo eliminato:', id);
}


function toggleComplete(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        console.log('Todo aggiornato:', todo);
    }
}


loadTodos();

function editTodo(id, newTitle, newCategory) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = newTitle;
        todo.category = newCategory;
        saveTodos();
        console.log('Todo modificato:', todo);
    }
}

function getCompletedCount() {
    const completed = todos.filter(todo => todo.completed).length;
    const notCompleted = todos.length - completed;
    console.log(`Completati: ${completed}, Non completati: ${notCompleted}`);
}