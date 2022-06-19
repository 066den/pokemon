interface IDreamWorld {
	front_default?: string;
}
interface IOtherSprite {
	dream_world?: IDreamWorld;
}
interface ISprites {
	front_default?: string;
	other: IOtherSprite;
}

interface IType {
	name: string;
}

interface ITypes {
	type: IType;
}

interface IStat {
	name: string;
}

interface IStats {
	base_stat: number;
	stat: IStat;
}

interface IMove {
	name: string;
}

interface IMoves {
	move: IMove;
}

export interface IPokemon {
	name: string;
	url: string;
	sprites?: ISprites;
	weight?: string;
	height?: string;
	types?: ITypes[];
	stats?: IStats[];
	moves?: IMoves[];
}

export interface IResponse {
	count: number;
	results: IPokemon[];
}
