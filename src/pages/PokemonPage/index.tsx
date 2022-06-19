import React, { FC, useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import PokemonDetails from '../../components/PokemonDetails';
import PokemonStats from '../../components/PokemonStats';
import PokemonMoves from '../../components/PokemonMoves';

const PakemonPage: FC = () => {
	const { pokemon } = useTypedSelector(state => state.pokemons);
	const { getPokemon } = useActions();
	const { name } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getPokemon(name);
	}, []);
	return (
		<>
			<Button
				variant='outlined'
				startIcon={<ArrowBackIcon />}
				color='secondary'
				onClick={() => navigate('/')}
				sx={{ position: 'fixed', left: '15px', top: '15px' }}
			>
				Go back
			</Button>
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
		</>
	);
};

export default PakemonPage;
