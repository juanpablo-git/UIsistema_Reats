import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import Drawwer from "./informacaoChamados"
import Drawer from '@mui/material/Drawer';

import InfoIcon from '@mui/icons-material/Info';

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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
    {
        "idChamado": 4108,
        "opcaoSelecionada": 52,
        "idAtendente": null,
        "dataInicio": "2021-09-10T09:10:02.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Criação de e-mail",
        "idTipoProblema": 52,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 8,
        "nomeColaborador": "PETERSON FREIRE DE SOUZA",
        "telefone": "558598025758",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Email",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4520,
        "opcaoSelecionada": 59,
        "idAtendente": null,
        "dataInicio": "2021-09-30T15:39:25.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Fortes travado, talvez seja problema no acesso do banco",
        "idTipoProblema": 59,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 8,
        "nomeColaborador": "PETERSON FREIRE DE SOUZA",
        "telefone": "558598025758",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Sistemas",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 5589,
        "opcaoSelecionada": 58,
        "idAtendente": null,
        "dataInicio": "2021-12-03T09:12:17.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Compra de Cartões RFID 125Hertz PVC - 100 Unidades",
        "idTipoProblema": 58,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 0,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 8,
        "nomeColaborador": "PETERSON FREIRE DE SOUZA",
        "telefone": "558598025758",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Outros",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4202,
        "opcaoSelecionada": 53,
        "idAtendente": null,
        "dataInicio": "2021-09-15T14:19:16.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Boa tarde,\r\n\r\nPatrícia, estou enviando este e-mail para formalizar a solicitação do\r\nnotebook e os acessos para o sistema do ERP e usuário VPN da vendedora\r\nJane, basta autorizar este e-mail para ficar registrado a solicitação.\r\n\r\n-- \r\n[image: http://tijucaalimentos.com/assinaturas/imagens/nova_r1_c1.png]",
        "idTipoProblema": 53,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 77,
        "nomeColaborador": "Márcio Oliveira Leite de Lima ",
        "telefone": "558594016932",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Equipamento",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4203,
        "opcaoSelecionada": 52,
        "idAtendente": null,
        "dataInicio": "2021-09-15T14:19:16.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Boa tarde,\r\n\r\nPatrícia, estou enviando este e-mail para formalizar a solicitação do\r\nnotebook e os acessos para o sistema do ERP e usuário VPN da vendedora\r\nJane, basta autorizar este e-mail para ficar registrado a solicitação.\r\n\r\n-- \r\n[image: http://tijucaalimentos.com/assinaturas/imagens/nova_r1_c1.png]",
        "idTipoProblema": 52,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 77,
        "nomeColaborador": "Márcio Oliveira Leite de Lima ",
        "telefone": "558594016932",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Email",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4186,
        "opcaoSelecionada": 54,
        "idAtendente": null,
        "dataInicio": "2021-09-15T08:29:19.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Conforme solicitado pela Patrícia, criar usuário VPN para Jane AJL que ficara alocada em Pacajus",
        "idTipoProblema": 54,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 1571,
        "nomeColaborador": "Davi Matias Fiusa",
        "telefone": "558596668309",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "VPN",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 6927,
        "opcaoSelecionada": 53,
        "idAtendente": null,
        "dataInicio": "2022-02-18T11:37:21.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Bom dia,\n\nSolicito um aparelho celular e chip para o funcionário Jackson Pontes, o\nmesmo está tratando soluções de sistemas com outros colaboradores com o\ncelular pessoal.\n\nComo também a criação de e-mail corporativo para o mesmo.\n\nQualquer dúvida estou à disposição, obrigado!\n\n\n[image: http://tijucaalimentos.com/assinaturas/imagens/nova_r1_c1.png]\n",
        "idTipoProblema": 53,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 4,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 1571,
        "nomeColaborador": "Davi Matias Fiusa",
        "telefone": "558596668309",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Equipamento",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4282,
        "opcaoSelecionada": 58,
        "idAtendente": null,
        "dataInicio": "2021-09-20T08:47:43.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Bom dia,\r\n\r\nFazer liberação do site abaixo, para ter acompanhamento do time ANJOS DO CÉU\r\n\r\nhttps://futebolcearense.com.br/2020/homepage.asp\r\n\r\nAtenciosamente,\r\n[image: http://tijucaalimentos.com/assinaturas/imagens/nova_r1_c1.png]",
        "idTipoProblema": 58,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 2011,
        "nomeColaborador": "Carlos Henrique Fernandes Damascena",
        "telefone": "558599860725",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Outros",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4283,
        "opcaoSelecionada": 58,
        "idAtendente": null,
        "dataInicio": "2021-09-20T09:44:05.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Bom dia,\r\n\r\nFazer liberação do site abaixo, para ter acompanhamento do time ANJOS DO CÉU\r\n(SOLICITADO POR  JOSÉ EURICO)\r\nhttps://futebolcearense.com.br/2020/homepage.asp\r\n\r\nAtenciosamente,\r\n[image: http://tijucaalimentos.com/assinaturas/imagens/nova_r1_c1.png]",
        "idTipoProblema": 58,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 2011,
        "nomeColaborador": "Carlos Henrique Fernandes Damascena",
        "telefone": "558599860725",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Outros",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    },
    {
        "idChamado": 4903,
        "opcaoSelecionada": 58,
        "idAtendente": null,
        "dataInicio": "2021-10-22T09:56:25.000Z",
        "dataFim": null,
        "solucao": null,
        "descricao": "● SUBDESCRIÇÂO: \n\n● Bom dia,\r\n\r\nLiberar esse site para os estagiários assistirem, conteúdo para estudo!\r\nhttps://www.cursoemvideo.com/\r\n\r\natenciosamente,\r\n[image: http://tijucaalimentos.com/assinaturas/imagens/nova_r1_c1.png]",
        "idTipoProblema": 58,
        "titulo": null,
        "nivel_atendimento": 1,
        "prioridade": 3,
        "dataAtendimento": null,
        "statusKanban": 0,
        "idColaborador": 2011,
        "nomeColaborador": "Carlos Henrique Fernandes Damascena",
        "telefone": "558599860725",
        "idUnidade": 10,
        "idProblema": 25,
        "tipoProblema": "Outros",
        "problema": "Suporte Infraestrutura",
        "atendente": null,
        "situacao": "pendentes",
        "codigoSituacao": 0,
        "idSetorAtendente": null,
        "setorAtendente": null,
        "idSetorCliente": 1,
        "setorCliente": "TI - Messejana",
        "idSistema": null,
        "tipoNivelAtendimemnto": 1,
        "nomeNivelAtendimento": "Suporte Geral",
        "total": 2023
    }];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [drawer,setDrawer] = React.useState(false)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,fontWeight:'bold'}}
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
                        if(column.label === 'Detalhes') row[column.id] =<InfoIcon onClick={()=>setDrawer(true)}/>
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
      <Drawwer />
    </Drawer>
    </>
  );
}
