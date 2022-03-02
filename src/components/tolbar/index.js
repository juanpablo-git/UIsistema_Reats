import React from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton'

import "./style.css"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/Inbox';

import { NavLink} from "react-router-dom"
function Home() {
    return(
<>
<List 
sx={{width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
aria-label="contacts">
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
</>
    )
}

export default Home;
