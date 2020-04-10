import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import { mainListItems, Logout } from '../Dashboard/listItems';
import './Appointments.css'
import TodayIcon from '@material-ui/icons/Today';
import AppointmentsItem from './AppointmentsItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: '#f4fdfb',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderRadius: '12px',
        // backgroundColor: '#f1536e',
    },
    fixedHeight: {
        height: 590,
    },
}));

const Appointments = () => {
    let datePass
    //Date Picker
    const [selectedDate, setSelectedDate] = useState(null)
    if (selectedDate !== null) {
        const splitSelectedDate = String(selectedDate).split(' ')

        const finalDate = `${splitSelectedDate[1]} ${splitSelectedDate[2]}, ${splitSelectedDate[3]}   (${splitSelectedDate[5]})`;
        document.getElementById('setAppDate1').innerText = finalDate
        // console.log(finalDate);
        datePass = finalDate
    }


    const dateFromId0 = String(new Date()).split(' ')
    const dateFromId = `${dateFromId0[1]} ${dateFromId0[2]}, ${dateFromId0[3]}   (${dateFromId0[5]})`
    datePass = dateFromId


    


    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    
    return (
        <div className={classes.root} >
            <CssBaseline />

            <AppBar  position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography  component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Appointments
                        </Typography>
                </Toolbar>
            </AppBar>
            <div className="mainSidebar2">

                <Drawer
                    variant="permanent"

                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className="mainSidebar">
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={handleDrawerClose}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        {/* <Divider /> */}
                        <List>{mainListItems}</List>
                        <div style={{ paddingTop: '45vh' }}>
                            <List>{Logout}</List>
                        </div>
                    </div>
                </Drawer>
            </div>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    


                    <Grid container spacing={3}>

                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={fixedHeightPaper}>
                                
                                <DatePicker
                                    placeholderText='Pick a Date'
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    // dateFormat='Pp'
                                    minDate={new Date()}
                                    // maxDate={new Date()}
                                    // filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} 
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                />

                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={fixedHeightPaper}>
                                <div className="d-flex bd-highlight mb-3">
                                    <div className="mr-auto p-2 bd-highlight projectColor projectBoldText">Appointments</div>
                                    <div className="p-2 bd-highlight" style={{ color: '#8b8888' }} id="setAppDate1">
                                        
                                        {dateFromId}
                                    </div>
                                </div>
                                <AppointmentsItem datePass={datePass}/>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default Appointments;