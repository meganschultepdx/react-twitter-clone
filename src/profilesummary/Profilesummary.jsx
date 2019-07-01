import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    profilesummary: {
        width: '300px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        maxHeight: '200px',
        marginTop: '10px',    
    }
}));

export default function Profilesummary() {
    const classes = useStyles();
    return (
        <div className={classes.profilesummary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae facere labore velit! Explicabo mollitia culpa architecto corporis maiores soluta similique doloremque libero! Possimus molestias aperiam animi? Ut, aliquid possimus?</p>
        </div>
    );
}
