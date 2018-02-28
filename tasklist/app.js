const form = document.querySelector("#task-form");
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter')
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.card-action .btn')

const add = (e) => {
  const li = document.createElement('li');
  li.className = 'collection-item';
  const text = document.createTextNode(taskInput.value);
  li.appendChild(text);
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-trash"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = "";
  e.preventDefault();
};

const filter = (e) => {
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

const deleteItem = (e) => {
  if (e.target.nodeName === 'I') {
    e.target.parentElement.parentElement.remove();
  };
};

const clear = (e) => taskList.innerHTML = '';

const addBtnListen = () => form.addEventListener('submit', add);

const filterListen = () => filterInput.addEventListener('keyup', filter);

const deleteBtnListen = () => taskList.addEventListener('click', deleteItem);

const clearBtnListen = () => clearBtn.addEventListener('click', clear);

addBtnListen();
filterListen();
deleteBtnListen();
clearBtnListen();
