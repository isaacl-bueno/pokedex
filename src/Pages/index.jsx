import PokeList from "./PokeList"
import Header from "../Components/Header";
import * as S from './styles'
import usePokeDex from "./PokeList/hooks";
import Footer from "../Components/Footer";

const Pokedex = () => {
  const sharedProps = usePokeDex();
  return (
    <S.Container>
      <Header />
      <PokeList {...sharedProps} />
      <Footer/>
    </S.Container>
  );
};

export default Pokedex;
