import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Link from 'next/link'
import About from "../../about";

export default function Pfapmenulist() {
    const [anchorEl, setAnchorEl] = React.useState(null);

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
                <MenuIcon/>
            </IconButton>
            <Menu
                id="pfap-menu"
                keepMounted
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link href='/'>
                    <MenuItem style={divStyle.myfont} onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link href='/about'>
                    <MenuItem style={divStyle.myfont} onClick={handleClose}>About</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
