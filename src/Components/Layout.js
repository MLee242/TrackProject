

import React from 'react'
import {Grid, AppBar, Drawer, Hidden, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, makeStyles} from '@material-ui/core'
import classNames from 'classnames';
import Logo from '../resources/material-ui.png';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Content from './Content.js';

let drawerWidth = 200;

const useStyles = makeStyles( (theme) => ({
    root:{
        flexGrow: 1,
        height: '100vh',
        overflow:'hidden',
    },
    appbarstyle:{
        backgroundColor: 'var(--mdc-theme-primary, #212121)',
        boxShadow : '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        [theme.breakpoints.up('sm')]:{
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        
        },
        height:'64px',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
    },
    contentShift:{
        [theme.breakpoints.up('sm')]:{
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`, 
        },
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),

       
    },
    title: {
        flexGrow: 1,
    },
    titleStyle:{

        [theme.breakpoints.down('sm')]:{
            fontSize:'16px',
            
        },
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Righteous',
        color:'#FAF3DD',
    },logo:{
        [theme.breakpoints.down('sm')]:{
            height:'25px',
            width: '25px',
            marginRight:'2px',
        },
        height: '30px',
        width: '30px',
        marginRight: '7px',
    }, robofont:{
        fontFamily: "'Roboto Mono', monospace",
    }, loginstyle:{
        [theme.breakpoints.down('sm')]:{

        },
        color: '#FAF3DD',
        padding: 0,
        "&:hover": {
            color:'#7f7f7f',
            transition: '0.3s ease 0s',
            
        },

    }, menuButton: {
        marginRight: '2',
    }, colorbeige:{
        color: "#FAF3DD",
    },drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#b8e674',
        borderRight: '2px solid black ',
    },drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },toolbar: theme.mixins.toolbar,
    drawertext:{
        fontFamily: "'Righteous',cursive",
        fontWeight: 500,
        fontSize: '18px',
    },dividerColor:{
        backgroundColor: '#8b8b8b',
    }, selectedItem:{
        color: '#66473F',
    },listiconcolor:{
        color: '#var(--mdc-theme-primary, #212121)',
    }, container:{
        position:'absolute',
        top:'64px',
        
    }
}));


const Layout = (props) =>{

    const classes = useStyles();


    const [open, setOpen] = React.useState(false);
  
    const handleDrawer = () => {
        setOpen(!open);
    }
    


    const Icon = (index) =>{
        if(index === 0){
            return <WorkIcon htmlColor= {selectedIndex === index ? '#66473F': 'black'}  />
        }else if(index === 1){
            return <AssignmentIndIcon htmlColor= {selectedIndex === index ? '#66473F': 'black'}/>
        }

    }

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        drawerWidth = 0;
    };

    

    const drawer = (

        <>
            <div className={classes.toolbar} />
            <Divider classes = {{root: classes.dividerColor}}/>
            <List>
            {['Work', 'Personal'].map((text, index) => (
                <ListItem 
                    selected={selectedIndex === index}
                    button 
                    onClick = {(event) => {handleListItemClick(event,index)}} 
                    classes={{ selected: classes.selectedItem }}
                    key={text}>
                    <ListItemIcon > 
                        {Icon(index)}
                    </ListItemIcon>
                    <ListItemText classes = {{primary: classes.drawertext}}  primary={text} />
                </ListItem>
            ))}
            </List>
        </>
        

    )
   
    return (
        <>
            <div className = {classes.root}>
                <AppBar className={classes.appbarstyle}  position="fixed">
                    <Toolbar>
                        <Hidden smUp implementation="css">
                            <IconButton 
                                edge="start" 
                                className={classNames(classes.menuButton,classes.colorbeige)} 
                                aria-label="menu"
                                onClick = {handleDrawer}
                                >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Grid container direction="row" alignItems ="center">
                            <img alt="logo" src={Logo} className={classes.logo} />
                            <Typography variant ="h6" className={classNames(classes.title, classes.titleStyle)}>
                                Project Management
                            </Typography>
                            
                        </Grid>
                        
                        <IconButton 
                            aria-label="login"
                            className={classNames(classes.loginstyle)} 
                                
                            >
                            <AccountBoxIcon />
                        </IconButton>
                    </Toolbar>
                    
                </AppBar>
                <Hidden xsDown implementation = "css">

                    <Drawer
                        className={classes.drawer}
                        anchor="left"
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                    
                    {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smUp implementation = "css">

                    <Drawer
                        className={classes.drawer}

                        anchor="left"
                        open={open}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="temporary"
                        ModalProps={{
                            keepMounted: true,
                        }}
                        onClose={handleDrawer}
                    >
                    
                    {drawer}
                    </Drawer>
                </Hidden>    
                    
                
                <Container className={classNames(classes.contentShift,classes.container)}>
                    <Content category={selectedIndex} />
                </Container>
               
            </div>
        </>
    )



}

export default Layout;

