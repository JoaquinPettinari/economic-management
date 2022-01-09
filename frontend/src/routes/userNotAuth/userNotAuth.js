import { useState } from 'react'
import { Paper, Tabs, Tab, Typography, Box, Grid } from '@material-ui/core';
import Signup from './views/registration';
import Login from './views/login';

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const UserNotAuth = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container justifyContent='center' alignContent='center' style={{ height: '100%' }}>
            <Grid item xs={10} sm={8} md={4}>
                <Paper elevation={20}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Sign In" style={{ minWidth: '50%' }} />
                        <Tab label="Sign Up" style={{ minWidth: '50%' }} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Login handleChange={handleChange} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Signup />
                    </TabPanel>
                </Paper>
            </Grid>
        </Grid>

    )
}

export { UserNotAuth }