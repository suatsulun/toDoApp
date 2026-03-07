import { Button } from "./components/ui/button"
import { Trash2,} from "lucide-react"
import ToDoCard from "./TodoCard"

const ToDosList = ({setTodos, todos}) => {

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

    return (<div className="flex flex-wrap justify-start gap-2">
      {todos.map((todo) => (
        <ToDoCard todo={todo} handleDelete={handleDelete} />
        ))}
    </div>)
}

export default ToDosList