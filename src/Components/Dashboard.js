import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Dashboard extends Component {
render() {
    const user =  JSON.parse(localStorage.getItem('userData'));
    console.log(user)
    return (
        <div className="dash">
            <Typography variant="h3">Dashboard</Typography>
            <hr/>
            {user && <div>
                <Typography variant="h6">Username: {user.username}</Typography>
                <Typography variant="h6">Email: {user.email}</Typography>
            </div>}
        </div>
    )
}
}

export default Dashboard;