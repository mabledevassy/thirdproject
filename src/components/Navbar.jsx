import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <Box  sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            </Typography>
            <Button color="inherit"><Link to="/" style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
            <Button color="inherit"><Link to={"/signup"}>Signup</Link></Button>
            <Button color='inherit'><Link to={"/Contact"}>Contact</Link></Button>
        </Toolbar>
    </AppBar>
   </Box>
  )
}

export default Navbar
