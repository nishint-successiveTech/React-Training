"use client"
import React, { useState, useCallback } from 'react';
import Task from './Task';

const initialTasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Clean room', completed: false },
  { id: 3, title: 'Write code', completed: false },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const completeTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => {
        const handleComplete = useCallback(() => completeTask(task.id), [completeTask, task.id]);

        return (
          <Task
            key={task.id}
            task={task}
            onComplete={handleComplete}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
