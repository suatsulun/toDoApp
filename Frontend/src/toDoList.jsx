import { useState } from "react"
import { Button } from "./components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus } from "lucide-react"

const ToDoList = () => {
    const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (inputValue === "") return

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      createdAt: new Date().toLocaleDateString("en-UK")
    }

    setTodos([...todos, newTodo])

    setInputValue("")
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
    const handleDeleteAll = () => {
    setTodos([])
  }

  return (<div>
    <div className="mt-auto flex justify-center items-center">
      <div className="flex gap-4 justify-center items-center content-center">
        <Input placeholder="Enter Todo" className="input border-1 border-black rounded-xl px-2 m-5 w-200"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="outline" size="sm" onClick={handleAdd}><Plus />Add</Button>
      <Button variant="destructive" size="sm" onClick={handleDeleteAll}><Trash2 />Delete All</Button></div> </div>
      <div className="flex flex-wrap justify-start gap-2">{todos.map((todo) => (
        <div key={todo.id} className="flex flex-col gap-1 justify-center items-center content-center border-1 rounded-md p-2 border-black">
          <div>{todo.text}</div>
          <div>{todo.createdAt}</div>
          <Button variant="destructive" size="xs" onClick={() => handleDelete(todo.id)}> <Trash2 />Delete</Button></div>
        
      ))}</div>
    </div>) 
}

export default ToDoList