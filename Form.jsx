import React, { useState } from "react";

function Form({ addTask }) {
  const [name, setName] = useState("Enter Task");
  function HandleSubmit(event) {
    event.preventDefault();
    addTask(name);
  }

  function HandleChange(event) {
    event.preventDefault();
    setName(() => event.target.value);
  }
  return (
    <form onSubmit={HandleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={HandleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
