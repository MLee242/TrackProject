

import React, {useState} from 'react';
import {Grid, Snackbar, Paper, Divider, IconButton, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Form from './Forms';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import classNames from 'classnames';

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

        transition: 'all 0.3s',
    }, title:{
        fontWeight: '500',
        fontSize: '22px',
        color: '#33433d',
        fontFamily: "Righteous",
        marginTop:'10px', 
        wordBreak: 'break-word',
    }, category:{
        color: '#898989',
        fontStyle:'italic',
        padding:'1px 0',
        fontSize: '12px',
    }, summary:{
        marginTop:'20px',
        fontSize: '15px',
        color: '#33433d',
        fontFamily: "Arial",
        lineHeight: '1.5',
        wordBreak: 'break-word',
    }, description:{
        marginTop:'20px',
        fontSize: '15px',
        color: '#33433d',
        fontFamily: "Arial",
        lineHeight: '1.5',
        wordBreak: 'break-word',
    }, title2:{
        paddingTop:'20px',
        fontFamily:"Righteous",
        color:'#272c34',
        textDecoration: 'underline',

    },createstyle:{
        backgroundColor: '#0052cc',
        color: 'white',
        marginRight: '5px',
        padding: '5px',
        fontWeight:600,
        border: '1px solid #0052cc',
        borderRadius:'2px',
        "&:hover": {

            backgroundColor: '#0052cccc',
            cursor: 'pointer',

        },
    }, cancelstyle:{
        backgroundColor: 'transparent',
        color: '#0052cc',
        marginRight: '5px',
        padding: '5px',
        border: '1px solid white',
        borderRadius:'2px',
        "&:hover": {
            textDecoration : 'underline',
            cursor: 'pointer',
        },
    },
    
  }));



const IssueDetails = (props) =>{


    const classes = useStyles();

    const [title, setTitle] = React.useState(props.item.title);
    const [summary, setSummary] = React.useState(props.item.summary);
    const [category, setCategory] = React.useState(props.item.category);
    const [status, setStatus] = React.useState(props.item.status);
    const [description, setDescription] = React.useState(props.item.description);
   
    const [showEdit, setShowEdit] = useState(false);


    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleStatus = (event) =>{
        setStatus(event.taget.value);
    }

    const handleSummary = (event) =>{
        setSummary(event.target.value);
    }
    const handleCategory = (event) =>{
        setCategory(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }
 

    const resetEdit = () =>{

        
        setTitle(props.item.title);
        setStatus(props.item.status);
        setSummary(props.item.summary);
        setDescription(props.item.description);
        setCategory(props.item.category);


        showEditOff();
    }
    const showEditOn = () => {
        setShowEdit(true);
    }
    const showEditOff = () => {
        setShowEdit(false);
    }
    

    const saveHandler = (event) => {
        //event.preventDefault();
        showEditOff();
    
        const data = {
            title,
            category,
            description,
            status,
            summary,

        }
        
        //console.log(data);
        axios.put('/issues/' + props.item.userId, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        })
            .then(response =>{
               
                props.notification("Successfully updated!");
                props.created();
                console.log(response);
                
                props.clicked();
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    

    const deleteHandler = (event) =>{
        axios.delete('/issues/' + props.item.userId,{
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(response =>{
            
            console.log(response);
            props.notification("Successfully deleted!");
            props.created();
            props.clicked();
            props.backward();
        })
        .catch(function (error) {
            console.log(error);
        });
    }



    let item = (
        <>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.category}>Category: {category}</Typography>
            <Typography className={classes.summary}><span><strong>Summary:</strong></span> <br/>{summary}</Typography>
            <Typography className={classes.description}><span><strong>Description:</strong></span><br/> {description}</Typography>
        </>
    )
    let items = {
        title,
        category,
        description,
        status,
        summary,
    }
    let EditItem = (
        <>
            
            <Typography className={classes.title2}>
                Edit issue
            </Typography>
            <br/>
            <Form 
                item = {items}
                handleTitle = {handleTitle}
                handleSummary = {handleSummary}
                handleCategory = {handleCategory}
                handleStatus = {handleStatus}
                handleDescription = {handleDescription}
                postHandler = {saveHandler}
                handleClose = {showEditOff}
            />
            <div style={{marginTop:'15px'}}>
                <button className= {classNames(classes.createstyle)} onClick={saveHandler}>Save</button>
                <button className= {classNames(classes.cancelstyle)} onClick ={() => {if(window.confirm('Are you sure you wish to discard the changes?')) resetEdit() } }>Cancel</button>
            </div>
               
        </>
    )

    const Menus1 = (
        <>
            <Grid>
                <IconButton 
                    edge="start" 
                    aria-label="Back"
                    className={classes.iconbuttonstyle}
                    
                    onClick={() => {props.backward()}}
                    >
                    <ArrowBackIosIcon className={classes.icon} />
                    
                    
                    
                </IconButton>
            </Grid>
            <Grid>
                <IconButton 
                    edge="end" 
                    aria-label="Add Open Item"
                    className={classes.iconbuttonstyle}
                    onClick={showEditOn}
                    >
                    <EditIcon className={classes.icon} />
                    
                    
                    
                </IconButton>

                <IconButton 
                    edge="end" 
                    aria-label="Add Open Item"
                    className={classes.iconbuttonstyle}
                    onClick ={() => {if(window.confirm('Are you sure you wish to delete the item?')) deleteHandler() } }
                    
                    
                    >
                    <DeleteIcon className={classes.icon} />
                    
                    
                    
                </IconButton>
            </Grid>
        </>

    )

    const Menus2 = (
        <>
            <Grid>
                <IconButton 
                    edge="start" 
                    aria-label="Back"
                    className={classes.iconbuttonstyle}
                    
                    onClick ={() => {if(window.confirm('Are you sure you wish to discard the changes?')) resetEdit() } }
                    
                    >
                    <ArrowBackIosIcon className={classes.icon} />
                    
                    
                    
                </IconButton>
            </Grid>
            <Grid>
                <IconButton 
                    edge="end" 
                    aria-label="Update Changes"
                    className={classes.iconbuttonstyle}
                    onClick = {saveHandler}
                    >
                    <SaveIcon className={classes.icon} />
                    
                    
                    
                </IconButton>

                <IconButton 
                    edge="end" 
                    aria-label="Delete Item"
                    className={classes.iconbuttonstyle}
                    onClick ={() => {if(window.confirm('Are you sure you wish to discard the changes?')) resetEdit() } }
                    >
                    <DeleteIcon className={classes.icon} />
                    
                    
                    
                </IconButton>
            </Grid>
        </>
    )

    return (
        <>
            <Grid xs={12} item key={props.item.userId}>
                <Paper className={classes.paper}>
                    <Grid container direction = "row" justify="space-between">
                        {showEdit ? Menus2: Menus1}
                        
                    </Grid>
                    <Divider/>


                    {showEdit ? EditItem: item}
                    
                    
                </Paper>
                
           </Grid>
           
        </>
    )


}

export default IssueDetails;