import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

const NotFound: FC = () => {
	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<Typography variant='h1'>Page not found</Typography>
		</Box>
	);
};

export default NotFound;
