import {Container,Box,Paper,                                                      
        List,ListItem,ListItemText  } from '@mui/material';
export default ()=>{
    return (
        <Container>
            <Box sx={{display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 350,
          height: 350,
        },}}>
           <Paper elevation={2}>
               <List>

                <ListItem>
                <ListItemText primary="Chamados" />
                </ListItem>

                <ListItem>
                <ListItemText secondary="Em andamento: 3" />
                </ListItem>

                <ListItem>
                <ListItemText secondary="Finalizados: 0" />
                </ListItem>

                <ListItem>
                <ListItemText secondary="Pendentes: 100" />
                </ListItem>
              
               </List>
           </Paper>
           </Box>
        </Container>
    )
}