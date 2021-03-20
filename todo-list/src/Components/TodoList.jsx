import React from 'react'
import TodoCard from './TodoCard'

const styles = {
    container: {
        backgroundColor:"#CCC",
        borderRadius:3,
        width:300,
        padding:10
    }
}

export default function TodoList() {
    return (
        <div style={styles.container}>
            <h4>Todo</h4>
            <TodoCard/>
        </div>
    )
}
