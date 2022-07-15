export interface Pokemon {
    id: number;
    name: string;
    url: string;
    sprites: Sprites;
    order: number;
    types: Type[];
}

interface Sprites {
    front_default: string
}

interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }    
}