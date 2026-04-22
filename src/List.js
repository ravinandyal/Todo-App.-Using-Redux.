import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Delete2,Edit2} from "./Reducer.js"


function My(props){
  
  console.log(props.id)
  
var dispatch = useDispatch()

var [off,on] = useState(false)
var [a,b] = useState("")

 return (
   <>  
   { off? (
     <>
   <div className="form2">  
  <div className="form-group"> 
     <div className="input-group mt-2">
    <input type="text" className="form-control" value={a} onChange={(e)=>{
      b(e.target.value)
    }}/>
    <button className="btn btn-primary" onClick={()=>{
      on(false)
      dispatch(Edit2({task2:a,id:props.id}))
    }}>Save</button>
   </div>
 </div> 
  </div> 

   </>
   
   )
   :(
   <>
    <li className="list-group-item mt-2" >
     <p>{props.task2}</p>
       
    <div class="btn1">
      <button className="btn btn-danger" onClick={()=>{
      dispatch(Delete2(props.id))
      }}>Delete</button>
     
      <button className="btn btn-warning" onClick={()=>{
       on(true)
       b(props.task2)
      }}>Edit</button>
    </div>

    </li>
   </>
   )
   }

   </>
  
   )
}


export default My