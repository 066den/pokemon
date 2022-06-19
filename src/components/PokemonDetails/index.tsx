import React, { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';

import { IPokemon } from '../../types/pokemon';

interface PokemonDetailsProps {
	pokemon: IPokemon;
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ pokemon }) => {
	return (
		<Grid
			container
			alignItems='center'
			sx={{
				border: 3,
				borderColor: 'secondary.main',
				borderRadius: 2,

				p: 2,
			}}
		>
			<Grid item md={6} container direction='column'>
				<Typography variant='h1' gutterBottom align='center'>
					{pokemon.name}
				</Typography>
				<img
					className='img-responsive'
					src={
						pokemon.sprites?.other.dream_world?.front_default ||
						pokemon.sprites?.front_default
					}
					alt={pokemon.name}
				/>
			</Grid>
			<Grid item md={6}>
				<Stack direction='row' spacing={2}>
					<Typography variant='h3' component='h3'>
						weight: {pokemon.weight}
					</Typography>
				</Stack>
				<Stack direction='row' spacing={2}>
					<Typography variant='h3' component='h3'>
						height: {pokemon.height}
					</Typography>
				</Stack>
				<Stack direction='row' spacing={2}>
					<Typography variant='h3' component='h3' textAlign='center'>
						types: {pokemon.types?.map(type => type.type.name).join(', ')}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default PokemonDetails;
