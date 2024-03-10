let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks(completed) {
    const filteredTasks = tasks.filter(task => task.completed === completed);
    renderTasks(filteredTasks);
}

function renderTasks(filteredTasks = tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div>
                <input id="check" type="checkbox" onchange="toggleCompletion(${index})" ${task.completed ? 'checked' : ''}>
                <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}
