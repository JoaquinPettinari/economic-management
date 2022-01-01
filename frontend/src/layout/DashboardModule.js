import {
    AppBar,
    makeStyles,
    Grid,
    Box
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { DashboardHeaderMobile } from "./DashboardHeaderMobile";
import { SideBar } from "./SideBar";

const useStyles = makeStyles(() => ({
    root:{
        display: 'flex', 
        height:'100%'
    },
    gridContainer: {
        height: '100%',
        padding:'20px'
    },
}));

function DashboardModule(props) {
    const { children } = props
    const [mobileView, setMobileView] = useState(false);
    const { root, gridContainer } = useStyles()

    useEffect(() => {

        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileView(true)
                : setMobileView(false);
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    return (
        <Box className={root} >
            {mobileView 
            ? <header style={{ display: 'flex' }}>
                <AppBar color="primary">
                    <DashboardHeaderMobile />
                </AppBar>
            </header>
            : <SideBar />}
            <Grid container className={gridContainer}>
                <Grid item>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardModule;