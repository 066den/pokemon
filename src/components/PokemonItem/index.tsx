import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';

import { IPokemon } from '../../types/pokemon';

const PokemonItem: FC<IPokemon> = ({ name, url }) => {
	const router = useNavigate();

	return (
		<Card
			sx={{
				maxWidth: 320,
				border: 1,
				borderColor: 'secondary.main',
				borderRadius: 1,
			}}
		>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{name}
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }}>
				<Button onClick={() => router(`/${name}`)}>Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default PokemonItem;
