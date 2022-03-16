import marvelHeroes from './marvel.json'

export type MarvelHero = {
    name: string,
    page_id: number,
}

export const searchInDatabase = async (term: string): Promise<MarvelHero[]> => {
    return (marvelHeroes as MarvelHero[]).filter(hero => hero.name.indexOf(term) !== -1)
}