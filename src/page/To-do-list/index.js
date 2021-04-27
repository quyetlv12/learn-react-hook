import React, { useState } from "react";
import FormAddTodo from "../../component/FormAddTodo";
import TodoListTask from "../../component/ListTask";

export const TodoList = () => {
  const [todolist, setTodolist] = useState([
    { id: 1, title: "dfghdfjkghdgf" },
    { id: 2, title: "dfghdfjkghdgf" },
    { id: 3, title: "dfghdfjkghdgf" },
  ]);
  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todolist.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todolist];
    newTodoList.splice(index, 1);
    setTodolist(newTodoList);
  };
  const handleTodoSubmit = (formvalues) => {
    const newTodo = {
      id: todolist.length + 1,
      ...formvalues,
    };
    const newTodoList = [...todolist];
    newTodoList.push(newTodo);
    setTodolist(newTodoList)
    console.log(todolist);
  };
  return (
    <div>
      <h1>TO DO LIST APP FUC</h1>
      <FormAddTodo onSubmit={handleTodoSubmit}></FormAddTodo>
      <TodoListTask
        todos={todolist}
        onTodoClick={handleTodoClick}
      ></TodoListTask>
    </div>
  );
};
