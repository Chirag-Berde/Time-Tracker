import React, { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import TaskForm from "./components/TaskForm";
import TimeTracker from "./components/TimeTracker";
import './App.css';

const TimeTrackerApp = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState({});
  const [dailyTotal, setDailyTotal] = useState(0);


  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "{}");
    setProjects(storedProjects);
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [projects, tasks]);

  const addProject = (projectName) => {
  
    setProjects([...projects, projectName]);

  };

  const addTask = (project, taskName, timeSpent, description) => {
    const newTasks = { ...tasks };
    if (!newTasks[project]) newTasks[project] = [];
    newTasks[project].push({ taskName, timeSpent, description });

    setTasks(newTasks);
zx  };

  useEffect(() => {
    let total = 0;
    for (const projectTasks of Object.values(tasks)) {
      for (const task of projectTasks) {
        total += task.timeSpent;
      }
    }
    setDailyTotal(total);
  }, [tasks]);
  // console.log(tasks)
  return (
    <div className="app">
      <h1>Project Time Tracker</h1>
      <ProjectForm addProject={addProject} />
      <div>
        {projects.map((project) => (
          <TaskForm key={project} project={project} addTask={addTask} tasks={tasks} />
        ))}
      </div>
      <TimeTracker dailyTotal={dailyTotal} />
    </div>
  );
};

export default TimeTrackerApp;
