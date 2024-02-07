export const filterPokemons = ({ filtered, pokemon }) =>
    Array.from(new Set(filtered.map((poke) => poke.name))).map((name) =>
        pokemon.find((poke) => poke.name === name),
    );