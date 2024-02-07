import { useEffect, useState } from 'react';
import RecipeReviewCard from '../../Components/ReviewCard';
import FilterBy from "./filterBy"
import Search from './Search';
import * as S from "./styles"
import { Loader } from '../../Components/Loader';

const CustomTable = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    setLoading(true);
    try {
      const result = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
      const data = await result.json();

      setPokemon(data?.results);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  const filterByNames = ({ search, data }) => {
    setLoading(true);
    try {
      const filtered = data.filter(poke => {
        return poke.name.toLowerCase().includes(search.toLowerCase()) || poke.national_number === search
      });

      const newFiltered = Array.from(new Set(filtered.map(poke => poke.name)))
        .map(name => pokemon.find(poke => poke.name === name));
      if (filtered.length > 0) setSearchPokemon(newFiltered);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }


  }


  const OrderBy = ({ type }) => {
    setLoading(true);
    try {
      const ordered = pokemon.sort((a, b) => {
        if (type === "Ascendente") {
          return a.national_number.localeCompare(b.national_number);
        } else {
          return b.national_number.localeCompare(a.national_number);
        }
      });


      const newFiltered = Array.from(new Set(ordered.map(poke => poke.name)))
        .map(name => pokemon.find(poke => poke.name === name));
      console.log(newFiltered);
      setSearchPokemon(newFiltered);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }

  }


  useEffect(() => {
    getPokemon();
  }, []);

  const uniquePokemon = Array.from(new Set(pokemon.map(poke => poke.name)))
    .map(name => pokemon.find(poke => poke.name === name));

  return (
    <S.Container>
      {loading && <Loader loading={loading} />}
      <Search filterByNames={filterByNames} data={pokemon} OrderBy={OrderBy} />
      <S.CardContainer>
        <FilterBy data={pokemon} />
        <S.Cards>
          {searchPokemon?.length === 0 && uniquePokemon.map((poke, index) => (
            <RecipeReviewCard key={index} {...poke} />
          ))}
          {searchPokemon?.length > 0 && searchPokemon.map((poke, index) => (
            <RecipeReviewCard key={index} {...poke} />
          ))}
        </S.Cards>
      </S.CardContainer>
    </S.Container>
  );
};

export default CustomTable;
