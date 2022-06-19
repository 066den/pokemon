import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, ReactElement } from 'react';
import logo from '../../assets/images/main-logo.jpg';

interface AppLayoutProps {
	children: ReactElement;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
	return (
		<Box sx={{ backgroundColor: '#000', minHeight: '100vh' }}>
			<Container>
				<Grid container justifyContent='center'>
					<img className='img-responsive' src={logo} alt='Pokemon' />
				</Grid>
				{children}
			</Container>
			<Box height='50px'></Box>
		</Box>
	);
};

export default AppLayout;
