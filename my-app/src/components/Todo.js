import React, { useEffect, useState } from 'react'
import "./Todo.css"
import { AddTask } from './AddTask';
import { ListTask } from './ListTask';




export const Todo = () => {
  const [tasks,setTasks]=useState([]);
  useEffect(()=>{
    document.title=`You have ${tasks.length} pending Tasks!`
  })
  
  
  const addTask  =(title)  => {
    
    const newTask=[...tasks,{title}];
    setTasks(newTask)
  } 
const removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
}

    return (
    <div>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
            <AddTask addTask= {addTask}/> 
            </div>
            <div className='tasks'>{tasks.map((task,index)=>(
                <ListTask task={task} removeTask={removeTask}index={index} key={index}
                />
                ))}
                
                </div>
    
        </div>

    
    </div>
  );
};
