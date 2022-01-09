import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { ValidatorForm } from 'react-material-ui-form-validator'

const useStyles = makeStyles(theme => ({
    root: {

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    },
    container: {
        opacity: '0.8',
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    }
}))


function Signup() {
    const [body, setBody] = useState({ nickname: '', password: '' })
    const classes = useStyles()

    const handleChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        console.log(body)
    }

    return (
        <ValidatorForm className={classes.form}>
            <Grid container justifyContent='center'>
                <Grid item>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle1'>Sign up</Typography>
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth label='Password' placeholder="Enter your password" />
                </Grid>
                <Grid item xs={10}>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                </Grid>
                <Grid item xs={10}>
                    <Button fullWidth variant="contained" color="primary" className={classes.button} onClick={() => onSubmit()}>
                        Sign up
                    </Button>
                </Grid>
            </Grid>
        </ValidatorForm>
    )
}

export default Signup