import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/router';

export default function Pfapmenulist() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const router = useRouter();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const divStyle = {
        myfont: {
            color: '#00518c',
        },
    };

    return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* Use router.push so we can close the menu then navigate */}
                <MenuItem onClick={() => { handleClose(); router.push('/'); }}>
                    <span style={divStyle.myfont}>Home</span>
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); router.push('/login'); }}>
                    <span style={divStyle.myfont}>Login</span>
                </MenuItem>

                <MenuItem onClick={() => { handleClose(); router.push('/register'); }}>
                    <span style={divStyle.myfont}>Register</span>
                </MenuItem>

               {/* horizontal separator between groups */}
                <Divider sx={{ my: 0.5 }} />

                <MenuItem onClick={() => { handleClose(); router.push('/about'); }}>
                    <span style={divStyle.myfont}>About</span>
                </MenuItem>

                {/* Add more MenuItems as needed */}
            </Menu>
        </div>
    );
}
