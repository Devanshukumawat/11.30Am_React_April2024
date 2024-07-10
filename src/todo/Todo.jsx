import { useState } from "react";
import TodoCss from "./todo.module.css"

function Todo() {

    const [task,setTask] = useState("")
    const [Ctask,setCtask] =useState(0)
    const [Rtask,setRtask] =useState(0)
    const [TotalTask,setTotaltask] =useState(0)

    const AllTask = [
        {taskName:"Buy Car", complete:true},
        {taskName:"Buy Guitar", complete:false},
        {taskName:"Buy Phone", complete:true}

    ]

    const [todo,setTodo] = useState(AllTask)

  

    function handleForm(e){
        e.preventDefault()
        console.log(task)
      
    }

    function handleTask(e){
        setTask(e.target.value)
    }

    function addTask(){
        if(task){
        setTodo([...todo,{taskName:task,complete:false}])
        }
        setTask('')
    }

    function handleChecked(id){
        const myArray = [...todo]
        myArray[id].complete =! myArray[id].complete
        setTodo(myArray)

        const completeTask = myArray.filter((value,index)=>{
           return value.complete
        })

        setCtask(completeTask.length)

        const remainingTask = myArray.filter((value,index)=>{
           return ! value.complete
        })

        setRtask(remainingTask.length)

        const totaltasks = myArray.filter((value,index)=>{
            return value
        })

        setTotaltask(totaltasks.length)

    }

    return ( 
        <>
        <h4 style={{textAlign:"center"}}>Total Task:- {TotalTask} </h4>
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
                           <span><li><input type="checkbox" checked={value.complete}
                           onClick={()=>{handleChecked(index)}}
                            /> <span style={{textDecoration:value.complete ? "line-through" : ""}}>{value.taskName}</span> <i className="bi bi-trash3-fill float-end text-info"></i> <i className="bi bi-pencil-square float-end me-3 text-warning"></i> </li></span>
                        </ul>
                        
                    ))
                }
                </div>
                <span>
                    <p>Completed Task :- {Ctask}</p>
                    <p>Remaining Task :- {Rtask}</p>
                </span>
                </div>
                
                </div>
            </div>
            
        </>
     );
}

export default Todo;