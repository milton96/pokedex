export interface Pokemon {
    id: number;
    name: string;
    url: string;
    sprites: Sprites;
    order: number;
}

interface Sprites {
    front_default: string
}