import { useEffect } from "react";
// @ Components
import { FilterBy, Search } from "./components"
import { Loader } from "../../../Components/Loader";
import RecipeReviewCard from "../../../Components/ReviewCard";

import usePokeDex from "../hooks";

import * as S from "./styles";

export default function TemplatePage() {
  const { pokemon, uniquePokemon, searchPokemon, getPokemon, loading, OrderBy, filterByNames, filterByType } = usePokeDex();

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <S.Container>
      {loading && <Loader loading={loading} />}
      <Search OrderBy={OrderBy} data={pokemon} filterByNames={filterByNames} />
      <S.CardContainer>
        <FilterBy data={pokemon} filterByType={filterByType}/>
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
}


