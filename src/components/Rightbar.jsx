import { 
  Avatar, 
  AvatarGroup, 
  Box, 
  Divider, 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography 
} from '@mui/material';
import React from 'react';
import itemData from '../assets/itemData';

function Rightbar() {
  return (
    <Box
        p={2} 
        flex={2}
        sx={{display: {xs: "none", sm: "block"}}}
        overflow="scroll"
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={400}>
          Online Friends

          <AvatarGroup max={6} sx={{mt: 1, display: "flex", justifyContent: "flex-end"}}>
            <Avatar alt="Kazi Sakib" src="https://source.unsplash.com/ZHvM3XIOHoE" />
            <Avatar alt="Azra Sadia" src="https://source.unsplash.com/jzz_3jWMzHA" />
            <Avatar alt="Kazi Fardin" src="https://source.unsplash.com/iEEBWgY_6lA" />
            <Avatar alt="Farzana Haque" src="https://source.unsplash.com/MQ2xYBHImKM" />
            <Avatar alt="Tanvir Ahmed" src="https://source.unsplash.com/Jy4ELSGPHTc" />
            <Avatar alt="Tania Akter" src="https://source.unsplash.com/_H6wpor9mjs" />
            <Avatar alt="Sadeq Hasan" src="https://source.unsplash.com/6qf1uljGpU4" />
          <Avatar alt="Dominic" src="https://source.unsplash.com/MTZTGvDsHFY" />
        </AvatarGroup>
        </Typography>

        <Typography variant="h6" fontWeight={400} mt={4}>
          Latest Post

          <ImageList sx={{ width: 400, height: 450, mt: 1}}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=22x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Typography>

        <Typography variant="h6" fontWeight={400} mt={4}>
          Online Friends

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://source.unsplash.com/ZHvM3XIOHoE" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://source.unsplash.com/jzz_3jWMzHA" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://source.unsplash.com/iEEBWgY_6lA" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Typography>
      </Box>
    </Box>
  )
}

export default Rightbar