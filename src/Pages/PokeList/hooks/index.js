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

    const filterByNationalNumber = ({ nationalNumbers, data }) => {
        setLoading(true);
        try {
            const filtered = data.filter((poke) => {
                return nationalNumbers.includes(poke.national_number);
            });

            const newFiltered = filterPokemons({ filtered, pokemon });
            if (filtered.length > 0) setSearchPokemon(newFiltered);
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
        await new Promise((resolve) => setTimeout(resolve, 500));
        try {
            let sortedPokemon;
            
            if (type === 'ascendent_number') {
                sortedPokemon = pokemon.slice().sort((a, b) => a.national_number.localeCompare(b.national_number));
            } else if (type === 'descendent_number') {
                sortedPokemon = pokemon.slice().sort((a, b) => b.national_number.localeCompare(a.national_number));
            } else if (type === 'ascendent_name') {
                sortedPokemon = pokemon.slice().sort((a, b) => a.name.localeCompare(b.name));
            } else if (type === 'descendent_name') {
                sortedPokemon = pokemon.slice().sort((a, b) => b.name.localeCompare(a.name));
            } else {
                sortedPokemon = pokemon.slice();
            }
    
            const newFiltered = filterPokemons({ filtered: sortedPokemon, pokemon });
            setSearchPokemon(newFiltered);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const filterByFavorites = (data, setNoFavorite) => {
        setLoading(true);
        try {
            if (!data) {
                setSearchPokemon([]);
                return;
            }
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
            const filtered = pokemon.filter((poke) => {
                return favorites.includes(poke.national_number);
            });
    
            const newFiltered = filterPokemons({ filtered, pokemon });
            if (filtered.length > 0) setSearchPokemon(newFiltered);
            setNoFavorite(false);
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
        filterByNationalNumber,
        filterByType,
        pokemon,
        searchPokemon,
        loading,
        getPokemon,
        filterByNames,
        OrderBy,
        uniquePokemon,
        filterByFavorites,
    };
}
