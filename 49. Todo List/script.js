const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// gets the todos from local storage and stores them into a JSON array
const todos = JSON.parse(localStorage.getItem('todos'))

// adds the todolist stored in localStorage to the page
if(todos) {
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.done) {
            todoEl.classList.add('done')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('done')
            updateLS()
        })

        
        todoEl.addEventListener('contextmenu', (e) => { 
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    let todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            done: todoEl.classList.contains('done')
        })
    }) 

    localStorage.setItem('todos', JSON.stringify(todos))
}