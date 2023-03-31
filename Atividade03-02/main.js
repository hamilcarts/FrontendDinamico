const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener('click', () => {
    const taskForm = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    titleInput.placeholder = 'Título';
    titleInput.type = 'text';
    descriptionInput.placeholder = 'Descrição';
    descriptionInput.type = 'text';

    const imgSave = document.createElement('img');
    imgSave.src = 'https://cdn-icons-png.flaticon.com/512/2541/2541652.png';
    imgSave.alt = 'Salvar';
    submitButton.appendChild(imgSave);
    imgSave.width = 30;
    imgSave.height = 30;

    const imgCancel = document.createElement('img');
    imgCancel.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png';
    imgCancel.alt = 'Cancelar';
    cancelButton.appendChild(imgCancel);
    imgCancel.width = 30;
    imgCancel.height = 30;

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(descriptionInput);
    taskForm.appendChild(submitButton);
    taskForm.appendChild(cancelButton);

    const toDoDiv = document.querySelector('.to-do');
    toDoDiv.appendChild(taskForm);

    cancelButton.addEventListener('click', () => {
        toDoDiv.removeChild(taskForm);
    });

    submitButton.addEventListener('click', () => {
        const taskTitle = titleInput.value;
        const taskDescription = descriptionInput.value;
        const taskDiv = document.createElement('div');
        const taskTitleElem = document.createElement('h3');
        const taskDescriptionElem = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        taskDiv.draggable = 'true';
        taskDiv.style.border = '1px solid black';
        taskDiv.style.padding = '10px';

        taskTitleElem.textContent = taskTitle;
        taskDescriptionElem.textContent = taskDescription;


        const imgEdit = document.createElement('img');
        imgEdit.src = 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png';
        imgEdit.alt = 'Editar';
        editButton.appendChild(imgEdit);
        imgEdit.width = 30;
        imgEdit.height = 30;

        const imgCancel = document.createElement('img');
        imgCancel.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png';
        imgCancel.alt = 'Cancelar';
        deleteButton.appendChild(imgCancel);
        imgCancel.width = 30;
        imgCancel.height = 30;

        taskDiv.appendChild(taskTitleElem);
        taskDiv.appendChild(taskDescriptionElem);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        const taskList = toDoDiv.querySelector('ul');
        const taskItem = document.createElement('li');
        taskItem.appendChild(taskDiv);
        taskList.appendChild(taskItem);

        toDoDiv.removeChild(taskForm);

        editButton.addEventListener('click', () => {
            titleInput.value = taskTitle;
            descriptionInput.value = taskDescription;
            const editForm = document.createElement('form');
            const editTitleLabel = document.createElement('label');
            const editTitleInput = document.createElement('input');
            const editDescriptionLabel = document.createElement('label');
            const editDescriptionInput = document.createElement('input');
            const saveButton = document.createElement('button');
            const cancelButton = document.createElement('button');

            editTitleLabel.textContent = 'Título';
            editTitleInput.type = 'text';
            editTitleInput.value = taskTitle;
            editDescriptionLabel.textContent = 'Descrição';
            editDescriptionInput.type = 'text';
            editDescriptionInput.value = taskDescription;

            const imgSave = document.createElement('img');
            imgSave.src = 'https://cdn-icons-png.flaticon.com/512/2541/2541652.png';
            imgSave.alt = 'Salvar';
            saveButton.appendChild(imgSave);
            imgSave.width = 30;
            imgSave.height = 30;



            const imgcalcel = document.createElement('img');
            imgcalcel.src = 'https://cdn-icons-png.flaticon.com/512/126/126497.png';
            imgcalcel.alt = 'Salvar';
            cancelButton.appendChild(imgcalcel);
            imgcalcel.width = 30;
            imgcalcel.height = 30;

            editForm.appendChild(editTitleLabel);
            editForm.appendChild(editTitleInput);
            editForm.appendChild(editDescriptionLabel);
            editForm.appendChild(editDescriptionInput);
            editForm.appendChild(saveButton);
            editForm.appendChild(cancelButton);

            taskDiv.appendChild(editForm);
            taskDiv.removeChild(taskTitleElem);
            taskDiv.removeChild(taskDescriptionElem);
            taskDiv.removeChild(editButton);

            cancelButton.addEventListener('click', () => {
                taskDiv.removeChild(editForm);
                taskDiv.appendChild(taskTitleElem);
                taskDiv.appendChild(taskDescriptionElem);
                taskDiv.appendChild(editButton);
            });

            saveButton.addEventListener('click', () => {
                const newTitle = editTitleInput.value;
                const newDescription = editDescriptionInput.value;

                taskTitleElem.textContent = newTitle;
                taskDescriptionElem.textContent = newDescription;

                taskDiv.removeChild(editForm);
                taskDiv.appendChild(taskTitleElem);
                taskDiv.appendChild(taskDescriptionElem);
                taskDiv.appendChild(editButton);

                taskTitle = newTitle;
                taskDescription = newDescription;
            });
        });

        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
    });
});

addButton.addEventListener('click', () => {
    // Criação dos elementos HTML para a nova tarefa
    // ...

    // Adiciona event listener para tornar a tarefa arrastável
    taskDiv.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', taskDiv.id);
    });

    // Adiciona event listener para receber a tarefa arrastada
    taskLists.forEach((list) => {
        list.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        list.addEventListener('drop', (event) => {
            const taskId = event.dataTransfer.getData('text/plain');
            const taskDiv = document.getElementById(taskId);

            list.appendChild(taskDiv);
        });
    });

    // Adiciona a nova tarefa à lista "ToDo"
    todoList.appendChild(taskDiv);
});

// armazena o status atual na div "to do"
const divToDo = document.querySelector('#to-do');
localStorage.setItem('toDoTasks', divToDo.innerHTML);

// armazena o status atual na div "doing"
const divDoing = document.querySelector('#doing');
localStorage.setItem('doingTasks', divDoing.innerHTML);

// armazena o status atual na div "done"
const divDone = document.querySelector('#done');
localStorage.setItem('doneTasks', divDone.innerHTML);

document.addEventListener('DOMContentLoaded', () => {
    // recupera o status armazenado da div "to do"
    const divToDo = document.querySelector('#to-do');
    const toDoTasks = localStorage.getItem('toDoTasks');
    if (toDoTasks) {
        divToDo.innerHTML = toDoTasks;
    }

    // recupera o status armazenado da div "doing"
    const divDoing = document.querySelector('#doing');
    const doingTasks = localStorage.getItem('doingTasks');
    if (doingTasks) {
        divDoing.innerHTML = doingTasks;
    }

    // recupera o status armazenado da div "done"
    const divDone = document.querySelector('#done');
    const doneTasks = localStorage.getItem('doneTasks');
    if (doneTasks) {
        divDone.innerHTML = doneTasks;
    }
});
