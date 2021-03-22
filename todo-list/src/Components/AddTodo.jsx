import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryData, addTask } from '../Redux/actionCreator';
import { v4 as uuidv4 } from 'uuid';
import "./AddTodo.css"

const useStyles = makeStyles((theme) => ({
    styledButton:{
        display:'flex',
        alignItems:"center",
        cursor:"pointer",
        borderRadius:3,
        height:40,
        width:290,
        paddingLeft:10,
        marginTop:10
    },
    input: {
        marginTop:20,
    },
    button:{
        marginTop:5
    }
    
  }));

 const AddTodo = ({label,category})  => {
     const list = true
    const classes = useStyles();
    // console.log(label)
    const buttonOpacity = list ? 1 : 0.5;
    const ButtonColor = list ? "white":"inherit";
    const buttonBackground = list ? "rgba(0,0,0.15)":"inherit";
    const placeholder = label;
    const buttonTitle = label;
    const [open,setOpen] = useState(false);
    const [task,setTask] = useState("");
    const todo = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(buttonTitle)
        if(buttonTitle == "Add new Category") {
            var payload = {
                title:task,
                id:uuidv4(),
                taskItems:[]
            };
            console.log(payload);
            dispatch(addCategoryData(payload));
            setTask("");
            setOpen(!open);
        }
        else if(buttonTitle == "Add todo item") {
            console.log(buttonTitle)
            var payload = {
                id:uuidv4(),
                title:task,
                completed:false
            };
            const list = todo.filter((item) => item.title == category)[0]
            const taskList = [...list.taskItems,payload];
            const params = list.id
            console.log(taskList);
            dispatch(addTask(taskList,params));
            setTask("");
            setOpen(!open);
        }
    }

    return (
        <>
        {open ? ( 
            <div className={classes.inputBox}>
                <TextField 
                    className={classes.input} 
                    id="outlined-basic" 
                    label={placeholder} 
                    variant="outlined" 
                    fullWidth 
                    autoFocus
                    // onBlur = {() => setOpen(!open)}
                    onChange={(e) => setTask(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleClick} className={classes.button}>
                        {buttonTitle}
                    </Button>
            </div> 

            ) : (

            <div className={classes.styledButton}
                onClick={() => setOpen(!open)}
                style={{opacity:buttonOpacity, 
                        color:ButtonColor,background:buttonBackground
            }}>
                <AddIcon />
                <p>{label}</p>
            </div>
        )}
        </>
    )
}
export default AddTodo