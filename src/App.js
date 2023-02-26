import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from "react";
import AddTodo from "./MyComponents/AddTodo";
function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  }
  const addTodo = (title, desc, rem)=>{
    console.log("I am adding this todo", title, desc, rem)
    let sno = todos.length > 0 ? todos[todos.length-1].sno + 1 : 1;
    const  myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      rem: rem
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState([
    // {
    //   sno: 1,
    //   title: "Go to the market",
    //   desc: "buy mango",
    // },
    // {
    //   sno: 2,
    //   title: "Go to the mall",
    //   desc: "buy clothes",
    // },
    // {
    //   sno: 3,
    //   title: "Go to the gym",
    //   desc: "train back today",
    // },
  ]);
  return (
    <>
      {/* <div><p>Hello</p></div> */}
      <Header title="My Todods List" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
