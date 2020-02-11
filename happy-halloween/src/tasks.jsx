import React from "react";
import './styles.css';
import Task from './task'

const Tasks = ({tasks, handleSetShirt}) => {
  return (
      <div className='tasks'>
          {tasks.slice(0,3).map(task => <div key={task.type}>
            <Task task={task}
                  handleSetShirt={handleSetShirt}
          /></div>)}
      </div>
    );
};

export default Tasks;