import React from "react";
import "./tasklist.css"
import PropTypes from "prop-types"
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ title, taskState, onAddTask, tasks, onTaskUpdate }) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  }

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem 
              key={task.id}
              id={task.id} 
              title={task.title} 
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
            />
          )
        })}
      </div>
      <button onClick={addTask}>Adicionar tarefa</button>
    </div>
  )
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
}