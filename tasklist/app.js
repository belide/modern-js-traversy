const form = document.querySelector("#task-form");
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter')
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.card-action .btn')

const getLocal = () => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  for (let task of tasks) {
    const li = document.createElement('li');
    const text = document.createTextNode(task);
    const link = document.createElement('a');
    li.className = 'collection-item';
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-trash"></i>';
    li.appendChild(text);
    li.appendChild(link);
    taskList.appendChild(li);
  };
};

const storeLocal = (task) => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const removeFromLocal = (taskItem) => {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task, index) => {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const addTask = (e) => {
  const li = document.createElement('li');
  const text = document.createTextNode(taskInput.value);
  const link = document.createElement('a');
  li.className = 'collection-item';
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-trash"></i>';
  li.appendChild(text);
  li.appendChild(link);
  taskList.appendChild(li);
  storeLocal(taskInput.value);
  taskInput.value = "";
  e.preventDefault();
};

const deleteTask = (e) => {
  if (e.target.nodeName === 'I') {
    e.target.parentElement.parentElement.remove();
    removeFromLocal(e.target.parentElement.parentElement);
  };
};

const filterTasks = (e) => {
  const taskItems = document.querySelectorAll('.collection-item');
  const text = e.target.value;
  const pattern = new RegExp(text, 'i');
  for (let item of taskItems) {
    if (pattern.test(item.innerText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    };
  };
};

const clearTasks = (e) => {
  taskList.innerHTML = '';
  localStorage.clear();
}

const loadEventListeners = () => {
  addEventListener('DOMContentLoaded', getLocal);
  form.addEventListener('submit', addTask);
  filterInput.addEventListener('keyup', filterTasks);
  taskList.addEventListener('click', deleteTask);
  clearBtn.addEventListener('click', clearTasks);
};

loadEventListeners();
