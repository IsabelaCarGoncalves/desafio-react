import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function ButtonAppBar() {
  return (
    <Box mb={5} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="p" component="div" sx={{ flexGrow: 2 }}>
            News
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Homepage</Link>
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/Create">Create</Link>
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/Delete">Delete</Link>
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/Update">Update</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

