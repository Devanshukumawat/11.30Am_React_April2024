

import Todo from "./todo/Todo"



function App(){

  // let data = [
  //   {firstName:"Devanshu",LastName:"Kumawat",image:"https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  //   {firstName:"Aman",LastName:"Sharma",image:"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    
  // ]

  // let userData = "Hey Buddy ...!"


  return(
    <>

    <Todo/>

    {/* <Form/> */}

    {/* {
      data.map((value,index)=>(
       
        <>
        <ul>
      <li>Username:-{value.firstName} {value.LastName}  </li>
      <img src={value.image} alt="Alt text" width={"100px"}/>
    </ul>
    </>
      ))
    } */}

    

      {/* <Props userData={data}/>
      <Example someText={userData}/> */}


        {/* {
          data.map((value,index)=>(
            <Card dataValue = {value}/>
          ))
        } */}

        {/* <UseStateHook/> */}

        {/* <Counter/> */}
     

    </>
  )
}

export default App