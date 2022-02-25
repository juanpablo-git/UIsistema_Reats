import {Container,Box,Paper,
        List} from '@mui/material';
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
               Em Andamento
               </List>
           </Paper>
           </Box>
        </Container>
    )
}