import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import housesApi from "../../services/entities/houses";
import Ravenclaw from "../../images/corvinal (1).webp";
import Gryffindor from "../../images/grifinoria.webp";
import Hufflepuff from "../../images/lufalufa.webp";
import Slytherin from "../../images/sonserina.webp";
import { Grid } from "@mui/material";

const images = {
	Ravenclaw: Ravenclaw,
	Gryffindor: Gryffindor,
	Hufflepuff: Hufflepuff,
	Slytherin: Slytherin,
};

const TableComponent = () => {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
    async function fetchHouses() {
      setHouses(await housesApi.getHouses());
    }

    fetchHouses();
	}, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Animal</TableCell>
            <TableCell align="right">Element</TableCell>
            <TableCell align="right">Ghost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {houses.map((house) => (
            <TableRow
              key={house.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">
                <img
                  src={images[house.name]}
                  alt={`Escudo da casa ${house.name}`}
                  style={{ maxWidth: 50 }}
                />
              </TableCell>
              <TableCell align="right">{house?.name}</TableCell>
              <TableCell align="right">{house?.animal}</TableCell>
              <TableCell align="right">{house?.element}</TableCell>
              <TableCell align="right">{house?.ghost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
