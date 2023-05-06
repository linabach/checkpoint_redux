import { ADDTASK, DELETETASK, DONETASK, EDITETASK } from "./ActionsType"


export const addTask=(newTask)=>{
    return {
        type:ADDTASK,
        payload: newTask,
    }
}


export const deleteTask=(id)=>{
    return{
        type:DELETETASK,
        payload: id,
    }
}

export const editTask=(id,newtext)=>{
    return{
        type:EDITETASK,
        payload:{id, newtext}
    }
}

export const doneTask = (id)=>{
    return{
        type:DONETASK,
        payload: id

    }
}
