import React, {useState} from "react";


function Todo({
  name,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}) {
const [isEditing, setEditing] = useState(false);
const [newName, setNewname] = useState('');

function HandleChange(event){
    event.preventDefault();
    setNewname(event.target.value);
}

function HandleSubmit(event){
    event.preventDefault();
    editTask(id,newName);
    setNewname("");
    setEditing(false);
}

const editingTemplate = (
    <form className="stack-small" onSubmit={HandleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input id={id} className="todo-text" type="text" onChange={HandleChange}/>
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={ () => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick = {() => setEditing(true) } >
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}>
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );
  
  return (
    <li className="todo stack-small">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

export default Todo;
