import { useState } from "react"
import ToDosTopSection from "./TodoInput"
import ToDosList from "./TodosBoard"

const ToDoList = () => {

  const [todos, setTodos] = useState([])



  return (<div>
      <ToDosTopSection  todos={todos} setTodos={setTodos}/>
      <ToDosList  todos={todos} setTodos={setTodos}/>
    </div>) 
}

export default ToDoList