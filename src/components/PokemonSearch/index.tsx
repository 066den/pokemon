import React, { FC, useState } from 'react';

import { Button, IconButton, InputBase, Paper, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useActions } from '../../hooks/useActions';

const PokemonSearch: FC = () => {
	const { searchPokemon, getPokemons } = useActions();
	const [search, setSearch] = useState<string>('');
	const [toHome, isToHome] = useState<boolean>(false);

	const handleKey = (event: React.KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter') {
			searchPokemon(search);
			isToHome(true);
		}
	};

	const handleSearch = () => {
		searchPokemon(search);
		isToHome(true);
	};

	const handleToHome = () => {
		isToHome(false);
		getPokemons();
	};

	return (
		<Stack>
			<Paper
				sx={{
					p: '2px 4px',
					mb: 3,
					display: 'flex',
					alignItems: 'center',
					width: 400,
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1, color: '#2468b1' }}
					placeholder='Enter name'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={handleKey}
				/>
				<IconButton sx={{ p: '10px' }} onClick={handleSearch}>
					<SearchIcon />
				</IconButton>
			</Paper>
			{toHome && (
				<Button variant='outlined' color='secondary' onClick={handleToHome}>
					Go back
				</Button>
			)}
		</Stack>
	);
};

export default PokemonSearch;
