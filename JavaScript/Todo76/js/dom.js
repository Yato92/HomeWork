import { todoKeys } from "./constants.js";
import {
  createTodo,
  completeTodoById,
  editTodoByIdText,
  deleteTodoById,
} from "./service.js";
import { setTodosFromLocalStorage } from "./storage.js";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const todosEl = document.querySelector(".todos");

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

export const renderTodos = todos => {
  todosEl.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }

    todosEl.prepend(todoElement);
  });
};

export const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoEl = createTodoElement(todo);
  setTodosFromLocalStorage(todos);
  todosEl.prepend(todoEl);
};

export const initTodoHandlers = todos => {
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
      setTodosFromLocalStorage(todos);
    }

    if (event.target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      todo.remove();
      setTodosFromLocalStorage(todos);
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
        setTodosFromLocalStorage(todos);

        const div = document.createElement("div");

        div.className = "todo-text";
        div.textContent = newText;

        editInput.replaceWith(div);
        event.target.innerHTML = `&#10001;`;
      }
    }
  });
};
