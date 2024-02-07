import * as S from "./styles";
// import heartSVG from "../../assets/faheart.svg";
import pokeballSVG from "../../assets/pokeball.svg";
import synviaSVG from "../../assets/synvia-A.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <S.Container>
      <S.LowContainer>
        <S.CenterDiv>
          <div className="Pokedex">
            <img src={pokeballSVG} alt="Pokeball SVG" />
            <div className="TextPokedex">Pokédex</div>
          </div>
          <div className="SynviaContainer">
            <img src={synviaSVG} alt="Synvia SVG" />
            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", fontSize: "20px"}} />
          </div>
        </S.CenterDiv>
      </S.LowContainer>
    </S.Container>
  );
}