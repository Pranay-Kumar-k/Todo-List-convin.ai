import React, { useState } from 'react'
import AddTodo from './AddTodo';
import { useDispatch, useSelector} from "react-redux";
import TodoCard from './TodoCard';
import { Button, TextField } from '@material-ui/core';
import { changeCategoryName } from '../Redux/actionCreator';


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
    },
    Title: {
        cursor:"pointer"
    }
}


const TodoList = ({category}) => {   
    // console.log(category)
    
    const todos = useSelector(state => state.todos)
    const {title,taskItems,id} = category
    console.log(taskItems)

    const [name, setName] = useState(title);
    const [flag,setFlag] = useState(false);
    const dispatch = useDispatch();

    const handleChange = () => {
        setFlag(!flag)
    }

    const handleSubmit = () => {
        const list = todos.filter((item) => item.id == id)[0];
        setName(name)
        console.log(list)
        list.title = name;
        const payload = {
            title:name
        }
        dispatch(changeCategoryName(payload,id));
        setFlag(!flag);
    }

    return (
        <div style={styles.container}>
            
            {flag ? (<><TextField 
                    style={{marginTop:20}}
                    id="outlined-basic" 
                    color="primary"
                    variant="filled" 
                    defaultValue={title}
                    fullWidth 
                    autoFocus
                    onChange={(e) =>setName(e.target.value) }
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>change</Button></>) : (
                <h4 onClick={handleChange}  style={styles.Title}>{name}</h4>)}
            {taskItems && taskItems.map((task,i) => (<TodoCard task = {task} key={i} listId={id}/>))}
            <AddTodo label="Add todo item" category={title}/>
        </div>
    )
}

export default TodoList
