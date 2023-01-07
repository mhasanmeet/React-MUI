import React, {useState} from 'react';
import { Box, Stack } from "@mui/system"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Add from "./components/Add";
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  const [mode, setMode] = useState("light")

//dark Theme
  const darkTheme = createTheme({
      palette: {
        mode: mode
      }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}> 
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">      
          <Sidebar setMode={setMode} mode={mode}/>  
          <Feed/>
          <Rightbar/>
        </Stack> 
        <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App
