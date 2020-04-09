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
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: "#fff",
        position: "sticky",
        top: 0
    }
});

function createData(date, time, name, contact, prescription, action) {
    return { date, time, name, contact, prescription, action };
}

const rows = [
    createData('27-02-2020', '3:00 PM', 'Karim Ahmed', '+01700000000', 'View', 'Pending'),
    createData('27-02-2020', '3:00 PM', 'Karim Ahmed', '+01700000000', 'Not Added', 'Pending'),
    createData('27-02-2020', '3:00 PM', 'Karim Ahmed', '+01700000000', 'View', 'Approved'),
    createData('27-02-2020', '3:00 PM', 'Karim Ahmed', '+01700000000', 'View', 'Pending'),
    createData('27-02-2020', '3:00 PM', 'Karim Ahmed', '+01700000000', 'Not Added', 'Cancelled'),
    createData('27-02-2020', '3:00 PM', 'Karim Ahmed', '+01700000000', 'View', 'Pending'),
];

const RecentAppointments = () => {
    const classes = useStyles();
    let rowCount = 0;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold'}} >Sr. No</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Date</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Time</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Name</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Contact</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Prescription</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell style={{fontWeight: 'bold'}} component="th" scope="row">
                                {rowCount+=1}
                            </TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.date}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.time}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.name}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.contact}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">
                                {   
                                    row.prescription === "View" ?
                                    <button className="getAppointmentBtn">{row.prescription}</button>
                                    :
                                    row.prescription
                                }
                            </TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">
                                {
                                    row.action === "Pending" ?
                                        <button className="getAppointmentBtn" 
                                            style={{ backgroundImage: 'linear-gradient(#3aa3f0, #3aa3f0)' }}
                                        >{row.action}</button>
                                    : (row.action === "Approved" ?
                                        <button className="getAppointmentBtn" 
                                            style={{ backgroundImage: 'linear-gradient(#0e9a6a, #0e9a6a)' }}
                                        >{row.action}</button>
                                    :
                                        <button className="getAppointmentBtn" 
                                            style={{ backgroundImage: 'linear-gradient(#f63e3e, #f63e3e)' }}
                                        >{row.action}</button>
                                    )
                                }
                                
                                <button className="editBtn">
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RecentAppointments;