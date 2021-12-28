import { Grid, TextField } from '@material-ui/core'


function Login(){
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField label="prueba" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField label="prueba" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField label="prueba" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField label="prueba" />
            </Grid>
        </Grid>
    )
}

export default Login