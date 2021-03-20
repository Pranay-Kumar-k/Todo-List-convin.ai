import React from "react";
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import {useSelector} from "react-redux";

const styles = {
  buckets:{
    display:"flex",
    flexDirection:"row",
  }
}


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={styles.buckets}>
        <TodoList />
        <AddTodo label={"Add new Category"}/>
      </div>
    </div>
  );
}

export default App;
