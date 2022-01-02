import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';

export const MENU_ITEMS = [
    {
        name:'Home',
        link: '/',
        icon: <HomeIcon />
    },
    {
        name:'My account',
        icon: <AccountCircleIcon />,
        subitems:[
            {
                name: 'Settings',
                link: '/account/settings',
                icon: <SettingsIcon />
            },
            {
                name: 'Privacy',
                link: '/account/privacy',
                icon: <LockIcon />
            },
        ]

    },
]