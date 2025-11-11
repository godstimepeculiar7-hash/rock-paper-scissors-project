const todoList = [{
   name: 'Make Dinner', 
   dueDate: '2022-12-22'},

   { 
   name: 'Wash Dishes',
   dueDate: '2022-12-22'}
   ];

function renderTodoList () {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
   const todoObject = todoList[i];
   const name = todoObject.name;
   const dueDate = todoObject.dueDate;
   let html = `
   <p>
      ${name} ${dueDate};
      <button onclick="
         todoList.splice(${i}, 1);
         renderTodoList();
      ">Delete</button>
   </p>

   
   
   `;

   todoListHTML += html;
   
   console.log(todoListHTML);

}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
   const inputElement = document.querySelector('.js-name-input')
   const name = inputElement.value
   
   todoList.push(name);

   renderTodoList();

   inputElement.value = '';
};

