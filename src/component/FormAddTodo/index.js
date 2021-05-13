import React, { useState } from "react";
import PropTypes from "prop-types";

FormAddTodo.propTypes = {
  onSubmit: PropTypes.func,
};
FormAddTodo.defaultProps = {
  onSubmit: null,
};

function FormAddTodo(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  const handleChangeValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-5 text-sm">
        <input 
        className="border border-black w-100"
          type="text"
          value={value}
          onChange={handleChangeValue}
        />
      </div>
    </form>
  );
}

export default FormAddTodo;
