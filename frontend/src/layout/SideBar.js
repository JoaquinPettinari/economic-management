import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import { MENU_ITEMS } from './DashboardRoutes';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
    },
    end: {
        justifyContent: 'flex-end'
    },
    center: {
        justifyContent: 'center'
    },
    buttonsSideBar: {
        color: 'white'
    },
    buttonFooter:{
        marginTop: 'auto',
        color: '#888',
        backgroundColor: '#262626',
        textAlign: 'center',
        '&:hover': {
            backgroundColor:'#353535'
        },
    },
    footerSideBar:{
        padding:'20px',
        display:'flex',
        justifyContent:'center'
    }
}));

function SideBar() {
    const [collapsed, setCollapsed] = useState(false)
    const { header, end, center, buttonsSideBar, footerSideBar, buttonFooter } = useStyles();


    const renderButtonMenu = ({ icon, name, link }, index) => {
        return <MenuItem icon={icon} key={index}>{name} <Link to={link} /></MenuItem>
    }

    const renderItem = (item, index) => {
        const { icon, name, subitems } = item
        if (!subitems) {
            return renderButtonMenu(item, index)
        }

        return (
            <SubMenu title={name} icon={icon}>
                {subitems.map(renderButtonMenu)}
            </SubMenu>
        )
    }
    const goToSourceCode = () => {
        window.open('https://github.com/JoaquinPettinari/economic-management', '_blank')
    }

    return (
        <ProSidebar collapsed={collapsed} style={{ position: 'relative', height: '100%' }}>
            <SidebarHeader className={`${header} ${collapsed ? center : end}`} >
                <IconButton onClick={() => setCollapsed(!collapsed)} className={buttonsSideBar} >
                    {!collapsed
                        ? <ArrowBackIcon />
                        : <ArrowForwardIcon />
                    }
                </IconButton>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    {MENU_ITEMS.map(renderItem)}
                </Menu>
            </SidebarContent>
            <SidebarFooter className={footerSideBar}>
                <Button
                    variant="contained"
                    onClick={goToSourceCode}
                    fullWidth
                    size="small"
                    className={buttonFooter}
                >
                    <GitHubIcon style={{ padding: '10px'}} />
                    {!collapsed && "View Source"} 
                </Button>
            </SidebarFooter>
        </ProSidebar>
    )
}

export { SideBar }