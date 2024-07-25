

// import Data from "./Data"
import Todo from "./todo/Todo"
// import UseEffect from "./UseEffect"
// import UseEffect from "./UseEffect"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./webpage/Home"
import Navbar from "./webpage/Navbar"
import Footer from "./webpage/Footer"
import About from "./webpage/About"
import Contact from "./webpage/Contact"
import Single from "./webpage/Single"
import Mui from "./Mui"

import Appbar from "./Appbar"
import Signin from "./webpage/Signin"
import Hooks from "./useref/Hooks"
import Test1 from "./useReducer/Test1"
import Tailwind from "./Tailwind/Tailwind"
import Weather from "./Weather/Weather"
import PropDrill from "./propdrill/PropDrill"
import ChildA from "./useContext/ChildA"
import { createContext } from "react"


const data = createContext()
const data1 = createContext()


function App(){

  // let data = [
  //   {firstName:"Devanshu",LastName:"Kumawat",image:"https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  //   {firstName:"Aman",LastName:"Sharma",image:"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    
  // ]

  let userData = "Hey Buddy ...!"
  let text = "Kal ho na ho"



  return(

    // create , provide , consumer
    <>

    <data.Provider value={userData}>
    <data1.Provider value={text}>
    <ChildA/>
    </data1.Provider>
    </data.Provider>

    {/* <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/mui" element={<Mui/>}/>
        <Route path="/contact/:abc" element={<Contact/>}/>
        <Route path="/single/:abc" element={<Single/>}/>
        <Route path="/ref" element={<Hooks/>}/>
        <Route path="/reducer" element={<Test1/>}/>
        <Route path="/tailwind" element={<Tailwind/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/propdrill" element={<PropDrill data={userData}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter> */}

    {/* <Data/> */}

    {/* <UseEffect/> */}

    {/* <Todo/> */}

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
     
        {/* <Appbar/>
        <Mui/> */}

    </>
  )
}

export default App
export {data,data1}