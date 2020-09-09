

import React from 'react';
import classNames from 'classnames';
import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formfield:{

        "&:focus": {
            backgroundColor : '#fff',
            border: '1px solid #4c9aff',
            outline: 0,
            boxShadow: '0 0 0 1px #4c9aff',
        },
        backgroundColor: '#dfe1e6',
        lineHeight:'20px',
        border: '1px solid #dfe1e6', 
        borderRadius: '3px',
        padding: '4px 7px 5px',
        fontSize:'12px',
    },formlabel:{
        fontSize: '12px',
        fontWeight:'600',
        lineHeight:'16px',
        color: '#5e6c84',
    }, formfield1:{
        width: '90%',
    }, formfield2:{
        width: '100px',
    }, formfield3:{
        width: '90%',
        height: '200px',
        overflowY: 'auto',
        overflowX:'hidden',
    },
  }));

const Forms = (props) =>{

    const classes = useStyles();
    return (
        <>
            <form>
                <label htmlFor="title" className={classes.formlabel}>
                    Title*
                    <br />
                    <input defaultValue = {props.item.title} className= {classNames(classes.formfield,classes.formfield1)} type="text" id="title" name="title" onChange={props.handleTitle} />
                </label>
                <br/>
                <label htmlFor="summary" className={classes.formlabel}>
                    Summary*
                    <br />
                    <input defaultValue = {props.item.summary} className= {classNames(classes.formfield,classes.formfield1)} type="text" id="summary" name="summary" onChange={props.handleSummary} />
                </label>
                <br/>
                <label htmlFor ="category" className={classes.formlabel}>
                    Category
                    <br />
                    <select defaultValue = {props.item.category} className= {classNames(classes.formfield,classes.formfield2)} name="category" id = "category" onChange ={props.handleCategory} >
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                    </select>
                </label>
                <br/>
                <label htmlFor ="status" className={classes.formlabel}>
                    Status
                    <br />
                    <select defaultValue = {props.item.status} className= {classNames(classes.formfield,classes.formfield2)} name="status" id = "status" onChange ={props.handleStatus}  >
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                    </select>
                </label>

                <br />
                <label  htmlFor="description" className={classes.formlabel}>
                    Description*
                    <br />
                    <textarea defaultValue = {props.item.description} className= {classNames(classes.formfield,classes.formfield3)}  type="text" id="description" name="decription" onChange={props.handleDescription} />
                </label>
                <br />

            
            </form>  
            
        </>
    )
}

export default Forms;