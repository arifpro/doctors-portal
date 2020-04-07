import React, { useState } from 'react';
import Calendar from 'react-calendar'

const Appointments = () => {
    // const [date, setDate] = useState(new Date())
    // const onChange = date => setDate({ date })
    return (
        <div>
            
            <div className="row">
                <div className="col-md-4">
                    <Calendar
                    // onChange={onChange}
                    // value={setDate(date)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appointments;