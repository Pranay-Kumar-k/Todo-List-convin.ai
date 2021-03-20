import React from 'react'
import AddTodo from './AddTodo';
import TodoCard from './TodoCard'

function generateRandomColor() {
    var color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }
const styles = {
    container: {
        backgroundColor:generateRandomColor(),
        borderRadius:3,
        width:300,
        padding:10,
        marginRight:10,
    }
}

export default function TodoList() {
    return (
        <div style={styles.container}>
            <h4>Todo</h4>
            <TodoCard/>
            <AddTodo label="Add todo item"/>
        </div>
    )
}
