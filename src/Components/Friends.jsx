import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Friend from './Friend';




const useStyles = makeStyles(theme => ({
    friends: {
        width: '300px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        height: 'min-content',
    }
}));

export default function Friends() {
    const classes = useStyles();
    return (
        <div className={classes.friends}>
        <h3>Lorem ipsum</h3>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        </div>
    );
}
