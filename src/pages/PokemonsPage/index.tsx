import React, { FC, useEffect, useState } from 'react';
import {
	Box,
	CircularProgress,
	Pagination,
	Stack,
	Typography,
} from '@mui/material';

import PokemonList from '../../components/PokemonList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import PokemonSearch from '../../components/PokemonSearch';

const Pokemons: FC = () => {
	const { pokemons, count, isLoading, error } = useTypedSelector(
		state => state.pokemons
	);

	const { getPokemons } = useActions();

	const [current, setCurrent] = useState(1);
	const limit = 20;
	const pages = Math.ceil(count / limit);

	const handlePagination = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		const offset = limit * (value - 1);
		getPokemons(limit, offset);
		setCurrent(value);
	};

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<PokemonSearch />
			{error && <Typography variant='h1'>{error}</Typography>}

			{isLoading ? (
				<Box sx={{ display: 'flex' }}>
					<CircularProgress color='secondary' />
				</Box>
			) : (
				<PokemonList pokemons={pokemons} count={count} />
			)}
			{count > limit && (
				<Stack spacing={2} sx={{ margin: '15px 0' }}>
					<Pagination
						count={pages}
						page={current}
						color='secondary'
						onChange={handlePagination}
					/>
				</Stack>
			)}
		</Box>
	);
};

export default Pokemons;
