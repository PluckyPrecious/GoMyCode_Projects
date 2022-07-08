import React from "react";
import Task from "./Task";
import { connect } from "react-redux";

export const ListTask = (props) => {
  let filtredTasks = [];
  if (props.search) {
    filtredTasks = props.tasks.filter((task) => task.isdone === true);
  }
  if (props.search === false) {
    filtredTasks = props.tasks.filter((task) => task.isdone === false);
  }
  if (props.search === "") {
    filtredTasks = props.tasks;
  }
  return (
    <div>
      {props.tasks.length !== 0 ? (
        filtredTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })
      ) : (
        <h3 style={{ textAlign: "center"}}> NO TODO !</h3>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.Taskreducer.todos,
    search: state.Taskreducer.search,
  };
};

export default connect(mapStateToProps)(ListTask);