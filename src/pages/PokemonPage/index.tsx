import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import PokemonDetails from '../../components/PokemonDetails';
import PokemonStats from '../../components/PokemonStats';
import PokemonMoves from '../../components/PokemonMoves';

const PakemonPage: FC = () => {
	const { pokemon } = useTypedSelector(state => state.pokemons);
	const { getPokemon } = useActions();
	const { name } = useParams();

	useEffect(() => {
		getPokemon(name);
	}, []);
	return (
		<Grid container>
			<Grid item xs={12}>
				<PokemonDetails pokemon={pokemon} />
			</Grid>
			<Grid item xs={12}>
				<PokemonStats pokemon={pokemon} />
			</Grid>
			<Grid item xs={12}>
				<PokemonMoves pokemon={pokemon} />
			</Grid>
		</Grid>
	);
};

export default PakemonPage;
