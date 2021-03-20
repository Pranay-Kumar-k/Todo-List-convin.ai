import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   card:{
    marginBottom:0,
    backgroundColor:generateRandomColor(),
   },
   text:{
       color:"white"
   }
  }));

const generateRandomColor = () => {
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

export default function TodoCard() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.text} gutterBottom>
            Word of the Day
            </Typography>
            </CardContent>
        </Card>
    )
}
