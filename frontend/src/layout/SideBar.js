import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent,  } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    header:{
        display: 'flex',
    },
    end:{
        justifyContent: 'flex-end'
    },
    center:{
        justifyContent: 'center'
    },
    buttonHeader: {
        color:'white'
    }
}));

function SideBar() {
    const [collapsed, setCollapsed ] = useState(false)
    const { header, end, center, buttonHeader } = useStyles();

    return (
        <ProSidebar collapsed={collapsed} style={{ position: 'relative', height: '100%'}}>
            <SidebarHeader className={`${header} ${collapsed ? center : end }`} >
                <IconButton onClick={() => setCollapsed(!collapsed)} className={buttonHeader} >
                    {!collapsed
                    ? <ArrowBackIcon onClick={() => setCollapsed(false)}/>
                    : <ArrowForwardIcon onClick={() => setCollapsed(true)}/>
                    }
                </IconButton>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<HomeIcon />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<ListIcon />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <h1>Footer</h1>
            </SidebarFooter>
        </ProSidebar>
    )
}

export { SideBar }