import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Pokemons from '../../pages/PokemonsPage';
import PakemonPage from '../../pages/PokemonPage';
import AppLayout from '../AppLayout';
import NotFound from '../../pages/NotFound';

const AppRouter: FC = () => {
	return (
		<AppLayout>
			<Routes>
				<Route index element={<Pokemons />} />
				<Route path='/pokemon/:name' element={<PakemonPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</AppLayout>
	);
};

export default AppRouter;
