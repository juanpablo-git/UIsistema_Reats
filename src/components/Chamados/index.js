import * as React from 'react';
import Drawwer from "./informacaoChamados"
import Popup from "./Popup"
import {Fade,Typography,Popper,Drawer,
  IconButton,TableRow,TablePagination,
  TableHead,TableContainer,TableCell,
  TableBody,Table,Paper} from "@mui/material" ;
import {Search} from "./styled.js"
import SearchFunction from "../../functions/Search";
import Filters from '../../functions/Filters';
import Db from "./rous.json";

import InfoIcon from '@mui/icons-material/Info';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';

import "./style.css"

const columns = [
  { id: 'idChamado', label: 'Ticket', minWidth: 50, },
  { id: 'nomeColaborador', label: 'Colaborador', minWidth: 50,  format: (value) => value.toLocaleString('en-US'), },
  {
    id: 'problema',
    label: 'Problema',
    minWidth: 50,
   
    //align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dataInicio',
    label: 'Data Inicio Chamado',
    minWidth: 50,
   // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Detalhes',
    label:'Detalhes',
    minWidth: 50,
    //align: 'right',
   format: (value) => value.toFixed(2),
  },
];


const rows = Db
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [drawer,setDrawer] = React.useState(false)
  const [idInfo,setIDinfo] = React.useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [openPopup, setOpenPopup] = React.useState(false);
  //const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
   // setAnchorEl(event.currentTarget);
   setOpenPopup((previousOpen)=>!previousOpen);
  };


  //const canBeOpen = open && Boolean(anchorEl);
 // const id = canBeOpen ? 'transition-popper' : undefined;





  return (
    <>
    
    <Paper sx={{ width: '100%' }}>
    <div style={{height:110}} >

</div>
<TableContainer style={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              <TableCell style={{fontWeight:"bold" }} align="center" colSpan={2}>
                <Search placeholder='search' type="search" onChange={SearchFunction} />
              </TableCell>
              <TableCell style={{fontWeight:"bold" }} align="center" colSpan={3}>
              <IconButton  onClick={handleClick} ><FilterAltSharpIcon/></IconButton>
              <Popup open={openPopup} />
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth,fontWeight:"bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    
    <Drawer anchor={'right'} open={drawer} onClose={()=>setDrawer(false)}>
      <Drawwer id={{idInfo}} detalhes={{rows}}/>
    </Drawer>
    </>
  );
}
