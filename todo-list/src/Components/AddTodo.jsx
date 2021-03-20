import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
        marginTop:10,
    },
    button:{
        marginTop:5
    }
  }));

 const AddTodo = ({label})  => {
     const list = true
    const classes = useStyles();
    console.log(label)
    const buttonOpacity = list ? 1 : 0.5;
    const ButtonColor = list ? "white":"inherit";
    const buttonBackground = list ? "rgba(0,0,0.15)":"inherit";
    const placeholder = label
    const buttonTitle = label
    const [open,setOpen] = useState(false);
    const [item,setItem] = useState("");

    const handleClick = (title) => {
        console.log(title,buttonTitle)
        
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
                    onChange={(e) => setItem(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleClick(buttonTitle)} className={classes.button}>
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