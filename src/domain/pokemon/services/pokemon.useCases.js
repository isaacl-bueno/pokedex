export default class pokemonUseServices {
    async getPokemon() {
        try {
            const result = await fetch(
                'https://unpkg.com/pokemons@1.1.0/pokemons.json',
            );

            const data = await result.json();

            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}
