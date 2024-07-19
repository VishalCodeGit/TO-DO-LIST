function addTask() {
    const taskInput = document.getElementById('task-input');
    const deadlineInput = document.getElementById('deadline-input');
    const priorityInput = document.getElementById('priority-input');

    if (taskInput.value.trim() === '') return;

    const taskList = document.getElementById('task-list');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskDetails = document.createElement('div');
    const taskName = document.createElement('p');
    taskName.textContent = taskInput.value;
    taskDetails.appendChild(taskName);

    if (deadlineInput.value) {
        const deadline = document.createElement('p');
        deadline.textContent = `Due: ${deadlineInput.value}`;
        deadline.className = 'deadline';
        taskDetails.appendChild(deadline);
    }

    taskDiv.appendChild(taskDetails);

    const taskPriority = document.createElement('span');
    taskPriority.textContent = priorityInput.value;
    taskPriority.className = `priority priority-${priorityInput.value}`;
    taskDiv.appendChild(taskPriority);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.onclick = function() {
        taskList.removeChild(taskDiv);
    };
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    taskInput.value = '';
    deadlineInput.value = '';
    priorityInput.value = 'medium';
}
