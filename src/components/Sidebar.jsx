import { AccountBox, Article, Group, Home, ModeNight, People, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar({mode,setMode}) {
  return (
    <Box 
        bgcolor="" 
        p={0} 
        flex={1} 
        sx={{display: {xs: "none", sm: "block"}}}
    >
      <Box position="fixed">
          <List>
            <ListItem>
              <ListItemButton component="a" href="#home">
                <ListItemIcon><Home/></ListItemIcon>
                <ListItemText primary="Homepage"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="#page">
                <ListItemIcon><Article/></ListItemIcon>
                <ListItemText primary="Pages"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="#group">
                <ListItemIcon><Group/></ListItemIcon>
                <ListItemText primary="Group"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="marketplace">
                <ListItemIcon><Storefront/></ListItemIcon>
                <ListItemText primary="Marketplace"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="#friends">
                <ListItemIcon><People/></ListItemIcon>
                <ListItemText primary="Friends"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="#setting">
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText primary="Settings"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="#profile">
                <ListItemIcon><AccountBox/></ListItemIcon>
                <ListItemText primary="Profile"/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="#profile">
              <ListItemIcon><ModeNight/></ListItemIcon>
              <Switch onChange={() =>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
          </List>
      </Box>
        
    </Box>
  )
}

export default Sidebar