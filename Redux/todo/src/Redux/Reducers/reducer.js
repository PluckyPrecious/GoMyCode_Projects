import { ADD_TASK, DELETE_TASK, EDIT_TASK,COMPLETE_TASK,DONE_Task,NotDone_Task,ALL_Tasks } from "../ActionTypes/action-type";

const initialState={
  todos:[],
  search:""
}
const Taskreducer = (state =initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {...state,todos:[...state.todos,action.payload]};
    case DELETE_TASK:
      return {...state,todos:state.todos.filter((task) => task.id !== action.payload)};
    case EDIT_TASK:
            let newTasks=state.todos.map((task)=>task.id===action.payload.id ? {...task,description:action.payload.value}:task)
      return {...state,todos:newTasks};
    case COMPLETE_TASK:
      return {...state,todos:state.todos.map((task)=>task.id===action.payload ? {...task,isdone:!task.isdone} : task )};
    case DONE_Task:
      return{...state,search:true};
    case NotDone_Task:
      return {...state,search:false};
    case ALL_Tasks:
      return{...state,search:""};
    default:
      return state;
  }
};

export default Taskreducer;