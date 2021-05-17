import React from "react";
import PropTypes from "prop-types";

TodoListTask.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoListTask.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoListTask(props) {
  const { todos, onTodoClick } = props;
  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };
  return (
    <ul>
      {todos.map((todos) => (
        <li key={todos.id} onClick={() => handleClick(todos)}>
          {todos.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoListTask;
