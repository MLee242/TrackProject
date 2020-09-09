
import React, {useEffect} from 'react';
import {Grid, makeStyles, Typography, Snackbar } from '@material-ui/core';
import Submenu from './Submenu';
import axios from 'axios';
import Issue from './Issue';
import {BrowserRouter as Router} from 'react-router-dom'
import IssueDetails from './IssueDetails';
import Notification from './Notification';
import { trackPromise } from 'react-promise-tracker';
const useStyles = makeStyles((theme) => ({
    root: {
        //position:'relative',
        marginTop: '120px',
        marginLeft: '50px',
        marginRight: '50px',
        flexGrow: 1,
        paddingBottom: '60px',
        //overflowY: 'auto',
        //overflowX: 'hidden',
        //height: '400px',
        
    }, issuecontainer:{
        //position:'absolute',
    },
    
  }));


const Content = (props) =>{
    const classes = useStyles();
    const [issues, setIssues] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState("Success");
    const [state, setState] = React.useState({showDetails: false, itemDetails: null});

    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [rerender, setRerender] = React.useState(false);
    
   
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose =() =>{
        setOpen(false);
    }

    const changeRerender = () =>{
        setRerender(!rerender);
    }

    const setDetailsOff = () =>{
        setState({showDetails:false});
    }


    if(props.category !== selectedIndex){
        setSelectedIndex(props.category);
        setDetailsOff();
        changeRerender();
    }

    let links = null;
    
    if(selectedIndex === 0){
        links = '/issues/Work';
    }else if(selectedIndex === 1){
        links = '/issues/Personal';
    }

   

    const setnotificationemssage = (props) =>{
        setMessage(props);
    }


    useEffect(() => {
        trackPromise(
        axios.get(links)
            .then (response => {
                
                setIssues(response.data);
            })
        .catch(error => {
            setError(true);
        })
        );
        //console.log("User Effect is called");
    }, [rerender]);



    const setDetailOn = (props) => {

        setState({showDetails:true, itemDetails:retrieveItemDetails(props)});
        
    }   

    const retrieveItemDetails = (props) =>{
        return (
            <IssueDetails clicked={changeRerender} backward={setDetailsOff} item={props} created={handleOpen} notification={setnotificationemssage} />
        )
    }
 


    let items = <Typography style={{color:'#b8e674', marginLeft: '10px', marginTop:'20px', fontSize:'20px'}}><strong>ERROR.</strong> Something Went Wrong!</Typography>
    if(!error){
        if(issues.length === 0){
            items = <Typography  style={{color:'white', marginLeft: '10px', marginTop:'20px', fontSize:'20px'}}> <strong> No Issues! </strong></Typography>
        }else{
            items = issues.map( (issue) => {
            
                return <Issue key={issue.userId} item={issue} clicked={setDetailOn} />
                
            });
        }

       
    }

    return (
        <>
            <Submenu status={state.showDetails} clicked={changeRerender} created={handleOpen} notification={setnotificationemssage}  />
            <Router>
                <Grid item className = {classes.root}>
                    
                    <Grid item className={classes.issuecontainer} container direction="column" spacing={2}> 
                        
                        
                        {state.showDetails ? state.itemDetails : items}
                    </Grid>
                </Grid>
            </Router>
            <Notification notificationmsg={message} open={open} handleClose = {handleClose} />
            


        </>
    )

}

export default Content;
