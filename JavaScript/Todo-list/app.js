"use strict";

const todoKeys = {
  id: "id",
  text: "description",
  is_completed: " is_completed",
};

let todos = [];

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

  return (todo[todoKeys.text] = text);
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => {
    return todo[todoKeys.id] === todoId;
  });

  if (todoIndex === -1) {
    console.log(error(`Todo with id ${todoId} not found`));
    return null;
  }

  return todos.splice(todoIndex, 1);
};
