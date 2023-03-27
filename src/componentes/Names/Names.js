import { Box, Card, CardMedia, Typography, CardContent , CardActions , Button} from "@mui/material";
import React from "react";
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

const Name = () => {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		async function fetchHouses() {
			setHouses(await housesApi.getHouses());
		}

		fetchHouses();
	}, []);

	return (
		<Grid
			container
			item
			direction="row"
			justifyContent="center"
			alignItems="center"
		>
			{houses.length === 0 ? (
				<Typography variant="p">carregando...</Typography>
			) : (
				houses.map((house) => (
					<Card sx={{ maxWidth: 345 }} key={house.id}>
						<CardMedia>
							<img
								width={300}
								src={images[house.name]}
								alt={`Escudo da casa ${house.name}`}
							/>
						</CardMedia>
						<CardContent>
							<Typography variant="body2">{house.name}</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" color="info">Learn More</Button>
						</CardActions>
					</Card>
				))
			)}
		</Grid>
	);
};

export default Name;
