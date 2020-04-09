import React, { useState } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import './Appointments.css'


const useStyles = makeStyles({
    root: {
        width: 230,
    },
});
const Appointments = () => {
    // const [width, setWidth] = useState(230)
    const classes = useStyles();
    return (
        <div>
            
            <div className="row">
                <div className="col-md-2 sideBarNav">
                    <div class="d-flex aagn-items-start flex-column bd-highlight mb-3" style="height: 200px;">
                        <div class="mb-auto p-2 bd-highlight">Flex item</div>
                        <div class="p-2 bd-highlight">Flex item</div>
                        <div class="p-2 bd-highlight">Flex item</div>
                    </div>
                    <ul>
                        <a>Dashboard</a>
                        <a>Appointment</a>
                        <a>Patients</a>
                        <a>Prescriptions</a>
                        <a>Setting</a>
                    </ul>
                </div>
                <div className="col-md-10">
                    <div className="col-md-6">A</div>
                    <div className="col-md-6">B</div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;