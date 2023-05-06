import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../../Task/Task'
import { Button } from 'react-bootstrap'


const TaskList = () => {
  const [status, setStatus]=useState("All")

  // Accessing the taskList state from the Redux store using the useSelector hook.
  const taskList = useSelector( state => state.taskListReducer.taskList)

 // Logging the taskList to the console for debugging purposes.
  console.log(taskList)

// Rendering the UI for the task list, including the buttons to filter the tasks based on their status.
  return (
    <div>
     <div style={{display:"flex", justifyContent:"space-around", marginBottom:"80px"}}>
            <Button style={{backgroundColor:"brown" , borderColor:"brown"}} onClick={() => setStatus("All")} > All</Button>
            <Button style={{backgroundColor:"brown" , borderColor:"brown"}} onClick={() => setStatus("Done")}> Done</Button>
            <Button style={{backgroundColor:"brown" , borderColor:"brown"}} onClick={() => setStatus("UnDone")}>UnDone</Button>
      </div>
      
      {status === "Done"?
      
       taskList.filter( (task) => task.isDone===true).map ( task => <Task task={task} key={task.id}/> ):

      status === "UnDone"?
       taskList.filter( (task) => task.isDone===false).map ( task => <Task task={task} key={task.id}/> ):

       taskList.map ( (task) => <Task task={task} key={task.id}/> )}
    </div>
  )
}

export default TaskList