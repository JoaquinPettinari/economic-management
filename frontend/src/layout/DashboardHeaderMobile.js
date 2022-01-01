import { Drawer, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

function DashboardHeaderMobile() {
    const [drawerOpen, setDrawerOpen] = useState();
    const { toolbar, drawerContainer } = useStyles();

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
        <>
            <Toolbar className={toolbar}>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>Hola</div>
                </Drawer>
            </Toolbar>
        </>
    );
};

export { DashboardHeaderMobile }