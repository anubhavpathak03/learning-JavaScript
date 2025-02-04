document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim(); // remove extra space
        if(taskText === "") return; 

        const newTask =  { // object
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask); // add task in array
        saveTasks();
        renderTask(newTask);
        todoInput.value = "";  //clear the input
        console.log(tasks);
    });

    // now we add the task to local storage now we also have to read that task
    function renderTask(task) { 
        // render means display things on DOM
        // console.log(task);

        // here now we render the task and create element from out of it
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        
        if(task.completed) li.classList.add("completed");
        
        
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `;
        
        li.addEventListener('click', (event) => {
            if(event.target.tagName === 'BUTTON') return
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        });
        
        li.querySelector('button').addEventListener('click', (event) => {
            event.stopPropagation() // prevent toggle from firing 
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            saveTasks();
        });
        
        todoList.appendChild(li);   
    }
    
    // Now here we move the tasks (means array) to local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});