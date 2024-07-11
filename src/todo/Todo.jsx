import { useEffect, useState } from "react";
import TodoCss from "./todo.module.css"
import toast from "react-hot-toast";


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
        toast.success("Task Added...",{
            style:{
                marginTop:"30px"
            }
        })
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

    function handleDelete(id){
        const ArrayDelete = [...todo]
        const deleteArray = ArrayDelete.filter((value,index)=>{
            return id !== index
        })

        setTodo(deleteArray)
        toast.error("Task Delete...",{
            duration:1000,
            style:{
                marginTop:"30px"
            }
        })
    }

    function handleUpdate(id){
        const arrayUpdate = [...todo]
        const updateValue = arrayUpdate[id]
        let promptValue = prompt(`Edit value :-  ${updateValue.taskName}`,updateValue.taskName)

        if(promptValue){
            let newValue = {taskName:promptValue,complete:false}
            arrayUpdate.splice(id,1,newValue)
            setTodo(arrayUpdate)
        }

       
    }

    useEffect(()=>{
        const myArray = [...todo]
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
    },[todo])

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
                            /> <span style={{textDecoration:value.complete ? "line-through" : ""}}>{value.taskName}</span> <i className="bi bi-trash3-fill float-end text-info" onClick={()=>{handleDelete(index)}}></i> <i className="bi bi-pencil-square float-end me-3 text-warning"
                                onClick={()=>{handleUpdate(index)}}
                            ></i> </li></span>
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