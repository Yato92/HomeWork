export const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosFromLocalStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
