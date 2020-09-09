
import React from 'react';
import {Grid, Paper, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '20px',
    },paper:{
        padding: '10px',
        backgroundColor: 'white',
        border: '2px solid #212121',
        boxShadow: '0 0 5px white',
        borderRadius:'5px',
        "&:hover": {
            cursor:'pointer',
            boxShadow: '0 0 10px #e6db74',
        },
        transition: 'all 0.3s',
    }, title:{
        fontWeight: '500',
        padding: '5px 0',
        fontSize: '20px',
        color: '#33433d',
        fontFamily: "Righteous",
        
    }, category:{
        color: '#898989',
        fontStyle:'italic',
        padding:'2px 0',
        fontSize: '12px',
    }, summary:{
        fontSize: '15px',
        color: '#212121',
        fontFamily: "Arial",
        
    }
    
  }));


const Issue = (props) =>{

    const classes = useStyles();

   

    return (
        <>
            <Grid xs={12} item key={props.item.userId}>
                <Paper onClick={ () => {props.clicked(props.item)}} className={classes.paper}>
                    <Typography noWrap={true} className={classes.title}>{props.item.title}</Typography>
                    <Typography className={classes.category}>{props.item.category}</Typography>
                    <Typography noWrap={true} className={classes.summary} >{props.item.summary}</Typography>
                </Paper>
           </Grid>
        </>
    )
    

}

export default Issue;
