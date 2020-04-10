import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



const useStyles = makeStyles({
    table: {
        minWidth: 550,
    },
    tableHead: {
        backgroundColor: "#fff",
        position: "sticky",
        top: 0
    }
});

function createData(name, time, action) {
    return { name, time, action };
}

const rows = [
    createData('Karim Ahmed', '7:00 PM', 'Not visited'),
    createData('Karim Ahmed', '7:00 PM', 'Not visited'),
    createData('Karim Ahmed', '7:00 PM', 'Not visited'),
    createData('Karim Ahmed', '7:00 PM', 'Visited'),
    createData('Karim Ahmed', '7:00 PM', 'Not visited'),
];

const AppointmentsItem = () => {
    const classes = useStyles();
    return (
        
        // <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Name</TableCell>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Schedule</TableCell>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">{row.name}</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">{row.time}</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">
                                {
                                    row.action === "Visited" ?
                                        <div class="dropdown">
                                            <button class="btn actionBtn dropdown-toggle" 
                                                type="button" 
                                                id="dropdownMenuButton" 
                                                data-toggle="dropdown" 
                                                aria-haspopup="true" 
                                                aria-expanded="false"
                                                style={{ backgroundImage: 'linear-gradient(#0e9a6a, #0e9a6a)' }}
                                            >
                                                {row.action}
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Not Visited</a>
                                            </div>
                                        </div>

                                        // <button className="actionBtn"
                                        //     style={{ backgroundImage: 'linear-gradient(#0e9a6a, #0e9a6a)' }}
                                        // >{row.action}</button>
                                    : 
                                        <div class="dropdown">
                                            <button class="btn actionBtn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {row.action}
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Visited</a>
                                            </div>
                                        </div>
                                    // <button className="actionBtn">{row.action}</button>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        // </TableContainer> 
    );
};

export default AppointmentsItem;