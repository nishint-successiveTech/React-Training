import React from 'react';

const Task = React.memo(({ task, onComplete }) => {
  console.log(`Rendered: ${task.title}`);
  return (
    <div style={{ marginBottom: '10px' }}>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          marginRight: '10px'
        }}
      >
        {task.title}
      </span>
      {!task.completed && (
        <button onClick={onComplete}>Complete</button>
      )}
    </div>
  );
});

export default Task;
