import React,{useEffect} from "react";
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";
import AddTodo from "./Components/AddTodo";
import {useDispatch, useSelector} from "react-redux";
import { getTodoData } from "./Redux/actionCreator";

const styles = {
  buckets:{
    display:"flex",
    flexDirection:"row",
  }
}


function App() {

  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodoData())
    }, [])
    const todos = useSelector(state => state.todos);
    console.log(todos);

  return (
    <div className="App">
      <Navbar />
      <div style={styles.buckets}>
        {todos && todos.map((category,i) => (<TodoList key={i} category={category} />) )}
        <AddTodo label={"Add new Category"}/>
      </div>
    </div>
  );
}

export default App;
