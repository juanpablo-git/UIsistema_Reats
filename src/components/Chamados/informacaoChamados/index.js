import React,{useState}from 'react';
import {Box,List,ListItem,ListItemText,Button}from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';


function informacaoChamados({id,detalhes}) {
 
 const listaDrawer = detalhes.rows.filter(i=>i.idChamado == id.idInfo)
 console.log(listaDrawer)
  return (
    <Box  role="presentation" sx={{ width: 500}}>
      <List>
        <ListItem>
        <ListItemText primary="Tiket:" secondary={`${listaDrawer[0].idChamado}`} />
        <ListItemText primary="Situaçao" secondary={listaDrawer[0].situacao} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Fila:" secondary={`${listaDrawer[0].problema}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Descrição:" secondary={`${listaDrawer[0].descricao}`} />
        </ListItem>
        <ListItem>
          <ListItem>
          <Button variant="contained" >Atender</Button>
          </ListItem>
          <ListItem>
          <Button variant="contained" >Transferir</Button>
          </ListItem>  
          <ListItem>
          <Button variant="contained" >Classificar </Button>
          </ListItem>    
        </ListItem>

      </List>
    </Box>
    
  )
}

export default informacaoChamados;