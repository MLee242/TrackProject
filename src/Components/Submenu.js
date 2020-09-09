
import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Hidden, Grid, Typography, IconButton, Modal, makeStyles} from '@material-ui/core';
import classNames from 'classnames';
import axios from 'axios';
import Form from './Forms';
const customwidth = 400;

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: customwidth,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        outline: 'none',
        borderRadius:'2px',
        transform: 'translate(-50%, -50%)',
    }, icon:{
        width:'35px',
        height:'35px',
        color: '#66473F',
        [theme.breakpoints.down('sm')]:{
            width:'20px',
            height:'20px',
        },
        
    }, iconbuttonstyle:{
        boxShadow : '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
        borderRadius:'24px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        border: '2px solid #66473F',
        backgroundColor: '#e6db74',
        zIndex:'999',
        "&:hover": {
            transform: 'scale(1.1)',
            backgroundColor: '#e6db74',
        },
        transition: '0.3s all',
        [theme.breakpoints.down('sm')]:{

            right: '10px',
        },

    }, icontitle:{
        padding:'7px 5px 5px 5px',
        fontSize: '1rem',
        color: '#66473F',
        fontFamily: 'Righteous',
        



    }, title:{
        paddingTop:'20px',
        marginLeft:'75px',
        fontFamily:"Righteous",
        color:'#e6db74',
        borderBottom: '5px solid #e6db74',
    }, spancolor:{
        color: '#FF1493',
    }, submenu:{
        position:'fixed',
        backgroundColor:'#272c34',
        paddingBottom: '35px',
        marginLeft: '-25px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },title2:{
        paddingTop:'20px',
        fontFamily:"Righteous",
        color:'#272c34',
        textDecoration: 'underline',

    }, createstyle:{
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


const Submenu = (props) =>  {


    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [summary, setSummary] = React.useState('');
    const [category, setCategory] = React.useState("Work");
    const [status, setStatus] = React.useState("Open");
    const [description, setDescription] = React.useState('');


    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        resetFields();
        setOpen(false);
    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleSummary = (event) =>{
        setSummary(event.target.value);
    }
    const handleCategory = (event) =>{
        setCategory(event.target.value);
    }
    const handleStatus = (event) => {
        setStatus(event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const resetFields = () =>{
        setTitle('');
        setSummary('');
        setCategory('Work');
        setStatus('Open');
        setDescription('');
    }


    const postHandler = (event) =>{
        //event.preventDefault();
        handleClose();
        resetFields();
        const data = {
            title,
            summary,
            category,
            status,
            description,
        }
        const options ={
            header: {'Content-Type':'application/JSON'}
        };
        axios.post('/issues', data, options)
            .then(response =>{
               
                console.log(response);
                props.notification("Successfully created!");
                props.created();
                props.clicked();
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    let item = {
        title,
        summary,
        category,
        status,
        description,
    }

    const body = (
    <div className={classes.paper}>
        <Typography className={classes.title2}>
            Create issue
        </Typography>
        <br/>
        <Form 
            item = {item}
            handleTitle = {handleTitle}
            handleSummary = {handleSummary}
            handleCategory = {handleCategory}
            handleStatus = {handleStatus}
            handleDescription = {handleDescription}

        />
        <div style={{marginTop:'15px'}}>
            <button className= {classNames(classes.createstyle)} onClick={postHandler}>Create</button>
            <button className= {classNames(classes.cancelstyle)} onClick={() => {if(window.confirm('Are you sure you would like to discard the Issue?')) handleClose() }}>Cancel</button>
        </div>
    </div>
    );
    

    return (
        <>
            

            <Grid className={classes.submenu} container direction="row" justify="space-between" alignItems="center">
                <Grid >
                    <Typography className={classes.title} variant="h4">
                        Issues<span style={{color:'#a6e22e'}}>.</span>
                    </Typography>

                </Grid>
                <Grid>
                    {props.status ? null : 
                        <IconButton 
                            edge="start" 
                            aria-label="Add Open Item"
                            onClick = {handleOpen}
                            className={classes.iconbuttonstyle}
                            >
                            <PostAddIcon className={classes.icon} />
                            <Hidden xsDown>
                                <Typography className= {classes.icontitle}>
                                    Create
                                </Typography>
                            </Hidden>
                            
                            
                        </IconButton>
                    }
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        {body}
                    </Modal>
                    
                </Grid>
            </Grid>
            
        </>
    )
}

export default Submenu;
