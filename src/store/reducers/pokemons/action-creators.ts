import { AppDispatch } from './../../index';
import { IResponse, IPokemon } from './../../../types/pokemon';
import {
	PokemonActionEnum,
	SetPokemonsAction,
	SetErrorAction,
	SetLoadingAction,
	SetPokemonAction,
	SetCountAction,
} from './types';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const PokemonActionCreators = {
	setPokemons: (pokemons: IPokemon[]): SetPokemonsAction => ({
		type: PokemonActionEnum.SET_POKEMONS,
		payload: pokemons,
	}),

	setPokemon: (pokemon: IPokemon): SetPokemonAction => ({
		type: PokemonActionEnum.SET_POKEMON,
		payload: pokemon,
	}),

	setCount: (payload: number): SetCountAction => ({
		type: PokemonActionEnum.SET_COUNT,
		payload,
	}),

	setError: (payload: string): SetErrorAction => ({
		type: PokemonActionEnum.SET_ERROR,
		payload,
	}),

	setIsLoading: (payload: boolean): SetLoadingAction => ({
		type: PokemonActionEnum.SET_IS_LOADING,
		payload,
	}),

	getPokemons:
		(limit = 20, offset = 0) =>
		async (dispatch: AppDispatch) => {
			try {
				dispatch(PokemonActionCreators.setIsLoading(true));
				dispatch(PokemonActionCreators.setError(''));
				const response = await axios.get<IResponse>(
					`${API_URL}/pokemon/?limit=${limit}&offset=${offset}`
				);

				dispatch(PokemonActionCreators.setPokemons(response.data.results));
				dispatch(PokemonActionCreators.setCount(response.data.count));
			} catch (e) {
				dispatch(PokemonActionCreators.setError('Nothing found..'));
			}
			dispatch(PokemonActionCreators.setIsLoading(false));
		},

	getPokemon: (name: string | undefined) => async (dispatch: AppDispatch) => {
		try {
			dispatch(PokemonActionCreators.setIsLoading(true));
			dispatch(PokemonActionCreators.setError(''));
			const response = await axios.get<IPokemon>(`${API_URL}/pokemon/${name}`);
			dispatch(PokemonActionCreators.setPokemon(response.data));
		} catch (e) {
			dispatch(PokemonActionCreators.setError('Nothing found..'));
		}
		dispatch(PokemonActionCreators.setIsLoading(false));
	},
	searchPokemon:
		(name: string | undefined) => async (dispatch: AppDispatch) => {
			try {
				dispatch(PokemonActionCreators.setIsLoading(true));
				const response = await axios.get<IResponse>(
					`${API_URL}/pokemon?limit=100000&offset=0`
				);

				const result = response.data.results.filter(
					pokemon => pokemon.name === name
				);

				dispatch(PokemonActionCreators.setPokemons(result));
				dispatch(PokemonActionCreators.setCount(result.length));
				dispatch(PokemonActionCreators.setError(''));

				if (!result.length) {
					dispatch(
						PokemonActionCreators.setError(
							'This pokemon has never been invented..'
						)
					);
				}
			} catch (e) {
				dispatch(PokemonActionCreators.setError('The request failed..'));
			}
			dispatch(PokemonActionCreators.setIsLoading(false));
		},
};
