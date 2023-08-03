import React, { useState } from "react";

const TaskForm = ({ project, addTask ,tasks}) => {

  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(project, taskName, parseFloat(timeSpent), description);
    setTaskName("");
    setTimeSpent(0);
    setDescription("");
  };

  return (
    
    <form onSubmit={handleSubmit} className="taskForm">
      <h3>Add Task for Project : {project}</h3>
      <label>
        Task Name :
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label> <br />
      <label>
        Time Spent (hours) :
        <input
          type="number"
          step="0.5"
          value={timeSpent}
          onChange={(e) => setTimeSpent(e.target.value)}
        />
      </label> <br />
      <label>
        Description :
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
