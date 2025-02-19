import { useState, useEffect } from 'react'
// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';

// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from './axios/axios';

function App() {
  const [events, setEvents] = useState([]);

  async function getEvents(){
    //chamada da api
    await api.getEvents().then(
      (response)=>{
        console.log(response.data.events);
        setEvents(response.data.events);
      },(error)=>{
        console.log("Erro:", error)
      }
    )
  }

  const listevents = events.map((events)=>{
    return(
      <TableRow key={events.id_evento}>
        <TableCell align="center">{events.nome}</TableCell>
        <TableCell align="center">{events.descricao}</TableCell>
        <TableCell align="center">{events.data_hora}</TableCell>
        <TableCell align="center">{events.local}</TableCell>
      </TableRow>
    )
  })

  useEffect(()=>{
    //Aqui deve-se criar ou chamar uma função
    getEvents();

  },[]);
  
  return (
    <div>
        <h5>Lista de eventos</h5>
        <TableContainer component={Paper} style={{margin:"2px"}}>
          <Table size="small">
            <TableHead style={{backgroundColor: "brown", borderStyle: "solid"}}>
              <TableRow>
                <TableCell align="center">
                  Nome
                </TableCell>
                <TableCell align="center">
                  Descrição
                </TableCell>
                <TableCell align="center">
                  Data e Hora
                </TableCell>
                <TableCell align="center">
                  Local
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{listevents}</TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default App
