import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Actions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const [text, setText]= useState("")
    const dispatch= useDispatch()
    
    const handleAdd =(e) =>{
         e.preventDefault()
         if (text){
             dispatch(addTask({id:Math.random(), text, isDone:false }))
            toast("Task added") 
         }
        else{
            toast.error("can not add empty task")
        }
    }

  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-around",marginBottom:"5%"}} onChange={(e)=> setText(e.target.value)} value={text}>
            <Form.Control type="text" placeholder="add a task..."/>
            <Button onClick={handleAdd} style={{backgroundColor:"blue",height:"40px"  , color:"black", width:"150px", borderRadius:"5px"}} >Add Task</Button>
        </div>
        <ToastContainer position='top-center' hideProgressBar={true} />
         
    </div>
  )
}

export default AddTask