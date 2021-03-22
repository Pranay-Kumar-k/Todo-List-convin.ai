import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions, CardContent, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../Redux/actionCreator';

const useStyles = makeStyles((theme) => ({
   card:{
        backgroundColor:generateRandomColor(),
        margin:10
   },
   text:{
       color:"white"
   },
  }));

const generateRandomColor = () => {
    var randomColor = "#"+Math.ceil(Math.random()*16777215).toString(16);
    return randomColor;
}

const TodoCard = ({task,listId}) => {
    const {id,title,completed} = task
    const [edit,setEdit] = useState(false);
    const [todo,setTodo] = useState(title);
    const [status,setStatus] = useState(false);
    const dispatch = useDispatch();
    const allTodos = useSelector((state) => state.todos)

    const handleEdit = () => {
        const list = allTodos.filter((item) => item.id == listId)[0].taskItems
        const findTodo = list.find((item) => item.id === id)
        // findTodo.title=todo
        // const newList = [...list,findTodo]
        console.log("id---"+id,"taskId----"+listId, list, findTodo)
        // dispatch(editTodo(newList,listId));
        setEdit(!edit)
        setTodo(todo)
    }

    const handleDelete = () => {
        console.log(id,listId+"listId")
        const list = allTodos.filter((item) => item.id == listId)[0].taskItems
        const newList = list.filter((item) => item.id !== id)
        console.log(list,newList)
        dispatch(deleteTodo(newList,listId))
    }   

    const handleStatus = (id) => {
        setStatus(!status)
    }

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {edit ? (<TextField 
                    style={{marginTop:20}} 
                    id="outlined-basic" 
                    color="primary"
                    variant="filled" 
                    defaultValue={title}
                    fullWidth 
                    autoFocus
                    onBlur = {handleEdit}
                    onChange={(e) => setTodo(e.target.value)}
                    />) : (
            <CardContent>
                <Typography className={classes.text} gutterBottom>
                    {title}
                </Typography>
            </CardContent>)}

            <CardActions>
                <Tooltip title="Edit" placement="top">
                    <IconButton className={classes.button} onClick={() => setEdit(!edit)}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" placement="top">
                    <IconButton className={classes.button} onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={status ? "undo" : "mark important"} placement="top">
                    <IconButton className={classes.button} onClick={handleStatus}>
                        <LabelImportantIcon color={status ? "secondary" : "standard"} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default TodoCard