import { todoKeys } from "./constants.js";

const getNewTodoId = todos => {
  return (
    todos.reduce((MaxId, todo) => {
      return Math.max(MaxId, todo[todoKeys.id]);
    }, 0) + 1
  );
};

export const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };

  todos.push(newTodo);
  return newTodo;
};

export const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => {
    return todo[todoKeys.id] === todoId;
  });

  if (todo === undefined) {
    console.error(`Todo with id ${todoId} not found`);
    return todos;
  }

  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

export const editTodoByIdText = (todos, todoId, text) => {
  const todo = todos.find(todo => {
    return todo[todoKeys.id] === todoId;
  });

  todo[todoKeys.text] = text;

  return todos;
};

export const deleteTodoById = (todos, todoId) => {
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
