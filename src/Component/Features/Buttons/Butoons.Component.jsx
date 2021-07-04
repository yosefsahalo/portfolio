import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Buttons() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" color="primary" type="submit" value="Send">
                SEND
            </Button>
        </div>
    );
}

export default Buttons;