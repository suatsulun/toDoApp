import { useState } from "react"

export default function App() {

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

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <span>{todo.createdAt}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
  }