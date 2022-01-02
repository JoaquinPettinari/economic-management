import { Grid, useMediaQuery, useTheme } from '@material-ui/core'
import BackgroundImage from '../assets/economic-management.jpg'

function LoginLayout({children}){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <Grid container style={{ height:'100%'}}>
            {matches && <Grid item xs={6} >
                <img src={BackgroundImage} alt="Img not found" width="100%" height="100%" />
            </Grid>}
            <Grid item xs={12} md={6} style={{padding:'20px'}}>
                {children}
            </Grid>
        </Grid>
    )
}

export default LoginLayout