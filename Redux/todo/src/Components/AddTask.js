import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, doneTask, notdoneTask, refreshList } from "../Redux/Actions/action";

export const AddTask = (props) => {
  const [newTask, setNewTask] = useState("");
  const [radiochecked, setRadioChecked] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.random(),
      description: newTask,
      isdone: false,
    });
    setNewTask("");
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={addNewTask}>
          <input
            type="text"
            value={newTask}
            placeholder="Add a newTodo"
            className=" col form-control"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className=" btn btn-primary mx-2" type="submit">
            Add 
          </button>
        </form>
      </div>
      <div className="search-tasks">
        <label>
          all Tasks
          <input
            type="radio"
            value="allTasks"
            checked={radiochecked === "allTasks"}
            onChange={(e) => setRadioChecked(e.target.value)}
            onClick={() => props.refreshList()}
          />
        </label>
        <label>
          done Task
          <input
            type="radio"
            value="done"
            checked={radiochecked === "done"}
            onChange={(e) => setRadioChecked(e.target.value)}
            onClick={() => props.doneTask()}
          />
        </label>
        <label>
          not done Task
          <input
            type="radio"
            value="not done"
            checked={radiochecked === "not done"}
            onChange={(e) => setRadioChecked(e.target.value)}
            onClick={() => props.nodoneTask()}
          />
        </label>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    doneTask: () => dispatch(doneTask()),
    nodoneTask: () => dispatch(notdoneTask()),
    refreshList: () => dispatch(refreshList()),
  };
};
export default connect(null, mapDispatchToProps)(AddTask);