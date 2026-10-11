import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./dom.js";

let todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
