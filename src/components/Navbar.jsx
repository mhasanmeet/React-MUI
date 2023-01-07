import { Adb, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState} from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(to right bottom, #0078AA, #3AB4F2)"
})

const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme}) =>({
    display: "none",
    gap: "15px",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))


function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (e) =>{
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <AppBar position="sticky">
        <StyledToolbar>        
            <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}, gap: 1, alignItems: "center"}}>
                <Adb/> Android
            </Typography>
            <Adb sx={{display: {xs: "block", sm: "none"}}}/>

            <Search>
                <InputBase placeholder="Search..."></InputBase>
            </Search>

            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>

                <Badge badgeContent={4} color="error">
                    <Notifications/>
                </Badge>

                <Avatar 
                    sx={{width: 30, height: 30}} 
                    src="https://source.unsplash.com/ZHvM3XIOHoE"
                    onClick={handleClick}
                />
            </Icons>

            <UserBox onClick={handleClick}>
                <Avatar 
                    sx={{width: 30, height: 30}} 
                    src="https://source.unsplash.com/ZHvM3XIOHoE"
                />
                <Typography>Mahmudul</Typography>
            </UserBox>
        </StyledToolbar>
        
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            aria-labelledby="basic-demo-button"
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar