import { useEffect, useState } from 'react';
import RecipeReviewCard from '../../Components/ReviewCard';
import FilterBy from "./filterBy"
import Search from './Search';
import * as S from "./styles"

const CustomTable = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const result = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
      const data = await result.json();
      setPokemon(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const uniquePokemon = Array.from(new Set(pokemon.map(poke => poke.name)))
    .map(name => pokemon.find(poke => poke.name === name));

  return (
    <S.Container>
      <Search/>
      <S.CardContainer>
      <FilterBy data={pokemon}/>
        <S.Cards>
        {uniquePokemon.map((poke, index) => (
          <RecipeReviewCard key={index} {...poke} />
        ))}
        </S.Cards>
      </S.CardContainer>
    </S.Container>
  );
};

export default CustomTable;
