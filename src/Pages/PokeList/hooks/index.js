import { useState } from 'react';
import { filterPokemons } from '../functions';
import pokemonUseServices from '../../../domain/pokemon/services/pokemon.useCases';

export default function usePokeDex() {
    const services = new pokemonUseServices();
    const [pokemon, setPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState('');
    const [loading, setLoading] = useState(false);

    const getPokemon = async () => {
        setLoading(true);
        try {
            const ressponse = await services.getPokemon();
            console.log(ressponse);
            setPokemon(ressponse.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const filterByType = async ({ type, data }) => {
        setLoading(true);
        try {
            const filtered = data.filter((poke) => {
                return poke.type.includes(type);
            });
    
            const newFiltered = filterPokemons({ filtered, pokemon });
    
            setSearchPokemon(newFiltered);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const filterByNames = ({ search, data }) => {
        setLoading(true);
        try {
            const filtered = data.filter((poke) => {
                return (
                    poke.name.toLowerCase().includes(search.toLowerCase()) ||
                    poke.national_number === search
                );
            });

            const newFiltered = filterPokemons({ filtered, pokemon });
            if (filtered.length > 0) setSearchPokemon(newFiltered);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const OrderBy = async ({ type }) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 700));
        try {
            const filtered = pokemon.sort((a, b) => {
                if (type === 'Ascendente') {
                    return a.national_number.localeCompare(b.national_number);
                } else {
                    return b.national_number.localeCompare(a.national_number);
                }
            });

            const newFiltered = filterPokemons({ filtered, pokemon });

            setSearchPokemon(newFiltered);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const uniquePokemon = Array.from(
        new Set(pokemon.map((poke) => poke.name)),
    ).map((name) => pokemon.find((poke) => poke.name === name));

    return {
        filterByType,
        pokemon,
        searchPokemon,
        loading,
        getPokemon,
        filterByNames,
        OrderBy,
        uniquePokemon,
    };
}
