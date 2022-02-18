import React from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemButton from '@mui/material/ListItemButton'
import InboxIcon from '@mui/icons-material/Inbox';
function Home() {
    return(
<>
<List  sx={{width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
      aria-label="contacts">
    {[{name:'Perfil',icon:<AccountCircleIcon htmlColor=" #4ba0ee"/>},
    {name:'Chamados',icon:<InboxIcon htmlColor=" #4ba0ee" />}].map(item=>(
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
             {item.icon}
            </ListItemIcon>
            <ListItemText primary={`${item.name}`} /> 
        </ListItemButton>
        </ListItem>))}
</List>
</>
    )
}

export default Home;
