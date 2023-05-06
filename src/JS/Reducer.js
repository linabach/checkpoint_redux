// importation

import { ADDTASK, DELETETASK, DONETASK, EDITETASK } from "./ActionsType"


// InitialState
const initialState ={
   taskList:[
    {id:Math.random(), text:"task1", isDone:false},
    {id:Math.random(), text:"task2" , isDone:false},
    {id:Math.random(), text:"task3" , isDone:false}
   ]
   }
   

// pure function

const taskListReducer =(state=initialState, {type,payload})=>{
switch(type){
    case ADDTASK:
        return {...state, taskList:[...state.taskList,payload]}
    case DELETETASK:
        return {...state, taskList: state.taskList.filter(el=>el.id!==payload)}
    case EDITETASK:
       return { ...state, taskList: state.taskList.map( el => el.id === payload.id?{...el , text:payload.newtext}:el)}
    case DONETASK:
        return {...state, taskList: state.taskList.map( el => el.id === payload ? {...el, isDone: !el.isDone}: el)}
    default: 
    return state;
    
}
}

export default taskListReducer