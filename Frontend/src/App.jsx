import ToDoList from "./ToDoList"
import "./App.css"
import Footer from "./footer"
import Header from "./header"


export default function App() {

  

  return (
    <div className="flex flex-col min-h-screen bg-[#ABE0F0]">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  )
  }