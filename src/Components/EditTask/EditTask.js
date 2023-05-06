import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions';
import { ToastContainer, toast } from 'react-toastify';


const EditTask = ({task}) => {
    const [show, setShow] = useState(false);
    const [text,setnewText] = useState(task.text);
    const dispatch= useDispatch()
    
    const handleEdit=()=>{
        dispatch(editTask(task.id,text))
        toast("Task updated") 
        handleClose()
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div> 
    <Button variant="primary" onClick={handleShow} style={{backgroundColor:"blue",height:"40px" , color:"white", width:"150px", borderRadius:"25px"}}>
           Edit
    </Button>

    <Modal show={show} onHide={handleClose} >
    <Modal.Header closeButton>
    <Modal.Title>Edit the task</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={1} onChange={(e)=>setnewText(e.target.value)} value={text} />
         
        </Form.Group>
      </Form>
          
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
              Close
        </Button>
        <Button variant="primary"  onClick={handleEdit}>
              Save
        </Button>
    </Modal.Footer>
    </Modal>
    <ToastContainer position='top-center' hideProgressBar={true} />
    </div>
  )

  }
  

export default EditTask