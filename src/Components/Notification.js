
import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Notification = (props) =>{
    

    return (
        <Snackbar 
            open = {props.open}
            autoHideDuration={3000}
            onClose= {props.handleClose}
            >
        <Alert onClose={props.handleClose} severity="success">
            {props.notificationmsg}
        </Alert>
            
        </Snackbar>

    )

}

export default Notification