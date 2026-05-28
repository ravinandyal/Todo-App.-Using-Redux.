import {useDispatch,useSelector} from "react-redux"
import {useState} from "react"
import {add} from "./Reducer.js"
import List from "./List"




function Form(){

var data2 = useSelector((data)=>{
  return data.name.tasks
})
var dispatch = useDispatch()
console.log(data2)


var [a,b] = useState('')

function addUpp() {
      dispatch(add(a))
        b('')
       }


return (
    <>
<div className="container mt-5 w-60">
  
  <h3 className="text-primary text-center">Todo App</h3>
  
   <div className="form-group"> 
 
     <div className="input-group">
   <input type="text" className="form-control" value={a} onChange={(e)=>{
      b(e.target.value)
      }}/>

    <button className="btn btn-primary" onClick={()=>{
         addUpp()  
      }}>Add</button>
     </div>

 
  <ul className="list-group-items">{data2.map((value)=>{
      return (
      <>
     <List task2={value.task} id={value.id}/>
      </>
      )
  })}
    </ul>
  </div> 
</div>
    </>
    )
}


export default Form
