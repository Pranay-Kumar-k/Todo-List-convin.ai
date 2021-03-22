import React, { useEffect } from 'react'
import AddTodo from './AddTodo';
import { useSelector} from "react-redux";
import TodoCard from './TodoCard';


function generateRandomColor() {
    var color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }
const styles = {
    container: {
        backgroundColor:generateRandomColor(),
        borderRadius:3,
        minWidth:300,
        padding:10,
        marginRight:10,
        overflowY:"scroll",
        maxHeight:600,
        marginBottom:100
    }
}


const TodoList = ({category}) => {   
    // console.log(category)
    
    const todos = useSelector(state => state.todos)
    const {title,taskItems,id} = category
    console.log(taskItems)

    

    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {taskItems && taskItems.map((task,i) => (<TodoCard task = {task} key={i} listId={id}/>))}
            <AddTodo label="Add todo item" category={title}/>
        </div>
    )
}

export default TodoList
