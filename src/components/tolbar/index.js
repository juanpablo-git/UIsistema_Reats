import * as React from 'react';
import {AppBar,Drawer,DrawerHeader} from "./style.js"
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink} from "react-router-dom"
import ListItemButton from '@mui/material/ListItemButton'



import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

        {[{name:'Perfil',icon:<AccountCircleIcon htmlColor=" #4ba0ee"/>,link:"/perfil"},
    {name:'Chamados',icon:<InboxIcon htmlColor=" #4ba0ee" />,
    link:"/chamados"}].map(item=>(
       <NavLink to={item.link}
       style={isActive => ({
        color:"black",
       textDecoration:"none"
      })}>
       <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
             {item.icon}
            </ListItemIcon>
            <ListItemText primary={`${item.name}`} /> 
            </ListItemButton >
        </ListItem >
        </NavLink> 
        ))}

        </List>
       
      </Drawer>
    </Box>
  );
}
