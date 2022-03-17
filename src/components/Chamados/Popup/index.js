import * as React from 'react';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';
export default (prop)=>{
    
   
   console.log(prop)
  
    return (
        <Popper open={prop.open} style={{zIndex:2000}}  transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper sx={{ p: 1, bgcolor: 'background.paper' }}>
                <Typography variant='h5'>Filtro de Chamados</Typography>
                <Typography variant="h6"> Fila: </Typography>
                <Typography variant="h6">  Setor: </Typography>
                <Typography variant="h6"> Problema: </Typography>

              </Paper>
            </Fade>
          )}
        </Popper>
    )
}