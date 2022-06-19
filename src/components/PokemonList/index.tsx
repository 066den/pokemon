import { Grid } from '@mui/material';
import React, { FC } from 'react';

import { IPokemon } from '../../types/pokemon';
import PokemonItem from '../PokemonItem';

interface PokemonListProps {
	pokemons: IPokemon[];
	count: number;
}

const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
	return (
		<>
			<Grid container spacing={2}>
				{pokemons.map((item, index) => (
					<Grid item md={3} key={index}>
						<PokemonItem {...item} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default PokemonList;
