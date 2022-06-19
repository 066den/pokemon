import React, { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IPokemon } from '../../types/pokemon';

interface PokemonMovesProps {
	pokemon: IPokemon;
}

const PokemonMoves: FC<PokemonMovesProps> = ({ pokemon }) => {
	return (
		<Box
			sx={{
				border: 3,
				borderColor: 'secondary.main',
				borderRadius: 2,
				p: 2,
			}}
		>
			<Stack direction='row' spacing={2}>
				<Typography variant='h2' color='primary.main'>
					{pokemon.name}`s moves:
				</Typography>
			</Stack>
			{pokemon.moves?.map((moves, index) => (
				<Typography key={index} variant='h6' component='span'>
					{moves.move.name}
					{index ? ', ' : ''}
				</Typography>
			))}
		</Box>
	);
};

export default PokemonMoves;
