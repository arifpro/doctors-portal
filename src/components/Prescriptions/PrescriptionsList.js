import React, { useState, useEffect} from 'react';
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

const rows = [];
function createData(date, name, contact) {
    return { date, name, contact };
}

// const rows = [
//     createData('27-02-2020', 'Karim Ahmed', '01700000000'),
//     createData('27-02-2020', 'Karim Ahmed', '01700000000'),
//     createData('27-02-2020', 'Karim Ahmed', '01700000000'),
//     createData('27-02-2020', 'Karim Ahmed', '01700000000'),
//     createData('27-02-2020', 'Karim Ahmed', '01700000000'),
//     createData('27-02-2020', 'Karim Ahmed', '01700000000'),
// ];


fetch('https://backend-doctors-portal.herokuapp.com/getAppointments')
.then(res => res.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        const row = createData(e.date, e.name, e.phone)
        // console.log(row);
        rows.push(row)
        // console.log(rows);
    }
})
// console.log(rows);
const PrescriptionsList = () => {
    const classes = useStyles();
    let rowCount = 0;
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('https://backend-doctors-portal.herokuapp.com/getAppointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [])
    const rows1 = [];
    for (let i = 0; i < appointments.length; i++) {
        const e = appointments[i];
        const row1 = createData(e.date, e.time, e.name, e.phone, 'View', 'Pending')
        rows1.push(row1)
    }
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
                    {rows1.map((row) => (
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