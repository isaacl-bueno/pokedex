import { useEffect, useState } from 'react';
import RecipeReviewCard from '../../Components/ReviewCard';
import FilterBy from "./filterBy"
import Search from './Search';
import * as S from "./styles"

const CustomTable = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');

  const getPokemon = async () => {
    try {
      const result = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
      const data = await result.json();

      console.log(data)
      setPokemon(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  const filterByNames = ({ search, data }) => {
    console.log(search)

    const filtered = data.filter(poke => {
      console.log(poke.national_number, search, poke.national_number == search)
      return poke.name.toLowerCase().includes(search.toLowerCase()) || poke.national_number === search
    });

    const newFiltered = Array.from(new Set(filtered.map(poke => poke.name)))
      .map(name => pokemon.find(poke => poke.name === name));
    if (filtered.length > 0) setSearchPokemon(newFiltered);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const uniquePokemon = Array.from(new Set(pokemon.map(poke => poke.name)))
    .map(name => pokemon.find(poke => poke.name === name));

  return (
    <S.Container>
      <Search filterByNames={filterByNames} data={pokemon} />
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
