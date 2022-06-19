import { IPokemon } from './../../../types/pokemon';

export interface PokemonsState {
	pokemons: IPokemon[];
	pokemon: IPokemon;
	count: number;
	isLoading: boolean;
	error: string;
}

export enum PokemonActionEnum {
	SET_POKEMONS = 'SET_POKEMONS',
	SET_POKEMON = 'SET_POKEMON',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_COUNT = 'SET_COUNT',
}

export interface SetPokemonsAction {
	type: PokemonActionEnum.SET_POKEMONS;
	payload: IPokemon[];
}

export interface SetPokemonAction {
	type: PokemonActionEnum.SET_POKEMON;
	payload: IPokemon;
}

export interface SetLoadingAction {
	type: PokemonActionEnum.SET_IS_LOADING;
	payload: boolean;
}

export interface SetErrorAction {
	type: PokemonActionEnum.SET_ERROR;
	payload: string;
}

export interface SetCountAction {
	type: PokemonActionEnum.SET_COUNT;
	payload: number;
}

export type PokemonsAction =
	| SetPokemonsAction
	| SetErrorAction
	| SetLoadingAction
	| SetPokemonAction
	| SetCountAction;
