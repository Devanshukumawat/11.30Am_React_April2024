import { useState } from "react";
import TodoCss from "./todo.module.css"

function Todo() {

    const [task,setTask] = useState("")

    const AllTask = [
        {taskName:"Buy Car", complete:true},
        {taskName:"Buy Guitar", complete:false},
        {taskName:"Buy Phone", complete:true}

    ]

    const [todo,setTodo] = useState(AllTask)

  

    function handleForm(e){
        e.preventDefault()
      
    }

    function handleTask(e){
        setTask(e.target.value)
    }

    function addTask(){
       
        
    }

    return ( 
        <>
            <div className={TodoCss.todo}>
                <div className={TodoCss.main}>
                <h1>My Todo App 🙂</h1>
                <div >
                <form className="d-flex" onSubmit={handleForm}>
                <input type="text" className="form-control"
                    value={task}
                    onChange={handleTask}
                />
                <button type="submit" className="form-control btn btn-success w-50 ms-1 " onClick={addTask}>Add Task</button>
                </form>
                <div className={TodoCss.task}>
                {

                    todo.map((value,index)=>(
                        <ul className={TodoCss.list}>
                           <span><li><input type="checkbox" checked={value.complete} /> {value.taskName} <i className="bi bi-trash3-fill float-end text-info"></i> <i className="bi bi-pencil-square float-end me-3 text-warning"></i> </li></span>
                        </ul>
                        
                    ))
                }
                </div>
                <span>
                    <p>Completed Task :- 2</p>
                    <p>Remaining Task :- 1</p>
                </span>
                </div>
                
                </div>
            </div>
            
        </>
     );
}

export default Todo;