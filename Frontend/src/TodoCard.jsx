import { Button } from "./components/ui/button"
import { Trash2,} from "lucide-react"


const TodoCard = ({todo, handleDelete}) => {

return (
        <div key={todo.id} className="flex flex-col gap-1 justify-center items-center content-center border-1 rounded-md p-2 border-black">
          <div>{todo.text}</div>
          <div>{todo.createdAt}</div>
          <Button variant="destructive" size="xs" onClick={() => handleDelete(todo.id)}> <Trash2 />Delete</Button></div>
      )
}

export default TodoCard