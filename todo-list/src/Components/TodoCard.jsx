import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions, CardContent, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../Redux/actionCreator';

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

const TodoCard = ({task}) => {
    const {id,title,completed} = task
    const [edit,setEdit] = useState(false);
    const [todo,setTodo] = useState(title);
    const [status,setStatus] = useState(false);
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        console.log(task,id)
        setEdit(!edit)
        // setTodo(todo)
    }

    const handleDelete = (id) => {
        // const newList = taskItems.filter((item) => item.id !== id);
        // console.log(newList)
        dispatch(deleteTodo(Number(id)))
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
                    <IconButton className={classes.button} onClick={(id) => handleDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="mark important" placement="top">
                    <IconButton className={classes.button} onClick={handleStatus}>
                        <LabelImportantIcon color={status ? "secondary" : ""} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default TodoCard