import { Avatar, Button, Fab, Modal, Stack, Tooltip, Typography } from '@mui/material'
import React, {useState} from 'react'
import {Add as AddIcon, AddPhotoAlternate, Close, EmojiEmotions, PersonAddAlt1Rounded, VideoLibrary} from "@mui/icons-material"
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { Textarea } from '@mui/joy';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0"
})

function Add() {
    const [open, setOpen] = useState(false)

  return (
    <>
        <Tooltip onClick={() => setOpen(true)} title="Delete" sx={{position: "fixed", 
                                    bottom: 30, 
                                    left: {xs: "calc(50% -25px)", md: 30}
                                }}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip> 

        <StyledModal open={open}>
            <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
                    <Close cursor="pointer" onClick={() => setOpen(false)}/>
                </Box>

                <UserBox>
                    <Avatar src="https://source.unsplash.com/ZHvM3XIOHoE" sx={{width: 30, height: 30}}/>
                    <Typography fontWeight={500} varinat="span">
                        Mahmudul Hasan
                    </Typography>
                </UserBox>

                {/* <Textarea sx={{width: "100%"}} minRows={5} maxRows={5} placeholder="Whats on your mind"/> */}
                
                <Stack direction="row" mt={2} mb={2} sx={{display: "flex", justifyContent: "space-between", alignContent: "center"}}>
                    <Box gap={2} sx={{display: "flex"}}>
                        <AddPhotoAlternate/>
                        <VideoLibrary/>
                        <EmojiEmotions/>
                        <PersonAddAlt1Rounded/>
                    </Box>
                    <Button variant="contained">Submit</Button>
                </Stack>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add