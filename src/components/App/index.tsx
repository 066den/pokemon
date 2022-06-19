import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from '../../store';
import AppRouter from '../AppRouter';
import theme from '../../common/theme';
import '../../assets/scss/global.scss';

const App: FC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
					<CssBaseline />
					<AppRouter />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
