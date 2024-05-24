import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
          boxShadow: 'none',
          padding: '1% 3%',
        },
      },
    },
  },
});

export default function Navbar(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:'black', boxshadow:'none', padding:'1% 3%'}}>
          <Toolbar>
            <Typography variant="h6" fontWeight={800} fontFamily="Roboto" component="div" sx={{ flexGrow: 1 }}>
              Infoogy
            </Typography>
            <Stack direction ="row" spacing={2} alignItems={'center'}>
            <a href='.' className='link'>Works</a>
            <a href='.' className='link'>About</a>
            <button className='lite'> Contact</button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

