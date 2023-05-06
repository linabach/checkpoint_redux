import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask,} from '../JS/Actions'
import EditTask from '../Components/EditTask/EditTask'
import './Task.css'

const Task = ({task}) => {
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(deleteTask(task.id))
    }
    const handleDone=()=>{
      dispatch(doneTask(task.id))
    }
    
  return (
    <div style={{display:"Flex", justifyContent:"space-around", marginBottom:"8%"}}>
      <p className={task.isDone && "done"}>{task.text} </p>
      <Button variant="primary" onClick={handleDelete} style={{backgroundColor:"blue",height:"40px"  , color:"white", width:"150px", borderRadius:"25px"}}>Delete</Button>
      <EditTask task={task}/>
      <Button onClick={handleDone}  variant="primary" style={{backgroundColor:"blue",height:"40px" , color:"white", width:"150px", borderRadius:"25px"}} >{task.isDone?"unDone":"Done"}</Button>
    </div>
  )
}

export default Task