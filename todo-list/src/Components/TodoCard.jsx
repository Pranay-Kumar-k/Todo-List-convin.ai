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
   toggle: {
       textDecoration:"line-through"
   }
  }));

const generateRandomColor = () => {
    var randomColor = "#"+Math.ceil(Math.random()*16777215).toString(16);
    return randomColor;
}

const TodoCard = ({task,listId}) => {
    const {id,title,completed,important} = task;

    const [edit,setEdit] = useState(false);
    const [todo,setTodo] = useState(title);
    const [status,setStatus] = useState(completed);
    const [imp,setImportant] = useState(important);
    const dispatch = useDispatch();
    const allTodos = useSelector((state) => state.todos);

    const handleEdit = () => {
        const list = allTodos.filter((item) => item.id == listId)[0].taskItems;
        const findTodo = list.find((item) => item.id === id);
        const newListWithoutItem = list.filter((item) => item.id !== id );
        findTodo.title=todo;
        const newList = [...newListWithoutItem,findTodo];
        console.log("id---"+id,"taskId----"+listId, list, findTodo);
        dispatch(editTodo(newList,listId));
        setEdit(!edit);
    }

    const handleDelete = () => {
        console.log(id,listId+"listId");
        const list = allTodos.filter((item) => item.id == listId)[0].taskItems;
        const newList = list.filter((item) => item.id !== id);
        console.log(list,newList);
        dispatch(deleteTodo(newList,listId));
    }   

    const toggleStatus = () => {
        setStatus(!status);
        const list = allTodos.filter((item) => item.id == listId)[0].taskItems;
        const findTodo = list.find((item) => item.id === id);
        const newListWithoutItem = list.filter((item) => item.id !== id );
        findTodo.completed= !status;
        const newList = [...newListWithoutItem,findTodo];
        console.log(list,newList,findTodo);
        dispatch(editTodo(newList,listId));
    }

    const toggleImportant = () => {
        setImportant(!imp);
        const list = allTodos.filter((item) => item.id == listId)[0].taskItems;
        const findTodo = list.find((item) => item.id === id);
        const newListWithoutItem = list.filter((item) => item.id !== id );
        findTodo.important= !imp;
        const newList = [...newListWithoutItem,findTodo];
        console.log(list,newList,findTodo);
        dispatch(editTodo(newList,listId));
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
                <Typography className={classes.text} gutterBottom className={completed && classes.toggle} onClick={toggleStatus}>
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
                <Tooltip title={imp ? "undo" : "mark important"} placement="top">
                    <IconButton className={classes.button} onClick={toggleImportant}>
                        <LabelImportantIcon color={imp ? "secondary" : "standard"} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default TodoCard