import './Input.css';
import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Buttons from '../../Features/Buttons/Butoons.Component';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(4),
            width: '22ch',
        },
    },
}));

function Input() {


    const InputRef = useRef();

    useEffect(() => {
        InputRef.current.focus()
    }, []);

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form action="https://formsubmit.co/yosefsahalu@gmail.com" method="POST" id="formContactID" className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="First Name:"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    required
                    inputRef={InputRef}
                />

                <TextField
                    id="standard-textarea"
                    label="Last Name:"
                    placeholder="Placeholder"
                    multiline
                    required
                />

                <TextField
                    id="standard-multiline-static"
                    label="Full Name:"
                    multiline
                    rows={4}
                    required
                />
            </div>


            <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="Age"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="filled"
                    required
                />

                <TextField
                    id="filled-textarea"
                    label="Year Of Birth"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                    required
                />

                <TextField
                    id="filled-multiline-static"
                    label="Address"
                    multiline
                    rows={4}
                    variant="filled"
                    required
                />
            </div>


            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    rowsMax={4}
                    placeholder="email@gmail.com"
                    onChange={handleChange}
                    variant="outlined"
                    required
                />

                <TextField
                    id="outlined-textarea"
                    label="Phone Number"
                    placeholder="05*-***-****"
                    multiline
                    variant="outlined"
                    required
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Your Commit Pllease"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                />
            </div>
            <Buttons />
        </form>
    )
}

export default Input;