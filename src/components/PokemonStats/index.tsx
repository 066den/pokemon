import React, { FC } from 'react';
import { Box, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import { IPokemon } from '../../types/pokemon';

interface PokemonStatsProps {
	pokemon: IPokemon;
}

const PokemonStats: FC<PokemonStatsProps> = ({ pokemon }) => {
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
					{pokemon.name}`s stats:
				</Typography>
			</Stack>
			{pokemon.stats?.map((stat, index) => (
				<Grid container key={index} spacing={2} alignItems='center'>
					<Grid item xs={2}>
						<Typography variant='h6'>{stat.stat.name}</Typography>
					</Grid>
					<Grid item xs>
						<LinearProgress
							variant='determinate'
							value={stat.base_stat / 2}
							sx={{ height: 10, borderRadius: 5 }}
						/>
					</Grid>
					<Grid item xs={2}>
						{stat.base_stat}
					</Grid>
				</Grid>
			))}
		</Box>
	);
};

export default PokemonStats;
