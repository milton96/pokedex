export interface Pokemon {
    id: number;
    name: string;
    url: string;
    sprites: Sprites
}

interface Sprites {
    front_default: string
}