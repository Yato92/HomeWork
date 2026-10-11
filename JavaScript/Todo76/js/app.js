"use strict";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const todosEl = document.querySelector(".todos");

const todoKeys = {
  id: "id",
  text: "description",
  is_completed: "is_completed",
};

const todos = [];

const getNewTodoId = todos => {
  return (
    todos.reduce((MaxId, todo) => {
      return Math.max(MaxId, todo[todoKeys.id]);
    }, 0) + 1
  );
};

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };

  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => {
    return todo[todoKeys.id] === todoId;
  });

  if (todo === undefined) {
    console.error(`Todo with id ${todoId} not found`);
    return null;
  }

  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const editTodoByIdText = (todos, todoId, text) => {
  const todo = todos.find(todo => {
    return todo[todoKeys.id] === todoId;
  });

  todo[todoKeys.text] = text;

  return todos;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => {
    return todo[todoKeys.id] === todoId;
  });

  if (todoIndex === -1) {
    console.error(`Todo with id ${todoId} not found`);
    return null;
  }

  todos.splice(todoIndex, 1);

  return todos;
};

const createTodoElement = todo => {
  const li = document.createElement("li");
  li.classList.add("todo");

  li.dataset.id = todo[todoKeys.id];

  li.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-edit button">&#10001;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;

  return li;
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoEl = createTodoElement(todo);
  todosEl.prepend(todoEl);
};

formEl.addEventListener("submit", event => {
  event.preventDefault();

  const text = inputEl.value.trim();

  if (!text) {
    inputEl.value = "";
    return;
  }

  handleCreateTodo(todos, text);
  inputEl.value = "";
});

todosEl.addEventListener("click", event => {
  const todo = event.target.closest(".todo");
  if (!todo) {
    return;
  }

  const todoId = +todo.dataset.id;

  if (event.target.matches(".button-complete")) {
    completeTodoById(todos, todoId);
    todo.classList.toggle("completed");
  }

  if (event.target.matches(".button-delete")) {
    deleteTodoById(todos, todoId);
    todo.remove();
  }

  if (event.target.matches(".button-edit")) {
    const textEl = todo.querySelector(".todo-text");
    const editInput = todo.querySelector(".editInput");

    if (!editInput) {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "editInput";
      input.value = textEl.textContent;

      textEl.replaceWith(input);
      input.focus;

      event.target.innerHTML = `&#10003;`;
    } else {
      const newText = editInput.value.trim();

      if (!newText) {
        return;
      }

      editTodoByIdText(todos, todoId, newText);

      const div = document.createElement("div");

      div.className = "todo-text";
      div.textContent = newText;

      editInput.replaceWith(div);
      event.target.innerHTML = `&#10001;`;
    }
  }
});
