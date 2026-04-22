import {createSlice,configureStore} from "@reduxjs/toolkit"

var x = {
  tasks:[],
}

 var userSlice = createSlice({
   name:"user",
   initialState:x,
   reducers:{
 
   add:(state,action)=>{
       state.tasks=[...state.tasks,{task:action.payload,id:Date.now()}] },
 
   Delete2:(state,action)=>{
    state.tasks=state.tasks.filter((v)=>{
        return v.id!==action.payload })
   },
   
   Edit2:(state,action)=>{
  state.tasks = state.tasks.map((v)=>{ if(v.id===action.payload.id){
      return {...v,task:action.payload.task2} 
      } return v
        })
   }
   
  }
})
 
 var store = configureStore({
   reducer:{
     name:userSlice.reducer
   }
 })
 
 export var {add,Delete2,Edit2} = userSlice.actions
 export default store