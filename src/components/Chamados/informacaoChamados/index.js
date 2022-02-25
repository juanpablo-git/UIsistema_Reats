import React,{useState}from 'react';
import {Box,List,ListItem,ListItemText}from '@mui/material';

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
      </List>
    </Box>
    
  )
}

export default informacaoChamados;