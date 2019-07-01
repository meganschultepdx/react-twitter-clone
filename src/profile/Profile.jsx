import React from 'react';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    profilebox: {
        width: '33%',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        '& a': {
            fontWeight: 'bold',
            fontSize: '12px'

        }
    },
    profileheading: {
        display: 'flex'
    },
    profilelinks: {
        textAlign: 'center'
    }
}));

export default function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.profilebox}>
            <div className={classes.profileheading}>
                <FaceIcon fontSize='large' />
                <h3>Name Name</h3>
            </div>
            <div className={classes.profilelinks}>
                <a href="#">TWEETS</a> <a href="#">FOLLOWING</a> <a href="#">FOLLOWERS</a>
            </div>
        </div>
    );
}
