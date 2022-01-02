import { Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { IS_REQUIRED, EMAIL_FORMAT, PASSWORD_MISMATCH, INVALID_FORMAT } from '../../../constants';
import { LoadingButton } from '../../../components/LoadingButton';
import { useForm } from '../../../hooks';
import { createUser } from '../../../actions'
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';

function RegistrationView({ createUser, user }) {
    const [fetching, setFetching] = useState(false)
    const { formData, handleInputChange } = useForm(
        {
            name: '',
            lastname: '',
            email: '',
            dni: '',
            password: '',
            repeatPassword: ''
        }
    );
    const { name, lastname, email, dni, password, repeatPassword } = formData

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => value === password );

    ValidatorForm.addValidationRule('invalidPassword', (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(String(value))
    );    

    const textfieldData = [
        {
            label: 'Name',
            name: 'name',
            value: name,
            validators: ['required'],
            errorMessages: [IS_REQUIRED],
            type: 'text'
        },
        {
            label: 'Lastname',
            name: 'lastname',
            value: lastname,
            validators: ['required'],
            errorMessages: [IS_REQUIRED],
            type: 'text'
        },
        {
            label: 'Email',
            name: 'email',
            value: email,
            validators: ['required', 'isEmail'],
            errorMessages: [IS_REQUIRED, EMAIL_FORMAT],
            type: 'text'
        },
        {
            label: 'Document',
            name: 'dni',
            value: dni,
            validators: ['required', 'isNumber'],
            errorMessages: [IS_REQUIRED, INVALID_FORMAT],
            type: 'number'
        },
        {
            label: 'Password',
            name: 'password',
            value: password,
            validators: ['required', 'invalidPassword'],
            errorMessages: [IS_REQUIRED, INVALID_FORMAT],
            type: 'password'
        },
        {
            label: 'Repeat Password',
            name: 'repeatPassword',
            value: repeatPassword,
            validators: ['required', 'isPasswordMatch'],
            errorMessages: [IS_REQUIRED, PASSWORD_MISMATCH],
            type: 'password'
        },
    ]

    const createNewUser = () => {
        setFetching(true)
        createUser(formData)
    }

    return (
        <ValidatorForm instantValidate={false} onSubmit={createNewUser}>
            {!isEmpty(user.data) && <Link to="/" />}
            <Grid container justifyContent='center' align="center" spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h4' color="primary">Registration</Typography>
                </Grid>
                {textfieldData.map((textfield, index) => {
                    return (
                        <Grid item xs={11} sm={7} key={index}>
                            <TextValidator
                                {...textfield}
                                fullWidth
                                onChange={handleInputChange}
                                color="primary"
                            />
                        </Grid>
                    )
                })
                }
            </Grid>
            <Grid container spacing={4} justifyContent='center' align="center">
                <Grid item xs={11} sm={3}>
                    <LoadingButton loading={fetching} label="Create user" />
                </Grid>
            </Grid>
        </ValidatorForm>
    )
}

const mapStateToProps = state => ({
    user: state.user,  
});
  
const mapDispatchToProps = {
    createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);