import { Grid, Avatar, Typography,Button } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { getOrCreateUser } from '../../../../actions'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
        textAlign: 'center',
        marginTop: theme.spacing(1),
        padding:'30px 0',
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    }
}))


function Login() {
    const [body, setBody] = useState({ email: '', password: '' })
    const classes = useStyles()
    let navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target.value)
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async () => {
        console.log("Asd")
        getOrCreateUser(body, 'login')
    }

    return (
        <ValidatorForm onSubmit={onSubmit} instantValidate={false} className={classes.form}>
            <Grid container justifyContent='center'>
                <Grid item>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle1'>Sing In</Typography>
                </Grid>
                <Grid item xs={10}>
                    <TextValidator fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='Email' name='email' value={body.email} onChange={handleChange} />
                </Grid>
                <Grid item xs={10}>
                    <TextValidator fullWidth autoFocus color='primary' margin='normal' type='password' variant='outlined' label='Password' name='password' value={body.password} onChange={handleChange} />
                </Grid>
                <Grid item xs={10} sm={6} md={4}>
                    <Button fullWidth type="submit" variant="contained" color="primary" className={classes.button} >
                        Sing In
                    </Button>
                </Grid>
            </Grid>
        </ValidatorForm>
    )
}

const mapStateToProps = state => ({
    user: state.user,  
});

const mapDispatchToProps = {
    getOrCreateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);