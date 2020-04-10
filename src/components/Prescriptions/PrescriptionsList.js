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

function createData(date, name, contact, prescription) {
    return { date, name, contact, prescription };
}

const rows = [
    createData('27-02-2020', 'Karim Ahmed', '01700000000'),
    createData('27-02-2020', 'Karim Ahmed', '01700000000'),
    createData('27-02-2020', 'Karim Ahmed', '01700000000'),
    createData('27-02-2020', 'Karim Ahmed', '01700000000'),
    createData('27-02-2020', 'Karim Ahmed', '01700000000'),
    createData('27-02-2020', 'Karim Ahmed', '01700000000'),
];

const PrescriptionsList = () => {
    const classes = useStyles();
    let rowCount = 0;
    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Sr. No</TableCell>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Date</TableCell>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Name</TableCell>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Contact</TableCell>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold' }} align="center">Prescription</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">{rowCount += 1}</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">{row.date}</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">{row.name}</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">{row.contact}</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="center">
                                <button className="getAppointmentBtn">
                                    View
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PrescriptionsList;