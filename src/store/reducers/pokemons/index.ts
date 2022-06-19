import { IPokemon } from './../../../types/pokemon';
import { PokemonsState, PokemonsAction, PokemonActionEnum } from './types';

const initialState: PokemonsState = {
	pokemons: [],
	pokemon: {} as IPokemon,
	count: 0,
	isLoading: false,
	error: '',
};
export default function pokemonsReducer(
	state = initialState,
	action: PokemonsAction
): PokemonsState {
	switch (action.type) {
		case PokemonActionEnum.SET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
				isLoading: false,
				pokemon: {},
			};
		case PokemonActionEnum.SET_POKEMON:
			return { ...state, pokemon: action.payload };
		case PokemonActionEnum.SET_ERROR:
			return { ...state, error: action.payload, isLoading: false };
		case PokemonActionEnum.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };
		case PokemonActionEnum.SET_COUNT:
			return { ...state, count: action.payload };
		default:
			return state;
	}
}
