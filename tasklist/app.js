const form = document.querySelector("#task-form");
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');

const addTask = function addNewTask(e) {
  const li = document.createElement('li');
  let text = document.createTextNode(taskInput.value);
  li.className = 'collection-item';
  li.appendChild(text);
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-trash"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  e.preventDefault();
};

const addTaskBtn = function addNewTaskEventListener () {
  form.addEventListener('submit', addTask);
}

addTaskBtn();
